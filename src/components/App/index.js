import React from 'react'
import { Router } from '@reach/router'
import HomePage from '../../pages/HomePage'
import RegisterPage from '../../pages/RegisterPage'
import Admin from '../../pages/Admin';


export default () => (
  <>
    <Router>
      <HomePage path="/" />
      <RegisterPage path="/register" />
      <Admin path="/admin" />
    </Router>
  </>
)