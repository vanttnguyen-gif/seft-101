RTMP Direct Streaming Test Checklist
====================================

Preconditions
-------------
- Test environment has RTMP-capable session created with format `RTMP direct streaming (entire screen)`.
- At the account level, ensure `Enable RTMP` checkbox is available and selected by an Aventri staff or admin user.
- Test account has organizer permissions; attendee account available for validation.
- External streaming tool (e.g., OBS) configured for manual URL/key entry.

Functional Verification Steps
-----------------------------

| # | Area | Description | Step | Expected Result |
|---|------|-------------|------|-----------------|
| 1 | Session Editor | Validate unsupported options are hidden in RTMP mode. | Open the session in edit mode and select `RTMP direct streaming (entire screen)`. | `Welcome message`, `Enable Closed Captioning`, `Sharing settings`, `Only show participants names to hosts and speakers`, and `Allow hosts to create Breakout Rooms` inputs are hidden or disabled. |
| 2 | Channel Timing | Confirm channel cannot open too early. | Attempt to click `Open Channel` more than 12 hours before the session start. | Control is disabled or blocked with a message preventing opening. |
| 3 | Channel Timing | Ensure channel opens once within 12-hour window. | At 11h 59m prior (adjust session start if necessary), refresh and click `Open Channel`. | Button is enabled; clicking populates `Server URL` and `Stream key`. |
| 4 | Clipboard | Confirm `Server URL` copies correctly. | Click `Server URL`. | Value copies to clipboard; paste into text editor to confirm match. |
| 5 | Clipboard | Confirm `Stream key` copies correctly. | Click `Stream key`. | Value copies to clipboard; paste into text editor to confirm match. |
| 6 | Streaming Setup | Verify streaming app accepts RTMP credentials. | Enter copied `Server URL` and `Stream key` into streaming application. | Streaming app accepts values without validation errors. |
| 7 | Streaming Start | Check organizer sees live state when streaming begins. | Start stream from external application. | Organizer view reflects streaming status (e.g., live indicator). |
| 8 | Attendee Waiting Room | Ensure attendees wait until stream starts. | Join session as attendee before stream starts. | Waiting room view displayed until stream begins. |
| 9 | Attendee Live View | Confirm attendee player auto-loads live feed. | Once stream is live, observe attendee player. | Video/audio feed renders without requiring page refresh. |
|10 | Leave Action | Verify attendee can exit session gracefully. | As attendee, click `Leave`. | User returns to agenda lobby without errors. |
|11 | Stream End Alert | Ensure attendees see end-of-stream alert. | Stop stream from organizer side. | Attendee receives alert: “This meeting has ended. You will be forwarded back to the lobby” with `OK` button. |
|12 | Lobby Redirect | Validate lobby redirect after stream ends. | Click `OK` on attendee alert. | Attendee is routed to agenda lobby page. |

Negative / Edge Cases
---------------------
- [ ] Validate channel cannot be reopened after closing unless within 12-hour window.
- [ ] Confirm clipboard copying respects browser permission prompts (if any).
- [ ] Check behavior if stream key is rotated and reopened (old key should be invalid).
- [ ] Verify attendee remains in waiting room if stream stops unexpectedly and restarts.
- [ ] Ensure organizer can reinitiate streaming without refreshing the session page.
