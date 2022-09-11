import { useEffect, useState } from 'react';

export default function useToggleView() {
  const [projectsView, setProjectsView] = useState('grid');

  const setView = view => {
    window.localStorage.setItem('view', view);
    setProjectsView(view);
  };

  const handleToggleView = () => {
    if (projectsView === 'grid') {
      setView('list');
    } else {
      setView('grid');
    }
  };

  useEffect(() => {
    const localView = window.localStorage.getItem('view');

    if (localView) {
      setProjectsView(localView);
    } else {
      setView('grid');
    }
  }, []);

  return [projectsView, handleToggleView];
}
