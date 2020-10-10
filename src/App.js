import React from 'react';
import AddUser from './component/AddUser';
import EditUser from './component/EditUser';
import Home from './component/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends React.Component {
  render() {
    return (
      <div style={{maxWidth:'300rem', margin :'4rem auto'}}>
      <Router>
        <Switch>
          <Route exact path='/'  component={Home} />
          <Route path='/edit'  component={EditUser} />
          <Route path='/add'  component={AddUser} />
        </Switch>
      </Router>
   
   </div>
    )
  }
}
