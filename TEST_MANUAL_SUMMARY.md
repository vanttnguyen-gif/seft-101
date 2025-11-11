# Test Cases Summary - Manual Testing Only (Chrome Browser)

## 📋 Files Created

1. **TEST_CASES_NAVIGATION_MANUAL.csv** - Chi tiết 37 test cases
2. **TEST_EFFORT_ESTIMATION_MANUAL.csv** - Ước lượng effort và cost
3. **TEST_MANUAL_SUMMARY.md** - File này (tổng quan)

---

## 🎯 Overview

**Total Test Cases:** 37 (manual only, Chrome browser)

**Test Approach:** Manual testing chỉ trên Chrome browser  
**Automation:** Không có  
**Cross-browser:** Không có (chỉ Chrome)

---

## 📊 Test Cases Breakdown

| Test Suite | Test Cases | Priority | Time (hours) |
|------------|-----------|----------|--------------|
| **1. Navigation Links Presence** | 2 | High | 1 |
| **2. Navigation Routing** | 11 | High | 3-4 |
| **3. Layout & Visual** | 4 | High-Medium | 5-6 |
| **4. Responsive Behavior** | 6 | High | 6-8 |
| **5. Accessibility** | 5 | High | 6-8 |
| **6. Performance** | 3 | Medium | 4-5 |
| **7. Integration** | 3 | High-Medium | 3-4 |
| **8. Edge Cases** | 3 | Low-Medium | 2-3 |
| **TOTAL** | **37** | | **30-39** |

---

## ⏱️ Effort Estimation

### Test Execution
- **Core Testing:** 30-39 hours
- **Setup & Planning:** 4-6 hours
- **Bug Reporting:** 4-6 hours
- **Regression Testing:** 4-6 hours
- **Buffer (15%):** 5-6 hours

### Total Effort
- **Total Hours:** 47-63 hours
- **Person-Days:** 6-8 days (8h/day)
- **Calendar Time:** 10 working days (2 weeks)

---

## 👥 Resource Requirements

### Option 1: Single QA (Budget-friendly)
- **1 QA Engineer:** 50-60 hours
- **1 QA Lead:** 6-8 hours (part-time)
- **Timeline:** 3 weeks
- **Cost:** ~$3,000 - $3,500

### Option 2: Two QA (Faster)
- **QA Engineer 1:** 40-50 hours (primary)
- **QA Engineer 2:** 20-30 hours (support)
- **QA Lead:** 6-8 hours (part-time)
- **Timeline:** 2 weeks
- **Cost:** ~$3,360 - $4,480

**Recommended:** Option 2 (2 QA Engineers)

---

## 📅 Timeline (2 Weeks - Recommended)

### Week 1
**Days 1-3:** Setup + Basic Testing
- Test environment setup
- AngularJS baseline capture
- Test Suites 1-3: Links, Routing, Layout

**Days 4-5:** Responsive Testing
- Test Suite 4: All viewport sizes

### Week 2
**Days 6-7:** Specialized Testing
- Test Suite 5: Accessibility (keyboard, screen reader, ARIA)
- Test Suite 6: Performance testing

**Day 8:** Integration & Edge Cases
- Test Suites 7-8: Integration tests and edge cases

**Day 9:** Bug Fixes & Regression
- Retest all bug fixes
- Smoke testing

**Day 10:** Final Validation
- Final checks
- Test report
- Sign-off

---

## 💰 Cost Breakdown

| Item | Hours | Rate | Cost |
|------|-------|------|------|
| QA Engineer 1 | 40-50h | $50/h | $2,000-$2,500 |
| QA Engineer 2 | 20-30h | $50/h | $1,000-$1,500 |
| QA Lead | 6-8h | $60/h | $360-$480 |
| **TOTAL** | | | **$3,360-$4,480** |

*Rates are sample estimates for US market*

---

## 🎯 Test Coverage

### ✅ Included
- ✅ All 10 navigation links functionality
- ✅ Routing verification
- ✅ Visual comparison with AngularJS
- ✅ Responsive design (6 viewports)
- ✅ Accessibility (WCAG 2.1 AA)
- ✅ Performance testing
- ✅ Integration testing
- ✅ Edge case scenarios
- ✅ Chrome browser only

