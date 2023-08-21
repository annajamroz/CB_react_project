import React from "react";
import Task from "./Task";
import "./TaskList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const TaskList = (props) => {
  // Nowa tablica z aktywnymi zadanimi

  const active = props.tasks.filter((task) => task.active === true);
  const inactive = props.tasks.filter((task) => task.active === false);

  //  SORTOWANIE

  inactive.sort((a, b) => {
    if (a.finishDate > b.finishDate) {
      return -1;
    }

    if (a.finishDate < b.finishDate) {
      return 1;
    }

    return 0;
  });

  active.sort((a, b) => {
    a = a.text.toLowerCase();
    b = b.text.toLowerCase();
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });

  // przekazanie propsów do Task dla nieaktywnych zadań

  const activeTasks = active.map((task) => (
    <Task
      key={task.id}
      task={task}
      onDelete={props.onDelete}
      changeStatus={props.changeStatus}
    />
  ));

  // przekazanie propsów do Task dla aktywnych zadań

  const inactiveTasks = inactive.map((task) => (
    <Task
      key={task.id}
      task={task}
      onDelete={props.onDelete}
      changeStatus={props.changeStatus}
    />
  ));

  return (
    <div className="taskList">
      <h2>Zadania do zrobienia ({activeTasks.length})</h2>
      {activeTasks}
      <br></br>
      <h2>Zadania wykonane ({inactiveTasks.length})</h2>
      {inactiveTasks.slice(0, 5)}
    </div>
  );
};

export default TaskList;
