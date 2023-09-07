import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap'; // Import Bootstrap components

const skillsData = ['HTML', 'CSS', 'JAVASCRIPT']; // Add more skills here

function Skills() {
    return (
        <Container>
            <h2>Skills</h2>
            <Row>
                {skillsData.map((skill, index) => (
                    <Col md={3} key={index}>
                        <Badge variant="primary">{skill}</Badge>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Skills;







// import React from 'react';

// const skillsData = [
//     'Skill 1',
//     'Skill 2',
//     'Skill 3',
//     // Add more skills here
// ];

// function Skills() {
//     return (
//         <div className="skills">
//             <h2>Skills</h2>
//             <ul>
//                 {skillsData.map((skill, index) => (
//                     <li key={index}>{skill}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default Skills;