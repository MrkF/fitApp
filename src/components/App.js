import React, { Component } from "react";
import '../styles/App.css';
import Form from "./Form/Form";
import Total from "./Total/Total"

class App extends Component {

    render() {
        return (
            <div>
                <h1>New Old App.</h1>
                <h2>We are what we eat</h2>
                <Form />
                <Total />
            </div>
        );
    }
}

export default App;
