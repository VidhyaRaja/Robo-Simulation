import { Component } from "react";
import './App.css';
import Robo from './robo';


class FormHandler extends Component{

  constructor(props) {
    super(props);
    this.defaultx = 148;
    this.defaulty = 720;
    this.state = {x:this.defaultx,y:this.defaulty,stop:false};
    this.xValue=null;
    this.yValue=null;
    this.handleChange = this.handleChange.bind(this);
}

  handleValue(){
    var value_x = 0;
    var value_y = 0;
    // this.setState({x:505});
    this.state.x = this.defaultx;
    this.state.y = this.defaulty;
    if(this.xValue >= 0){
      console.log(this.state.x,value_x);
      for(let i=1;i<=this.xValue;i++){
        console.log('positve x forloop'); 
        value_x += 82;
      }
      this.setState({x:this.state.x+value_x})
    }

    if(this.yValue >= 0){
      console.log(this.state.y,value_y);
      for(let i=1;i<=this.yValue;i++){
        console.log('positve y forloop'); 
        value_y -= 80;
      }
      this.setState({y:this.state.y+value_y})
    }
  }

  handleChange(event) { 
    let val = event.target.value;
    [this.ob1,this.xValue,this.comma, this.yValue,this.cb1, this.comma2, this.ob2,this.x2Value,this.comma3, this.y2Value, this.cb2]= val;
    console.log(this.xValue, this.yValue);

    if(this.ob1 == '(' && this.xValue == ')'){
      this.setState({stop:true});
    }
    this.handleValue();
    if(this.x2Value && this.y2Value){
      this.xValue = this.x2Value;
      this.yValue = this.y2Value;
      setTimeout(this.handleValue.bind(this), 10000);
    }
  }

  render(){
      return (
        <div className="my-4">
        <form className="container">
            <div className="row">
                <div className="col">
                    <input type="text" 
                          className="form-control" 
                          placeholder="Key in Trajectory Waypoints for Continental Robo to move"
                          onChange={this.handleChange} />
                </div>
            </div>
        </form>
        <Robo xaxis={this.state.x} yaxis={this.state.y} stop={this.state.stop}/>
      </div>
      );
  }
}

export default FormHandler;