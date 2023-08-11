import React from 'react';
import Task from './Task';

const TaskList = (props) => {

    const tasks = props.tasks.map(task => (
        <Task 
            key={task.id} 
            task={task} 
            delete={props.delete} 
            changeStatus={props.changeStatus}
        />
    ));

    return ( 
        <div>
            <h2>Zadania do zrobienia ({props.tasks.length})</h2>
            {tasks} 
            <h2>Zadania wykonane ({/* ilość zakończonych zadań */})</h2>
        </div>
     );
}
 
export default TaskList;