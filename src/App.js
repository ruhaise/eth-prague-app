import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Segment from './pages/Segment';
import List from './pages/List';
import Chat from './pages/Chat';
import GQL from './pages/GQL';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Header />
      <Switch>
        <Route exact path="/segments" component={Segment} />
        <Route exact path="/gql" component={GQL}/>
        <Route exact path="/list" component={List}/>
        <Route exact path="/chat" component={Chat}/>
        <Route path="/" component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
