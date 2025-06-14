import { useState } from 'react'
import './App.css'
import Taskaitem from './Components/Tasksitem';

function App() {
  const [newTask, setNewTask] = useState("")
  const [myTasks, setMyTasks] = useState(["writing notes", "reading book", "attending an event", "editing", "books"])
  const [completedTasks, setCompletedTasks] = useState([]);

  function handleInput(e) {
    let newValue = e.target.value;
    setNewTask(newValue);
  }

  function addTask() {
    setMyTasks(prev => [...prev, newTask])
    console.log(myTasks)
    setNewTask("")
  }

  function deleteTask(TaskName) {
    let afterDeletionTasks = myTasks.filter(x => x != TaskName)
    setMyTasks(afterDeletionTasks)
  }

  function completeTask(TaskName) {
    let taskToComplete = myTasks.find(x => x === TaskName)
    let afterFiltering = myTasks.filter(x => x != TaskName)
    setMyTasks(afterFiltering)
    setCompletedTasks(prev => [...prev, taskToComplete])
    console.log("Completed Task:", completedTasks)
  }

  return (
    <div className='main-body d-flex justify-content-center align-items-center'>
      <div className='todo-list-maindiv'>
        <h2>To Do List</h2>
        <div>
          <div className='to-do-task-input-div'>
            <div className="form-floating w-75">
              <input 
                type="text" 
                className="form-control" 
                id="floatingInput" 
                placeholder="Enter your todo task" 
                onChange={(e) => {
                  handleInput(e)
                }} 
                value={newTask}
              />
              <label htmlFor="floatingInput">To-Do-list</label>
            </div>
            <button className='btn btn-primary' id='add-button' onClick={() => { addTask() }}>+</button>
          </div>
          <h6>To be Completed</h6>
          <ul className='tasks-list'>
            {
              myTasks.map((task, index) =>
                <Taskaitem TaskName={task} key={index} deleteTask={deleteTask} completeTask={completeTask} isCompleted={false} />
              )
            }
          </ul>
          <h6>Completed Tasks</h6>
          <ul className='tasks-list'>
            {
              completedTasks.map((task, index) =>
                <Taskaitem TaskName={task} key={index} deleteTask={deleteTask} completeTask={completeTask} isCompleted={true} />
              )
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App;
