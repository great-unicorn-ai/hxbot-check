// Prints what this process may do: Screen Recording (preflight, no prompt) and Accessibility.
// Also tries one window list read: without Screen Recording, other apps' window titles are empty.
import ApplicationServices
import CoreGraphics
import Foundation

let screen = CGPreflightScreenCaptureAccess()
let accessibility = AXIsProcessTrusted()
var titled = 0
var total = 0
if let list = CGWindowListCopyWindowInfo([.optionOnScreenOnly], kCGNullWindowID) as? [[String: Any]] {
    for window in list where (window[kCGWindowOwnerPID as String] as? Int32) != getpid() {
        total += 1
        if let name = window[kCGWindowName as String] as? String, !name.isEmpty { titled += 1 }
    }
}
print("screen_recording=\(screen ? 1 : 0) accessibility=\(accessibility ? 1 : 0) windows=\(total) titled=\(titled)")
