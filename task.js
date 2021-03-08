// TASK MANAGER

const InputPrompt =`TASK MANAGER

What would you like to do (Please enter one of the options below):
"TASKS" - Display All Tasks
"NEW" - Add A New Task
"REMOVE" - Remove A Task
"CLOSE" - Close The Task Manager
`;

let managerActive=true;

let userInput;

let tasks=[`Charge MacBook`,`Master JavaScript`];

let taskList=``;

let taskName;

while(managerActive==true){
    userInput=prompt(InputPrompt);
    if(userInput=="TASKS"){
        for (i=0;i<tasks.length;i++){
            taskList+=tasks[i];
            if(i<tasks.length-1){
                taskList+="\n";
            }
        }
        alert(taskList);
    }else if(userInput=="NEW"){
        taskName=prompt(`Please enter the new task:`);
        tasks.push(taskName);
        alert(`"${taskName}" has been added!`);
    }else if(userInput=="REMOVE"){
        alert(`this is a placeholder`);
    }else if(userInput=="CLOSE"){
        alert(`Thank you for using Task Manager!`);
        managerActive=false;
    }
}