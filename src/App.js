
import './App.css';
import React from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

class App extends React.Component {

    counter = 5

    state = {
      tasks: [
        {
          id: 0,
          text: "zrobić aplikacje w React",
          date: "2013-08-15",
          active: true,
          finishDate: null,
        },
           {
          id: 1,
          text: "Nauczyć się React",
          date: "2013-08-30",
          active: true,
          finishDate: null,
        },
           {
          id: 2,
          text: "Projekt",
          date: "2013-08-30",
          active: true,
          finishDate: null,
        },
           {
          id: 3,
          text: "Fryzjer",
          date: "2013-08-30",
          active: true,
          finishDate: null,
        },
           {
          id: 4,
          text: "Basen",
          date: "2013-08-30",
           active: true,
          finishDate: null,
        }
        ,
           {
          id: 5,
          text: "Basen",
          date: "2013-08-30",
          active: true,
          finishDate: null,
        }
      ]
    }
// usunięcie z listy wyżej elementu o id takim 
  deleteTask = (id) =>{
  
    let tasks = [...this.state.tasks]
    tasks = tasks.filter(task => task.id !== id)
    this.setState({
      tasks
    })
  }
// zmiana statusu w zadaniach o id takich
  changeTaskStatus = (id) => {
    let tasks = [...this.state.tasks]
    tasks.forEach(task => {
      if(task.id === id){
        task.active = false
        task.finishDate = new Date().toLocaleString()
        console.log(task.finishDate)
      }
      
    })

    this.setState({
      tasks
    })
  }

  addTask = (text, date) => {
    const task = {
        id: this.counter,
        text: text,
        date: date,
        active: true,
        finishDate: null,
    }

    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }))

    this.counter++
    return true
  }

  render() {
    return (
      <div className="App">
      <h1>To Do App</h1>
      <AddTask add={this.addTask}/>
      <TaskList tasks={this.state.tasks} delete={this.deleteTask} changeStatus={this.changeTaskStatus}/>
      

      </div>
    )};
}

export default App;
