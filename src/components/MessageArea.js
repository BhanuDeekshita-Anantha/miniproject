import React,{ Component } from 'react'

class MessageArea extends Component{
    constructor(){
        super();
        this.state={
            text:""
        }
    }
    sendData=()=>{
        this.props.onSubmit({
            i:this.state.text
        })
        // console.log(this.state.text)
        this.setState({
            text:""
        })
    }
    storetext=(e)=>
    this.setState({
        [e.target.name]:e.target.value
    })
    render(){
        return(
        <div> 
            <input type="text" 
            placeholder="enter a value"
            name="text"
            onChange={this.storetext}
            value={this.state.text}/>
            <button onClick={this.sendData}>Click Me</button>
        </div>
        )
    }
}
export default MessageArea

