import React from "react";

function Taskaitem({ TaskName, deleteTask, completeTask, isCompleted = false }) {
  return (
    <li className="task d-flex justify-content-between">
      {TaskName}
      {!isCompleted && (
        <div className="tasks-button w-20">
          <button className=" btn btn-sm btn-success" onClick={() => {completeTask(TaskName)}}>Complete</button>
          <button className=" btn btn-sm btn-danger " onClick={() => {deleteTask(TaskName)}}>Delete</button>
        </div>
      )}
    </li>
  )
}
export default Taskaitem;


