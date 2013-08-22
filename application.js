

$(document).ready(function() {
  var todoTemplate = $.trim($('#todo_template').html());

// Bind functions which add, remove, and 
// complete todos to the appropriate elements
  function bindEvents() {
    $('.add').on('click', appendTodo);
    $('.todo_list').on('click', '.delete', removeTodo);
    $('.todo_list').on('click', '.complete', completeTodo);
  }


// Creates an jQueryDOMElement from the todoTemplate.
// Modifies it's text to use the passed in todoName.
// Returns the jQueryDOMElement to be used elsewhere.
  function buildTodo(todoName) {
    var $todo = $(todoTemplate); 
    $todo.find('h2').text(todoName);
    return $todo;
  }

// Create functions to add, remove and complete todos
  function appendTodo(){
    var name = $('input.todo').val();
    todo = buildTodo(name);
    $('.todo_list').append(todo);
  }

  function removeTodo() {
    $(this).closest('.todo').remove();
  }

  function completeTodo() {
    $(this).closest('.todo').addClass('complete');
  }  

  bindEvents();
});
