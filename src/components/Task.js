import React from "react";
import "./Task.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";

const Task = ({ task, onDelete, changeStatus }) => {
  // destrukturyzacja
  const { text, date, id, active, finishDate } = task;

  return (
    <div className="task">
      <p>
        {text}
        {active ? ` - do ${date}` : ` wykonano: ${finishDate}`}
      </p>
      <span>
        {active && (
          <button onClick={() => changeStatus(id)}>
            <FontAwesomeIcon icon={faCheck} />
          </button>
        )}
        <button onClick={() => onDelete(id)}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </span>
    </div>
  );
};

export default Task;
