import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Portfolio.css';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const BACK_API = process.env.REACT_APP_BACK_API;
    axios
      .get(`${BACK_API}/portfolio`)
      .then(({ data }) => setProjects(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="portfolio">
      <div className="card-portfolio">
        {!!projects.length && <h1>Projects</h1>}
        {!!projects.length &&
          projects.map((project, index) => {
            return (
              <div key={index} className="card-project">
                <h2> {project.name} </h2>
                <img
                  className="project-image"
                  src={project.image}
                  alt="Project"
                />
                <p> {project.description} </p>
                <a className="visit-project" href={project.link}>
                  Visit Project
                </a>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Portfolio;
