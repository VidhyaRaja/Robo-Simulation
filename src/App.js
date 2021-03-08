import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Component } from 'react';
import FormHandler from './FormHandler';
import Graph from './Graph';
import ContinentalLogo from './Continentallogo';

class App extends Component{

  render(){
    return (
      <div>
        <ContinentalLogo />
        <FormHandler />
        <Graph />
      </div>
    );
  }
}

export default App;
