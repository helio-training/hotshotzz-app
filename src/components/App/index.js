import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from '../../pages/HomePage'
import RegisterPage from '../../pages/RegisterPage'
import UserPage from '../../pages/UserPage'

export default () => (
  <>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/register" component={RegisterPage}/>
      <Route exact path="/user" component={UserPage}/>
    </Switch>
  </>
)