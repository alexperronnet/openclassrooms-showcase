import { useEffect } from 'react';

// This hook is used to track outbound links
export default function useOutboundLink() {
  useEffect(() => {
    const links = document.querySelectorAll('a');

    links.forEach(link => {
      link.addEventListener('click', () => {
        if (link.hostname !== window.location.hostname) {
          link.setAttribute('target', '_blank');
          link.setAttribute('rel', 'noopener noreferrer');
        }
      });
    });
  }, []);
}
