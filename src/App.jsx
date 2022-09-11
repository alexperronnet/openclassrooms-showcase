import React from 'react';
import { useOutboundLink, useToggleView } from '~/hooks';
import { Hero, ToggleView, ProjectsGrid, ProjectsList, Footer } from '~/components';

export default function App() {
  useOutboundLink();

  const [projectsView, setProjectsView] = useToggleView();

  return (
    <div className="container">
      <div className="h-screen flex flex-col justify-between">
        <Hero />
        <div className="flex flex-col gap-6">
          <ToggleView onClick={() => setProjectsView()} view={projectsView} />
          <section>{projectsView === 'grid' ? <ProjectsGrid /> : <ProjectsList />}</section>
        </div>
        <Footer />
      </div>
    </div>
  );
}