### ❌ Not Included (Excluded for Manual-Only)
- ❌ Firefox, Safari, Edge browsers
- ❌ Automated tests (unit/E2E)
- ❌ CI/CD integration
- ❌ Visual regression automation
- ❌ Load testing
- ❌ Security testing

---

## 📝 How to Use the CSV Files

### TEST_CASES_NAVIGATION_MANUAL.csv

**Columns:**
- **Test Case ID:** Unique identifier (TC-001, TC-002, etc.)
- **Test Suite:** Category of test
- **Test Case Name:** Descriptive name
- **Priority:** High/Medium/Low
- **Type:** Functional/Visual/Accessibility/etc.
- **Preconditions:** What needs to be ready before test
- **Test Steps:** Step-by-step instructions
- **Expected Results:** What should happen
- **Test Data:** Any data needed
- **Browser:** Always "Chrome"
- **Status:** Empty (fill during execution)
- **Actual Result:** Empty (fill during execution)
- **Defect ID:** Empty (fill if bug found)
- **Tested By:** Empty (fill with tester name)
- **Date:** Empty (fill with test date)
- **Notes:** Empty (any additional comments)

### To Execute Tests:

1. Open CSV in Excel or Google Sheets
2. For each test case:
   - Read Preconditions, Test Steps, Expected Results
   - Execute the test in Chrome browser
   - Fill in: Status (Pass/Fail), Actual Result, Tested By, Date
   - If failed, create bug report and add Defect ID
3. Track progress daily
4. Generate summary report at end

---

## 🔴 Risk Factors

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|-----------|
| Visual differences from AngularJS | +4-8h | Medium | Have designer review early |
| Responsive layout issues | +3-6h | Medium | Test early in dev cycle |
| Accessibility violations | +4-8h | Medium | Use automated tools first |
| Performance below AngularJS | +2-4h | Low | Profile early, optimize |
| Test environment unstable | +2-4h | Low | Validate environment first |

**Recommended Buffer:** 20% (10-13 hours)

---

## 🚀 Optimization Options (If Budget/Time Constrained)

### Level 1: Skip Low Priority Tests (Save 3-4 hours)
- Skip ultra-wide screen testing (TC-023)
- Skip memory usage testing (TC-031)
- Skip rapid clicking test (TC-035)

**New Effort:** 5-7 person-days

### Level 2: Reduce Coverage (Save 6-9 hours)
- Level 1 changes +
- Skip all edge cases (TC-035 to TC-037)
- Skip performance testing (TC-029 to TC-031)
- Test only 4 viewports instead of 6

**New Effort:** 4-6 person-days

### Level 3: Critical Path Only (Save 15-20 hours)
- Level 2 changes +
- Basic accessibility only (keyboard, no screen reader)
- Skip deep link testing
- Skip authentication state testing

**New Effort:** 3-4 person-days  
**Coverage:** ~60% (critical paths only)

**⚠️ Not Recommended** - May miss important issues

---

## ✅ Success Criteria

- [ ] All 37 test cases executed
- [ ] All High priority tests pass
- [ ] 0 Critical bugs remaining
- [ ] ≤2 High priority bugs remaining
- [ ] Visual appearance matches AngularJS
- [ ] All 10 navigation links functional
- [ ] Responsive behavior validated
- [ ] Accessibility compliance (WCAG 2.1 AA)
- [ ] Performance acceptable
- [ ] Stakeholder sign-off obtained

---

## 📦 Deliverables

1. ✅ Completed CSV with all test results
2. ✅ Bug reports with screenshots
3. ✅ Visual comparison screenshots
4. ✅ Test summary report
5. ✅ Accessibility compliance report
6. ✅ Sign-off document

---

## 🛠️ Tools Required

### Mandatory
- Chrome browser (latest version)
- Chrome DevTools
- Screen reader (NVDA for Windows or VoiceOver for Mac)
- Screenshot tool (built-in or Snipping Tool)
- Excel or Google Sheets (for CSV)

### Optional but Helpful
- Color contrast analyzer (WebAIM, WAVE)
- Lighthouse (in Chrome DevTools)
- AngularJS version for comparison
- Bug tracking tool (Jira, Azure DevOps, etc.)

---

## 📧 Questions?

