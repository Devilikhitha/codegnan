import React from "react";
import Prop from "./Prop";
import MessageList from "./components/MessageList";

class App extends React.Component{
  state={
    subject:"reactjs",
    year:2013
  }
  render(){
    return(
      <div>
        
      <MessageList/>
      {/* <p> This is a class Component from App</p>
      <h1>Hey dudessss</h1>
      <p>{this.state.subject} {this.state.year}</p>
      <Prop name="devi" age="21"/>
      <Prop name="likhi" age="20"/> */}
      </div>
    )
  }
}
export default App