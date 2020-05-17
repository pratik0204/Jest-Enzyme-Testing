import React from 'react';
import Header from './component/header/index'
import './App.scss';
import Headline from './component/headline/index'

const tempArr =[{
  fName:'Joe',
  lName:'Bloggs',
  email:'user@gmail.com',
  age:25,
  onlineStatus:true
}]

function App() {
  return (
    <div className="App">
      <Header/>
      <Headline tempArr={tempArr} header={"Header"} desc="Click the button to render"/>
    </div>
  );
}

export default App;