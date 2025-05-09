// src/hooks/useReveal.js
import { useEffect } from 'react';

export default function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('show');
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}
