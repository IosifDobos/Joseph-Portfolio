import React from "react";
import { Col } from "react-bootstrap";

const ProjectCard = ({ title, description, imageUrl, githubUrl, demoUrl }) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="project-img-bx">
                <img src={imageUrl} alt={imageUrl} />
                <div className="project-txt">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <div className="link-btn">
                        <a href={githubUrl} role='button' aria-pressed='true' className='btn-md btn-space' target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href={demoUrl} role='button' aria-pressed='true' className="btn-md" target="_blank" rel="noopener noreferrer">Live Demo</a>
                    </div>
                </div>
            </div>
        </Col>
    );
};

export default ProjectCard;