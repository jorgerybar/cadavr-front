import React from 'react'
import {Switch, Route} from 'react-router-dom'
import List from './components/List'
import Single from './components/Single'

const Routes=()=>{
  return (
    <Switch>
       <Route path="/list" component={List} />
       <Route path="/:name" component={Single} />

    </Switch>
  )

}

export default Routes