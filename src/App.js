import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import FormList from './components/FormList';
import CreateForm from './components/CreateForm';
import EditForm from './components/EditForm';
import Navbar from './components/Navbar';
import FormView from './components/FormView';

function App () {
  return (
    <Router>
      <div className="container">
        <Navbar/>
        <br/>
        <Route path="/" exact component={FormList}/>
        <Route path="/edit/:id" component={EditForm}/>
        <Route path="/create" component={CreateForm}/>
        <Route path="/:id" component={FormView}/>
      </div>
    </Router>
  )
}

export default App;