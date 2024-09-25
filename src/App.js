import React from 'react';
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import 'remixicon/fonts/remixicon.css';
import Main from './components/Main';
// import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';



function App() {
  return (
    <div className="App">
     <Header />
     <SideBar />
     <Main />
    </div>
  );
}

export default App;
