import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Segment from './pages/Segment';
import List from './pages/List';
import Chat from './pages/Chat';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/segment" component={Segment} />
        <Route exact path="/list" component={List}/>
        <Route exact path="/chat" component={Chat}/>
        <Route path="/" component={Home}/>
      </Routes>
    </Router>
  );
}

export default App;
