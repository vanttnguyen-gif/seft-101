# Grid Module Test Cases

## Overview
This document contains comprehensive test cases for the Grid module, an AngularJS-based data grid component used throughout the application for displaying, filtering, sorting, and managing tabular data.

**Module:** Grid  
**Test Coverage:** Functional, Integration, UI/UX  
**Last Updated:** 2025-11-13

---

## Table of Contents
1. [Data Display Tests](#1-data-display-tests)
2. [Data Manipulation Tests (CRUD)](#2-data-manipulation-tests-crud)
3. [Data Filtering Tests](#3-data-filtering-tests)
4. [Data Sorting Tests](#4-data-sorting-tests)
5. [View Management Tests](#5-view-management-tests)
6. [Bulk Operations Tests](#6-bulk-operations-tests)
7. [Import/Export Tests](#7-importexport-tests)
8. [Pagination Tests](#8-pagination-tests)
9. [Display Mode Tests](#9-display-mode-tests)
10. [Form Integration Tests](#10-form-integration-tests)
11. [Selection Mode Tests](#11-selection-mode-tests)
12. [Search Functionality Tests](#12-search-functionality-tests)

---

## 1. Data Display Tests

### TC-GRID-DISPLAY-001: Initial Grid Load
**Priority:** High  
**Preconditions:** User has access to grid page  
**Test Steps:**
1. Navigate to page with grid component
2. Wait for grid to load

**Expected Results:**
- Loading indicator appears during data fetch
- Grid displays items from server
- Default view columns are visible
- Default sorting is applied (first sortable column)
- Page 1 is displayed
- Pagination info shows correct item range

**Test Data:** Standard dataset with 50+ items

---

### TC-GRID-DISPLAY-002: Empty Grid State
**Priority:** Medium  
**Preconditions:** No items exist for current filter/search  
**Test Steps:**
1. Navigate to grid with no data
2. Observe empty state

**Expected Results:**
- Grid displays empty state message
- No items shown
- Pagination shows "Showing 0-0 of 0"
- Header controls still accessible

**Test Data:** Empty dataset or filter that returns no results

---

### TC-GRID-DISPLAY-003: Loading State
**Priority:** Medium  
**Preconditions:** Grid initialization  
**Test Steps:**
1. Trigger grid data refresh
2. Observe loading state during fetch

**Expected Results:**
- Loading indicator/spinner visible
- Grid content area shows loading state
- User cannot interact with grid items during load
- Previous data cleared or dimmed

**Test Data:** Standard dataset with simulated network delay

---

### TC-GRID-DISPLAY-004: Column Visibility
**Priority:** High  
**Preconditions:** Grid loaded with default view  
**Test Steps:**
1. Observe displayed columns
2. Verify column headers match configuration
3. Check column width distribution

**Expected Results:**
- Only enabled columns are visible
- Column headers display correct labels (i18n keys resolved)
- Column widths match configuration percentages
- Disabled columns are not displayed

**Test Data:** View with 4 visible, 2 hidden columns

---

### TC-GRID-DISPLAY-005: Column Width Redistribution
**Priority:** Medium  
**Preconditions:** Grid with hidden columns  
**Test Steps:**
1. Load view with some columns hidden
2. Calculate expected width redistribution
3. Verify actual column widths

**Expected Results:**
- Hidden column widths redistributed proportionally
- Example: Column A (25%, visible) + Column B (25%, hidden) → Column A becomes 50%
- All visible columns sum to 100% width
- No horizontal scrollbar appears

**Test Data:** View with 50% of columns hidden

---

## 2. Data Manipulation Tests (CRUD)

### TC-GRID-CRUD-001: Create New Item (Single Mode)
**Priority:** High  
**Preconditions:** Grid in single mode, user has create permissions  
**Test Steps:**
1. Click "Add New" button
2. Fill in required fields in form
3. Click "Save" button
4. Verify item appears in grid

**Expected Results:**
- Form opens with empty fields
- Form displays "Add New" header
- After save, form closes
- Grid refreshes automatically
- New item appears in grid
- Success message displayed (if configured)

**Test Data:** Valid item data for creation

---

### TC-GRID-CRUD-002: Edit Existing Item
**Priority:** High  
**Preconditions:** Grid has items, single mode active  
**Test Steps:**
1. Click on existing item
2. Modify field values
3. Click "Save"
4. Verify changes persist

**Expected Results:**
- Form opens with item data pre-filled
- Form displays "Edit" header
- originalItemForEditing stored for comparison
- After save, form closes
- Grid refreshes showing updated data
- Changes visible immediately

**Test Data:** Existing item with modifiable fields

---

### TC-GRID-CRUD-003: Save and Continue Editing
**Priority:** Medium  
**Preconditions:** Item form open  
**Test Steps:**
1. Edit item fields
2. Click "Save & Continue" button
3. Verify save occurred
4. Continue editing

**Expected Results:**
- Item saved to server
- Form remains open with updated data
- Grid refreshes in background
- User can continue making changes
- No navigation away from form

**Test Data:** Item with multiple editable fields

---

### TC-GRID-CRUD-004: Save and Submit Item
**Priority:** Medium  
**Preconditions:** Item form open, submit action available  
**Test Steps:**
1. Edit item fields
2. Click "Save & Submit" button
3. Verify submission workflow triggers

**Expected Results:**
- Item saved to server
- Submit action triggered (e.g., approval workflow)
- Form closes
- Grid refreshes
- Item status updated if applicable

**Test Data:** Item eligible for submission workflow

---

### TC-GRID-CRUD-005: Delete Single Item
**Priority:** High  
**Preconditions:** Item form open, user has delete permissions  
**Test Steps:**
1. Open item for editing
2. Click "Delete" button
3. Confirm deletion (if confirmation required)
4. Verify item removed

**Expected Results:**
- Confirmation dialog appears (if configured)
- After confirmation, item deleted from server
- Form closes
- Grid refreshes
- Item no longer appears in grid
- Pagination updates if item was last on page

**Test Data:** Deletable item

---

### TC-GRID-CRUD-006: Cancel Edit (No Changes)
**Priority:** Low  
**Preconditions:** Item form open  
**Test Steps:**
1. Open item for editing
2. Do not make changes
3. Click "Cancel" button

**Expected Results:**
- Form closes immediately
- No server request made
- Grid state unchanged
- No confirmation required

**Test Data:** Any item

---

### TC-GRID-CRUD-007: Cancel Edit (With Unsaved Changes)
**Priority:** Medium  
**Preconditions:** Item form open with modifications  
**Test Steps:**
1. Open item for editing
2. Modify fields
3. Click "Cancel" button
4. Handle unsaved changes warning (if present)

**Expected Results:**
- Warning dialog appears (if configured): "Discard changes?"
- If confirmed: Form closes, changes discarded
- If cancelled: Form remains open, changes preserved
- Grid not refreshed if cancelled

**Test Data:** Item with modified fields

---

### TC-GRID-CRUD-008: Form Validation on Save
**Priority:** High  
**Preconditions:** Form with validation rules  
**Test Steps:**
1. Open form (new or edit)
2. Enter invalid data
3. Attempt to save

**Expected Results:**
- Validation errors displayed inline
- Form does not close
- Server request not sent
- Error messages clear and specific
- Focus moves to first invalid field

**Test Data:** Invalid data (empty required fields, incorrect format, etc.)

---

### TC-GRID-CRUD-009: Form Position in Grid View
**Priority:** Medium  
**Preconditions:** Grid in Grid display mode (not List)  
**Test Steps:**
1. Switch to Grid view
2. Click item in middle of row
3. Observe form positioning

**Expected Results:**
- Form positioned at end of current row
- Form does not disrupt item layout
- Form wrapper calculated correctly
- Aligns with item's row

**Test Data:** Grid view with 5 items per row

---

### TC-GRID-CRUD-010: Prevent Multiple Forms
**Priority:** Medium  
**Preconditions:** None  
**Test Steps:**
1. Open form for Item A
2. Click Item B while form open
3. Verify behavior

**Expected Results:**
- First form (Item A) closes automatically
- Second form (Item B) opens
- Only one form visible at a time
- No form overlap or conflicts

**Test Data:** Multiple items

---

## 3. Data Filtering Tests

### TC-GRID-FILTER-001: Open Filter Form
**Priority:** High  
**Preconditions:** Grid loaded  
**Test Steps:**
1. Click filter button
2. Observe filter form

**Expected Results:**
- Filter dropdown/form appears
- Shows all filterable fields
- Current applied filters pre-populated
- Form positioned correctly below filter button

**Test Data:** Standard grid configuration

---

### TC-GRID-FILTER-002: Apply Simple Filter (Equals)
**Priority:** High  
**Preconditions:** Filter form open  
**Test Steps:**
1. Select field to filter
2. Choose "equals" operator
3. Enter value
4. Click "Apply"

**Expected Results:**
- Filter form closes
- Grid refreshes with filtered data
- Only matching items displayed
- Applied filter chip appears
- Pagination resets to page 1

**Test Data:** Field: "Status", Operator: "equals", Value: "Approved"

---

### TC-GRID-FILTER-003: Apply Complex Filter (Contains)
**Priority:** High  
**Preconditions:** Filter form open  
**Test Steps:**
1. Select field to filter
2. Choose "contains" operator
3. Enter partial value
4. Click "Apply"

**Expected Results:**
- Grid shows items where field contains value
- Case-insensitive search (if configured)
- Applied filter displayed
- Pagination updated

**Test Data:** Field: "Name", Operator: "contains", Value: "John"

---

### TC-GRID-FILTER-004: Apply Multiple Filters
**Priority:** High  
**Preconditions:** None  
**Test Steps:**
1. Apply first filter (Field A)
2. Open filter form again
3. Add second filter (Field B)
4. Click "Apply"

**Expected Results:**
- Both filters applied (AND logic)
- Grid shows items matching ALL filters
- Multiple filter chips displayed
- Correct item count

**Test Data:** Status="Active" AND Category="Marketing"

---

### TC-GRID-FILTER-005: Filter Custom Fields
**Priority:** Medium  
**Preconditions:** Grid with custom fields  
**Test Steps:**
1. Open filter form
2. Select custom field
3. Choose value from options
4. Apply filter

**Expected Results:**
- Custom field filters work correctly
- If field has choices, dropdown shows options
- Filter applied correctly
- Custom field question ID sent to server

**Test Data:** Custom field with dropdown choices

---

### TC-GRID-FILTER-006: Clear Single Filter
**Priority:** High  
**Preconditions:** Multiple filters applied  
**Test Steps:**
1. Click "X" on one filter chip
2. Observe grid update

**Expected Results:**
- Selected filter removed
- Other filters remain active
- Grid refreshes with updated filter
- Item count updates
- Filter chip removed from display

**Test Data:** 3 active filters, remove middle one

---

### TC-GRID-FILTER-007: Clear All Filters
**Priority:** High  
**Preconditions:** Multiple filters applied  
**Test Steps:**
1. Click "Clear All" button
2. Observe grid reset

**Expected Results:**
- All filters removed
- All filter chips removed
- Grid shows unfiltered data
- Pagination resets
- Search cleared if active

**Test Data:** 3+ active filters

---

### TC-GRID-FILTER-008: Cancel Filter (No Apply)
**Priority:** Medium  
**Preconditions:** Filter form open  
**Test Steps:**
1. Open filter form
2. Modify filter criteria
3. Click "Cancel"

**Expected Results:**
- Filter form closes
- Changes discarded
- Previously applied filters remain
- Grid not refreshed

**Test Data:** Modified filter not applied

---

### TC-GRID-FILTER-009: Clear Filter Form
**Priority:** Low  
**Preconditions:** Filter form open with values  
**Test Steps:**
1. Open filter form
2. Enter filter values
3. Click "Clear" button (within form)
4. Observe form reset

**Expected Results:**
- All filter form fields cleared
- Form remains open
- Custom field responses cleared
- No grid refresh until Apply clicked

**Test Data:** Multiple filter fields filled

---

### TC-GRID-FILTER-010: Empty Value Filtering
**Priority:** Medium  
**Preconditions:** Filter form open  
**Test Steps:**
1. Enter filter with empty value
2. Click Apply

**Expected Results:**
- Empty values automatically omitted
- No filter applied for empty fields
- Server not sent empty filter parameters
- Grid shows unfiltered results for that field

**Test Data:** Field with empty string, null, or empty array

---

### TC-GRID-FILTER-011: Filter with Multi-Select
**Priority:** Medium  
**Preconditions:** Field supports multiple values  
**Test Steps:**
1. Select field with multi-select
2. Choose multiple values
3. Apply filter

**Expected Results:**
- Items matching ANY selected value shown (OR logic)
- All selected values shown in filter chip
- Correct item count
- Filter values formatted correctly

**Test Data:** Status IN ["Active", "Pending", "Review"]

---

### TC-GRID-FILTER-012: Filter Persistence on Refresh
**Priority:** Medium  
**Preconditions:** Filters applied  
**Test Steps:**
1. Apply filter
2. Refresh grid data (not page reload)
3. Verify filter still active

**Expected Results:**
- Applied filters persist
- Grid refreshes with same filters
- Filter chips remain visible
- Item count consistent

**Test Data:** Any valid filter

---

## 4. Data Sorting Tests

### TC-GRID-SORT-001: Initial Default Sort
**Priority:** High  
**Preconditions:** Grid first load  
**Test Steps:**
1. Load grid
2. Observe initial sort order

**Expected Results:**
- Grid sorted by first sortable column
- Sort direction is ascending
- Sort indicator visible on column header
- Items in correct order

**Test Data:** Standard dataset

---

### TC-GRID-SORT-002: Sort Column Ascending
**Priority:** High  
**Preconditions:** Grid loaded  
**Test Steps:**
1. Click unsorted column header (sortable)
2. Observe sort

**Expected Results:**
- Grid sorted by selected column ascending
- Sort indicator shows ascending arrow
- Items reordered correctly
- Pagination resets to page 1
- Grid data refetched from server

**Test Data:** Sortable text column

---

### TC-GRID-SORT-003: Toggle Sort to Descending
**Priority:** High  
**Preconditions:** Column sorted ascending  
**Test Steps:**
1. Click same column header again
2. Observe sort toggle

**Expected Results:**
- Sort direction changes to descending
- Sort indicator shows descending arrow
- Items reordered (reverse order)
- Pagination remains on page 1
- Server query includes "-" prefix (e.g., "-name")

**Test Data:** Currently ascending sorted column

---

### TC-GRID-SORT-004: Toggle Sort Back to Ascending
**Priority:** Medium  
**Preconditions:** Column sorted descending  
**Test Steps:**
1. Click same column header again
2. Observe sort toggle

**Expected Results:**
- Sort direction changes back to ascending
- Sort indicator shows ascending arrow
- Items reordered
- Consistent behavior with first sort

**Test Data:** Currently descending sorted column

---

### TC-GRID-SORT-005: Sort Different Column
**Priority:** High  
**Preconditions:** Grid sorted by Column A  
**Test Steps:**
1. Click different sortable Column B header
2. Observe sort change

**Expected Results:**
- Sort changes to Column B
- Column B sorted ascending (default direction)
- Previous column (A) sort indicator removed
- Only one column sorted at a time
- Grid data refetched

**Test Data:** Two different sortable columns

---

### TC-GRID-SORT-006: Non-Sortable Column Click
**Priority:** Medium  
**Preconditions:** Grid has non-sortable columns  
**Test Steps:**
1. Click non-sortable column header
2. Observe behavior

**Expected Results:**
- No sort applied
- No sort indicator appears
- Grid order unchanged
- No server request made
- Column header may show disabled cursor

**Test Data:** Column with sortable: false

---

### TC-GRID-SORT-007: Sort with Active Filter
**Priority:** High  
**Preconditions:** Filter applied  
**Test Steps:**
1. Apply filter
2. Sort by column
3. Verify both active

**Expected Results:**
- Sort applies to filtered data only
- Filter remains active
- Items sorted within filtered set
- Both filter chips and sort indicator visible
- Server receives both filter and sort params

**Test Data:** Status="Active" sorted by Name ascending

---

### TC-GRID-SORT-008: Sort Date Column
**Priority:** Medium  
**Preconditions:** Grid has date column  
**Test Steps:**
1. Sort by date column
2. Verify chronological order

**Expected Results:**
- Dates sorted chronologically
- Null dates handled correctly (beginning or end)
- Date format displayed correctly
- Ascending: oldest to newest
- Descending: newest to oldest

**Test Data:** Date column with various dates including nulls

---

### TC-GRID-SORT-009: Sort Numeric Column
**Priority:** Medium  
**Preconditions:** Grid has numeric column  
**Test Steps:**
1. Sort by numeric column
2. Verify numerical order

**Expected Results:**
- Numbers sorted numerically (not alphabetically)
- Negative numbers handled correctly
- Null/empty values handled
- Ascending: smallest to largest
- Descending: largest to smallest

**Test Data:** Numeric column with values like 1, 10, 2, 100, -5

---

### TC-GRID-SORT-010: Sort After Pagination
**Priority:** Medium  
**Preconditions:** Grid on page 2+  
**Test Steps:**
1. Navigate to page 2
2. Sort by column
3. Verify pagination reset

**Expected Results:**
- Pagination resets to page 1
- Sort applied to entire dataset
- New first page displayed with sorted data
- Page count may change based on filter/sort

**Test Data:** Multi-page dataset

---

### TC-GRID-SORT-011: Sort Persistence
**Priority:** Medium  
**Preconditions:** Grid sorted  
**Test Steps:**
1. Sort grid by column
2. Perform other actions (filter, paginate)
3. Verify sort remains

**Expected Results:**
- Sort persists through pagination
- Sort persists through filtering
- Sort only changes when explicitly changed
- Sort parameter sent with all data requests

**Test Data:** Sorted grid with filters and pagination

---

## 5. View Management Tests

### TC-GRID-VIEW-001: Default View on First Load
**Priority:** High  
**Preconditions:** User never used views  
**Test Steps:**
1. Load grid first time
2. Observe default view

**Expected Results:**
- Default view automatically created
- Contains all available columns
- Named "Default" or similar
- Set as current view
- Cannot be deleted

**Test Data:** Fresh grid instance

---

### TC-GRID-VIEW-002: Create New View
**Priority:** High  
**Preconditions:** Grid loaded  
**Test Steps:**
1. Click "Manage Views" or "Add View"
2. Enter view name
3. Select columns to enable
4. Save view

**Expected Results:**
- View editor modal opens
- All available columns listed
- At least one column must be enabled (validation)
- After save: view appears in view dropdown
- View saved to server with unique ID
- Grid switches to new view

**Test Data:** View name: "Marketing View", 4 enabled columns

---

### TC-GRID-VIEW-003: Edit Existing View
**Priority:** High  
**Preconditions:** Custom view exists  
**Test Steps:**
1. Click "Manage Views"
2. Select view to edit
3. Modify column selection
4. Save changes

**Expected Results:**
- View editor pre-populated with current columns
- Enabled/disabled columns shown correctly
- After save: changes persist
- If editing current view: grid refreshes with new columns
- If editing other view: no immediate grid change

**Test Data:** Modify "Marketing View" to add/remove columns

---

### TC-GRID-VIEW-004: Delete Custom View
**Priority:** High  
**Preconditions:** Custom view exists  
**Test Steps:**
1. Open manage views
2. Click delete on custom view
3. Confirm deletion

**Expected Results:**
- Confirmation dialog appears: "Are you sure?"
- After confirmation: view deleted from server
- View removed from dropdown
- If deleted view was current: switch to default view
- Default view cannot be deleted

**Test Data:** Non-current custom view

---

### TC-GRID-VIEW-005: Delete Current View
**Priority:** Medium  
**Preconditions:** Custom view is current  
**Test Steps:**
1. Switch to custom view
2. Delete that view
3. Confirm deletion

**Expected Results:**
- View deleted
- Grid automatically switches to default view
- Grid refreshes with default columns
- No error or broken state

**Test Data:** Current custom view

---

### TC-GRID-VIEW-006: Switch Between Views
**Priority:** High  
**Preconditions:** Multiple views exist  
**Test Steps:**
1. Select View A
2. Observe grid
3. Switch to View B
4. Observe changes

**Expected Results:**
- Grid columns change to match view
- Column widths recalculated
- Grid data refreshes
- Current view saved to server (user preference)
- View dropdown shows correct selection

**Test Data:** Two views with different column sets

---

### TC-GRID-VIEW-007: View Name Validation (Required)
**Priority:** Medium  
**Preconditions:** View editor open  
**Test Steps:**
1. Open view editor
2. Leave name field empty
3. Attempt to save

**Expected Results:**
- Validation error: "View name is required"
- Save button disabled or validation message shown
- View not saved
- Modal remains open

**Test Data:** Empty view name

---

### TC-GRID-VIEW-008: View Name Validation (Duplicate)
**Priority:** Medium  
**Preconditions:** View "Marketing View" exists  
**Test Steps:**
1. Create new view
2. Enter existing view name: "Marketing View"
3. Attempt to save

**Expected Results:**
- Validation error: "View name already exists"
- Save prevented
- User must choose different name
- Case-sensitive or case-insensitive based on config

**Test Data:** Duplicate view name

---

### TC-GRID-VIEW-009: View Validation (No Columns)
**Priority:** Medium  
**Preconditions:** View editor open  
**Test Steps:**
1. Open view editor
2. Disable all columns
3. Attempt to save

**Expected Results:**
- Validation error: "At least one column must be enabled"
- Save prevented
- Modal remains open
- User must enable at least one column

**Test Data:** View with zero enabled columns

---

### TC-GRID-VIEW-010: View Dropdown Display
**Priority:** Low  
**Preconditions:** Multiple views exist  
**Test Steps:**
1. Click view dropdown
2. Observe list

**Expected Results:**
- All views listed
- Current view highlighted/checked
- Default view shown
- Views in logical order (default first, then alphabetical)
- View count displayed if many views

**Test Data:** 5+ views

---

### TC-GRID-VIEW-011: Manage Views Dialog
**Priority:** Medium  
**Preconditions:** Views exist  
**Test Steps:**
1. Click "Manage Views"
2. Observe dialog

**Expected Results:**
- Dialog lists all views
- Each view shows: name, column count, edit/delete buttons
- Default view shows "Cannot delete"
- Current view indicated
- Can edit or delete from this dialog

**Test Data:** Multiple views

---

### TC-GRID-VIEW-012: View Persistence Across Sessions
**Priority:** Medium  
**Preconditions:** User selects custom view  
**Test Steps:**
1. Switch to View A
2. Logout or close browser
3. Login and return to grid
4. Observe current view

**Expected Results:**
- Grid loads with last selected view
- Current view preference saved to server
- User doesn't have to reselect view each session
- View persisted per grid (gridId)

**Test Data:** Custom view selection before logout

---

### TC-GRID-VIEW-013: View Per Grid (Multiple Grids)
**Priority:** Low  
**Preconditions:** Application has multiple grids  
**Test Steps:**
1. Set View A for Submissions grid
2. Navigate to Users grid
3. Set View B for Users grid
4. Return to Submissions grid
5. Verify View A still active

**Expected Results:**
- Each grid maintains separate current view
- Views stored per gridId
- Switching between grids doesn't affect views
- No view leakage between grids

**Test Data:** Two different grids with different views

---

## 6. Bulk Operations Tests

### TC-GRID-BULK-001: Enable Multi-Select Mode
**Priority:** High  
**Preconditions:** Grid in single mode  
**Test Steps:**
1. Toggle to multi-select mode
2. Observe UI changes

**Expected Results:**
- Grid switches to multi-select mode
- Checkboxes appear on items (if configured)
- Clicking items adds to selection (doesn't open form)
- Cart panel appears (may be empty)
- Mode toggle indicator updated

**Test Data:** Standard grid

---

### TC-GRID-BULK-002: Select Multiple Items
**Priority:** High  
**Preconditions:** Multi-select mode active  
**Test Steps:**
1. Click Item A
2. Click Item B
3. Click Item C
4. Observe cart

**Expected Results:**
- All clicked items added to selectedItems array
- Cart shows count: "3 items selected"
- Cart displays selected items (based on cartRowSize)
- Items highlighted in grid
- Cart panel visible

**Test Data:** 3+ items

---

### TC-GRID-BULK-003: Deselect Item from Grid
**Priority:** Medium  
**Preconditions:** Item already selected  
**Test Steps:**
1. Click already-selected item in grid
2. Observe deselection

**Expected Results:**
- Item removed from selection
- Cart count decremented
- Item removed from cart display
- Item highlight removed in grid
- If last item: cart may hide

**Test Data:** Selected item

---

### TC-GRID-BULK-004: Deselect Item from Cart
**Priority:** High  
**Preconditions:** Items in cart  
**Test Steps:**
1. Open cart panel
2. Click "X" on cart item
3. Observe removal

**Expected Results:**
- Item removed from selectedItems
- Cart count decremented
- Item removed from cart display
- Item highlight removed in grid
- Cart closes if last item removed

**Test Data:** Multiple items in cart

---

### TC-GRID-BULK-005: Close Cart
**Priority:** Medium  
**Preconditions:** Cart open with selections  
**Test Steps:**
1. Click "Close Cart" button
2. Observe behavior

**Expected Results:**
- Cart panel closes
- All selections cleared
- selectedItems array emptied
- Item highlights removed
- Grid returns to normal state

**Test Data:** Multiple selected items

---

### TC-GRID-BULK-006: Expand/Collapse Cart
**Priority:** Low  
**Preconditions:** More items selected than cartRowSize  
**Test Steps:**
1. Select 10+ items (cartRowSize = 5)
2. Click "View All Items"
3. Click "Hide All Items"

**Expected Results:**
- Initially: Shows first 5 items + "View All" button
- Expanded: Shows all 10 items + "Hide All" button
- Cart height adjusts
- Scroll appears if many items
- Toggle state maintained

**Test Data:** 10 selected items, cartRowSize = 5

---

### TC-GRID-BULK-007: Bulk Save Items
**Priority:** High  
**Preconditions:** Multiple items selected, bulk save available  
**Test Steps:**
1. Select multiple items
2. Click bulk save action
3. Confirm if required
4. Observe result

**Expected Results:**
- Server receives array of selectedItems
- All items processed (saveItemsFunction called)
- Success message shown
- Cart closes
- Grid refreshes with updated items
- Error handling if some items fail

**Test Data:** 5 items selected for bulk approval

---

### TC-GRID-BULK-008: Bulk Delete Items
**Priority:** High  
**Preconditions:** Multiple items selected, delete permission  
**Test Steps:**
1. Select multiple items
2. Click bulk delete action
3. Confirm deletion
4. Observe result

**Expected Results:**
- Confirmation dialog: "Delete 5 items?"
- After confirmation: items deleted
- Cart closes
- Grid refreshes
- Items removed from grid
- Pagination updates if needed

**Test Data:** 5 deletable items

---

### TC-GRID-BULK-009: Protected Item Selection
**Priority:** Medium  
**Preconditions:** Grid has protected items (roleID=0, triggerType=0)  
**Test Steps:**
1. Enable multi-select mode
2. Attempt to select protected item
3. Observe behavior

**Expected Results:**
- Protected item not selectable
- Click event stopped (stopPropagation)
- No visual feedback or error message
- Other items still selectable
- Protects system items from bulk operations

**Test Data:** System item with roleID=0 and triggerType=0

---

### TC-GRID-BULK-010: Cart Tabs (Multiple Actions)
**Priority:** Low  
**Preconditions:** Cart configured with multiple tabs  
**Test Steps:**
1. Select items
2. Open cart
3. Click different tabs
4. Observe tab switching

**Expected Results:**
- Multiple tabs visible in cart
- Clicking tab switches active view
- Different bulk actions per tab
- Tab state managed correctly
- Only one tab active at a time

**Test Data:** Cart with 3 tabs (Approve, Reject, Edit)

---

### TC-GRID-BULK-011: Selection Across Pages
**Priority:** Medium  
**Preconditions:** Multi-page dataset  
**Test Steps:**
1. Select items on page 1
2. Navigate to page 2
3. Select more items
4. Return to page 1
5. Verify selections

**Expected Results:**
- Selections persist across pagination
- Cart maintains all selected items from all pages
- Page 1 items still highlighted
- Total count includes all pages
- Can view all selections in cart

**Test Data:** Items on multiple pages

---

### TC-GRID-BULK-012: Clear All Selections
**Priority:** Medium  
**Preconditions:** Multiple items selected  
**Test Steps:**
1. Select several items
2. Click "Clear All" or close cart
3. Observe clearing

**Expected Results:**
- All items deselected
- Cart closes
- selectedItems array empty
- All highlights removed
- Can start fresh selection

**Test Data:** Multiple selected items

---

## 7. Import/Export Tests

### TC-GRID-IMPORT-001: Import CSV File
**Priority:** High  
**Preconditions:** Import feature enabled, valid CSV file  
**Test Steps:**
1. Click "Import" button
2. Select CSV file
3. Upload file
4. Observe import process

**Expected Results:**
- File upload dialog appears
- Progress indicator during upload
- Server processes file
- Success message shown
- Grid refreshes with new items
- Error message if file invalid

**Test Data:** Valid CSV with correct columns and data

---

### TC-GRID-IMPORT-002: Import Invalid File Format
**Priority:** High  
**Preconditions:** Import feature enabled  
**Test Steps:**
1. Click "Import"
2. Select non-CSV file (e.g., .xlsx, .txt)
3. Attempt upload

**Expected Results:**
- Error message: "Invalid file format"
- Upload rejected
- Grid unchanged
- User prompted to select valid CSV
- File type validation works

**Test Data:** .xlsx or .txt file

---

### TC-GRID-IMPORT-003: Import with Validation Errors
**Priority:** High  
**Preconditions:** CSV with invalid data  
**Test Steps:**
1. Upload CSV with validation errors
2. Observe error handling

**Expected Results:**
- Server validates data
- Warning message displayed
- Error details shown (row numbers, field names)
- Valid rows imported (if partial import supported)
- Or: entire import rejected (if atomic)
- User can correct and re-upload

**Test Data:** CSV with missing required fields, invalid formats

---

### TC-GRID-IMPORT-004: Import Progress Indication
**Priority:** Medium  
**Preconditions:** Large CSV file  
**Test Steps:**
1. Upload large CSV (1000+ rows)
2. Observe progress indication

**Expected Results:**
- Upload progress bar shown
- Processing message displayed
- May show "Refresh" button if async processing
- User cannot perform other actions during import
- Grid locks or shows loading state

**Test Data:** Large CSV file

---

### TC-GRID-IMPORT-005: Export to CSV
**Priority:** High  
**Preconditions:** Grid has data  
**Test Steps:**
1. Click "Export" dropdown
2. Select "Export as CSV"
3. Confirm export (if required)
4. Observe download

**Expected Results:**
- Confirmation dialog if configured
- CSV file downloads
- Contains visible columns only
- Includes current filtered/sorted data
- File named appropriately (e.g., submissions_2025-11-13.csv)

**Test Data:** Grid with 50 items

---

### TC-GRID-IMPORT-006: Export Filtered Data
**Priority:** Medium  
**Preconditions:** Filter applied  
**Test Steps:**
1. Apply filter
2. Export data
3. Verify exported data

**Expected Results:**
- Export contains only filtered items
- Respects current filter criteria
- Column headers included
- File indicates filtered export (filename or metadata)

**Test Data:** Filtered to 20 of 100 items

---

### TC-GRID-IMPORT-007: Export All vs Current Page
**Priority:** Medium  
**Preconditions:** Multi-page dataset  
**Test Steps:**
1. Navigate to page 2
2. Export data
3. Verify export scope

**Expected Results:**
- Export includes ALL pages (not just current)
- Or: clear option to choose "All" vs "Current Page"
- Total item count in export matches grid total
- Pagination doesn't limit export

**Test Data:** 100 items across 4 pages

---

### TC-GRID-IMPORT-008: Export Different Formats
**Priority:** Low  
**Preconditions:** Multiple export formats supported  
**Test Steps:**
1. Click export dropdown
2. Observe format options (CSV, Excel, PDF)
3. Select each format
4. Verify downloads

**Expected Results:**
- Multiple export options available
- Each format downloads correctly
- Format-specific handling (Excel: multiple sheets, PDF: formatted)
- File extensions correct

**Test Data:** Grid data exported to multiple formats

---

### TC-GRID-IMPORT-009: Export with Route Navigation
**Priority:** Low  
**Preconditions:** Export configured with GO_TO_PAGE type  
**Test Steps:**
1. Click export option with route
2. Observe navigation

**Expected Results:**
- User navigated to export page
- Export parameters passed via route
- Grid state preserved (can return)
- Export page shows preview or options

**Test Data:** Export configured with route navigation

---

### TC-GRID-IMPORT-010: Export Confirmation Dialog
**Priority:** Low  
**Preconditions:** Export configured with confirmation  
**Test Steps:**
1. Click export option
2. Observe confirmation dialog
3. Confirm export

**Expected Results:**
- Confirmation message displayed
- User can cancel or confirm
- If confirmed: export proceeds
- If cancelled: no export, dialog closes

**Test Data:** Export with CONFIRM_MESSAGE type

---

## 8. Pagination Tests

### TC-GRID-PAGE-001: Default Page Size
**Priority:** High  
**Preconditions:** Grid first load  
**Test Steps:**
1. Load grid
2. Observe page size

**Expected Results:**
- Default page size applied (e.g., 25 items)
- Correct number of items displayed
- Pagination info shows: "Showing 1-25 of X"
- Page size dropdown shows default selected

**Test Data:** 100+ item dataset

---

### TC-GRID-PAGE-002: Change Page Size
**Priority:** High  
**Preconditions:** Grid on default page size  
**Test Steps:**
1. Change page size dropdown (25 → 50)
2. Observe changes

**Expected Results:**
- Grid refreshes with new page size
- Shows 50 items (or fewer if last page)
- Resets to page 1
- Pagination info updates: "Showing 1-50 of X"
- Page count recalculated

**Test Data:** Change from 25 to 50, 75, 100

---

### TC-GRID-PAGE-003: Navigate to Next Page
**Priority:** High  
**Preconditions:** Grid has multiple pages  
**Test Steps:**
1. Click "Next" button
2. Observe page change

**Expected Results:**
- Page number increments (1 → 2)
- Grid loads next page of items
- Pagination info updates: "Showing 26-50 of X"
- Previous button becomes enabled
- URL or state updates with page number

**Test Data:** Multi-page dataset

---

### TC-GRID-PAGE-004: Navigate to Previous Page
**Priority:** High  
**Preconditions:** Grid on page 2+  
**Test Steps:**
1. Click "Previous" button
2. Observe page change

**Expected Results:**
- Page number decrements (2 → 1)
- Grid loads previous page
- Pagination info updates
- Next button enabled (if not on last page)

**Test Data:** On page 2 or higher

---

### TC-GRID-PAGE-005: Navigate to First Page
**Priority:** Medium  
**Preconditions:** Grid on page 3+  
**Test Steps:**
1. Click "First" button
2. Observe navigation

**Expected Results:**
- Jumps to page 1
- Grid loads first page
- Pagination info: "Showing 1-25 of X"
- Previous/First buttons disabled

**Test Data:** On page 5 of 10

---

### TC-GRID-PAGE-006: Navigate to Last Page
**Priority:** Medium  
**Preconditions:** Grid on page 1-8 (not last)  
**Test Steps:**
1. Click "Last" button
2. Observe navigation

**Expected Results:**
- Jumps to last page
- Grid loads last page items
- May show fewer items if not full page
- Next/Last buttons disabled
- Pagination info shows last range

**Test Data:** 100 items, page size 25, jump to page 4

---

### TC-GRID-PAGE-007: Pagination at Boundaries
**Priority:** Medium  
**Preconditions:** Grid loaded  
**Test Steps:**
1. On page 1: verify Previous/First disabled
2. Navigate to last page: verify Next/Last disabled

**Expected Results:**
- First page: Previous/First buttons disabled
- Last page: Next/Last buttons disabled
- Cannot navigate beyond boundaries
- Buttons appear disabled (grayed out, no cursor)

**Test Data:** First and last pages

---

### TC-GRID-PAGE-008: Pagination Info Accuracy
**Priority:** High  
**Preconditions:** Various page states  
**Test Steps:**
1. Verify pagination info on multiple pages
2. Check calculations

**Expected Results:**
- Accurate "Showing X-Y of Z" on all pages
- From number: (pageNumber - 1) * pageSize
- To number: from + itemCount
- Total count matches server total
- Handles last page with fewer items

**Test Data:** 
- Page 1: Showing 1-25 of 100
- Page 2: Showing 26-50 of 100
- Page 4 (last): Showing 76-100 of 100

---

### TC-GRID-PAGE-009: Pagination with Filters
**Priority:** High  
**Preconditions:** Filter applied  
**Test Steps:**
1. Apply filter reducing items to 30
2. Observe pagination updates

**Expected Results:**
- Page count recalculates based on filtered total
- May reduce from 4 pages to 2 pages
- Current page resets to 1
- Pagination info shows filtered count
- Navigation buttons adjust

**Test Data:** Filter reducing 100 items to 30

---

### TC-GRID-PAGE-010: Pagination After Item Deletion
**Priority:** Medium  
**Preconditions:** On last page with few items  
**Test Steps:**
1. Navigate to last page (e.g., page 4 with 5 items)
2. Delete 4 items
3. Observe pagination adjustment

**Expected Results:**
- If page becomes empty: navigate to previous page
- Page count decrements
- Pagination info updates
- Grid shows valid data

**Test Data:** Last page with exactly pageSize items, delete enough to empty page

---

### TC-GRID-PAGE-011: Page Count Calculation
**Priority:** Medium  
**Preconditions:** Various item counts  
**Test Steps:**
1. Test with different total counts and page sizes
2. Verify page count calculation

**Expected Results:**
- Calculation: Math.ceil(totalItems / pageSize)
- 100 items, 25 per page = 4 pages
- 101 items, 25 per page = 5 pages
- 0 items = 1 page (minimum)
- Handles edge cases correctly

**Test Data:** Various combinations

---

### TC-GRID-PAGE-012: Empty Page State
**Priority:** Low  
**Preconditions:** No items match criteria  
**Test Steps:**
1. Apply filter with no results
2. Observe pagination

**Expected Results:**
- Pagination shows: "Showing 0-0 of 0"
- Page count shows 1 (minimum)
- All navigation buttons disabled
- Grid shows empty state message

**Test Data:** Filter with zero results

---

## 9. Display Mode Tests

### TC-GRID-DISPLAY-MODE-001: List View Display
**Priority:** High  
**Preconditions:** Grid supports List view  
**Test Steps:**
1. Switch to List view
2. Observe layout

**Expected Results:**
- Items displayed in table/list format
- Each item takes full width (100%)
- Columns aligned horizontally
- Row-based layout
- List-specific template used
- CSS class: 'list-item'

**Test Data:** Standard grid data

---

### TC-GRID-DISPLAY-MODE-002: Grid View Display
**Priority:** High  
**Preconditions:** Grid supports Grid view  
**Test Steps:**
1. Switch to Grid view
2. Observe layout

**Expected Results:**
- Items displayed in card/tile format
- Multiple items per row (based on rowSize)
- Equal width distribution (e.g., 5 items = 20% each)
- Wraps to next row
- Grid-specific template used
- CSS class: 'grid-item'

**Test Data:** Grid view with rowSize = 5

---

### TC-GRID-DISPLAY-MODE-003: Compact View Display
**Priority:** Medium  
**Preconditions:** Grid supports Compact view  
**Test Steps:**
1. Switch to Compact view
2. Observe layout

**Expected Results:**
- Compact, condensed item display
- Minimal information per item
- Smaller height/padding
- Higher density than List/Grid
- Compact-specific template used
- CSS class: 'compact-item'

**Test Data:** Many items for density comparison

---

### TC-GRID-DISPLAY-MODE-004: Switch List to Grid
**Priority:** High  
**Preconditions:** Currently in List view  
**Test Steps:**
1. Click Grid view option
2. Observe transition

**Expected Results:**
- View mode changes smoothly
- Grid refreshes layout
- Template changes to grid template
- Item width recalculated
- No data loss
- Display option saved

**Test Data:** Switch from List to Grid

---

### TC-GRID-DISPLAY-MODE-005: Switch Grid to List
**Priority:** High  
**Preconditions:** Currently in Grid view  
**Test Steps:**
1. Click List view option
2. Observe transition

**Expected Results:**
- View mode changes to List
- Items reflow to full width
- Template changes to list template
- Column headers appear (if applicable)
- No data loss

**Test Data:** Switch from Grid to List

---

### TC-GRID-DISPLAY-MODE-006: Row Size Control (Grid View)
**Priority:** Medium  
**Preconditions:** Grid view active  
**Test Steps:**
1. Adjust row size slider (default: 5)
2. Decrease to 3
3. Increase to 7
4. Observe changes

**Expected Results:**
- Item width recalculates based on rowSize
- 3 items: 33.33% width each
- 7 items: ~14.28% width each
- Items reflow dynamically
- No layout breaks

**Test Data:** Row size from 3 to 7

---

### TC-GRID-DISPLAY-MODE-007: Row Size Boundaries
**Priority:** Low  
**Preconditions:** Grid view active  
**Test Steps:**
1. Decrease row size to minimum (1)
2. Increase row size to maximum (10)
3. Verify boundaries enforced

**Expected Results:**
- Cannot go below minRowSize (1)
- Cannot exceed maxRowSize (10)
- Decrease/increase buttons disabled at boundaries
- Item width adjusts within limits

**Test Data:** Row size at min/max boundaries

---

### TC-GRID-DISPLAY-MODE-008: Form Position in Grid View
**Priority:** Medium  
**Preconditions:** Grid view with items per row  
**Test Steps:**
1. Switch to Grid view, rowSize = 5
2. Click item #3 in first row
3. Observe form positioning

**Expected Results:**
- Form appears at end of row (after item #5)
- Form wrapper aligns with row
- Items don't shift unexpectedly
- Form clearly associated with clicked item

**Test Data:** Grid view, item in middle of row

---

### TC-GRID-DISPLAY-MODE-009: Form Position in List View
**Priority:** Medium  
**Preconditions:** List view active  
**Test Steps:**
1. Switch to List view
2. Click any item
3. Observe form positioning

**Expected Results:**
- Form appears directly below clicked item
- Form takes full width
- No complex positioning calculation
- Inline expansion

**Test Data:** List view

---

### TC-GRID-DISPLAY-MODE-010: Display Mode Persistence
**Priority:** Low  
**Preconditions:** User changes display mode  
**Test Steps:**
1. Switch to Grid view
2. Refresh page or navigate away
3. Return to grid
4. Verify display mode

**Expected Results:**
- Last selected display mode persists
- User preference saved (localStorage or server)
- Grid loads in saved display mode
- Row size also persists if changed

**Test Data:** Display mode selection

---

### TC-GRID-DISPLAY-MODE-011: Template Rendering
**Priority:** Medium  
**Preconditions:** Templates configured for each mode  
**Test Steps:**
1. Verify each display mode uses correct template
2. Check template content

**Expected Results:**
- List: Uses list template (table-like structure)
- Grid: Uses grid template (card structure)
- Compact: Uses compact template (minimal structure)
- Templates registered per gridId
- Correct template retrieved via ItemService

**Test Data:** All three display modes

---

### TC-GRID-DISPLAY-MODE-012: Responsive Layout
**Priority:** Low  
**Preconditions:** Grid view on different screen sizes  
**Test Steps:**
1. View grid on desktop (large screen)
2. View grid on tablet (medium screen)
3. View grid on mobile (small screen)
4. Observe layout adjustments

**Expected Results:**
- Grid remains usable on all screen sizes
- May auto-adjust rowSize on smaller screens
- List view recommended for mobile
- No horizontal scrolling
- Responsive breakpoints work

**Test Data:** Various screen sizes

---

## 10. Form Integration Tests

### TC-GRID-FORM-001: Form Opens Inline
**Priority:** High  
**Preconditions:** Single mode, editable grid  
**Test Steps:**
1. Click item to edit
2. Observe form opening

**Expected Results:**
- Form opens inline within grid
- No navigation to separate page
- Form wrapper positioned correctly
- Grid layout accommodates form
- Form shows item data pre-filled

**Test Data:** Editable item

---

### TC-GRID-FORM-002: Form Closes on Save
**Priority:** High  
**Preconditions:** Form open  
**Test Steps:**
1. Make changes
2. Click Save
3. Observe form closure

**Expected Results:**
- Form closes after successful save
- Grid refreshes with updated data
- Form DOM element removed
- Grid returns to normal state

**Test Data:** Valid form data

---

### TC-GRID-FORM-003: Form Closes on Cancel
**Priority:** High  
**Preconditions:** Form open  
**Test Steps:**
1. Optionally make changes
2. Click Cancel
3. Observe form closure

**Expected Results:**
- Form closes immediately
- No save occurs
- Changes discarded
- Grid unchanged

**Test Data:** Any form state

---

### TC-GRID-FORM-004: Form Validation
**Priority:** High  
**Preconditions:** Form with validation rules  
**Test Steps:**
1. Open form
2. Enter invalid data
3. Attempt save
4. Observe validation

**Expected Results:**
- Validation errors displayed inline
- Form doesn't close
- Error messages clear
- Focus on first invalid field
- Save prevented

**Test Data:** Invalid form data

---

### TC-GRID-FORM-005: Form State Management (New)
**Priority:** Medium  
**Preconditions:** None  
**Test Steps:**
1. Click "Add New" button
2. Verify form state

**Expected Results:**
- FormService.isNewItem() returns true
- FormService.isEditItem() returns false
- Form shows "Add New" header
- Save button labeled "Create" or "Add"
- Form fields empty

**Test Data:** New item creation

---

### TC-GRID-FORM-006: Form State Management (Edit)
**Priority:** Medium  
**Preconditions:** Item exists  
**Test Steps:**
1. Click item to edit
2. Verify form state

**Expected Results:**
- FormService.isNewItem() returns false
- FormService.isEditItem() returns true
- Form shows "Edit" header
- Save button labeled "Save" or "Update"
- Form fields pre-populated

**Test Data:** Existing item

---

### TC-GRID-FORM-007: Original Item Reference
**Priority:** Medium  
**Preconditions:** Editing item  
**Test Steps:**
1. Open item for editing
2. Verify original item stored
3. Make changes
4. Compare with original

**Expected Results:**
- originalItemForEditing stored before editing
- Editable copy (editableItem) created
- Changes don't affect original until save
- Can compare for dirty state detection

**Test Data:** Item being edited

---

### TC-GRID-FORM-008: Form Wrapper DOM Management
**Priority:** Low  
**Preconditions:** Form operations  
**Test Steps:**
1. Open form (formWrapper created)
2. Close form
3. Verify DOM cleanup

**Expected Results:**
- Form wrapper added to DOM on open
- Form wrapper removed from DOM on close
- No memory leaks
- FormService._formWrapper nullified

**Test Data:** Multiple form open/close cycles

---

### TC-GRID-FORM-009: Multiple Form Prevention
**Priority:** High  
**Preconditions:** Form open  
**Test Steps:**
1. Open form for Item A
2. Click Item B
3. Observe behavior

**Expected Results:**
- First form (Item A) closes automatically
- Second form (Item B) opens
- Only one form visible at any time
- No form conflicts

**Test Data:** Multiple items

---

### TC-GRID-FORM-010: Form with Base-Form Component
**Priority:** Medium  
**Preconditions:** Grid uses base-form directive  
**Test Steps:**
1. Open form
2. Verify base-form integration
3. Perform form actions

**Expected Results:**
- Base-form directive renders correctly
- Form fields from base-form configuration
- Validation rules from base-form
- Save/cancel callbacks integrated
- Seamless integration with grid

**Test Data:** Grid configured with base-form

---

### TC-GRID-FORM-011: Form Event Listeners
**Priority:** Low  
**Preconditions:** Form and grid integration  
**Test Steps:**
1. Verify event listeners registered
2. Trigger events
3. Observe responses

**Expected Results:**
- grid:showForm event opens form
- grid:closeForm event closes form
- Events propagate correctly
- Event propagation stopped where needed

**Test Data:** Event triggering scenarios

---

## 11. Selection Mode Tests

### TC-GRID-MODE-001: Single Mode Active
**Priority:** High  
**Preconditions:** Grid in single mode  
**Test Steps:**
1. Verify single mode active
2. Click item
3. Observe behavior

**Expected Results:**
- isSingleModeUsed() returns true
- Clicking item opens edit form
- No selection checkboxes
- No cart panel
- pickItemFunction called if no editing

**Test Data:** Standard grid

---

### TC-GRID-MODE-002: Multi Mode Active
**Priority:** High  
**Preconditions:** Grid in multi mode  
**Test Steps:**
1. Switch to multi mode
2. Click items
3. Observe behavior

**Expected Results:**
- isSingleModeUsed() returns false
- Clicking items adds to selection
- Checkboxes appear (if configured)
- Cart panel appears
- Form doesn't open

**Test Data:** Multi-select mode

---

### TC-GRID-MODE-003: Switch Single to Multi
**Priority:** High  
**Preconditions:** Single mode active  
**Test Steps:**
1. Toggle mode to multi
2. Observe changes

**Expected Results:**
- Mode switches
- closeAll() called (closes forms/cart)
- Grid UI updates (checkboxes appear)
- Items become selectable
- Mode indicator updated

**Test Data:** Mode toggle

---

### TC-GRID-MODE-004: Switch Multi to Single
**Priority:** High  
**Preconditions:** Multi mode with selections  
**Test Steps:**
1. Select items
2. Toggle mode to single
3. Observe changes

**Expected Results:**
- Mode switches
- All selections cleared
- Cart closes
- Checkboxes removed
- Items become clickable for editing

**Test Data:** Multi mode with selections

---

### TC-GRID-MODE-005: Mode with Edit Permission
**Priority:** Medium  
**Preconditions:** config.allowEditing = true  
**Test Steps:**
1. Single mode
2. Click item
3. Verify edit form opens

**Expected Results:**
- Form opens for editing
- Edit permission respected
- showForm() called

**Test Data:** Editable grid

---

### TC-GRID-MODE-006: Mode without Edit Permission
**Priority:** Medium  
**Preconditions:** config.allowEditing = false  
**Test Steps:**
1. Single mode
2. Click item
3. Verify callback

**Expected Results:**
- Form doesn't open
- pickItemFunction callback called instead
- Custom action performed (parent controller handles)

**Test Data:** Non-editable grid with pick function

---

### TC-GRID-MODE-007: Mode Indicator UI
**Priority:** Low  
**Preconditions:** Mode toggle available  
**Test Steps:**
1. Observe mode indicator
2. Toggle mode
3. Verify indicator updates

**Expected Results:**
- Clear visual indicator of current mode
- Icon or label changes on toggle
- "Single" vs "Multi" or similar
- Toggle button state

**Test Data:** Mode toggle UI

---

## 12. Search Functionality Tests

### TC-GRID-SEARCH-001: Basic Text Search
**Priority:** High  
**Preconditions:** Grid with searchable data  
**Test Steps:**
1. Enter search term: "John"
2. Press Enter or click Search
3. Observe results

**Expected Results:**
- Grid filters to matching items
- Search term sent to server (searchValue parameter)
- Pagination resets to page 1
- Search indicator shows active search
- Clear search button appears

**Test Data:** Search term: "John"

---

### TC-GRID-SEARCH-002: Search with No Results
**Priority:** Medium  
**Preconditions:** Grid loaded  
**Test Steps:**
1. Enter search term with no matches: "ZZZZZ"
2. Execute search
3. Observe empty state

**Expected Results:**
- Grid shows empty state
- Message: "No results found for 'ZZZZZ'"
- Pagination shows 0-0 of 0
- Can clear search to return to all items

**Test Data:** Non-matching search term

---

### TC-GRID-SEARCH-003: Clear Search
**Priority:** High  
**Preconditions:** Active search  
**Test Steps:**
1. Perform search
2. Click "X" or clear button
3. Observe reset

**Expected Results:**
- Search term cleared
- If searchParams.used = true: grid refreshes
- All items displayed again
- Search indicator removed
- Grid returns to pre-search state

**Test Data:** Active search

---

### TC-GRID-SEARCH-004: Search with Filters
**Priority:** High  
**Preconditions:** Filter applied  
**Test Steps:**
1. Apply filter (Status = "Active")
2. Perform search ("John")
3. Observe combined effect

**Expected Results:**
- Both search and filter applied (AND logic)
- Results match both criteria
- Both search and filter indicators visible
- Can clear search independently of filter

**Test Data:** Filter + Search combination

---

### TC-GRID-SEARCH-005: Search Persistence
**Priority:** Medium  
**Preconditions:** Search active  
**Test Steps:**
1. Perform search
2. Navigate pages
3. Sort or filter
4. Verify search remains

**Expected Results:**
- Search term persists through pagination
- Search persists through sorting
- Search persists until explicitly cleared
- searchValue sent with all requests

**Test Data:** Search with pagination/sorting

---

### TC-GRID-SEARCH-006: Search Input Validation
**Priority:** Low  
**Preconditions:** Search input field  
**Test Steps:**
1. Enter very long search term
2. Enter special characters
3. Enter only spaces
4. Attempt search

**Expected Results:**
- Long terms handled (truncated or accepted)
- Special characters escaped properly
- Empty/whitespace-only search prevented or cleared
- No injection vulnerabilities

**Test Data:** Various edge case inputs

---

### TC-GRID-SEARCH-007: Search Indicator
**Priority:** Low  
**Preconditions:** Search functionality  
**Test Steps:**
1. Perform search
2. Observe search indicator
3. Clear search
4. Verify indicator removed

**Expected Results:**
- Visual indicator when search active
- Shows search term used
- Styled distinctly from filters
- Clear/remove button accessible

**Test Data:** Active search

---

### TC-GRID-SEARCH-008: Search with Sorting
**Priority:** Medium  
**Preconditions:** Search active  
**Test Steps:**
1. Perform search
2. Sort by column
3. Verify both active

**Expected Results:**
- Search results sorted by selected column
- Both search and sort applied
- Sort indicator visible
- Correct item order

**Test Data:** Search + Sort combination

---

### TC-GRID-SEARCH-009: Real-time Search (If Implemented)
**Priority:** Low  
**Preconditions:** Real-time search enabled  
**Test Steps:**
1. Type search term character by character
2. Observe updates

**Expected Results:**
- Grid updates as user types (with debounce)
- Debounce prevents excessive requests (e.g., 300ms delay)
- Loading indicator during searches
- Previous requests cancelled

**Test Data:** Typing "Jonathan" slowly

---

### TC-GRID-SEARCH-010: Search Scope
**Priority:** Medium  
**Preconditions:** Grid with multiple columns  
**Test Steps:**
1. Perform search
2. Verify which fields searched

**Expected Results:**
- Search covers configured fields (all text fields by default)
- Server-side search implementation
- Case-insensitive search (if configured)
- Partial match supported

**Test Data:** Search term matching different fields

---

## Test Execution Guidelines

### Test Environment Setup
1. **Prerequisites:**
   - AngularJS application running
   - Test user accounts with various permissions
   - Test data: datasets with 0, 1, 25, 50, 100, 1000+ items
   - Grid instances configured for different use cases

2. **Test Data Requirements:**
   - Standard dataset: 50 items across 2 pages
   - Large dataset: 1000+ items for performance testing
   - Edge cases: 0 items, 1 item, exactly pageSize items
   - Special items: Protected items (roleID=0)
   - Custom fields: Grids with custom field configurations
   - Views: Multiple saved views per grid

3. **Browser Coverage:**
   - Chrome (latest)
   - Firefox (latest)
   - Safari (latest)
   - Edge (latest)
   - Mobile browsers (iOS Safari, Chrome Mobile)

### Test Execution Priority
1. **P0 - Critical (Must Pass):**
   - Data display, CRUD operations, filtering, sorting, pagination
   - Core business functions

2. **P1 - High (Should Pass):**
   - View management, bulk operations, form integration
   - Important but not blocking

3. **P2 - Medium (Nice to Have):**
   - Edge cases, UI polish, advanced features
   - Improves UX but not critical

4. **P3 - Low (Optional):**
   - Visual refinements, rare edge cases
   - Can be deferred

### Test Metrics
- **Total Test Cases:** 132
- **Estimated Execution Time:** ~40-60 hours (full suite)
- **Coverage Areas:** 12 functional areas
- **Automation Potential:** ~70% (UI interaction tests automatable with Protractor/Cypress)

### Defect Severity Classification
1. **Critical:** Data loss, application crash, security vulnerability
2. **High:** Core functionality broken, major UX issue
3. **Medium:** Partial functionality loss, workaround available
4. **Low:** Cosmetic issue, minor inconvenience

---

## Appendix: Business Rules Reference

### Validation Rules
| Rule | Field/Context | Validation |
|------|--------------|------------|
| View Name Required | View Editor | Cannot be empty |
| View Name Unique | View Editor | No duplicates within grid |
| Minimum Columns | View Editor | At least one column enabled |
| Empty Filter Values | Filter Form | Automatically omitted |
| Protected Items | Multi-select | roleID=0 && triggerType=0 not selectable |
| Page Number Range | Pagination | 1 ≤ pageNumber ≤ pageCount |
| Row Size Range | Grid View | 1 ≤ rowSize ≤ 10 |

### Calculation Formulas
| Calculation | Formula | Example |
|------------|---------|---------|
| Page Count | Math.ceil(totalItems / pageSize) | 100 items, 25 per page = 4 pages |
| From Number | (pageNumber - 1) * pageSize | Page 2, size 25 = 25 |
| To Number | fromNumber + itemCount | 25 + 25 = 50 |
| Item Width (Grid) | 100 / rowSize + "%" | rowSize=5 → 20% |
| Column Width Redistribution | Proportional based on visible columns | See TC-GRID-DISPLAY-005 |

### Configuration Options Reference
| Config | Values | Default | Description |
|--------|--------|---------|-------------|
| showOption | 25, 50, 75, 100 | 25 | Page size |
| minRowSize | Number | 1 | Min items per row (Grid view) |
| maxRowSize | Number | 10 | Max items per row (Grid view) |
| cartRowSize | Number | 5 | Items shown in cart before "View All" |
| allowEditing | Boolean | true | Enable edit on click (single mode) |
| displayOptions | ['List', 'Grid', 'Compact'] | ['List'] | Available display modes |

---

## Test Case Summary

| Category | Test Cases | Priority Breakdown |
|----------|-----------|-------------------|
| Data Display | 5 | High: 3, Medium: 2 |
| CRUD Operations | 10 | High: 6, Medium: 3, Low: 1 |
| Data Filtering | 12 | High: 7, Medium: 5 |
| Data Sorting | 11 | High: 5, Medium: 6 |
| View Management | 13 | High: 6, Medium: 6, Low: 1 |
| Bulk Operations | 12 | High: 4, Medium: 7, Low: 1 |
| Import/Export | 10 | High: 3, Medium: 3, Low: 4 |
| Pagination | 12 | High: 5, Medium: 6, Low: 1 |
| Display Modes | 12 | High: 5, Medium: 6, Low: 1 |
| Form Integration | 11 | High: 5, Medium: 5, Low: 1 |
| Selection Modes | 7 | High: 5, Medium: 2 |
| Search | 10 | High: 4, Medium: 4, Low: 2 |
| **TOTAL** | **132** | **High: 58, Medium: 55, Low: 19** |

---

**Document Version:** 1.0  
**Author:** Test Engineering Team  
**Review Status:** Draft  
**Next Review:** After implementation feedback
