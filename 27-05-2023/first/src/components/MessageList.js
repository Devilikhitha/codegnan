import React, { Component } from 'react'
import TakeMessage from './TakeMessage'
import DisplayMessage from './DisplayMessage'

export default class MessageList extends Component {
  state={
    messagelist : []
  }
  addMessage=(s)=>{
         console.log(s)
         this.setState({
          messagelist:[...this.state.messagelist,s]
         })
  }
  render() {
    console.log("messageelisttt",this.state.messagelist)
    return (
      <div>
        <TakeMessage onSubmit={this.addMessage}/>
        {
            this.state.messagelist.map((m)=>(
              <DisplayMessage showMessage={m.text}/>
            ))
        }
      </div>
      
    )
  }
}
