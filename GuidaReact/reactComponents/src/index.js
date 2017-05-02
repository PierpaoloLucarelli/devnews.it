import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
    render(){
	var nome = ‘Marco’;
        return(
        <div>
            <h1>Hello {nome}</h1>
            <h2>Ciao {nome}</h2>
        </div>
       )
    }
}
render(<App/>, document.getElementById('app'));
