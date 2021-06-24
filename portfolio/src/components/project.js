import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Project = ({project}) => {
    if (project) {
        return (
            <Card>
                <Card.Img src={project.image} alt={project.description}></Card.Img>
                <Card.Body>
                    <Card.Title>{project.name}</Card.Title>
                    <Card.Text>
                    {project.description}
                    </Card.Text>
                    <Button variant="secondary" href={project.repo}>Repo</Button>
                    <Button variant="secondary" href={project.deployed}>Deployed</Button>
                </Card.Body>
            </Card>
            );
    }

    return null;
}

export default Project;