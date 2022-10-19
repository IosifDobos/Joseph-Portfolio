import React from 'react'
import { Container, Row } from 'react-bootstrap'
import 'animate.css';
// images
import colorSharp2 from "../assets/img/color-sharp2.png";
// data
import projects from '../data/projects'
// components
import ProjectCard from './ProjectCard'

export const Projects = () => {
    return (
        <section className='projects' id='projects'>
            <h1>PROJECTS</h1>
            <Container>
                <Row>
                    <h5 className="title text-center m-heading text-secondary">PROJECTS</h5>
                    <p>Check out some of my work!</p>
                    {projects.map((project, index) => {
                        return (
                            <ProjectCard
                                key={index}
                                {...project}
                            />
                        )
                    })}
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="Background Img" />
        </section>
    )
}