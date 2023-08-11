import React from 'react'
const Task = (props) => {

    // destrukturyzacja
    const {text, date, id} = props.task

    return ( 
        <div>
            <p>
                {text} - do {date}   
                <button onClick={() => props.changeStatus(id)}>Zrobione!</button>
                <button onClick={() => props.delete(id)}>Usuń</button>
            </p>
            
        </div>
     );
}
 
export default Task;