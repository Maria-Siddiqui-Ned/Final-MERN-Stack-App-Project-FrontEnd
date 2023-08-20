import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function SignUp() {

  const [firstname, setfirstname] = useState("")
  const [lastname, setlastname] = useState("")
  const [city, setcity] = useState("")
  const [area, setarea] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const SignupUser = (e) => {
    e.preventDefault();
    const payload = { firstname, lastname, city, area, email, password }

    axios.post('http://localhost:1234/api/signup', payload)
      .then((json) => console.log(json.data))
      .catch(err => console.log(err))

      // const account = users.find((user) => user.username === username);
      //   if (account) {
      //     localStorage.setItem("authenticated", true);
      //     navigate("http://localhost:1234/api/login");
      //   }

  }
  
    
  

  // const [validated, setValidated] = useState(false);

  // const handleSubmit = (event) => {
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }

  //   else if(form.checkValidity() === true) {
  //     Swal.fire({
  //       title: 'Successfully Sign Up!',
  //       icon: 'success',
  //       confirmButtonText: 'Continue'
  //   })
  //   }
  //   setValidated(true);
  // };

  return (
    <div className="container my-5 d-flex justify-content-center align-item-center">

      {/* <Form noValidate validated={validated} onSubmit={handleSubmit}> */}
      <Form onSubmit={SignupUser}>
        <h3>Create your Let's ShopPk Account!!</h3>
        <Row className="mb-3 my-3" >
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter First name"
              value={firstname}
              onChange={(e) => setfirstname(e.target.value)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please enter first name.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter Last name"
              value={lastname}
              onChange={(e) => setlastname(e.target.value)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please enter last name.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group controlId="validationCustomUsername">
            <Form.Label>Email address</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="email"
                placeholder="Enter email address"
                aria-describedby="inputGroupPrepend"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please enter email address.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="City" 
            required 
            value={city}
            onChange={(e) => setcity(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom04">
            <Form.Label>Area</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Area" 
            required 
            value={area}
            onChange={(e) => setarea(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Area.
            </Form.Control.Feedback>
          </Form.Group>
          {/* <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Zip</Form.Label>
            <Form.Control type="text" placeholder="Zip" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group> */}
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
            <Form.Control.Feedback type="invalid">
              Please provide a valid password.
            </Form.Control.Feedback>
          </Form.Group>
          {/* <Form.Group as={Col} md="6" controlId="validationCustom05">
            <Form.Label>Retype Password</Form.Label>
            <Form.Control type="password" placeholder="Retype Password" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid password.
            </Form.Control.Feedback>
          </Form.Group> */}
        </Row>
        {/* <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group> */}
        <Button type="submit" className="btn btn-warning">Signup</Button>
      </Form>
    </div>
  );
}

export default SignUp;