import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Card, Button } from 'react-bootstrap'; // Import Bootstrap components

function Blog() {
    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        // Fetch blog data from JSON file using Axios
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((response) => {
                setBlogPosts(response.data);
            })
            .catch((error) => {
                console.error('Error fetching blog data:', error);
            });
    }, []);

    return (
        <Container>
            <h2 className="mt-5">Blog</h2>
            <Row>
                {blogPosts.map((post) => (
                    <Col md={4} key={post.id}>
                        <Card className="mb-4">
                            <Card.Img variant="top" src={post.image} />
                            <Card.Body>
                                <Card.Title>{post.title}</Card.Title>
                                <Card.Text>{post.preview}</Card.Text>
                                <Card.Text className="text-muted">{post.date}</Card.Text>
                                <Link to={`/blog/${post.id}`} className="btn btn-primary">
                                    Read More
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Blog;
