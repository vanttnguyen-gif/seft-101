Share RTMP Video Within Player – Test Checklist
===============================================

Preconditions
-------------
- Account-level `Enable RTMP` checkbox is enabled by an Aventri staff or admin user.
- Session format is set to support “Share RTMP video within player”.
- `Enable Speaker link for the session` is selected for sessions requiring speaker studio access.
- Organizer, host, speaker, and attendee test accounts are available.
- External RTMP streaming application (e.g., OBS) is configured to accept manual Server URL and Stream key.

Functional Verification Steps
-----------------------------

| # | Area | Description | Step | Expected Result |
|---|------|-------------|------|-----------------|
| 1 | Session Editor | Confirm share option availability. | In session editor, select “Share RTMP video within player”. | Option can be selected without errors. |
| 2 | Channel Timing | Prevent early channel opening. | Attempt to click `Open channel` more than 12 hours before session start. | Option is disabled or displays messaging blocking the action. |
| 3 | Channel Timing | Allow channel opening inside window. | Within 12 hours (e.g., 11h 59m) of start, click `Open channel`. | `Server URL` and `Stream key` auto-populate. |
| 4 | Clipboard | Validate credential copying. | Click each of `Server URL` and `Stream key`. | Values copy to clipboard; pasting shows correct strings. |
| 5 | Streaming Setup | Verify third-party integration. | Enter URL/key into external streaming app. | Streaming app accepts credentials without error. |
| 6 | Streaming Start | Confirm organizer workflow. | Begin streaming from external application. | Organizer view indicates live status; allow ~10s delay. |
| 7 | Host Controls | Ensure host sees Play control. | As host, open Share content modal. | `Play RTMP stream` control is visible. |
| 8 | Host Warning | Alert when stream not live. | As host, click `Play RTMP stream` before stream is live. | Alert “Stream not live” appears. |
| 9 | Host Playback | Start stream from host. | With stream live, host clicks `Play RTMP stream`. | Stream starts in session player after ~10s. |
|10 | Attendee Waiting | Confirm waiting room behavior. | Join session as attendee before stream live. | Waiting room view persists until playback begins. |
|11 | Attendee Playback | Validate live stream delivery. | With stream running, attendee observes player. | Stream plays automatically with audio/video. |
|12 | Speaker Link Availability | Ensure speaker links only for RTMP sessions. | For RTMP session, view speaker portal/lobby. | `Join Studio` link is present only for RTMP enabled sessions. |
|13 | Speaker Access | Validate studio launch. | As speaker, click `Join Studio`. | Speaker is redirected to third-party studio successfully. |
|14 | Speaker Restriction | Confirm no link when disabled. | For non-RTMP session or when checkbox unchecked, check speaker lobby. | `Join Studio` link absent. |

Negative / Edge Cases
---------------------
- [ ] If stream stops mid-session, attendee returns to waiting room and playback resumes after host restarts.
- [ ] If stream key is rotated post-open, old key fails while new key succeeds.
- [ ] Host receives “Stream not live” warning if external stream stops unexpectedly and host replays.
- [ ] Organizer cannot reopen channel beyond 12-hour window once closed early.
- [ ] Speaker attempting “Join Studio” without permission sees appropriate access error.
