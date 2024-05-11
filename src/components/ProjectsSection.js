import React from 'react';
import styled from 'styled-components';

import SectionTitle from './SectionTitle';

import projects from '../assets/data/projects';
import ProjectItem from './ProjectItem';



const ProjectSectionStyle = styled.div`
  padding: 10rem 0;
  .projects__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }

  @media only screen and (max-width: 768px) {
    .projects__allItems {
      flex-direction: column;
      max-width: 400px;
      margin: 0 auto;
      margin-top: 7rem;
      gap: 5rem;
      .projectItem__img  {
        width: 100%
      }
      
      }
    }
  }
`;

export default function ProjectsSection() {
  // console.log(projects);
  return (

    <ProjectSectionStyle>
      <div className="container">
        <SectionTitle subheading="some of my recent works" heading="Projects" />
        <div className="projects__allItems">
            {projects.map((item) => (
              <ProjectItem
                key={item.id}
                title={item.name}
                desc={item.desc}
                img={item.img}
              />
            ))}
          </div>
      </div>
    </ProjectSectionStyle>
  );
}
