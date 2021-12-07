import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com'
import { Form, Button, Alert } from 'react-bootstrap'

export const Contact = ({ lang }) => {

    const form = useRef();

    const [messageSuccess, setMessageSuccess] = useState('')
    const [sent, setSent] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_csw8p1s', 'template_cdcuzr6', form.current, 'user_mr2EBa6zyyrUmjvi45i1C')
        .then((result) => {
            setMessageSuccess('Email sent successfully!')
            setSent(true)
            // console.log(result.text)
            console.log(messageSuccess)
        }, (error) => {
            // console.log(error.text);
            setMessageSuccess('Error when sending email, please try later!')
            console.log(messageSuccess)
            setSent(false)
        });
        e.target.reset()
    };

    return (
        <>
            <h1>{lang.contact}</h1>
            {messageSuccess !== '' && <Alert variant={sent ? 'success' : 'danger'}>{messageSuccess}</Alert>}
            <form ref={form} onSubmit={sendEmail}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>{lang.emailadress}</Form.Label>
                    <Form.Control type="email" placeholder={lang.emailplaceholder} name="email" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>{lang.name}</Form.Label>
                    <Form.Control type="text" placeholder={lang.nameplaceholder}  name="name" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>{lang.message}</Form.Label>
                    <Form.Control
                        as="textarea"
                        placeholder={lang.messageplaceholder} 
                        style={{ height: '100px' }}
                        name="message"
                    />
                </Form.Group>
                <Form.Group className="mb-3 actions">
                    <Button variant="primary" type="submit">
                    {lang.submit}
                    </Button>
                </Form.Group>
            </form>
        </>
    )
}
