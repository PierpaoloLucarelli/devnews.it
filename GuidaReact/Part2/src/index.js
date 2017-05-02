import React from 'react';
import Calendario from "./components/Calendario"
import { render } from 'react-dom';

class App extends React.Component {
    render(){
        return(
        <Calendario />
       )
    }
}
render(<App/>, document.getElementById('app'));
