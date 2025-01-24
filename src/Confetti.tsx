import React, { useEffect, useRef, CSSProperties, HTMLAttributes, useState } from "react"
import styles from "./style.module.css"

interface ConfettiScreenProps extends HTMLAttributes<HTMLDivElement> {
  total: number
  Component: React.ReactNode | React.ReactNode[]
}

function ConfettiScreen({ total, Component, ...props }: ConfettiScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [confettiItems, setConfettiItems] = useState<React.ReactNode[]>([])

  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        const height = containerRef.current.offsetHeight
        containerRef.current.style.setProperty("--containerheight", `${height}px`)
      }
    }

    updateHeight()

    const resizeObserver = new ResizeObserver(updateHeight)
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const items = []

    for (let i = 0; i < total; i++) {
      const posX = `${Math.floor(Math.random() * 100)}%`
      const delay = `${(Math.random() * 5).toFixed(2)}s`
      const speed = `${(3 + Math.random() * 2).toFixed(2)}s`
      const posXDirection = `${((Math.random() - 0.5) * 800).toFixed(0)}%`
      const size = (1 + Math.random() * 0.2).toFixed(2)
      const rotate = `${Math.floor(Math.random() * 360) - 180}deg`

      const inlineStyles = {
        "--posX": posX,
        "--delay": delay,
        "--speed": speed,
        "--posXDirection": posXDirection,
        "--size": size,
        "--rotate": rotate,
      } as CSSProperties

      const componentContent = Array.isArray(Component)
        ? React.cloneElement(Component[i % Component.length] as React.ReactElement, { key: `component-${i}` })
        : React.cloneElement(Component as React.ReactElement, { key: `component-${i}` })

      items.push(
        <div key={i} className={styles.confetti} style={inlineStyles}>
          <span className={styles.confettiContent}>{componentContent}</span>
        </div>
      )
    }

    setConfettiItems(items)
  }, [total, Component])

  return (
    <div 
      ref={containerRef} 
      className={`${styles.confettiScreen} ${props.className || ''}`} 
      {...props}
    >
      {confettiItems}
    </div>
  )
}

export function Rectangle({ color }: { color: string }) {
  const width = Math.floor(6 + Math.random() * 6)
  const height = Math.floor(6 + Math.random() * 6)
  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: color,
      }}
    />
  )
}

export function Circle({ color }: { color: string }) {
  const size = Math.floor(6 + Math.random() * 6)

  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        backgroundColor: color,
      }}
    />
  )
}

export function Triangle({ color }: { color: string }) {
  const size = Math.floor(8 + Math.random() * 6)
  
  return (
    <div
      style={{
        width: 0,
        height: 0,
        borderLeft: `${size/2}px solid transparent`,
        borderRight: `${size/2}px solid transparent`,
        borderBottom: `${size}px solid ${color}`,
      }}
    />
  )
}

interface ConfettiProps extends HTMLAttributes<HTMLDivElement> {
  total?: number
  Component?: React.ReactNode | React.ReactNode[]
}

function Confetti({ total = 90, Component, ...props }: ConfettiProps) {
  const colors = ["#ff595e", "#ffca3a", "#8ac926", "#1982c4", "#6a4c93"]

  if (Component) {
    return <ConfettiScreen total={total} Component={Component} {...props} />
  }

  const availableComponents = [Rectangle, Circle, Triangle]

  const defaultComponents = Array.from({ length: total }, (_, index) => {
    const RandomComponent =
      availableComponents[Math.floor(Math.random() * availableComponents.length)]
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    return <RandomComponent key={index} color={randomColor} />
  })

  return <ConfettiScreen total={total} Component={defaultComponents} {...props} />
}

Confetti.displayName = 'Confetti'

export { Confetti }
export default Confetti
