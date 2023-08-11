
import './App.css';
import React from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

class App extends React.Component {

    state = {
      tasks: [
        {
          id: 0,
          text: "zrobić aplikacje w React",
          date: "2013-08-15",
          important: true,
          active: true,
          finishDate: null,
        },
           {
          id: 1,
          text: "Nauczyć się React",
          date: "2013-08-30",
          important: true,
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

  render() {
    return (
      <div className="App">
      <h1>To Do App</h1>
      <AddTask/>
      __________________________________________________
      <TaskList tasks={this.state.tasks} delete={this.deleteTask} changeStatus={this.changeTaskStatus}/>
      

      </div>
    )};
}

export default App;
