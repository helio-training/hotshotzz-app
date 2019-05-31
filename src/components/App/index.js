import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from '../../pages/HomePage'
import RegisterPage from '../../pages/RegisterPage'

export default () => (
  <>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/register" componetn={RegisterPage}/>
    </Switch>
  </>
)