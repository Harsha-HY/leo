import React, { useRef, useState } from 'react';

export default function TiltCard({
  children,
  className = "",
  maxTilt = 10,
  scale = 1.02,
  glare = true,
  onClick
}) {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({});
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`,
      '--mouse-x': `${(x / rect.width) * 100}%`,
      '--mouse-y': `${(y / rect.height) * 100}%`,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
    });
  };

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={`tilt-card relative preserve-3d cursor-pointer ${className}`}
    >
      {/* Dynamic 3D Glare Lighting overlay */}
      {glare && <div className="glare-overlay" />}

      {/* Card Inner with 3D Depth */}
      <div className="tilt-card-inner w-full h-full">
        {children}
      </div>
    </div>
  );
}
