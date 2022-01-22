import React,{ Component } from 'react'

class Message extends Component{
    constructor(){
        super();
        this.state={
            time:new Date().toLocaleString('en-US',{hour:'numeric',minute:'numeric',hour12:true,second:'numeric'})
        }
    }
    render(){
        return(
          <div>
            <p>{this.props.msg}<span>{this.state.time}</span></p> 
          </div>
        )

    }
}
export default Message