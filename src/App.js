import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <React.Fragment>
      <SideBar/>
      <NavBar/>
      <HomePage/>
    </React.Fragment>
  );
}

export default App;
