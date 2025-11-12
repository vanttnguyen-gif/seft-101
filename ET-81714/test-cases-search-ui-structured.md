# Search UI Function - Test Cases (Structured Format)

## Test Case Template

| Test ID | Test Name | Object Type | Priority | Type | Precondition | Steps | Expected Result | Status |
|---------|-----------|-------------|----------|------|--------------|-------|-----------------|--------|
| TC-SEARCH-001 | Verify Object Type List | N/A | High | Functional | User is on Search page | 1. Click on Object Type dropdown<br>2. Observe list of available object types | Object Type dropdown displays all 10 object types. All are selectable and displayed clearly | Pending |
| TC-SEARCH-002 | Search Events and Navigate to Details | Events | High | Functional | User is on Search page | 1. Select "Events"<br>2. Enter valid search criteria<br>3. Click Search<br>4. Verify results<br>5. Click on result item | Displays matching Events. Navigates to details page with complete information | Pending |
| TC-SEARCH-003 | Search Attendees and Navigate to Details | Attendees | High | Functional | User is on Search page | 1. Select "Attendees"<br>2. Enter valid search criteria<br>3. Click Search<br>4. Verify results<br>5. Click on result item | Displays matching Attendees. Navigates to details page with complete information | Pending |
| TC-SEARCH-004 | Search Websites and Navigate to Details | Websites | High | Functional | User is on Search page | 1. Select "Websites"<br>2. Enter valid search criteria<br>3. Click Search<br>4. Verify results<br>5. Click on result item | Displays matching Websites. Navigates to details page with complete information | Pending |
| TC-SEARCH-005 | Search Surveys and Navigate to Details | Surveys | High | Functional | User is on Search page | 1. Select "Surveys"<br>2. Enter valid search criteria<br>3. Click Search<br>4. Verify results<br>5. Click on result item | Displays matching Surveys. Navigates to details page with complete information | Pending |
| TC-SEARCH-006 | Search Email Messages and Navigate to Details | Email messages | High | Functional | User is on Search page | 1. Select "Email messages"<br>2. Enter valid search criteria<br>3. Click Search<br>4. Verify results<br>5. Click on result item | Displays matching Email messages. Navigates to details page with complete information | Pending |
| TC-SEARCH-007 | Search Mailing List and Navigate to Details | Mailing list | High | Functional | User is on Search page | 1. Select "Mailing list"<br>2. Enter valid search criteria<br>3. Click Search<br>4. Verify results<br>5. Click on result item | Displays matching Mailing lists. Navigates to details page with complete information | Pending |
| TC-SEARCH-008 | Search Users and Navigate to Details | Users | High | Functional | User is on Search page | 1. Select "Users"<br>2. Enter valid search criteria<br>3. Click Search<br>4. Verify results<br>5. Click on result item | Displays matching Users. Navigates to details page with complete information | Pending |
| TC-SEARCH-009 | Search Accounts and Navigate to Details | Accounts | High | Functional | User is on Search page | 1. Select "Accounts"<br>2. Enter valid search criteria<br>3. Click Search<br>4. Verify results<br>5. Click on result item | Displays matching Accounts. Navigates to details page with complete information | Pending |
| TC-SEARCH-010 | Search Contacts DB and Navigate to Details | Contacts DB | High | Functional | User is on Search page | 1. Select "Contacts DB"<br>2. Enter valid search criteria<br>3. Click Search<br>4. Verify results<br>5. Click on result item | Displays matching Contacts. Navigates to details page with complete information | Pending |
| TC-SEARCH-011 | Search Prospects and Navigate to Details | Prospects | High | Functional | User is on Search page | 1. Select "Prospects"<br>2. Enter valid search criteria<br>3. Click Search<br>4. Verify results<br>5. Click on result item | Displays matching Prospects. Navigates to details page with complete information | Pending |
| TC-SEARCH-012 | Verify UI Consistency with Previous Version | N/A | High | UI/UX | User is on Search page | 1. Observe Search page layout<br>2. Compare with previous version<br>3. Verify UI elements | All UI elements match previous version. No regressions. Consistent styling and layout | Pending |
| TC-SEARCH-013 | Search with Empty Criteria | All | Medium | Functional | User is on Search page | 1. Select any Object Type<br>2. Leave search criteria empty<br>3. Click Search | Error message displayed. No results shown | Pending |
| TC-SEARCH-014 | Search with No Matching Results | All | Medium | Functional | User is on Search page | 1. Select any Object Type<br>2. Enter criteria matching no objects<br>3. Click Search | "No results found" message displayed | Pending |
| TC-SEARCH-015 | Search with Invalid Object Type Selection | N/A | Low | Functional | User is on Search page | 1. Do not select Object Type<br>2. Enter valid search criteria<br>3. Click Search | Error message indicating Object Type must be selected | Pending |
| TC-SEARCH-016 | Search with Special Characters | All | Medium | Functional | User is on Search page | 1. Select any Object Type<br>2. Enter search with special characters<br>3. Click Search | System handles special characters appropriately | Pending |
| TC-SEARCH-017 | Search with Very Long String | All | Medium | Functional | User is on Search page | 1. Select any Object Type<br>2. Enter very long search string (1000+ chars)<br>3. Click Search | System handles long strings without error | Pending |
| TC-SEARCH-018 | Rapid Object Type Switching | All | Low | Functional | User is on Search page | 1. Switch between Object Types rapidly<br>2. Enter search criteria<br>3. Click Search | System uses last selected Object Type correctly | Pending |
| TC-SEARCH-019 | Search Results Display Format | All | Medium | UI/UX | Search performed with results | 1. Observe search results display | Results displayed in clear, readable format, clickable items | Pending |
| TC-SEARCH-020 | Navigation Back from Details Page | All | Medium | Functional | User on object details page | 1. Click back button | Returns to search results with criteria preserved | Pending |

