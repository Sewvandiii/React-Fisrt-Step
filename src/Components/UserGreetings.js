import React, { Component } from 'react'

class UserGreetings extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
            
        }
    }
    
    render() {

        return this.state.isLoggedIn && <div>Welcome Sewvandi</div>

    //     return this.state.isLoggedIn ? (
    //     <div>Welcome Sewvandi</div>
    //    ):(
    //     <div>Welcome Guests</div>
    //     )
       

        // if(this.state.isLoggedIn){
        //     return(
        //         <div>Welcome Sewvandi</div>
        //     )
        // }else{
        //     return(
        //         <div>Welcome Guests</div>
        //     )
        // }

        // return (
        //     <div>
        //         <h1>Welcome Sewvandi</h1>
        //         <h1>Welcome Guests</h1>
        //     </div>
        // )
    }
}

export default UserGreetings
