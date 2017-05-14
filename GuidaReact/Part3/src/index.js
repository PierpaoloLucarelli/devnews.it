import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            nome : "Giovanni"
        };
    }
    render(){
        setTimeout(() => {
            this.setState({nome: "Luca"});
        }, 1000)
        return(
        <h1>Ciao {this.state.nome}</h1>
       )
    }
}
render(<App/>, document.getElementById('app'));
