# Test Cases for Search UI Function

## Overview
This document defines test cases for the Search UI functionality that allows users to search across multiple object types and navigate to object details.

## Object Types Under Test
- Events
- Attendees
- Websites
- Surveys
- Email messages
- Mailing list
- Users
- Accounts
- Contacts DB
- Prospects

---

## Test Case Structure

### TC-SEARCH-001: Verify Object Type List
**Priority:** High  
**Type:** Functional  
**Precondition:** User is on the Search page

**Steps:**
1. Click on the Object Type dropdown
2. Observe the list of available object types

**Expected Result:**
- Object Type dropdown displays all 10 object types:
  - Events
  - Attendees
  - Websites
  - Surveys
  - Email messages
  - Mailing list
  - Users
  - Accounts
  - Contacts DB
  - Prospects
- All object types are selectable
- Object types are displayed in a clear, readable format
- Object types are listed in the expected order

**Post-condition:** Object Type dropdown is visible and accessible

---

### TC-SEARCH-002: Search Events and Navigate to Details
**Priority:** High  
**Type:** Functional  
**Precondition:** User is on the Search page

**Steps:**
1. Select "Events" from the Object Type dropdown
2. Enter valid search criteria (e.g., event name, date, location)
3. Click Search button or press Enter
4. Verify search results are displayed
5. Click on an Event item from the search results list

**Expected Result:**
- System displays a list of matching Events
- Results are displayed in a list format
- Each result shows relevant event information (name, date, location)
- System navigates to the Event details page when clicking on a result
- Event details page displays complete information about the selected event
- Information includes: event name, date, time, location, description, attendees, etc.

**Post-condition:** User is on Event details page

---

### TC-SEARCH-003: Search Attendees and Navigate to Details
**Priority:** High  
**Type:** Functional  
**Precondition:** User is on the Search page

**Steps:**
1. Select "Attendees" from the Object Type dropdown
2. Enter valid search criteria (e.g., attendee name, email, event)
3. Click Search button or press Enter
4. Verify search results are displayed
5. Click on an Attendee item from the search results list

**Expected Result:**
- System displays a list of matching Attendees
- Results show attendee information (name, email, associated events)
- System navigates to the Attendee details page when clicking on a result
- Attendee details page displays complete information (name, email, phone, events attended, registration status, etc.)

**Post-condition:** User is on Attendee details page

---

### TC-SEARCH-004: Search Websites and Navigate to Details
**Priority:** High  
**Type:** Functional  
**Precondition:** User is on the Search page

**Steps:**
1. Select "Websites" from the Object Type dropdown
2. Enter valid search criteria (e.g., website name, URL, domain)
3. Click Search button or press Enter
4. Verify search results are displayed
5. Click on a Website item from the search results list

**Expected Result:**
- System displays a list of matching Websites
- Results show website information (name, URL, domain, status)
- System navigates to the Website details page when clicking on a result
- Website details page displays complete information (name, URL, domain, status, configuration, analytics, etc.)

**Post-condition:** User is on Website details page

---

### TC-SEARCH-005: Search Surveys and Navigate to Details
**Priority:** High  
**Type:** Functional  
**Precondition:** User is on the Search page

**Steps:**
1. Select "Surveys" from the Object Type dropdown
2. Enter valid search criteria (e.g., survey name, ID, status)
3. Click Search button or press Enter
4. Verify search results are displayed
5. Click on a Survey item from the search results list

**Expected Result:**
- System displays a list of matching Surveys
- Results show survey information (name, ID, status, creation date)
- System navigates to the Survey details page when clicking on a result
- Survey details page displays complete information (name, questions, responses, status, analytics, etc.)

**Post-condition:** User is on Survey details page

---

### TC-SEARCH-006: Search Email Messages and Navigate to Details
**Priority:** High  
**Type:** Functional  
**Precondition:** User is on the Search page

**Steps:**
1. Select "Email messages" from the Object Type dropdown
2. Enter valid search criteria (e.g., subject, sender, recipient, date)
3. Click Search button or press Enter
4. Verify search results are displayed
5. Click on an Email message item from the search results list

**Expected Result:**
- System displays a list of matching Email messages
- Results show email information (subject, sender, recipient, date, status)
- System navigates to the Email message details page when clicking on a result
- Email details page displays complete information (subject, sender, recipient, body, attachments, status, timestamp, etc.)

