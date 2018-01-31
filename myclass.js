"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myclass = /** @class */ (function () {
    function myclass() {
        this.myArray = [];
        // addTask("Hello ");
        // let x:number = addTask("Test ");
        // console.log(x)
        //ListAlltasks();
        //let count: number = deleteTask("Hello"); 
    }
    myclass.prototype.addTask = function (task) {
        var count = this.myArray.push(task);
        console.log.apply("item" + task + "added to the array");
        return count;
    };
    myclass.prototype.ListAlltasks = function () {
        // myArray.forEach(function(task){
        //   console.log(task)
        // })
        for (var _i = 0, _a = this.myArray; _i < _a.length; _i++) {
            var item = _a[_i];
            console.log(item);
        }
    };
    myclass.prototype.deleteTask = function (task) {
        var index = this.myArray.indexOf(task);
        if (index > -1) {
            this.myArray.splice(index, 1);
            console.log("We have deleted " + task);
        }
        return myArray.length;
    };
    return myclass;
}());
var newClass = new myclass();
var x = newClass.addTask("Hello");
console.log(x);
