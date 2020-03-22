import React, {Component} from 'react'

//define the class
class Welcome extends Component{
    render(){
        return<h1>Welcome{this.props.name}  {this.props.username}</h1>
    }

} 

export default Welcome