# Ước Lượng Effort Thực Thi Test Cases - Search UI Function

## Tổng Quan

**Tổng số test cases:** 28  
**Loại test:** Functional UI Testing  
**Phạm vi:** Search functionality cho 10 object types

---

## Phương Pháp Ước Lượng

### Thời Gian Trung Bình Cho Mỗi Test Case:

1. **Test Setup:** 2-5 phút
   - Chuẩn bị môi trường test
   - Đăng nhập vào hệ thống
   - Navigate đến Search page

2. **Test Execution:** 3-8 phút
   - Thực hiện các bước test
   - Nhập dữ liệu test
   - Quan sát kết quả

3. **Result Verification:** 2-5 phút
   - Kiểm tra kết quả thực tế vs expected result
   - Verify UI elements
   - Verify navigation flow

4. **Documentation:** 1-3 phút
   - Ghi lại kết quả test
   - Chụp screenshot (nếu cần)
   - Update test status

5. **Bug Reporting (nếu có):** 5-15 phút
   - Tạo bug report
   - Attach screenshots/logs
   - Mô tả chi tiết vấn đề

### Thời Gian Ước Tính Theo Loại Test Case:

| Loại Test Case | Thời Gian Ước Tính (phút) | Ghi Chú |
|----------------|---------------------------|---------|
| **Positive Test Cases (TC-001 đến TC-020)** | 10-15 phút | Bao gồm search + navigation |
| **Negative Test Cases (TC-021 đến TC-023)** | 8-12 phút | Test error handling |
| **Edge Cases (TC-024 đến TC-026)** | 12-18 phút | Cần chuẩn bị test data đặc biệt |
| **UI/UX Test Cases (TC-027, TC-028)** | 10-15 phút | Kiểm tra UI elements |

---

## Chi Tiết Ước Lượng Theo Test Case

### High Priority Test Cases (TC-001 đến TC-020)

| Test ID | Test Name | Object Type | Thời Gian Ước Tính (phút) | Ghi Chú |
|---------|-----------|-------------|---------------------------|---------|
| TC-SEARCH-001 | Search Events - Valid Search Criteria | Events | 10 | Standard search test |
| TC-SEARCH-002 | Search Events - Click on Result Item | Events | 12 | Include navigation verification |
| TC-SEARCH-003 | Search Attendees - Valid Search Criteria | Attendees | 10 | Standard search test |
| TC-SEARCH-004 | Search Attendees - Click on Result Item | Attendees | 12 | Include navigation verification |
| TC-SEARCH-005 | Search Websites - Valid Search Criteria | Websites | 10 | Standard search test |
| TC-SEARCH-006 | Search Websites - Click on Result Item | Websites | 12 | Include navigation verification |
| TC-SEARCH-007 | Search Surveys - Valid Search Criteria | Surveys | 10 | Standard search test |
| TC-SEARCH-008 | Search Surveys - Click on Result Item | Surveys | 12 | Include navigation verification |
| TC-SEARCH-009 | Search Email Messages - Valid Search Criteria | Email messages | 10 | Standard search test |
| TC-SEARCH-010 | Search Email Messages - Click on Result Item | Email messages | 12 | Include navigation verification |
| TC-SEARCH-011 | Search Mailing List - Valid Search Criteria | Mailing list | 10 | Standard search test |
| TC-SEARCH-012 | Search Mailing List - Click on Result Item | Mailing list | 12 | Include navigation verification |
| TC-SEARCH-013 | Search Users - Valid Search Criteria | Users | 10 | Standard search test |
| TC-SEARCH-014 | Search Users - Click on Result Item | Users | 12 | Include navigation verification |
| TC-SEARCH-015 | Search Accounts - Valid Search Criteria | Accounts | 10 | Standard search test |
| TC-SEARCH-016 | Search Accounts - Click on Result Item | Accounts | 12 | Include navigation verification |
| TC-SEARCH-017 | Search Contacts DB - Valid Search Criteria | Contacts DB | 10 | Standard search test |
| TC-SEARCH-018 | Search Contacts DB - Click on Result Item | Contacts DB | 12 | Include navigation verification |
| TC-SEARCH-019 | Search Prospects - Valid Search Criteria | Prospects | 10 | Standard search test |
| TC-SEARCH-020 | Search Prospects - Click on Result Item | Prospects | 12 | Include navigation verification |

