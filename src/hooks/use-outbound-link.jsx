import { useEffect } from 'react';

// This hook is used to track outbound links
export default function useOutboundLink() {
  useEffect(() => {
    const links = document.querySelectorAll('a');

    links.forEach(link => {
      link.addEventListener('click', event => {
        if (link.hostname !== window.location.hostname) {
          event.preventDefault();
          window.open(link.href, '_blank', 'noopener,noreferrer');
        }
      });
    });
  }, []);
}
