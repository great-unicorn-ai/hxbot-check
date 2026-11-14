#!/bin/bash
# Probe 1: can a code signing certificate that we make ourselves sign a hardened app, with the
# same designated requirement for two different builds? (macOS keeps privacy grants per requirement.)
# Usage: bash sign-probe.sh <output folder>. Writes <output>/sign.txt (key=value lines).
set -u
OUT="$1"; mkdir -p "$OUT"; R="$OUT/sign.txt"; : > "$R"
W="$(mktemp -d)"; O=/usr/bin/openssl; NAME="HXBot Code Signing"
r() { printf '%s=%s\n' "$1" "$2" >> "$R"; }
r macos "$(sw_vers -productVersion)"
cat > "$W/cert.cnf" <<'CNF'
[req]
distinguished_name = dn
prompt = no
x509_extensions = ext
[dn]
CN = HXBot Code Signing
O = HX AI
[ext]
basicConstraints = critical, CA:FALSE
keyUsage = critical, digitalSignature
extendedKeyUsage = critical, codeSigning
subjectKeyIdentifier = hash
CNF
"$O" req -x509 -newkey rsa:3072 -sha256 -days 3650 -nodes -keyout "$W/key.pem" -out "$W/cert.pem" -config "$W/cert.cnf" 2>/dev/null
r make_cert $?
PASS="$("$O" rand -hex 24)"; export PASS
"$O" pkcs12 -export -name "$NAME" -inkey "$W/key.pem" -in "$W/cert.pem" -out "$W/cert.p12" -passout env:PASS
r make_p12 $?
SHA1="$("$O" x509 -in "$W/cert.pem" -noout -fingerprint -sha1 | sed 's/.*=//; s/://g' | tr '[:lower:]' '[:upper:]')"
r sha1 "$SHA1"
KC="$W/probe.keychain-db"; KP="$("$O" rand -hex 16)"
security create-keychain -p "$KP" "$KC"; security set-keychain-settings -lut 21600 "$KC"; security unlock-keychain -p "$KP" "$KC"
security import "$W/cert.p12" -k "$KC" -P "$PASS" -T /usr/bin/codesign -T /usr/bin/security >/dev/null 2>&1; r import $?
security set-key-partition-list -S apple-tool:,apple:,codesign: -s -k "$KP" "$KC" >/dev/null 2>&1; r partition_list $?
security list-keychains -d user -s "$KC" $(security list-keychains -d user | tr -d '"')
r valid_identities_before_trust "$(security find-identity -v -p codesigning "$KC" | grep -c "$NAME")"
sudo security add-trusted-cert -d -r trustRoot -p codeSign -k /Library/Keychains/System.keychain "$W/cert.pem"; r trust $?
r valid_identities_after_trust "$(security find-identity -v -p codesigning "$KC" | grep -c "$NAME")"
r find_identity_line "$(security find-identity -v -p codesigning "$KC" | grep "$NAME" | head -1 | sed 's/^ *//')"

ent() { # $1 file, $2 yes = disable library validation
  { echo '<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd"><plist version="1.0"><dict>'
    echo '<key>com.apple.security.automation.apple-events</key><true/>'
    [ "$2" = yes ] && echo '<key>com.apple.security.cs.disable-library-validation</key><true/>'
    echo '</dict></plist>'; } > "$1"
}
ent "$W/ent-ldv.plist" yes; ent "$W/ent-plain.plist" no
build() { # $1 folder, $2 value, $3 entitlements
  local app="$1/Probe.app"
  mkdir -p "$app/Contents/MacOS" "$app/Contents/Frameworks"
  cat > "$app/Contents/Info.plist" <<PL
<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0"><dict><key>CFBundleIdentifier</key><string>org.example.hxprobe</string><key>CFBundleExecutable</key><string>probe</string>
<key>CFBundleName</key><string>Probe</string><key>CFBundlePackageType</key><string>APPL</string><key>CFBundleShortVersionString</key><string>$2</string></dict></plist>
PL
  printf 'int probe_value(void) { return %s; }\n' "$2" > "$1/lib.c"
  cat > "$1/main.c" <<'C'
#include <dlfcn.h>
#include <libgen.h>
#include <mach-o/dyld.h>
#include <stdio.h>
#include <string.h>
int main(void) {
  char path[4096]; uint32_t size = sizeof path; _NSGetExecutablePath(path, &size);
  char lib[4096]; snprintf(lib, sizeof lib, "%s/../Frameworks/libprobe.dylib", dirname(path));
  void *handle = dlopen(lib, RTLD_NOW);
  if (!handle) { printf("dlopen failed: %s\n", dlerror()); return 1; }
  int (*value)(void) = (int (*)(void))dlsym(handle, "probe_value");
  printf("loaded %d\n", value()); return 0;
}
C
  clang -dynamiclib -o "$app/Contents/Frameworks/libprobe.dylib" "$1/lib.c" && clang -o "$app/Contents/MacOS/probe" "$1/main.c" || return 1
  codesign --force --options runtime --timestamp=none --keychain "$KC" -s "$NAME" "$app/Contents/Frameworks/libprobe.dylib" 2>>"$OUT/codesign.log" &&
    codesign --force --options runtime --timestamp=none --keychain "$KC" --entitlements "$3" -s "$NAME" "$app" 2>>"$OUT/codesign.log"
}
build "$W/v1" 1 "$W/ent-ldv.plist"; r sign_v1 $?
build "$W/v2" 2 "$W/ent-ldv.plist"; r sign_v2 $?
build "$W/v3" 3 "$W/ent-plain.plist"; r sign_v3_without_ldv $?
A1="$W/v1/Probe.app"; A2="$W/v2/Probe.app"
codesign --verify --deep --strict "$A1" 2>>"$OUT/codesign.log"; r verify_deep_strict $?
DR1="$(codesign -d -r- "$A1" 2>&1 | sed -n 's/^designated => //p')"; DR2="$(codesign -d -r- "$A2" 2>&1 | sed -n 's/^designated => //p')"
r dr_v1 "$DR1"; r dr_v2 "$DR2"
r same_dr_for_two_builds "$([ -n "$DR1" ] && [ "$DR1" = "$DR2" ] && echo yes || echo no)"
r dr_has_sha1 "$(printf '%s' "$DR1" | tr '[:lower:]' '[:upper:]' | grep -c "H\"$SHA1\"")"
r dr_has_identifier "$(printf '%s' "$DR1" | grep -c 'identifier "org.example.hxprobe"')"
r runtime_flag "$(codesign -d --verbose=2 "$A1" 2>&1 | grep -c 'flags=.*runtime')"
r team_identifier "$(codesign -d --verbose=2 "$A1" 2>&1 | sed -n 's/^TeamIdentifier=//p')"
r run_with_ldv "$("$A1/Contents/MacOS/probe" 2>&1 | head -1)"
r run_v2 "$("$A2/Contents/MacOS/probe" 2>&1 | head -1)"
r run_without_ldv "$("$W/v3/Probe.app/Contents/MacOS/probe" 2>&1 | head -1)"
r spctl "$(spctl -a -vv "$A1" 2>&1 | head -1)"
# the requirement must also hold for the other build (what TCC checks after an update)
codesign -v -R="$DR1" "$A2" 2>>"$OUT/codesign.log"; r v2_satisfies_v1_requirement $?
sudo security remove-trusted-cert -d "$W/cert.pem" 2>/dev/null
security delete-keychain "$KC" 2>/dev/null
cat "$R"
