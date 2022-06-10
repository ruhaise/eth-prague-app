import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Segment from "./pages/Segment";
import List from "./pages/List";
import Chat from "./pages/Chat";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/segment" element={<Segment />} />
        <Route exact path="/list" element={List} />
        <Route exact path="/chat" element={Chat} />
        <Route exact path="/" element={Home} />
      </Routes>
    </Router>
  );
}

export default App;
