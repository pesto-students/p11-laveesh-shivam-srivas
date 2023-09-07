import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap'; // Import Bootstrap components

const projectsData = [
    {
        id: 1,
        title: 'Project 1',
        description: 'Description of Project 1',
        image: 'project1.jpg',
    },
    {
        id: 2,
        title: 'Project 2',
        description: 'Description of Project 2',
        image: 'project1.jpg',
    },
    {
        id: 3,
        title: 'Project 3',
        description: 'Description of Project 3',
        image: 'project1.jpg',
    },
];

function Projects() {
    return (
        <Container>
            <Row>
                {projectsData.map((project) => (
                    <Col md={4} key={project.id}>
                        <Card style={{ marginBottom: '20px' }}>
                            <Card.Img variant="top" src={project.image} />
                            <Card.Body>
                                <Card.Title>{project.title}</Card.Title>
                                <Card.Text>{project.description}</Card.Text>
                                <Button variant="primary">Learn More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Projects;












// import React from 'react';
// import { Link } from 'react-router-dom';

// const projectsData = [
//     {
//         id: 1,
//         title: 'Project 1',
//         description: 'Description of Project 1',
//         image: 'project1.jpg',
//     },
//     {
//         id: 2,
//         title: 'Project 2',
//         description: 'Description of Project 1',
//         image: 'project1.jpg',
//     },
//     {
//         id: 3,
//         title: 'Project 3',
//         description: 'Description of Project 1',
//         image: 'project1.jpg',
//     },
//     // Add more project data here
// ];

// function Projects() {
//     return (
//         <div className="projects">
//             <h2>Projects</h2>
//             <ul>
//                 {projectsData.map((project) => (
//                     <li key={project.id}>
//                         <Link to={`/projects/${project.id}`}>
//                             <img src={project.image} alt={project.title} />
//                             <h3>{project.title}</h3>
//                             <p>{project.description}</p>
//                         </Link>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default Projects;