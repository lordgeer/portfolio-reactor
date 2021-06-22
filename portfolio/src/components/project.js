import React from 'react';

const Project = ({project}) => {
    if (project) {
        return (
            <div className="col-12 col-md-4">
            <img className="card-img" scr={project.image} alt={project.description}></img>
            <div className= "card-body">
                <h3 className = "card-title">{project.name}</h3>
                <p classNme = "card-text">{project.description}</p>
                <a href={project.repo} className = "btn btn-secondary m-1">Repo</a>
                <a href={project.deployed} className = "btn btn-secondary m-1">Deplpoyed</a>
                </div>
                </div>
            );
    }

    return null;
}

export default Project;