## Test Execution Checklist

### Object Type Verification:
- [ ] Verify Object Type list contains all 10 object types (TC-001)
- [ ] Verify all object types are selectable
- [ ] Verify object types are displayed correctly

### For Each Object Type (Events, Attendees, Websites, Surveys, Email messages, Mailing list, Users, Accounts, Contacts DB, Prospects):
- [ ] Test search with valid criteria
- [ ] Verify results list is displayed
- [ ] Verify results show relevant information
- [ ] Test clicking on a result item
- [ ] Verify navigation to details page
- [ ] Verify details page displays complete information

### UI Consistency:
- [ ] Verify UI matches previous version (TC-012)
- [ ] Verify all UI elements are in correct positions
- [ ] Verify styling is consistent
- [ ] Verify no regressions

### Negative Testing:
- [ ] Test with empty search criteria
- [ ] Test with no matching results
- [ ] Test without selecting object type
- [ ] Test with special characters
- [ ] Test with very long search string

### UI/UX Testing:
- [ ] Verify results display format
- [ ] Verify loading indicators
- [ ] Verify error messages
- [ ] Verify pagination (if applicable)
- [ ] Verify responsive design (if applicable)
- [ ] Verify back navigation

## Test Data Requirements

### Sample Search Criteria by Object Type:

**Events:**
- Event name: "Annual Conference 2024"
- Date: "2024-12-01"
- Location: "New York"

**Attendees:**
- Name: "John Doe"
- Email: "john.doe@example.com"
- Event: "Annual Conference"

**Websites:**
- Website name: "Company Website"
- URL: "www.example.com"
- Domain: "example.com"

**Surveys:**
- Survey name: "Customer Satisfaction"
- Survey ID: "SURV-001"
- Status: "Active"

**Email Messages:**
- Subject: "Meeting Invitation"
- Sender: "admin@example.com"
- Date: "2024-01-15"

**Mailing List:**
- List name: "Newsletter Subscribers"
- List ID: "ML-001"
- Status: "Active"

**Users:**
- Username: "jdoe"
- Email: "jdoe@example.com"
- Name: "John Doe"
- Role: "Administrator"

**Accounts:**
- Account name: "Acme Corporation"
- Account ID: "ACC-001"
- Company: "Acme Corp"
- Status: "Active"

**Contacts DB:**
- Contact name: "Jane Smith"
- Email: "jane.smith@example.com"
- Phone: "+1-555-1234"
- Company: "Tech Solutions"

**Prospects:**
- Prospect name: "ABC Company"
- Company: "ABC Corp"
- Status: "Qualified"
- Source: "Website"

## Summary

**Total Test Cases:** 20

**By Priority:**
- High: 12 test cases
- Medium: 6 test cases
- Low: 2 test cases

**By Type:**
- Functional: 17 test cases
- UI/UX: 3 test cases

**Key Changes:**
- Combined search and navigation into single test cases (TC-002 to TC-011)
- Added Object Type list verification (TC-001)
- Added UI consistency verification (TC-012)
- Maintained all negative and edge case tests
- Maintained UI/UX test cases
