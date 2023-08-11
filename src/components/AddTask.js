import React from "react"

export default class AddTask extends React.Component {
    state = {

    }

    render() {
        return(
            <div>
                <div placeholder="wpisz treść">Dodaj zadanie</div>
                <input type="text" />
            </div>
        )
    }
}