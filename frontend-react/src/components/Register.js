import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Register() {

    const onFormSubmit = (e) => {
        e.preventDefault()
        console.log("Submit test working?")
    }

    return (
        <div className="register-form">
            <Form onSubmit={onFormSubmit}>
                <Form.Control type="text" name="firstname" placeholder="Eesnimi" />
                <Form.Control type="text" name="lastname" placeholder="Perekonnanimi" />
                <Form.Control type="email" name="email" placeholder="E-post" />
                <Form.Control type="password" name="password" placeholder="Salasõna" />
                <Button variant="primary" type="submit" id="register-submit-btn">Registreeru!</Button>
            </Form>
        </div>
    )
}
export default Register;