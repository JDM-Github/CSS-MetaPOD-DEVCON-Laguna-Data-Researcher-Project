import React from 'react';
import ProjectName from './ProjectTableContents/ProjectName';
import ProjectOrganization from './ProjectTableContents/ProjectOrganization';
import ProjectStatus from './ProjectTableContents/ProjectStatus';
import ProjectProfits from './ProjectTableContents/ProjectProfits';
import ProjectUpdatedDate from './ProjectTableContents/ProjectUpdatedDate';

const ProjectTableContents = () => {
  const projects = [
    {
      name: 'Ocean Clean Up',
      organization: 'Samahan ng masisipag',
      updatedAt: 'May 10, 2024',
      status: 'In Progress',
      profits: '-'
    },
    {
      name: 'Plastic to Hollow Blocks',
      organization: 'City Plastic',
      updatedAt: 'May 1, 2024',
      status: 'Completed',
      profits: 'PHP 30,000.00'
    },
    {
      name: 'Tree Planting - Calamba',
      organization: 'Tanim Tanim',
      updatedAt: 'January 10, 2024',
      status: 'Continuous',
      profits: '-'
    },
    {
      name: 'Tanggal Basura sa Kanal...',
      organization: 'Sangguniang Kabataang...',
      updatedAt: 'December 2, 2023',
      status: 'Completed',
      profits: '-'
    },
  ];

  return (
    <div className='projectTableContents'>
      {projects.map((project, index) => (
        <React.Fragment key={index}>
          <ProjectName key={`${index}-name`} name={project.name} />
          <ProjectOrganization key={`${index}-organization`} organization={project.organization} />
          <ProjectUpdatedDate key={`${index}-updated-date`} updatedAt={project.updatedAt} />
          <ProjectStatus key={`${index}-status`} status={project.status} />
          <ProjectProfits key={`${index}-profits`} profits={project.profits} />
        </React.Fragment>
      ))}
    </div>
  );
}

export default ProjectTableContents;