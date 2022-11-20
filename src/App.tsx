import React from 'react';

import './App.css';
import Header from './components/header';
import Menu from './components/menu.jsx'
import PhoneMenu from './components/phonemenu';
import Body from './components/body.jsx'
import Footer from './components/footer'
function App() {
  return (
    <>
    
    <div className="App">
      <header className="App-header">        
      
      </header>
      {Header()}
      <div className='menubodyContainer'>
      {Menu()}{Body()}{PhoneMenu()}
      </div>
    </div>
    {Footer()}
    </>
  );
}

export default App;
