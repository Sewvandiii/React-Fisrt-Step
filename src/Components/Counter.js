import React, { Component } from 'react'
//rce
class Counter extends Component {

    //rconst
    constructor(props) {
        super(props)
    
        this.state = {
             count : 0
        }
    }

    //********the only place that i can use this.state is only in constructor */
    //********when i use this.state directly it wont change in UI but in the console */
    //********So setState is gonna use */

    //define the increment method
    increment(){
        // this.setState({
        //     count: this.state.count + 1 
        // },  () => {console.log('CallBack Value',this.state.count)}) //callback function
        //console.log(this.state.count) dont use console after setState

        //create a preState parameter
        //**********when you have to updatethe state using previous state make sure to pass a function as an argument
        //instead of regular object */
        this.setState((preState,props) => ({
            count: preState.count +1
        }))

        console.log(this.state.count)
    }
    
    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
//bind the counter value with the curly brackets
    render() {
        return (
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick = {() => this.incrementFive()}>Increment</button>
            </div>  
        )
    }
}

export default Counter

//************************************************************* */
// this.setState((preState, props) => ({
//     count: preState.count + PushSubscriptionOptions.addValue
// }))