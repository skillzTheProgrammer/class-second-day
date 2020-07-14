import React,{Component} from 'react';
import './App.css';
import RegisterMyUi from './components/register/RegisterMyUi';
import 'bootstrap/dist/css/bootstrap.min.css'
import LoginUI from './components/login/LoginUI';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {REGISTER, LOGIN, DASHBOARD} from './routes/routes'
import Failure from './components/Failure';
import { ViewOnLog } from './globals';
import DashboardUi from './components/dashboard/DashboardUi';

class App extends Component{
  
  render(){
    return(
      <div className="App">
        <h1>BookShop App</h1>
        <Router>
          <Switch>
          <Route path={REGISTER} component={RegisterMyUi} />
          <Route path={LOGIN} exact component={LoginUI} />
          <Route path={DASHBOARD} component={DashboardUi} />
          <Route component={Failure} />
          </Switch>
        </Router>
        {/* <Router>
          <Switch>
          <Route exact path={REGISTER} component={RegisterMyUi} />
          <Route exact path={LOGIN} component={LoginUI} />
          <Route component={Failure} />
          </Switch>
        </Router> */}
      </div>
    )
  }
}

export default App;
