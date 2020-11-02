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

ToDoList.prototype.findErrand = function(id) {
  for (let i=0; i<this.errands.length; i++) {
    if (this.errands[i]) {
      if (this.errands[i].id == id) {
        return this.errands[i];
      }
   }
  };
  return false;
}

ToDoList.prototype.deleteErrand = function(id) {
  for (let i=0; i <this.errands.length; i++) {
  if(this.errands[i]) {
      if (this.errands[i].id == id) {
        delete this.errands[i];
        return true;
      }
    }
  };
  return false;
}



//Business Logic for Tasks----

function Task(errand) {
  this.errand = errand;
}

Task.prototype.displayErrand = function() {
  return(" I need to " + this.errand);
};


//User Interface Logic ------
let toDoList = new ToDoList();

$(document).ready(function() {
  $("form#new-tasks").submit(function(event) {
    event.preventDefault();
    const inputtedTask = $("input#task").val();
    let newTask = new Task(inputtedTask);
    toDoList.addTask(newTask);
    console.log(toDoList.errands);
  });
});