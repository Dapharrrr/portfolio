import { useEffect, useRef } from 'react';

const ParticleCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particlesArray = [];
    let mouse = { x: null, y: null, radius: 150 };

    const handleMouseMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const handleMouseOut = () => { mouse.x = null; mouse.y = null; };
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);
    window.addEventListener('resize', handleResize);

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.5;
        this.baseX = this.x;
        this.baseY = this.y;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.density = (Math.random() * 30) + 1;
      }

      draw() {
        let distToMouse = Infinity;
        if (mouse.x != null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          distToMouse = Math.sqrt(dx * dx + dy * dy);
        }

        // Les particules proches de la souris brillent plus
        const glow = distToMouse < mouse.radius 
          ? 1 - (distToMouse / mouse.radius) 
          : 0;

        const alpha = 0.3 + glow * 0.7;
        const size = this.size + glow * 2;

        ctx.beginPath();
        ctx.arc(this.x, this.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(41, 151, 255, ${alpha})`;
        ctx.fill();

        // Glow effect sur les particules proches
        if (glow > 0.3) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, size + 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(41, 151, 255, ${glow * 0.15})`;
          ctx.fill();
        }
      }

      update() {
        // Mouvement de base (dérive lente)
        this.x += this.vx;
        this.y += this.vy;

        // Rebond sur les bords (doux)
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        // Attraction douce vers la souris
        if (mouse.x != null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            const dirX = dx / distance;
            const dirY = dy / distance;
            this.vx += dirX * force * 0.4;
            this.vy += dirY * force * 0.4;
          }
        }

        // Friction pour que ça reste fluide
        this.vx *= 0.97;
        this.vy *= 0.97;

        this.draw();
      }
    }

    function init() {
      particlesArray = [];
      const count = Math.min((canvas.width * canvas.height) / 8000, 300);
      for (let i = 0; i < count; i++) {
        particlesArray.push(new Particle());
      }
    }

    function connect() {
      const maxDist = 120;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a + 1; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            // Ligne plus brillante si proche de la souris
            let mouseGlow = 0;
            if (mouse.x != null) {
              const midX = (particlesArray[a].x + particlesArray[b].x) / 2;
              const midY = (particlesArray[a].y + particlesArray[b].y) / 2;
              const mouseDist = Math.sqrt((mouse.x - midX) ** 2 + (mouse.y - midY) ** 2);
              mouseGlow = mouseDist < mouse.radius ? (1 - mouseDist / mouse.radius) : 0;
            }

            const alpha = (1 - dist / maxDist) * (0.08 + mouseGlow * 0.35);
            ctx.strokeStyle = `rgba(41, 151, 255, ${alpha})`;
            ctx.lineWidth = 0.5 + mouseGlow * 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    }

    function drawMouseGlow() {
      if (mouse.x == null) return;
      const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, mouse.radius);
      gradient.addColorStop(0, 'rgba(41, 151, 255, 0.03)');
      gradient.addColorStop(1, 'rgba(41, 151, 255, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function animate() {
      animationFrameId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawMouseGlow();
      particlesArray.forEach(p => p.update());
      connect();
    }

    init();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} id="bg-canvas" />;
};

export default ParticleCanvas;
