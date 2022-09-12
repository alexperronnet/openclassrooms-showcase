import React, { useState, useEffect } from 'react';
import { useToggleView } from '~/hooks';
import { Loader, Beams, Hero, ToggleView, ProjectsGrid, ProjectsList, Footer } from '~/components';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [projectsView, setProjectsView] = useToggleView();

  const handleExternalLinks = () => {
    const allLinks = Array.from(document.querySelectorAll('a'));
    if (allLinks.length > 0) {
      allLinks.forEach(link => {
        if (link.host !== window.location.host) {
          link.setAttribute('rel', 'noopener noreferrer');
          link.setAttribute('target', '_blank');
        }
      });
    }
  };

  useEffect(() => {
    if (isLoading) {
      return;
    }

    handleExternalLinks();
  }, [isLoading]);

  return isLoading ? (
    <Loader finishLoading={() => setIsLoading(false)} />
  ) : (
    <>
      <Beams />
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
    </>
  );
}
