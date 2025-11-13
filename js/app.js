
function newItemCloseButton() {
  var span = document.createElement('span');

  span.className = 'close';
  span.appendChild(document.createTextNode('\u00D7'));

  return span;
}

function addCloseBtnToTodoItems() {
  var todoItems = document.getElementsByTagName('li');

  for (var i = 0; i < todoItems.length; ++i) {
    todoItems[i].appendChild(newItemCloseButton());
  }
}

function handleClickCloseBtn() {
  var closes = document.getElementsByClassName('close');

  for (var i = 0; i < closes.length; ++i) {
    closes[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = 'none';
    }
  }
}

function handleClickTodoItem() {
  var todoList = document.querySelector('ul');

  todoList.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
      event.target.classList.toggle('checked');
      event.target.classList.toggle('completed-item');
    }
  }, false);
}

// Add new todo item when clicking on the "Add" button
function newTodoItem() {
  var li = document.createElement('li');
  var inputValue = document.getElementById('todo-input').value;
  li.appendChild(document.createTextNode(inputValue));

  if (inputValue === '') {
    alert('You must write something!');
  } else {
    document.getElementById('todo-list').appendChild(li);
  }
  document.getElementById('todo-input').value = '';

  li.appendChild(newItemCloseButton());
  handleClickCloseBtn();
}

// View switching functions
function switchToListView() {
  var todoList = document.getElementById('todo-list');
  var listBtn = document.getElementById('list-view-btn');
  var gridBtn = document.getElementById('grid-view-btn');
  
  // Remove grid view class
  todoList.classList.remove('grid-view');
  
  // Update button states
  listBtn.classList.add('active');
  gridBtn.classList.remove('active');
  
  // Save preference to localStorage
  localStorage.setItem('todoViewMode', 'list');
}

function switchToGridView() {
  var todoList = document.getElementById('todo-list');
  var listBtn = document.getElementById('list-view-btn');
  var gridBtn = document.getElementById('grid-view-btn');
  
  // Add grid view class
  todoList.classList.add('grid-view');
  
  // Update button states
  gridBtn.classList.add('active');
  listBtn.classList.remove('active');
  
  // Save preference to localStorage
  localStorage.setItem('todoViewMode', 'grid');
}

// Restore saved view mode on page load
function restoreViewMode() {
  var savedMode = localStorage.getItem('todoViewMode');
  if (savedMode === 'grid') {
    switchToGridView();
  } else {
    switchToListView();
  }
}

addCloseBtnToTodoItems();
handleClickCloseBtn();
handleClickTodoItem();
restoreViewMode();
