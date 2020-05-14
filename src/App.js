import React from 'react';
import Header from './component/header/index'
import './App.scss';
import Headline from './component/headline/index'

function App() {
  return (
    <div className="App">
      <Header/>
      <Headline header="Posts" desc="Click the button to render"/>
    </div>
  );
}

export default App;