**Post-condition:** User is on Email message details page

---

### TC-SEARCH-007: Search Mailing List and Navigate to Details
**Priority:** High  
**Type:** Functional  
**Precondition:** User is on the Search page

**Steps:**
1. Select "Mailing list" from the Object Type dropdown
2. Enter valid search criteria (e.g., list name, ID, status)
3. Click Search button or press Enter
4. Verify search results are displayed
5. Click on a Mailing list item from the search results list

**Expected Result:**
- System displays a list of matching Mailing lists
- Results show mailing list information (name, ID, subscriber count, status)
- System navigates to the Mailing list details page when clicking on a result
- Mailing list details page displays complete information (name, subscribers, campaigns, status, statistics, etc.)

**Post-condition:** User is on Mailing list details page

---

### TC-SEARCH-008: Search Users and Navigate to Details
**Priority:** High  
**Type:** Functional  
**Precondition:** User is on the Search page

**Steps:**
1. Select "Users" from the Object Type dropdown
2. Enter valid search criteria (e.g., username, email, name, role)
3. Click Search button or press Enter
4. Verify search results are displayed
5. Click on a User item from the search results list

**Expected Result:**
- System displays a list of matching Users
- Results show user information (username, name, email, role)
- System navigates to the User details page when clicking on a result
- User details page displays complete information (username, name, email, role, permissions, activity history, etc.)

**Post-condition:** User is on User details page

---

### TC-SEARCH-009: Search Accounts and Navigate to Details
**Priority:** High  
**Type:** Functional  
**Precondition:** User is on the Search page

**Steps:**
1. Select "Accounts" from the Object Type dropdown
2. Enter valid search criteria (e.g., account name, ID, company, status)
3. Click Search button or press Enter
4. Verify search results are displayed
5. Click on an Account item from the search results list

**Expected Result:**
- System displays a list of matching Accounts
- Results show account information (name, ID, company, status, type)
- System navigates to the Account details page when clicking on a result
- Account details page displays complete information (name, ID, company, contacts, opportunities, status, billing information, etc.)

**Post-condition:** User is on Account details page

---

### TC-SEARCH-010: Search Contacts DB and Navigate to Details
**Priority:** High  
**Type:** Functional  
**Precondition:** User is on the Search page

**Steps:**
1. Select "Contacts DB" from the Object Type dropdown
2. Enter valid search criteria (e.g., contact name, email, phone, company)
3. Click Search button or press Enter
4. Verify search results are displayed
5. Click on a Contact item from the search results list

**Expected Result:**
- System displays a list of matching Contacts
- Results show contact information (name, email, phone, company)
- System navigates to the Contact details page when clicking on a result
- Contact details page displays complete information (name, email, phone, address, company, notes, interaction history, etc.)

**Post-condition:** User is on Contact details page

---

### TC-SEARCH-011: Search Prospects and Navigate to Details
**Priority:** High  
**Type:** Functional  
**Precondition:** User is on the Search page

**Steps:**
1. Select "Prospects" from the Object Type dropdown
2. Enter valid search criteria (e.g., prospect name, company, status, source)
3. Click Search button or press Enter
4. Verify search results are displayed
5. Click on a Prospect item from the search results list

**Expected Result:**
- System displays a list of matching Prospects
- Results show prospect information (name, company, status, source, value)
- System navigates to the Prospect details page when clicking on a result
- Prospect details page displays complete information (name, company, contact details, status, source, value, notes, conversion history, etc.)

**Post-condition:** User is on Prospect details page

---

### TC-SEARCH-012: Verify UI Consistency with Previous Version
**Priority:** High  
**Type:** UI/UX  
**Precondition:** User is on the Search page

**Steps:**
1. Observe the Search page layout and UI elements
2. Compare with the previous version/baseline UI
3. Verify the following UI elements:
   - Object Type dropdown position and styling
   - Search input field position and styling
   - Search button position and styling
   - Results display area layout
   - Colors, fonts, spacing, and alignment
   - Responsive design (if applicable)

