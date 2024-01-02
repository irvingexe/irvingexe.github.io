import React from 'react'
import projects from '../assets/projects';
import ProjectDetail from './components/ProjectDetail';

export const getStaticPaths = async () => {
  const paths = [
    ...Array.from(projects.keys()).map((key) => ({ params: { projectId: key } })),
    { params: { projectId: 'robots.txt' } },
  ];
  return {
    paths,
    fallback: true,
  };
};

export const generateStaticParams = async ({ params }) => {
  const projectId = params.projectId || 'robots.txt';
  return {
    projectId,
  };
};

const Project = ({params}) => {
  return <ProjectDetail projectId={params.projectId} project={params.project}/>
}

export default Project;