**Subtotal High Priority:** 220 phút (3.67 giờ)

---

### Medium Priority Test Cases (TC-021 đến TC-022, TC-024, TC-025, TC-027, TC-028)

| Test ID | Test Name | Thời Gian Ước Tính (phút) | Ghi Chú |
|---------|-----------|---------------------------|---------|
| TC-SEARCH-021 | Search with Empty Criteria | 10 | Test validation |
| TC-SEARCH-022 | Search with No Matching Results | 10 | Test empty result handling |
| TC-SEARCH-024 | Search with Special Characters | 15 | Cần chuẩn bị test data đặc biệt |
| TC-SEARCH-025 | Search with Very Long String | 15 | Cần chuẩn bị test data đặc biệt |
| TC-SEARCH-027 | Search Results Display Format | 12 | UI/UX verification |
| TC-SEARCH-028 | Navigation Back from Details Page | 10 | Navigation flow test |

**Subtotal Medium Priority:** 72 phút (1.2 giờ)

---

### Low Priority Test Cases (TC-023, TC-026)

| Test ID | Test Name | Thời Gian Ước Tính (phút) | Ghi Chú |
|---------|-----------|---------------------------|---------|
| TC-SEARCH-023 | Search with Invalid Object Type Selection | 8 | Quick validation test |
| TC-SEARCH-026 | Rapid Object Type Switching | 12 | Test edge case behavior |

**Subtotal Low Priority:** 20 phút (0.33 giờ)

---

## Tổng Kết Effort

### Thời Gian Thực Thi Thuần (Không Bao Gồm Bug Fix)

| Loại | Số Test Cases | Thời Gian (phút) | Thời Gian (giờ) |
|------|---------------|------------------|-----------------|
| High Priority | 20 | 220 | 3.67 |
| Medium Priority | 6 | 72 | 1.2 |
| Low Priority | 2 | 20 | 0.33 |
| **TỔNG CỘNG** | **28** | **312** | **5.2 giờ** |

### Thời Gian Bao Gồm Buffer và Bug Reporting

| Hạng Mục | Thời Gian (giờ) | Ghi Chú |
|----------|-----------------|---------|
| Test Execution (thuần) | 5.2 | Thực thi 28 test cases |
| Test Data Preparation | 0.5 | Chuẩn bị test data cho các object types |
| Environment Setup | 0.3 | Setup môi trường test, đăng nhập |
| Bug Reporting (20% test cases fail) | 1.0 | Giả định 20% test cases có bug cần report |
| Retest (sau bug fix) | 1.0 | Retest các test cases đã fail |
| Documentation & Review | 0.5 | Tổng hợp kết quả, review |
| **Buffer (10%)** | **0.85** | Buffer cho các vấn đề phát sinh |
| **TỔNG CỘNG** | **9.35 giờ** | **~1.2 ngày làm việc** |

---

## Phân Bổ Effort Theo Giai Đoạn

### Giai Đoạn 1: Preparation (0.8 giờ)
- **Test Data Preparation:** 0.5 giờ
  - Chuẩn bị test data cho 10 object types
  - Tạo sample records nếu cần
- **Environment Setup:** 0.3 giờ
  - Setup test environment
  - Verify access và permissions

### Giai Đoạn 2: Test Execution (6.2 giờ)
- **High Priority Tests:** 3.67 giờ
  - Execute 20 test cases (TC-001 đến TC-020)
- **Medium Priority Tests:** 1.2 giờ
  - Execute 6 test cases (TC-021, TC-022, TC-024, TC-025, TC-027, TC-028)