**Expected Result:**
- All UI elements match the previous version/baseline
- Object Type dropdown is in the expected position with correct styling
- Search input field is in the expected position with correct styling
- Search button is in the expected position with correct styling
- Results display area maintains the same layout as previous version
- Colors, fonts, spacing, and alignment are consistent with previous version
- No unexpected UI changes or regressions
- UI is responsive and works correctly on different screen sizes (if applicable)

**Post-condition:** UI verification completed

---

## Negative Test Cases

### TC-SEARCH-013: Search with Empty Criteria
**Priority:** Medium  
**Type:** Functional  
**Precondition:** User is on the Search page

**Steps:**
1. Select any Object Type from the dropdown
2. Leave search criteria field empty
3. Click Search button or press Enter

**Expected Result:**
- System displays an error message indicating search criteria is required
- No results are displayed
- User remains on the Search page

---

### TC-SEARCH-014: Search with No Matching Results
**Priority:** Medium  
**Type:** Functional  
**Precondition:** User is on the Search page

**Steps:**
1. Select any Object Type from the dropdown
2. Enter search criteria that matches no objects (e.g., "NonExistentObject123")
3. Click Search button or press Enter

**Expected Result:**
- System displays a message indicating no results found
- Results list is empty or shows "No results found" message
- User remains on the Search page

---

### TC-SEARCH-015: Search with Invalid Object Type Selection
**Priority:** Low  
**Type:** Functional  
**Precondition:** User is on the Search page

**Steps:**
1. Do not select any Object Type (leave dropdown at default/empty state)
2. Enter valid search criteria
3. Click Search button or press Enter

**Expected Result:**
- System displays an error message indicating Object Type must be selected
- No search is performed
- User remains on the Search page

---

## Edge Cases

### TC-SEARCH-016: Search with Special Characters
**Priority:** Medium  
**Type:** Functional  
**Precondition:** User is on the Search page

**Steps:**
1. Select any Object Type from the dropdown
2. Enter search criteria with special characters (e.g., "Test@#$%^&*()")
3. Click Search button or press Enter

**Expected Result:**
- System handles special characters appropriately
- Either displays matching results or "No results found" message
- System does not crash or display error

---

### TC-SEARCH-017: Search with Very Long String
**Priority:** Medium  
**Type:** Functional  
**Precondition:** User is on the Search page

**Steps:**
1. Select any Object Type from the dropdown
2. Enter a very long search string (e.g., 1000+ characters)
3. Click Search button or press Enter

**Expected Result:**
- System handles long strings appropriately
- Search executes without error
- Results are displayed or "No results found" message is shown

---

### TC-SEARCH-018: Rapid Object Type Switching
**Priority:** Low  
**Type:** Functional  
**Precondition:** User is on the Search page

**Steps:**
1. Select "Events" from Object Type dropdown
2. Quickly switch to "Users"
3. Quickly switch to "Accounts"
4. Enter search criteria
5. Click Search button

**Expected Result:**
- System correctly uses the last selected Object Type
- Search executes for the correct object type
- Results match the selected object type

---

## UI/UX Test Cases

### TC-SEARCH-019: Search Results Display Format
**Priority:** Medium  
**Type:** UI/UX  
**Precondition:** User has performed a search with results

**Steps:**
1. Perform any successful search
2. Observe the search results display

**Expected Result:**
- Results are displayed in a clear, readable format
- Each result item is clickable
- Results show relevant information for the selected object type
- Results are properly paginated if there are many results
- Loading indicator is shown during search execution

---

### TC-SEARCH-020: Navigation Back from Details Page
**Priority:** Medium  
**Type:** Functional  
**Precondition:** User is on an object details page (navigated from search results)

**Steps:**
1. Click browser back button or application back button

**Expected Result:**
- System navigates back to the search results page
- Search results are still displayed
- Search criteria and object type selection are preserved

---

## Test Summary

**Total Test Cases:** 20

**By Priority:**
- High: 12 test cases
- Medium: 6 test cases
- Low: 2 test cases

**By Type:**
- Functional: 17 test cases
- UI/UX: 3 test cases

**Coverage:**
- Object Type list verification (TC-001)
- All 10 object types have combined search and navigation test cases (TC-002 to TC-011)
- UI consistency verification (TC-012)
- Negative test cases included (TC-013 to TC-015)
- Edge cases included (TC-016 to TC-018)
- UI/UX considerations included (TC-019 to TC-020)
