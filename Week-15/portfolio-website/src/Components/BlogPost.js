import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap'; // Import Bootstrap components

const blogData = [
    // Your blog data here
];

function BlogPost() {
    const { id } = useParams();
    const blogPost = blogData.find((post) => post.id === parseInt(id, 10));

    if (!blogPost) {
        return <div className="mt-5">Blog post not found.</div>;
    }

    return (
        <Container className="mt-5">
            <Row>
                <Col md={12}>
                    <h2>{blogPost.title}</h2>
                    <p className="text-muted">{blogPost.date}</p>
                </Col>
            </Row>
            <Row>
                <Col md={8}>
                    <img src={blogPost.image} alt={blogPost.title} className="img-fluid mb-4" />
                    <p>{blogPost.content}</p>
                </Col>
            </Row>
        </Container>
    );
}

export default BlogPost;



// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { blogData } from '../data/blogData'; // Import your blog data

// function BlogPost() {
//     const { id } = useParams(); // Use match.params.id to identify the blog post

//     // Find the blog post based on the id
//     const blogPost = blogData.find((post) => post.id === parseInt(id, 10));

//     if (!blogPost) {
//         return <div>Blog post not found.</div>;
//     }

//     return (
//         <div>
//             <h2>{blogPost.title}</h2>
//             <p>{blogPost.date}</p>
//             <img src={blogPost.image} alt={blogPost.title} />
//             <p>{blogPost.content}</p>
//         </div>
//     );
// }

// export default BlogPost;