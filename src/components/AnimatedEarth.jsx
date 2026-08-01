import { useEffect, useRef } from 'react';

const continents = [
  [[-14, 36], [7, 57], [34, 70], [68, 66], [101, 55], [142, 48], [153, 24], [120, 5], [78, 8], [55, 23], [35, 10], [22, 31], [-14, 36]],
  [[-18, 35], [10, 37], [34, 26], [45, 8], [35, -24], [19, -35], [4, -10], [-12, 8], [-18, 35]],
  [[-168, 61], [-139, 70], [-104, 54], [-79, 47], [-65, 25], [-84, 9], [-107, 21], [-126, 42], [-168, 61]],
  [[-81, 12], [-68, 4], [-48, -10], [-35, -24], [-54, -55], [-72, -38], [-78, -8], [-81, 12]],
  [[111, -12], [143, -11], [154, -28], [135, -42], [113, -34], [111, -12]],
];

const dataNodes = [
  [107, -6], [103, 1], [121, 14], [77, 28], [139, 36], [2, 48],
  [-74, 40], [-122, 37], [31, -1], [18, -33], [-46, -23], [151, -33],
];

const toRadians = (value) => value * Math.PI / 180;

function projectPoint(lon, lat, rotation, centerX, centerY, radius) {
  const longitude = toRadians(lon + rotation);
  const latitude = toRadians(lat);
  const latitudeRadius = Math.cos(latitude);
  const depth = latitudeRadius * Math.cos(longitude);

  return {
    x: centerX + radius * latitudeRadius * Math.sin(longitude),
    y: centerY - radius * Math.sin(latitude),
    depth,
    visible: depth > 0,
  };
}

function drawProjectedLine(context, points, rotation, centerX, centerY, radius) {
  let drawing = false;
  context.beginPath();

  points.forEach(([lon, lat]) => {
    const point = projectPoint(lon, lat, rotation, centerX, centerY, radius);

    if (!point.visible) {
      drawing = false;
      return;
    }

    if (drawing) {
      context.lineTo(point.x, point.y);
    } else {
      context.moveTo(point.x, point.y);
      drawing = true;
    }
  });

  context.stroke();
}

export default function AnimatedEarth() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');

    if (!canvas || !context) {
      return undefined;
    }

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let animationFrame = 0;
    let width = 0;
    let height = 0;
    let stars = [];

    const makeStars = () => {
      let seed = 90817;
      const random = () => {
        seed = (seed * 16807) % 2147483647;
        return (seed - 1) / 2147483646;
      };
      const count = width < 700 ? 52 : 110;

      stars = Array.from({ length: count }, (_, index) => ({
        x: random() * width,
        y: random() * height * 0.72,
        radius: 0.35 + random() * 1.1,
        alpha: 0.18 + random() * 0.48,
        phase: random() * Math.PI * 2 + index * 0.17,
      }));
    };

    const resize = () => {
      const bounds = canvas.parentElement.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(bounds.width, 1);
      height = Math.max(bounds.height, 1);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      makeStars();
    };

    const draw = (time = 0) => {
      context.clearRect(0, 0, width, height);

      stars.forEach((star) => {
        const shimmer = motionQuery.matches ? 0.74 : 0.62 + Math.sin(time * 0.001 + star.phase) * 0.28;
        context.beginPath();
        context.fillStyle = `rgba(155, 205, 255, ${star.alpha * shimmer})`;
        context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        context.fill();
      });

      const isCompact = width < 700;
      const radius = isCompact ? width * 0.92 : Math.min(width * 0.62, height * 0.82);
      const centerX = isCompact ? width * 0.5 : width * 0.58;
      const centerY = height + radius * (isCompact ? 0.12 : 0.1);
      const rotation = motionQuery.matches ? 18 : time * 0.0034;

      context.save();
      context.beginPath();
      context.arc(centerX, centerY, radius, 0, Math.PI * 2);
      context.clip();

      const globeGradient = context.createRadialGradient(
        centerX - radius * 0.12,
        centerY - radius * 0.82,
        radius * 0.05,
        centerX,
        centerY,
        radius,
      );
      globeGradient.addColorStop(0, 'rgba(31, 94, 151, 0.72)');
      globeGradient.addColorStop(0.42, 'rgba(8, 35, 64, 0.92)');
      globeGradient.addColorStop(1, 'rgba(2, 8, 18, 0.99)');
      context.fillStyle = globeGradient;
      context.fillRect(centerX - radius, centerY - radius, radius * 2, radius * 2);

      context.lineWidth = 0.7;
      context.strokeStyle = 'rgba(111, 168, 216, 0.12)';

      for (let latitude = -75; latitude <= 75; latitude += 15) {
        const line = [];
        for (let longitude = -180; longitude <= 180; longitude += 3) {
          line.push([longitude, latitude]);
        }
        drawProjectedLine(context, line, rotation, centerX, centerY, radius);
      }

      for (let longitude = -165; longitude <= 180; longitude += 15) {
        const line = [];
        for (let latitude = -90; latitude <= 90; latitude += 3) {
          line.push([longitude, latitude]);
        }
        drawProjectedLine(context, line, rotation, centerX, centerY, radius);
      }

      context.lineWidth = 1.05;
      context.strokeStyle = 'rgba(133, 191, 245, 0.38)';
      context.shadowColor = 'rgba(92, 167, 238, 0.36)';
      context.shadowBlur = 7;
      continents.forEach((continent) => {
        drawProjectedLine(context, continent, rotation, centerX, centerY, radius);
      });

      context.shadowBlur = 0;
      const visibleNodes = dataNodes.map(([lon, lat]) => (
        projectPoint(lon, lat, rotation, centerX, centerY, radius)
      ));

      context.lineWidth = 0.65;
      context.strokeStyle = 'rgba(112, 184, 247, 0.16)';
      visibleNodes.forEach((node, index) => {
        const next = visibleNodes[(index + 3) % visibleNodes.length];
        if (!node.visible || !next.visible) return;
        context.beginPath();
        context.moveTo(node.x, node.y);
        context.lineTo(next.x, next.y);
        context.stroke();
      });

      visibleNodes.forEach((node, index) => {
        if (!node.visible) return;
        const pulse = motionQuery.matches ? 1 : 1 + Math.sin(time * 0.002 + index) * 0.35;
        context.beginPath();
        context.fillStyle = `rgba(151, 207, 255, ${0.42 + node.depth * 0.48})`;
        context.arc(node.x, node.y, (1.2 + node.depth * 1.5) * pulse, 0, Math.PI * 2);
        context.fill();
      });

      context.restore();

      context.save();
      context.beginPath();
      context.arc(centerX, centerY, radius + 2, Math.PI, Math.PI * 2);
      context.lineWidth = 2;
      context.strokeStyle = 'rgba(116, 186, 250, 0.72)';
      context.shadowColor = 'rgba(69, 149, 226, 0.72)';
      context.shadowBlur = 22;
      context.stroke();
      context.restore();

      if (!motionQuery.matches) {
        animationFrame = window.requestAnimationFrame(draw);
      }
    };

    const restart = () => {
      window.cancelAnimationFrame(animationFrame);
      draw(performance.now());
    };

    resize();
    draw(performance.now());
    window.addEventListener('resize', resize);
    motionQuery.addEventListener('change', restart);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resize);
      motionQuery.removeEventListener('change', restart);
    };
  }, []);

  return (
    <div className="hero-space-backdrop" aria-hidden="true">
      <canvas ref={canvasRef} className="hero-earth-canvas"></canvas>
      <div className="hero-particles"></div>
    </div>
  );
}
