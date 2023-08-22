import React, { useContext, useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import { GlobalContext } from '../../Context/context'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default function LoginForm() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [validated, setValidated] = useState(false);
    const { state, dispatch } = useContext(GlobalContext)

    const loginUser = (e) => {
        e.preventDefault();

        const payload = { email, password }

        axios.post('http://localhost:1234/api/login', payload)
            .then((json) => {
                Cookies.set('token', json.data.token)
                dispatch({
                    type: "USER_LOGIN",
                    token: json.data.token
                })
            })
            .catch(err => console.log(err))
    }
    // const handleSubmit = (e) => {
    //     const form = e.currentTarget;
    //     if (form.checkValidity() === false) {
    //       e.preventDefault();
    //       e.stopPropagation();
    //     }
    
    //     else if(form.checkValidity() === true) {
    //         const payload = { email, password }
    //             axios.post('http://localhost:1234/api/login', payload)
    //                 .then((json) => {
    //                     Cookies.set('token', json.data.token)
    //                     dispatch({
    //                         type: "USER_LOGIN",
    //                         token: json.data.token
    //                     })
    //                 })
    //                 .catch(err => console.log(err))
    //         }
    //     }
    //     setValidated(true);
    return (

        <div className="container my-5 d-flex justify-content-center align-item-center">

            {/* <Form  noValidate validated={validated} onSubmit={handleSubmit}> */}
            <Form onSubmit={loginUser}>
                <h3>Welcome to Let's Shop! Please login to continue.</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        name="email"
                        type="email"
                        placeholder="Enter email address"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>

                    <Form.Control.Feedback type="invalid">
                        Please provide a valid email address.
                    </Form.Control.Feedback>

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        name="password"
                        type="password"
                        placeholder="Enter Password"
                        required
                        onChange={(e) => setPassword(e.target.value)}

                    />

                    <Form.Control.Feedback type="invalid">
                        Please provide a valid password.
                    </Form.Control.Feedback>

                </Form.Group>

                <div className="d-grid gap-2">
                <Button variant="primary" className="btn btn-warning" type="submit">
                Login
                </Button>
                </div>
                <div>
                <p className='mt-3'>Don't have an account?<a href=''> Signup</a> here.</p>
                </div>
            </Form>

        </div>
    )
}
