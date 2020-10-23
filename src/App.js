import React from 'react';
import Footer from './components/Footer';
import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';
import Routes from './Routes';

function App() {
  return (
    <React.Fragment>
      <SideBar/>
      <NavBar/>
      <Routes/>
      <div className="container-fluid">
              <Footer/>
      </div>
    </React.Fragment>
  );
}

export default App;
