import React, { Component } from 'react'

export default class TakeMessage extends Component {
    state={
        newMessage:''
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value 
        })
       
        

    }
    handleclick=()=>{
        this.props.onSubmit({
          text: this.state.newMessage
        })
          this.setState({
            newMessage:""
          })
    }
  render() {
    return (
      <div>
        <p><input name="newMessage" 
        value={this.state.newMessage}
        onChange={this.handleChange}
        placeholder='enter a name'/></p>
        
        <button onClick={this.handleclick}>Submit</button>


      </div>
    )
  }
}
