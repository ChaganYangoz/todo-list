import differenceInCalendarDays from "date-fns/differenceInCalendarDays";

export default function Todaytodo(todos){

    for(let i=0;i<todos.length;i++){
        console.log('a');

        /*if(differenceInCalendarDays(
            todos[i].date,            
            new Date()
        )<10){
            console.log(todos[i].date);
        }*/
    }
}