- **Low Priority Tests:** 0.33 giờ
  - Execute 2 test cases (TC-023, TC-026)
- **Bug Reporting:** 1.0 giờ
  - Report bugs nếu có (giả định 20% fail rate)

### Giai Đoạn 3: Retest & Documentation (2.35 giờ)
- **Retest:** 1.0 giờ
  - Retest các test cases đã fail sau khi fix
- **Documentation & Review:** 0.5 giờ
  - Tổng hợp kết quả test
  - Update test status
  - Review và sign-off
- **Buffer:** 0.85 giờ
  - Buffer cho các vấn đề phát sinh

---

## Giả Định và Rủi Ro

### Giả Định:
1. Test environment đã được setup sẵn và stable
2. Test data đã có sẵn hoặc có thể tạo nhanh
3. Tester đã quen thuộc với hệ thống
4. Không có blocking issues nghiêm trọng
5. Bug fix time không tính vào effort này

### Rủi Ro Có Thể Ảnh Hưởng Đến Effort:

| Rủi Ro | Impact | Mitigation | Additional Effort |
|--------|--------|------------|-------------------|
| Test environment không stable | High | Có sẵn backup environment | +1-2 giờ |
| Test data chưa có sẵn | Medium | Chuẩn bị test data trước | +0.5-1 giờ |
| Bug rate cao (>30%) | Medium | Prioritize critical bugs | +1-2 giờ |
| Performance issues | Low | Test trong giờ off-peak | +0.5 giờ |
| UI changes không documented | Medium | Clarify với dev team | +0.5 giờ |

**Tổng buffer cho rủi ro:** +3-5 giờ (nếu các rủi ro xảy ra)

---

## Kế Hoạch Thực Thi Đề Xuất

### Option 1: Thực Thi Tuần Tự (1 Tester)
- **Thời gian:** 1.5 ngày làm việc (12 giờ)
- **Ưu điểm:** Dễ quản lý, consistent
- **Nhược điểm:** Lâu hơn

### Option 2: Thực Thi Song Song (2 Testers)
- **Tester 1:** High priority tests (10 test cases) - 2 giờ
- **Tester 2:** Medium + Low priority tests (8 test cases) - 1.5 giờ
- **Thời gian:** 1 ngày làm việc (8 giờ)
- **Ưu điểm:** Nhanh hơn, parallel execution
- **Nhược điểm:** Cần coordination tốt

### Option 3: Thực Thi Theo Sprint (Agile)
- **Sprint 1:** High priority tests (20 test cases) - 4 giờ
- **Sprint 2:** Medium + Low priority tests (8 test cases) - 2 giờ
- **Thời gian:** 2 sprints
- **Ưu điểm:** Phù hợp với Agile, có thể release sớm
- **Nhược điểm:** Cần planning tốt

---

## Kết Luận

**Effort Ước Tính:**
- **Tối thiểu:** 5.2 giờ (chỉ execution, không có bug)
- **Thực tế:** 9.35 giờ (~1.2 ngày làm việc)
- **Tối đa:** 12-14 giờ (nếu có nhiều rủi ro)

**Khuyến Nghị:**
- Allocate **1.5 ngày làm việc** cho 1 tester
- Hoặc **1 ngày làm việc** cho 2 testers song song
- Bao gồm buffer 10-15% cho các vấn đề phát sinh
- Prioritize High priority tests trước

---

## Template Tracking

### Test Execution Tracking Sheet

| Test ID | Tester | Start Time | End Time | Duration (min) | Status | Notes |
|---------|--------|------------|----------|----------------|--------|-------|
| TC-SEARCH-001 | | | | | Pending | |
| TC-SEARCH-002 | | | | | Pending | |
| ... | | | | | | |

**Status:** Pending / In Progress / Pass / Fail / Blocked

---

*Document created: [Date]*  
*Last updated: [Date]*  
*Version: 1.0*
