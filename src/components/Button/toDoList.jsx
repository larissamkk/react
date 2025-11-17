import React, {useState} from "react";

function ToDoList(){
const [tasks, setTasks] = useState(["go to college"])
const [newTask,setNewTask] = useState("")

function handleInputChange(event){
setNewTask(event.target.value)
}

function addTask(){
if(newTask.trim() !== ""){
setTasks(t => [...t,newTask])
setNewTask("")
}
}

return(
  <div>
    <h1>to do list</h1>
    <div>
      <input type="text"
      placeholder="enter a text...."
      value={newTask}
      onChange={handleInputChange} />
      <button onClick={addTask}>add a task</button>
      <ol>
        {tasks.map((task,index) =>
          <li key={index}>
            <span>{task}</span>
          </li> )}
      </ol>

    </div>
  </div>
)
}
export default ToDoList;
