export interface myQueue{

    myArray: Array<string>;
    addTask(task: string): number;
    ListAlltasks():void;
    deleteTask(task:string):number;

}