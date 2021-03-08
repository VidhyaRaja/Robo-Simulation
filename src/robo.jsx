import React, { Component } from "react";
import robo from "./robo.svg";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class Robo extends Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    render(){
        let xaxis = this.props.xaxis;
        let yaxis = this.props.yaxis;

        this.translate3dValue = "translate3d(" + xaxis + "px, " + yaxis + "px, 0)";

        return(
            <div className="App container" id="container">
                <div id="thing" style={{transform : this.translate3dValue}}>
                    <img src={robo} alt="robo" />
                </div>
            </div>
        );
        }
}

export default Robo;