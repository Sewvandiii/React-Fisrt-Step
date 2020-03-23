import React, {Component} from 'react'

//define the class
class Welcome extends Component{
    render(){
        const{name, surname} = this.props
        // const{state1, state2} = this.state

        return<h1>Welcome{name}  {surname}</h1>
    }

} 

//destructure inside the render method
export default Welcome