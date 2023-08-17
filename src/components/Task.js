import React from 'react';
import "./Task.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheck} from '@fortawesome/free-solid-svg-icons';



const Task = (props) => {

    // destrukturyzacja
    const {text, date, id, active, finishDate} = props.task

   
     if (active){
        return(
        <div className='task'>
            <p>{text} - do {date}</p> 
            <span >
                <button onClick={() => props.changeStatus(id)}><FontAwesomeIcon icon={faCheck} /></button>
                <button onClick={() => props.delete(id)}><FontAwesomeIcon icon={faTrash} /></button>
            </span>
        </div>
     )} else {
        return(
         <div className='task'>
            <p>{text} wykonano: {finishDate} </p>  
            <span>
                <button onClick={() => props.delete(id)}><FontAwesomeIcon icon={faTrash} /></button> 
            </span>
        </div> 
        )
     }
    }

 
export default Task;