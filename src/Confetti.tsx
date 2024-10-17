// src/CoolConfetti.tsx
import React from 'react';
import styles from './style.module.css';

export default function CoolConfetti({
  total = 100,
  Component,
}: {
  total: number;
  Component: React.ReactNode;
}) {
  const confettiItems = [];

  for (let i = 0; i < total; i++) {
    const posX = `${Math.floor(Math.random() * 100)}%`;
    const delay = `${(Math.random() * 5).toFixed(2)}s`;
    const speed = `${(4 + Math.random() * 2).toFixed(2)}s`;
    const posXDirection = `${((Math.random() - 0.5) * 800).toFixed(0)}%`;
    const size = (1 + Math.random() * 0.2).toFixed(2);
    const rotate = `${Math.floor(Math.random() * 360) - 180}deg`;

    const style = {
      '--posX': posX,
      '--delay': delay,
      '--speed': speed,
      '--posXDirection': posXDirection,
      '--size': size,
      '--rotate': rotate,
    } as React.CSSProperties;

    confettiItems.push(
      <div key={i} className={styles.confetti} style={style}>
        <span className={styles.confettiContent}>{Component}</span>
      </div>
    );
  }

  return <div className={styles.confettiScreen}>{confettiItems}</div>;
}
