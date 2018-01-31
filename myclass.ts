import{myQueue}from "./interface";


class myclass implements myQueue
{


     myArray: Array<string> = [];

  addTask(task: string): number {
   
    let count:number = this.myArray.push(task);
    console.log.apply("item"+task+ "added to the array")

    return count;
     }

      ListAlltasks() 
     {
       // myArray.forEach(function(task){
         //   console.log(task)
       // })


        for (let item of this.myArray)
        {
        console.log(item)
         }
        }

          deleteTask(task: string): number{
   
            let index:number = this.myArray.indexOf(task);
            if (index > -1)
            {
                this.myArray.splice(index,1)
                console.log("We have deleted "+task)
            }
            return myArray.length;
             }
   // addTask("Hello ");
    // let x:number = addTask("Test ");
    // console.log(x)
     //ListAlltasks();
     //let count: number = deleteTask("Hello"); 
} 
let newClass = new myclass();
let x = newClass.addTask("Hello")
console.log(x)