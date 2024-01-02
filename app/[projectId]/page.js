import React from 'react'
import projects from '../assets/projects';
import ProjectDetail from './components/ProjectDetail';

export const getStaticPaths = async () => {
  const paths = Array.from(projects.keys()).map(key => `/${key}`);
  return {
    paths,
    fallback: true, // Allow dynamic generation for unknown project IDs
  };
};

export const generateStaticParams = async ({ params }) => {
  const projectId = params.projectId;
  const project = projects.get(projectId);
  return {
    projectId,
    project,
  };
};

const Project = ({projectId, project}) => {
  return <ProjectDetail {...projectId} {...project}/>
}

export default Project;