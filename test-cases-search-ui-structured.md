# Search UI Function - Test Cases (Structured Format)

## Test Case Template

| Test ID | Test Name | Object Type | Priority | Type | Precondition | Steps | Expected Result | Status |
|---------|-----------|-------------|----------|------|--------------|-------|-----------------|--------|
| TC-SEARCH-001 | Search Events - Valid Search Criteria | Events | High | Functional | User is on Search page | 1. Select "Events" from Object Type dropdown<br>2. Enter valid search criteria<br>3. Click Search | System displays list of matching Events | Pending |
| TC-SEARCH-002 | Search Events - Click on Result Item | Events | High | Functional | TC-SEARCH-001 executed, results displayed | 1. Click on Event item from results | Navigates to Event details page with complete information | Pending |
| TC-SEARCH-003 | Search Attendees - Valid Search Criteria | Attendees | High | Functional | User is on Search page | 1. Select "Attendees" from Object Type dropdown<br>2. Enter valid search criteria<br>3. Click Search | System displays list of matching Attendees | Pending |
| TC-SEARCH-004 | Search Attendees - Click on Result Item | Attendees | High | Functional | TC-SEARCH-003 executed, results displayed | 1. Click on Attendee item from results | Navigates to Attendee details page with complete information | Pending |
| TC-SEARCH-005 | Search Websites - Valid Search Criteria | Websites | High | Functional | User is on Search page | 1. Select "Websites" from Object Type dropdown<br>2. Enter valid search criteria<br>3. Click Search | System displays list of matching Websites | Pending |
| TC-SEARCH-006 | Search Websites - Click on Result Item | Websites | High | Functional | TC-SEARCH-005 executed, results displayed | 1. Click on Website item from results | Navigates to Website details page with complete information | Pending |
| TC-SEARCH-007 | Search Surveys - Valid Search Criteria | Surveys | High | Functional | User is on Search page | 1. Select "Surveys" from Object Type dropdown<br>2. Enter valid search criteria<br>3. Click Search | System displays list of matching Surveys | Pending |
| TC-SEARCH-008 | Search Surveys - Click on Result Item | Surveys | High | Functional | TC-SEARCH-007 executed, results displayed | 1. Click on Survey item from results | Navigates to Survey details page with complete information | Pending |
| TC-SEARCH-009 | Search Email Messages - Valid Search Criteria | Email messages | High | Functional | User is on Search page | 1. Select "Email messages" from Object Type dropdown<br>2. Enter valid search criteria<br>3. Click Search | System displays list of matching Email messages | Pending |
| TC-SEARCH-010 | Search Email Messages - Click on Result Item | Email messages | High | Functional | TC-SEARCH-009 executed, results displayed | 1. Click on Email message item from results | Navigates to Email message details page with complete information | Pending |
| TC-SEARCH-011 | Search Mailing List - Valid Search Criteria | Mailing list | High | Functional | User is on Search page | 1. Select "Mailing list" from Object Type dropdown<br>2. Enter valid search criteria<br>3. Click Search | System displays list of matching Mailing lists | Pending |
| TC-SEARCH-012 | Search Mailing List - Click on Result Item | Mailing list | High | Functional | TC-SEARCH-011 executed, results displayed | 1. Click on Mailing list item from results | Navigates to Mailing list details page with complete information | Pending |
| TC-SEARCH-013 | Search Users - Valid Search Criteria | Users | High | Functional | User is on Search page | 1. Select "Users" from Object Type dropdown<br>2. Enter valid search criteria<br>3. Click Search | System displays list of matching Users | Pending |
| TC-SEARCH-014 | Search Users - Click on Result Item | Users | High | Functional | TC-SEARCH-013 executed, results displayed | 1. Click on User item from results | Navigates to User details page with complete information | Pending |
| TC-SEARCH-015 | Search Accounts - Valid Search Criteria | Accounts | High | Functional | User is on Search page | 1. Select "Accounts" from Object Type dropdown<br>2. Enter valid search criteria<br>3. Click Search | System displays list of matching Accounts | Pending |
| TC-SEARCH-016 | Search Accounts - Click on Result Item | Accounts | High | Functional | TC-SEARCH-015 executed, results displayed | 1. Click on Account item from results | Navigates to Account details page with complete information | Pending |
| TC-SEARCH-017 | Search Contacts DB - Valid Search Criteria | Contacts DB | High | Functional | User is on Search page | 1. Select "Contacts DB" from Object Type dropdown<br>2. Enter valid search criteria<br>3. Click Search | System displays list of matching Contacts | Pending |
| TC-SEARCH-018 | Search Contacts DB - Click on Result Item | Contacts DB | High | Functional | TC-SEARCH-017 executed, results displayed | 1. Click on Contact item from results | Navigates to Contact details page with complete information | Pending |
| TC-SEARCH-019 | Search Prospects - Valid Search Criteria | Prospects | High | Functional | User is on Search page | 1. Select "Prospects" from Object Type dropdown<br>2. Enter valid search criteria<br>3. Click Search | System displays list of matching Prospects | Pending |
| TC-SEARCH-020 | Search Prospects - Click on Result Item | Prospects | High | Functional | TC-SEARCH-019 executed, results displayed | 1. Click on Prospect item from results | Navigates to Prospect details page with complete information | Pending |
| TC-SEARCH-021 | Search with Empty Criteria | All | Medium | Functional | User is on Search page | 1. Select any Object Type<br>2. Leave search criteria empty<br>3. Click Search | Error message displayed, no results shown | Pending |
| TC-SEARCH-022 | Search with No Matching Results | All | Medium | Functional | User is on Search page | 1. Select any Object Type<br>2. Enter criteria matching no objects<br>3. Click Search | "No results found" message displayed | Pending |
| TC-SEARCH-023 | Search with Invalid Object Type Selection | N/A | Low | Functional | User is on Search page | 1. Do not select Object Type<br>2. Enter valid search criteria<br>3. Click Search | Error message indicating Object Type must be selected | Pending |
| TC-SEARCH-024 | Search with Special Characters | All | Medium | Functional | User is on Search page | 1. Select any Object Type<br>2. Enter search with special characters<br>3. Click Search | System handles special characters appropriately | Pending |
| TC-SEARCH-025 | Search with Very Long String | All | Medium | Functional | User is on Search page | 1. Select any Object Type<br>2. Enter very long search string (1000+ chars)<br>3. Click Search | System handles long strings without error | Pending |
| TC-SEARCH-026 | Rapid Object Type Switching | All | Low | Functional | User is on Search page | 1. Switch between Object Types rapidly<br>2. Enter search criteria<br>3. Click Search | System uses last selected Object Type correctly | Pending |
| TC-SEARCH-027 | Search Results Display Format | All | Medium | UI/UX | Search performed with results | 1. Observe search results display | Results displayed in clear, readable format, clickable items | Pending |
| TC-SEARCH-028 | Navigation Back from Details Page | All | Medium | Functional | User on object details page | 1. Click back button | Returns to search results with criteria preserved | Pending |

## Test Execution Checklist

### For Each Object Type (Events, Attendees, Websites, Surveys, Email messages, Mailing list, Users, Accounts, Contacts DB, Prospects):

- [ ] Test search with valid criteria
- [ ] Verify results list is displayed
- [ ] Verify results show relevant information
- [ ] Test clicking on a result item
- [ ] Verify navigation to details page
- [ ] Verify details page displays complete information
- [ ] Test back navigation from details page
- [ ] Verify search criteria preserved when returning

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
