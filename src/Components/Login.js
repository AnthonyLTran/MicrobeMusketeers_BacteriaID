import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { Container } from "react-bootstrap"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Signup from "./Signup"


export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login, checkAdmin} = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {

      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      if(emailRef.current.value == "bsarraj@ccc.edu"){
          history.push("/dashboard")
      }
      else{
          history.push("/studentdashboard")
      }
   // history.push("/dashboard")
    } 
    catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
      <Container
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <div className="w-100 text-left mt-3">
            <Link to = "/" >Home</Link>
          </div>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className="btn btn-secondary w-100" type="submit">
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to = "/ForgotPassword" >Forgot password?</Link>
          </div>
          <div className="w-100 text-center mt-3">
            <Link to = "/Signup" >Need an Account?</Link>
          </div>
          
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
         This feature is for admins only 
      </div>
        </div>
      </Container>
  )
}
