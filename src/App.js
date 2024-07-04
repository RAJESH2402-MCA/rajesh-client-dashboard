import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Article from './components/Article';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <section>
      <div>
    <div className="App">
      
   <div className='header'>   <Header /> </div>
      
     
      <div className="main-content"> 
     <div className="top"> <Nav /></div>
     <div className="article"> <Article /></div>
      </div>
      </div>
      <Footer />
    </div>
    </section>
  );
}

export default App;