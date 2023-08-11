import React from 'react'
import Task from './Task';
const TaskList = () => {
    return ( 
        <div>
            <h2>Zadania do zrobienia</h2>
            <Task/>
            <Task/>
            <Task/>
        </div>
     );
}
 
export default TaskList;