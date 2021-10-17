import React, { Component } from 'react'
import './App.css';
import UserGreeting from './components/UserGreeting';
// import EventBind from './components/EventBind';



class App2 extends Component {
    render() {
        return (
            <div className= "App2">
                <UserGreeting />
                {/* <EventBind />   */}
            </div>
        )
    }
}

export default App2

  
  
 

