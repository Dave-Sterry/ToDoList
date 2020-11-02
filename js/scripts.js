// Business Logic for To Do List
function ToDoList() {
  this.errands = [];
  this.currentId = 0;
}





//Business Logic for Tasks----

function Task(errand) {
  this.errand = errand;
}

Task.prototype.displayErrand = function() {
  return(" I need to " + this.errand);
};