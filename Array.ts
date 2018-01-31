//creating a string array
let myArray: Array<string> = [];

 function addTask(task: string): number {
   
    let count:number = myArray.push(task);
    console.log.apply("item"+task+ "added to the array")

    return count;
     }

     function ListAlltasks() 
     {
       // myArray.forEach(function(task){
         //   console.log(task)
       // })


        for (let item of myArray)
        {
        console.log(item)
         }
        }

         function deleteTask(task: string): number{
   
            let index:number = myArray.indexOf(task);
            if (index > -1)
            {
                myArray.splice(index,1)
                console.log("We have deleted "+task)
            }
            return myArray.length;
             }

    addTask("Hello ");
     let x:number = addTask("Test ");
     console.log(x)
     ListAlltasks();
     let count: number = deleteTask("Hello"); 