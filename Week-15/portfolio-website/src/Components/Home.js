import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; // Import Bootstrap components

function Home() {
    return (
        <Container>
            <Row>
                <Col md={6}>
                    <h1>Welcome to My Portfolio</h1>
                    <p>Hi, I'm Shivam Srivastava, a Front End Developer.
                        My current home is Lucknow, U.P.(India)
                        but I mostly grew up in many other cities of India.
                        While being fascinated with all aspects of User Experience design,
                        I specialize in interaction design and visual design.
                        I love diving into why and how people use things,
                        and furthering those experiences to make them memorable.</p>
                </Col>
                <Col md={6}>
                    <img
                        src="portfolio-website\public\tmbnl.jpg"
                        alt="Profile"
                        className="img-fluid rounded-circle"
                        width="300"
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default Home;






// import React from 'react';

// function Home() {
//     return (
//         <div>
//             <h1>Welcome to My Portfolio</h1>
//             <p>Hi, I'm Shivam Srivastava, a Front End Developer.
//                 My current home is Lucknow, U.P.(India)
//                 but I mostly grew up in many other cities of India.
//                 While being fascinated with all aspects of User Experience design,
//                 I specialize in interaction design and visual design.
//                 I love diving into why and how people use things,
//                 and furthering those experiences to make them memorable.</p>
//             <img src="portfolio-website\public\tmbnl.jpg" alt="Profile" />
//         </div>
//     );
// }

// export default Home;