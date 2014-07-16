$(function(){
  $("form#toDoForm").submit(function(event){
    event.preventDefault();
    var task = $("input#toDo").val();
    $("ul#listWork").append("<li>" + task + "</li>");
    $("input#toDo").val("");





  })
})
