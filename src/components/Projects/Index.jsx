import React from 'react';
import './index.scss';

import project1 from "../../assets/images/project.png";
import project2 from "../../assets/images/ball.png";
import project3 from "../../assets/images/nature.png";
import project4 from "../../assets/images/20230415_074408.jpg";

const projectData = [
  {
    title: 'Recipe Generator',
    image: project1,
    githubLink: 'https://github.com/brianlucla/Recipe-Generator-Based-on-Ingredient-Availability',
    liveDemoLink: 'https://brianlucla.github.io/Recipe-Generator-Based-on-Ingredient-Availability/',
  },
  {
    title: 'Balldontlie',
    image: project2,
    githubLink: 'https://github.com/epicasino/balldontlie-tracker',
    liveDemoLink: 'https://balldontlie-5b4e2d2e88fb.herokuapp.com/',
  },
  {
    title: 'Nature Nerds',
    image: project3,
    githubLink: 'https://github.com/HannahMidd/nature-nerds-2',
    liveDemoLink: 'https://infinite-dawn-55621-95fe0124fef6.herokuapp.com/',
  },
  {
    title: 'Godolphin Tracker',
    image: project4,
    githubLink: '',
    liveDemoLink: '',
  },
];

const Projects = () => {
  return (
    <div className='projects'>
      <p className='p-text'>Browse My Recent Work</p>
      <h1 className='title'>Projects</h1>
      <div className='project-container'>
        {projectData.map((project, index) => (
          <div className='details-container color-container' key={index}>
            <div className='article-container'>
              <img
                src={project.image}
                alt={project.title}
                className='project-img'
              />
            </div>
            <h2 className='experience-sub-title project-title'>{project.title}</h2>
            <div className='btn-container'>
              <button
                className='btn btn-color-2 project-btn'
                onClick={() => window.location.href = project.githubLink}
              >
                GitHub
              </button>
              <button
                className='btn btn-color-2 project-btn'
                onClick={() => window.location.href = project.liveDemoLink}
              >
                Live Demo
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
