import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import 'animate.css';
// images
import colorSharp2 from "../assets/img/color-sharp2.png";
// data
import projects from '../data/projects'
// components
import ModalPopup from './ModalPopup';

export const Projects = () => {
    const [showModal, setShowModal] = useState(false);
    const [tempdata, setTempdata] = useState({});

    const getData = (id, title, shortDesc, description, imageUrl, demoUrl, githubUrl, tools) => {

        const tempData = { id, title, shortDesc, description, imageUrl, demoUrl, githubUrl, tools };
        setTempdata({ ...tempData });

        return setShowModal(true);
    }
    return (
        <section className='projects' id='projects'>
            <h1>PROJECTS</h1>
            <Container>
                <Row>
                    <h5 className="title text-center m-heading text-secondary">PROJECTS</h5>
                    <p>Check out some of my work!</p>
                    {projects.map((project, index) => {
                        return (
                            <Col size={12} sm={12} md={6} lg={4} key={index}>
                                <div className="project-img-bx" onClick={() => getData(project.id, project.title, project.shortDesc, project.description, project.imageUrl, project.demoUrl, project.githubUrl, project.tools)}>
                                    <img src={project.imageUrl} alt={project.imageUrl} />
                                    <div className="project-txt">
                                        <h4>{project.title}</h4>
                                        <span>{project.shortDesc}</span>
                                        <div className="link-btn">
                                            <i
                                                className='fa fa-link'
                                                data-toggle='modal'
                                                data-target={project.id}
                                                onClick={() => getData(project.id, project.title, project.shortDesc, project.description, project.imageUrl, project.demoUrl, project.githubUrl, project.tools)}
                                            >
                                            </i>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
            <ModalPopup tempData={tempdata} showModal={showModal} setShowModal={setShowModal} />
            <img className="background-image-right" src={colorSharp2} alt="Background Img" />
        </section>
    )
}