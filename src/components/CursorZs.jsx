import { useEffect, useRef } from "react";
import "../cursor-zs.css";

const CursorZs = ({ enabled = true }) => {
  const layerRef = useRef(null);

  useEffect(() => {
    if (!enabled) return;

    let last = 0;
    const layer = layerRef.current;

    const onMove = (e) => {
      const now = performance.now();
      if (now - last < 55) return; // throttle a bit
      last = now;

      const z = document.createElement("span");
      z.className = "z-puff";
      z.textContent = Math.random() < 0.3 ? "z" : "Z";

      // start position, slight offset
      const x = e.clientX + (Math.random() * 6 - 3);
      const y = e.clientY + (Math.random() * 6 - 3);

      z.style.left = `${x}px`;
      z.style.top  = `${y}px`;

      // randomize path/size/time
      z.style.setProperty("--dx", `${Math.random()*28 - 14}px`);
      z.style.setProperty("--dy", `${-48 - Math.random()*40}px`);
      z.style.setProperty("--rot", `${Math.random()*30 - 15}deg`);
      z.style.setProperty("--scale", (0.8 + Math.random()*0.8).toFixed(2));
      z.style.animationDuration = `${(700 + Math.random()*450).toFixed(0)}ms`;

      layer.appendChild(z);
      z.addEventListener("animationend", () => z.remove());
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [enabled]);

  return (
    <div
      ref={layerRef}
      className="z-layer"
      aria-hidden
    />
  );
};

export default CursorZs;