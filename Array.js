//creating a string array
var myArray = [];
function addTask(task) {
    var count = myArray.push(task);
    console.log.apply("item" + task + "added to the array");
    return count;
}
function ListAlltasks() {
    // myArray.forEach(function(task){
    //   console.log(task)
    // })
    for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
        var item = myArray_1[_i];
        console.log(item);
    }
}
function deleteTask(task) {
    var index = myArray.indexOf(task);
    if (index > -1) {
        myArray.splice(index, 1);
        console.log("We have deleted " + task);
    }
    return myArray.length;
}
addTask("Hello ");
var x = addTask("Test ");
console.log(x);
ListAlltasks();
var count = deleteTask("Hello");
