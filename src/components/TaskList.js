import React from 'react';
import Task from './Task';

const TaskList = (props) => {

    // Nowa tablica z aktywnymi zadanimi

    const active = props.tasks.filter(task => ( task.active === true))
    const inactive = props.tasks.filter(task => ( task.active === false))

    // przekazanie propsów do Task dla nieaktywnych zadań

    const activeTasks = active.map(task => (
        <Task 
            key={task.id} 
            task={task} 
            delete={props.delete} 
            changeStatus={props.changeStatus}
        />
    ));

    // przekazanie propsów do Task dla aktywnych zadań

      const inactiveTasks = inactive.map(task => (
        <Task 
            key={task.id} 
            task={task} 
            delete={props.delete} 
            changeStatus={props.changeStatus}
        />
    ));

    return ( 
        <div>
            <h2>Zadania do zrobienia ({activeTasks.length})</h2>
            {activeTasks} 
             __________________________________________________
            <h2>Zadania wykonane ({inactiveTasks.length})</h2>
            {inactiveTasks}
        </div>
     );
}
 
export default TaskList;