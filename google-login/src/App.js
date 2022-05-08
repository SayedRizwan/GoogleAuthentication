import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from './components/Home';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Router basename="/">
        <Switch> 
          <Route exact path="/" component={Home}/>
          <Route path="/Dashboard" component={Dashboard}/>
        </Switch>
      </Router>
    </div>
  );
}
export default App;