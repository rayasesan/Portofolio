import { useEffect, useRef, useState } from 'react';
import createGlobe from 'cobe';

const defaultMarkers = [
  { location: [-6.2, 106.82], size: 0.055 },
  { location: [1.36, 103.99], size: 0.045 },
  { location: [35.55, 139.78], size: 0.04 },
  { location: [49.01, 2.55], size: 0.036 },
  { location: [37.62, -122.38], size: 0.034 },
  { location: [19.09, 72.87], size: 0.032 },
];

const defaultArcs = [
  { from: [-6.2, 106.82], to: [1.36, 103.99] },
  { from: [1.36, 103.99], to: [35.55, 139.78] },
  { from: [1.36, 103.99], to: [49.01, 2.55] },
  { from: [49.01, 2.55], to: [37.62, -122.38] },
  { from: [1.36, 103.99], to: [19.09, 72.87] },
];

export default function GlobeCdn({
  className = '',
  markers = defaultMarkers,
  arcs = defaultArcs,
  speed = 0.004,
}) {
  const wrapperRef = useRef(null);
  const canvasRef = useRef(null);
  const pointerRef = useRef(null);
  const dragRef = useRef({ phi: 0, theta: 0 });
  const offsetRef = useRef({ phi: 0, theta: 0 });
  const pausedRef = useRef(false);
  const [size, setSize] = useState(0);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) {
      return undefined;
    }

    const updateSize = () => {
      setSize(Math.round(wrapper.getBoundingClientRect().width));
    };

    updateSize();
    const observer = new ResizeObserver(updateSize);
    observer.observe(wrapper);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handlePointerMove = (event) => {
      if (!pointerRef.current) {
        return;
      }

      dragRef.current = {
        phi: (event.clientX - pointerRef.current.x) / 260,
        theta: (event.clientY - pointerRef.current.y) / 720,
      };
    };

    const handlePointerUp = () => {
      if (pointerRef.current) {
        offsetRef.current = {
          phi: offsetRef.current.phi + dragRef.current.phi,
          theta: offsetRef.current.theta + dragRef.current.theta,
        };
      }

      pointerRef.current = null;
      dragRef.current = { phi: 0, theta: 0 };
      pausedRef.current = false;

      if (canvasRef.current) {
        canvasRef.current.style.cursor = 'grab';
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerup', handlePointerUp, { passive: true });

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !size) {
      return undefined;
    }

    let phi = -0.9;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const globe = createGlobe(canvas, {
      devicePixelRatio: dpr,
      width: size * dpr,
      height: size * dpr,
      phi,
      theta: 0.22,
      dark: 1,
      diffuse: 1.45,
      scale: 1,
      mapSamples: 14000,
      mapBrightness: 5.5,
      baseColor: [0.92, 0.94, 0.98],
      markerColor: [0.94, 0.26, 0.26],
      glowColor: [0.95, 0.16, 0.16],
      opacity: 0.92,
      markerElevation: 0.035,
      arcColor: [0.94, 0.26, 0.26],
      arcWidth: 0.55,
      arcHeight: 0.24,
      markers,
      arcs,
      onRender: (state) => {
        if (!pausedRef.current) {
          phi += speed;
        }

        state.phi = phi + offsetRef.current.phi + dragRef.current.phi;
        state.theta = 0.22 + offsetRef.current.theta + dragRef.current.theta;
      },
    });

    canvas.style.opacity = '1';

    return () => {
      globe.destroy();
    };
  }, [arcs, markers, size, speed]);

  const handlePointerDown = (event) => {
    pointerRef.current = { x: event.clientX, y: event.clientY };
    pausedRef.current = true;

    if (canvasRef.current) {
      canvasRef.current.style.cursor = 'grabbing';
    }
  };

  return (
    <div ref={wrapperRef} className={`portfolio-globe ${className}`}>
      <canvas
        ref={canvasRef}
        className="portfolio-globe-canvas"
        onPointerDown={handlePointerDown}
        aria-label="Interactive globe showing AI and data request flow"
      />
      <div className="portfolio-globe-ring" aria-hidden="true"></div>
      <div className="portfolio-globe-scanline" aria-hidden="true"></div>
    </div>
  );
}
