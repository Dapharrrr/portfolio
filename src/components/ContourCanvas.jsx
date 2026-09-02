import { useEffect, useRef } from 'react';

const LINE_GAP = 96;       // écart vertical entre deux courbes
const STEP = 8;            // pas d'échantillonnage horizontal
const MOUSE_RADIUS = 240;  // rayon d'influence du curseur
const MOUSE_LIFT = 22;     // amplitude du renflement sous le curseur

/**
 * Fond de courbes de niveau : des lignes quasi horizontales déformées par trois
 * sinusoïdes déphasées ligne à ligne, ce qui produit le resserrement et
 * l'écartement d'une carte topographique. Le curseur soulève localement le relief.
 */
const ContourCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = 0;
    let height = 0;
    let frame = 0;
    let stroke = 'rgba(36, 80, 155, 0.2)';
    const mouse = { x: -9999, y: -9999 };

    const readStroke = () => {
      const value = getComputedStyle(document.documentElement).getPropertyValue('--t-contour').trim();
      if (value) stroke = value;
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (elapsed) => {
      const t = elapsed * 0.00007;
      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = stroke;
      ctx.lineWidth = 1;

      const lines = Math.ceil(height / LINE_GAP) + 4;

      for (let i = 0; i < lines; i += 1) {
        const base = i * LINE_GAP - LINE_GAP * 2;
        // Déphasage léger d'une ligne à l'autre : elles se resserrent et
        // s'écartent sans jamais se croiser, comme des isohypses.
        const phase = i * 0.34;

        ctx.beginPath();
        for (let x = -STEP; x <= width + STEP; x += STEP) {
          const n = x * 0.0045;
          let y = base
            + Math.sin(n + t + phase) * 26
            + Math.sin(n * 2.1 - t * 1.4 + phase * 1.6) * 11
            + Math.sin(n * 0.45 + t * 0.5 - phase * 0.5) * 18;

          const dist = Math.hypot(x - mouse.x, base - mouse.y);
          if (dist < MOUSE_RADIUS) {
            const falloff = 1 - dist / MOUSE_RADIUS;
            y -= MOUSE_LIFT * falloff * falloff;
          }

          if (x === -STEP) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
    };

    const loop = (elapsed) => {
      draw(elapsed);
      frame = requestAnimationFrame(loop);
    };

    const handleResize = () => {
      resize();
      if (reduceMotion) draw(0);
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    // Le trait suit la couleur du thème courant
    const themeObserver = new MutationObserver(() => {
      readStroke();
      if (reduceMotion) draw(0);
    });

    readStroke();
    resize();
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    if (reduceMotion) draw(0);
    else frame = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frame);
      themeObserver.disconnect();
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div id="bg-glow" aria-hidden="true" />
      <canvas id="bg-canvas" ref={canvasRef} aria-hidden="true" />
    </>
  );
};

export default ContourCanvas;
