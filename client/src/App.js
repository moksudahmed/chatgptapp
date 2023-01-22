import React, {Component} from 'react';
import Home from './Components/Home';
import Data from './Components/Data';
import ChatGPT from './Components/ChatGPT';

const title = 'To Do App';

 class App extends Component {
   
     render() { 
         return (
             <div>
                <h1>{title}</h1>
                 <ChatGPT />
             </div>
         );
     }
}
 
export default App;
