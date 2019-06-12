import React from 'react'
import styled from 'styled-components'


const RegistrationForm = styled.form`
  border: 1px solid red;
  padding: 15px;
`

const Input = styled.input`
  display: inline-block;
  padding: 5px
  border: 1px solid black;
  width: 100%;
`

const Label = styled.label`
  display: inline-block;
  padding: 5px;
  margin-right: 10px;
`



export default () => (
  <RegistrationForm>
    <div>
      <h1>Register</h1>
      <Label htmlFor="firstName">First Name</Label>
      <Input type="text" id="firstName" placeholder="First Name" />
    </div>
    <a href='/'>Home</a>
  </RegistrationForm>
)