// Business Logic for To Do List
function ToDoList() {
  this.errands = [];
  this.currentId = 0;
}

ToDoList.prototype.addTask = function (errand) {
  errand.id = this.assignId();
  this.errands.push(errand);
};

ToDoList.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
};



//Business Logic for Tasks----

function Task(errand) {
  this.errand = errand;
}

Task.prototype.displayErrand = function() {
  return(" I need to " + this.errand);
};