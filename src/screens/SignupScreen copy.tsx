import {useState, SyntheticEvent} from 'react';
import {Form, Button} from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import {useNavigate} from "react-router-dom";


const SignupScreen = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate();

  
  const submitHandler = async(e:SyntheticEvent)=>{
    e.preventDefault();

    // Interect with backend by fatch function
    await fetch('http://localhost:5000/api/register', {
      method: 'post',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({
        name,
        email,
        password
      }),
    })

    setTimeout(()=>{
      navigate("/login")
  }, 500);

    console.log("Form submitted")
  }
  
  return (
    <FormContainer>
      <h1>Signup</h1>
    <Form onSubmit={submitHandler}>
      
      <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Enter Your Name" 
          value={name}
          onChange={e=>setName(e.target.value)}/>
      </Form.Group>
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

export default SignupScreen;