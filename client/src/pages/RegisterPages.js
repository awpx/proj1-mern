import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { FormContainer } from '../components/FormContainer'
import { register } from '../actions/userActions'

export const RegisterPages = ({ location, history }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const userRegister = useSelector(state => state.userRegister)
  const { loading, error, userInfo } = userRegister

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if(userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()

    if(password !== confirmPassword) {
      setMessage(`Password not match`)
    } else {
      dispatch(register(name, email, password))
    }
  }

  return (
    <FormContainer>
      <h2>Sign Up</h2>
      {message && <Message variant='danger'>{message}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter your name'
            value={name}
            required
            onChange={e => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        
        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter Email'
            value={email}
            required
            onChange={e => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter Password'
            value={password}
            required
            onChange={e => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='confirmPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Re-Enter Password'
            value={confirmPassword}
            required
            onChange={e => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>Sign Up</Button>
      </Form>

      <Row className='py-3'>
        <Col>
          Already have account ?{' '}
          <Link to={redirect 
            ? `/login?redirect=${redirect}` 
            : '/login'
          }>
            <span className='alert-link'>Sign In</span>
          </Link> {' '} 
            now!
        </Col>
      </Row>
    </FormContainer>
  )
}
