import "./App.css";
import React from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { deleteTasks, getTasks } from "./api/tasksAPI";

class App extends React.Component {
  counter = 5;

  state = {
    tasks: [],
  };

  componentDidMount() {
    getTasks().then((tasks) => this.setState({ tasks }));
  }

  // usunięcie z listy wyżej elementu o id takim
  handleDeleteTask = async (id) => {
    const tasks = await deleteTasks(id, this.state.tasks);
    this.setState({
      tasks,
    });
  };
  // zmiana statusu w zadaniach o id takich
  changeTaskStatus = (id) => {
    let tasks = [...this.state.tasks];
    tasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().toLocaleString();
        console.log(task.finishDate);
      }
    });

    this.setState({
      tasks,
    });
  };

  addTask = (text, date) => {
    const task = {
      id: this.counter,
      text: text,
      date: date,
      active: true,
      finishDate: null,
    };

    this.setState((prevState) => ({
      tasks: [...prevState.tasks, task],
    }));

    this.counter++;
    return true;
  };

  render() {
    return (
      <div className="App">
        <h1>To Do App</h1>
        <AddTask add={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          onDelete={this.handleDeleteTask}
          changeStatus={this.changeTaskStatus}
        />
      </div>
    );
  }
}

export default App;
