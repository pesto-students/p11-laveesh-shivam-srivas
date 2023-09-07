
import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap'; // Import Bootstrap components

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here (e.g., send data to a server)
        console.log('Form submitted:', formData);
        // Reset the form
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
        });
    };

    return (
        <Container>
            <h2>Contact Me</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="subject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={4}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default Contact;









// import React, { useState } from 'react';

// function Contact() {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         subject: '',
//         message: '',
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Handle form submission here (e.g., send data to a server)
//         console.log('Form submitted:', formData);
//         // Reset the form
//         setFormData({
//             name: '',
//             email: '',
//             subject: '',
//             message: '',
//         });
//     };

//     return (
//         <div className="contact">
//             <h2>Contact Me</h2>
//             <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                     <label htmlFor="name">Name</label>
//                     <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="email">Email</label>
//                     <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="subject">Subject</label>
//                     <input
//                         type="text"
//                         id="subject"
//                         name="subject"
//                         value={formData.subject}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="message">Message</label>
//                     <textarea
//                         id="message"
//                         name="message"
//                         value={formData.message}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     );
// }

// export default Contact;
