import { useState, SyntheticEvent } from 'react';
import {Form, Button} from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import {useNavigate} from "react-router-dom";


const LoginScreen = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate();

  
  const submitHandler =async(e: SyntheticEvent) =>{
    e.preventDefault();
    await fetch('http://localhost:5000/api/login', {
      method: 'post',
      headers:{'Content-Type':'application/json'},
      // credentials:'include',
      body: JSON.stringify({
        email,
        password
      }),
    })

    // history.push('/login')
    setTimeout(()=>{
      navigate("/")
  }, 500);
    // Interect with the backend using fetch
    console.log("submited");
  }
  return (
    <FormContainer>
    <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter Your email" 
        value={email}
        onChange={e=>setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" 
        value={password}
        onChange={e=>setPassword(e.target.value)}/>
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <Button variant="primary" type="submit" className='my-3'>
        Submit
      </Button>
    </Form>
    </FormContainer>
  );
}

export default LoginScreen