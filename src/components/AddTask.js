import React from "react"
import "./AddTask.css"
import {} from '@fortawesome/fontawesome-free'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus} from '@fortawesome/free-solid-svg-icons'


export default class AddTask extends React.Component {
    state = {
        text: "",
        date: new Date().toISOString().slice(0,10)
    }

    handleText = (e) =>{
        this.setState({
            text: e.target.value
        })
    }

    handleDate = (e) => {
        this.setState({
            date: e.target.value
        })
    }

    handleClick = () => {
        
        const {text, date} = this.state
        const add = this.props.add(text, date)

        if(add) {
            this.setState({
                text: "",
                date: new Date().toISOString().slice(0,10)
                
            })
        }

    }



    render() {
        return(
            <div className="addTask">
                <div placeholder="wpisz treść">Dodaj zadanie</div>
                <input type="text" placeholder=" dodaj zadanie..." value={this.state.text} onChange={this.handleText}/>
                <label htmlFor="date">Do kiedy zrobić </label>
                <input type="date" value={this.state.date} onChange={this.handleDate}/>
                <button className="addTaskButton" onClick={this.handleClick}><FontAwesomeIcon icon={faPlus} /></button>
            </div>
        )
    }}
