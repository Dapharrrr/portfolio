import { useEffect } from 'react';

/* Une seule boucle pour toute la page : chaque effet lié au scroll s'y abonne,
 * et tous sont rappelés au plus une fois par image. */
const callbacks = new Set();
let frame = 0;
let observer = null;

const run = () => {
  frame = 0;
  callbacks.forEach((cb) => cb());
};

const schedule = () => {
  if (!frame) frame = requestAnimationFrame(run);
};

const bind = () => {
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule);
  // La hauteur de page bouge aussi sans scroll : accordéon, police chargée
  if (typeof ResizeObserver !== 'undefined') {
    observer = new ResizeObserver(schedule);
    observer.observe(document.body);
  }
};

const unbind = () => {
  cancelAnimationFrame(frame);
  frame = 0;
  window.removeEventListener('scroll', schedule);
  window.removeEventListener('resize', schedule);
  observer?.disconnect();
  observer = null;
};

export const subscribeScroll = (cb) => {
  callbacks.add(cb);
  if (callbacks.size === 1) bind();
  schedule();
  return () => {
    callbacks.delete(cb);
    if (!callbacks.size) unbind();
  };
};

export const clamp01 = (v) => Math.min(1, Math.max(0, v));

/**
 * Écrit l'avancement du scroll dans la variable CSS `--p` (0 → 1) de l'élément.
 * - `view`  : de l'entrée par le bas à la sortie par le haut de la fenêtre
 * - `enter` : du bas de la fenêtre jusqu'aux deux tiers de sa hauteur
 * - `exit`  : de la position de repos jusqu'à la sortie par le haut
 */
export const useScrollProgress = (ref, mode = 'view') => {
  useEffect(() => subscribeScroll(() => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight;
    let p;

    if (mode === 'exit') {
      p = -rect.top / rect.height;
    } else if (mode === 'enter') {
      const atBottom = vh + window.scrollY >= document.documentElement.scrollHeight - 2;
      p = atBottom ? 1 : (vh * 0.9 - rect.top) / (vh * 0.3);
    } else {
      p = (vh - rect.top) / (vh + rect.height);
    }

    el.style.setProperty('--p', clamp01(p).toFixed(4));
  }), [ref, mode]);
};
