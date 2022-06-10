import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Segment from './pages/Segment';
import List from './pages/List';
import Chat from './pages/Chat';
import GQL from './pages/GQL';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/segments" element={<Segment/>} />
        <Route exact path="/gql" element={<GQL/>}/>
        <Route exact path="/list" element={<List/>}/>
        <Route exact path="/chat" element={<Chat/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
