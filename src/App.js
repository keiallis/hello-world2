import { Component } from 'react';
import './App.css';
import NameList from './components/NameList';
// import UserGreeting from './components/UserGreeting';
// import EventBind from './components/EventBind';
// import Greet from './components/Greet';
// import Welcome from './components/Welcome';
// import Message from './components/Message'; 
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import EventBind from './components/EventBind';
// import ParentComponent from './components/ParentComponent';



class App extends Component{

    render() {
      return (
        <div className= "App">
          <NameList />
          {/* <UserGreeting/> */}
          {/* <ParentComponent /> */}
          {/* <EventBind /> */}
          {/* <FunctionClick />  */}
          
          {/* <ClassClick /> */}
          {/* <Counter /> */}
          {/* <Message /> */}
          {/* <Greet name= "Bruce" heroName= "Batman">
            <p>This is children props</p>
            
            </Greet>
          <Greet name= "Clark" heroName= "Superman">
            <button>Action!</button>
          // </Greet*/}

         {/* <Greet name= "Diana" heroName= "Wonder Woman"/>

         <Welcome name= "Bruce" heroName= "Batman"/> */}
          {/* <Welcome name= "Clark" heroName= "Superman"/>
          <Welcome name= "Diana" heroName= "Wonder Woman"/>  */}



        </div>
      )
    }


}

 

export default App;