**Setup Issues:**
- Verify Chrome is updated to latest version
- Ensure test environment is accessible
- Confirm AngularJS baseline available

**Execution Issues:**
- Reference Expected Results column for each test
- Take screenshots for failed tests
- Document any deviations from expected behavior

**Reporting:**
- Use provided Defect ID format
- Attach screenshots to bug reports
- Update Status column immediately after testing

---

## 📌 Quick Start Guide

### Day 1 Morning (2-3 hours)
1. ✅ Review this summary document
2. ✅ Open TEST_CASES_NAVIGATION_MANUAL.csv in Excel
3. ✅ Setup Chrome browser and DevTools
4. ✅ Access test environment
5. ✅ Capture AngularJS baseline screenshots
6. ✅ Execute TC-001 to TC-002 (Links Presence)

### Day 1 Afternoon (3-4 hours)
1. ✅ Execute TC-003 to TC-013 (Navigation Routing)
2. ✅ Document any routing issues
3. ✅ Update CSV with results

### Day 2-3 (12-14 hours)
1. ✅ Execute TC-014 to TC-017 (Layout & Visual)
2. ✅ Execute TC-018 to TC-023 (Responsive)
3. ✅ Take comparison screenshots

### Day 4-5 (12-14 hours)
1. ✅ Execute TC-024 to TC-028 (Accessibility)
2. ✅ Execute TC-029 to TC-031 (Performance)
3. ✅ Document WCAG compliance

### Day 6 (6-8 hours)
1. ✅ Execute TC-032 to TC-037 (Integration & Edge Cases)
2. ✅ Create bug reports for all failures
3. ✅ Prepare preliminary summary

### Day 7-9 (12-16 hours)
1. ✅ Regression testing after bug fixes
2. ✅ Retest all failed test cases
3. ✅ Update CSV with final results

### Day 10 (4-6 hours)
1. ✅ Final smoke test
2. ✅ Complete test summary report
3. ✅ Sign-off meeting
4. ✅ Archive all deliverables

---

## 📊 Sample Test Report Template

```
TEST EXECUTION SUMMARY REPORT
Navigation Bar Vue 3 - Manual Testing

Test Period: [Start Date] - [End Date]
Tested By: [QA Names]
Browser: Chrome [Version]
Test Environment: [URL]

RESULTS SUMMARY:
- Total Test Cases: 37
- Executed: [X]
- Passed: [X]
- Failed: [X]
- Blocked: [X]
- Pass Rate: [X]%

DEFECTS SUMMARY:
- Critical: [X]
- High: [X]
- Medium: [X]
- Low: [X]

COVERAGE:
- Navigation Links: [X/2] passed
- Routing: [X/11] passed
- Layout & Visual: [X/4] passed
- Responsive: [X/6] passed
- Accessibility: [X/5] passed
- Performance: [X/3] passed
- Integration: [X/3] passed
- Edge Cases: [X/3] passed

RECOMMENDATIONS:
[List any concerns or recommendations]

SIGN-OFF:
Ready for production: Yes / No
Conditions: [Any conditions for release]
```

---

## 🎓 Testing Tips

### Visual Testing
- Use same zoom level (100%) for all comparisons
- Clear browser cache before testing
- Take screenshots in consistent lighting
- Note CSS differences (fonts, colors, spacing)

### Responsive Testing
- Use Chrome DevTools Device Toolbar (F12 → Toggle Device Toolbar)
- Test both portrait and landscape for mobile
- Check touch target sizes (minimum 44x44px)
- Verify hamburger menu functionality

### Accessibility Testing
- Tab through navigation without mouse
- Test with screen reader (NVDA/VoiceOver)
- Check color contrast ratios
- Verify ARIA labels in DevTools Elements panel
- Test keyboard shortcuts (Enter, Space, Esc)

### Performance Testing
- Clear cache and hard reload (Ctrl+Shift+R)
- Use Chrome DevTools Performance tab
- Record page load and measure
- Use Lighthouse for automated metrics
- Compare with AngularJS baseline metrics

### Bug Reporting
- Clear, concise title
- Steps to reproduce (detailed)
- Expected vs Actual result
- Screenshots/screen recording
- Browser version and viewport size
- Console errors (if any)

---

**Last Updated:** 2025-11-11  
**Version:** 1.0  
**Contact:** QA Team
