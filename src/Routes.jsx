import React from 'react'
import {Switch, Route} from 'react-router-dom'
import List from './components/List'
import Single from './components/Single'
import New from './components/New'
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import Home from './components/Home';


const Routes=()=>{
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />      
      <Route exact path="/new" component={New} />
      <Route path="/list" component={List} />
      <Route path="/:name" component={Single} />
    </Switch>
  )

}

export default Routes