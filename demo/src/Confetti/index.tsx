/* WIP as I develop the Component */

import React from "react";
import "./styles.css";

function Confetti({
  total = 90,
  Component,
}: {
  total: number;
  Component: React.ReactNode | React.ReactNode[];
}) {
  const confettiItems = [];

  for (let i = 0; i < total; i++) {
    const posX = `${Math.floor(Math.random() * 100)}%`;
    const delay = `${(Math.random() * 5).toFixed(2)}s`;
    const speed = `${(3 + Math.random() * 2).toFixed(2)}s`;
    const posXDirection = `${((Math.random() - 0.5) * 800).toFixed(0)}%`;
    const size = (1 + Math.random() * 0.2).toFixed(2);
    const rotate = `${Math.floor(Math.random() * 360) - 180}deg`;

    const style = {
      "--posX": posX,
      "--delay": delay,
      "--speed": speed,
      "--posXDirection": posXDirection,
      "--size": size,
      "--rotate": rotate,
    } as React.CSSProperties;

    // If Component is an array, pick a random one, otherwise use the single component
    const componentContent = Array.isArray(Component)
      ? Component[i % Component.length]
      : Component;

    confettiItems.push(
      <div key={i} className={'confetti'} style={style}>
        <span className={'confettiContent'}>{componentContent}</span>
      </div>
    );
  }

  return <div className={'confettiScreen'}>{confettiItems}</div>;
}

export function Rectangle({ color }: { color: string }) {
  const width = Math.floor(8 + Math.random() * 6);
  const height = Math.floor(8 + Math.random() * 6);
  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: color,
      }}
    />
  );
}

export function Circle({ color }: { color: string }) {
  
  const size = Math.floor(8 + Math.random() * 4);

  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        backgroundColor: color,
      }}
    />
  );
}
export { Confetti };
export default Confetti;