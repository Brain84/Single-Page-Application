import React from 'react';
import '../styles/ProjectsPage.scss';
import img2 from '../images/img2.jpeg';
import img4 from '../images/img4.jpeg';
import img5 from '../images/img5.jpeg';
import img6 from '../images/img6.jpeg';

const ProjectsPage = () => {
  return (
    <section className="section__projects">
      <h2 className="projects__title">Lorem ipsum dolor</h2>
      <p className="projects__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim aliquam nisl at consectetur.</p>
      <div className="container__img">
        <img src={img2} alt="building" />
        <img src={img4} alt="building" />
        <img src={img5} alt="building" />
        <img src={img6} alt="building" />
      </div>
    </section>
  );
}

export default ProjectsPage;