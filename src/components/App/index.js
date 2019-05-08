import React from 'react'
import { Router } from '@reach/router'
import HomePage from '../../pages/HomePage'
import RegisterPage from '../../pages/RegisterPage'

export default () => (
  <>
    <Router>
      <HomePage path="/" />
      <RegisterPage path="/register" />
    </Router>
  </>
)