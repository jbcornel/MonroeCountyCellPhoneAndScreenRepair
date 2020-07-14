import React from 'react';

import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Contact from './components/Contact';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import emoji from './components/emoji.PNG';
function App() {
  
  return (
    
    <div style = {backgroundColor} className="App">
      
      <BrowserRouter>
      
      <h1 style={websiteStyle} ><center>
          <img  style ={{marginRight: '4em'}}  height = '10%' width='10%'src={emoji} alt=""></img>
          &#9; Monroe County Cell Phone and Screen Repair
          </center>
          </h1>
        <div className='container'>
        <Header/>
          <Switch style={{marginBottom: '20px'}}>
          <Route exact path='/' component={HomePage} />
          <Route path='/contact' component={Contact}/>
          
        </Switch>
     
    </div>
    </BrowserRouter>
    </div>
  );
}


const backgroundColor = {
  backgroundColor: 'yellow'
}
const websiteStyle = {
  color: 'white',
    backgroundColor: 'grey',
    textShadow: '2px 2px 8px black'
}
export default App;
