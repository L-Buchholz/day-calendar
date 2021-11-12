// 1. What is today's date in the following format: Jan 1st, 1999?
var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do"));

/*
// 2. What is the day of the week today?
var dayWeek = today.format("[Today is] dddd");
$("#2a").text(dayWeek);
*/

//THIS IS ALL FROM THE PREVIOUS HW

//Input for adding a "To-Do" (text)
var todoInput = $("#todo-text");

//Empty array of to-do's (where the above "To-Do" text will be stored)
var todos = [];

//*Functions*
// TODO: What is the purpose of this function?
//Renders the items in the To-Do text as a list
function renderTodos() {
  // TODO: Describe the functionality of the following two lines of code.
  todoList.innerHTML = "";
  //Text content of To-Do count (number of To-Do items) is the # of properties in To-Do's
  todoCountSpan.textContent = todos.length;

  // TODO: Describe the functionality of the following `for` loop.
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    //Creating elements to be included in the HTML
    var li = $("li");
    li.text("todo");
    li.setAttribute("data-index", i);

    //CREATE SAVE BUTTON HERE
    var button = "button";

    /*Adding the newly-created elements to the HTML -- this is to keep them 
    from appearing until the user generates them*/
    //Add button to new list item
    li.append(button);
    //Add list item to list
    todoList.appendChild(li);
  }
}

// TODO: What is the purpose of the following function?
function init() {
  // TODO: What is the purpose of the following line of code?
  var storedTodos = JSON.parse(localStorage.getItem("todos"));
  // TODO: Describe the functionality of the following `if` statement.
  if (storedTodos !== null) {
    todos = storedTodos;
  }
  // TODO: Describe the purpose of the following line of code.
  //Calls the renderTodos function (defined above)
  renderTodos();
}

function storeTodos() {
  // TODO: Describe the purpose of the following line of code.
  /*storeTodos: Creates a key called To-Dos AND stores the value of what is 
  in the todos array as a string for localStorage*/
  localStorage.setItem("todos", JSON.stringify(todos));
}

//*Event Listeners*

// TODO: Describe the purpose of the following line of code.
todoForm.addEventListener("submit", function (event) {
  event.preventDefault();
  var todoText = todoInput.value.trim();
  // TODO: Describe the functionality of the following `if` statement.
  //Prevents empty text from registering as a To-Do
  if (todoText === "") {
    return;
  }
  // TODO: Describe the purpose of the following lines of code.
  //Add new todoText to the array, THEN clears the input
  todos.push(todoText);
  todoInput.value = "";

  // TODO: What will happen when the following functions are called?
  //Calls on storeTodos AND renderTodos (defined above)
  //Store updated todos in localStorage and re-render (update) the list
  storeTodos();
  renderTodos();
});

// TODO: Describe the purpose of the following line of code.
todoList.addEventListener("click", function (event) {
  var element = event.target;
  // TODO: Describe the functionality of the following `if` statement.
  if (element.matches("button") === true) {
    //Selects specific list element
    var index = element.parentElement.getAttribute("data-index");
    /*Splice: Adds or removes (here removes) the specified # of elements from the array
    (here it removes one item starting at the index, which is defined above)*/
    todos.splice(index, 1);
    // TODO: What will happen when the following functions are called?
    //Re-renders (updates) To-Do list, including removing completed item from localStorage
    storeTodos();
    renderTodos();
  }
});

//JavaScript calls "init" function which has been designated above
init();
