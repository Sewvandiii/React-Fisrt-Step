import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message:'hello'
        }

        // this.clickHandler = this.clickHandler.bind(this) //3
    }

    // clickHandler(){
    //      this.setState({ message:'goodbye'})
    //     console.log(this)
    // }

    clickHandler = () =>{
        this.setState({
            message:'goodbye'
        })
    }

//first step is use bind
//second use arrow function to use in render method
//third binding in thre class constructor
//fourth use arrow function as a class property
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick = {this.clickHandler.bind(this)}>Click</button> */}
                {/* <button onClick = {() => this.clickHandler()}>Click</button> */}
                <button onClick = {this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind
