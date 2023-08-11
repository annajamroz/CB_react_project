import React from 'react'
const Task = (props) => {

    // destrukturyzacja
    const {text, date, id, active, finishDate} = props.task

   
     if (active){
        return(
           <div>
            <p>
                {text} - do {date}   
                <button onClick={() => props.changeStatus(id)}>Zrobione!</button>
                <button onClick={() => props.delete(id)}>Usuń</button>
            </p>
            
        </div>
     )} else {
        return(
            <div>
            <p>
                {text} wykonano: {finishDate}   
                <button onClick={() => props.changeStatus(id)}>Zrobione!</button>
                <button onClick={() => props.delete(id)}>Usuń</button>
            </p>
            
        </div> 
        )
     }
    }

 
export default Task;