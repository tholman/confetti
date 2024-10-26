import React, { useEffect, useRef } from "react"
import styles from "./style.module.css"

function ConfettiScreen({
  total = 90,
  Component,
}: {
  total: number
  Component: React.ReactNode | React.ReactNode[]
}) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        const height = containerRef.current.offsetHeight
        containerRef.current.style.setProperty("--containerHeight", `${height}px`)
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

  const confettiItems = []

  for (let i = 0; i < total; i++) {
    const posX = `${Math.floor(Math.random() * 100)}%`
    const delay = `${(Math.random() * 5).toFixed(2)}s`
    const speed = `${(3 + Math.random() * 2).toFixed(2)}s`
    const posXDirection = `${((Math.random() - 0.5) * 800).toFixed(0)}%`
    const size = (1 + Math.random() * 0.2).toFixed(2)
    const rotate = `${Math.floor(Math.random() * 360) - 180}deg`

    const style = {
      "--posX": posX,
      "--delay": delay,
      "--speed": speed,
      "--posXDirection": posXDirection,
      "--size": size,
      "--rotate": rotate,
    } as React.CSSProperties

    const componentContent = Array.isArray(Component) ? Component[i % Component.length] : Component

    confettiItems.push(
      <div key={i} className={styles.confetti} style={style}>
        <span className={styles.confettiContent}>{componentContent}</span>
      </div>
    )
  }

  return (
    <div ref={containerRef} className={styles.confettiScreen}>
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

function Confetti(props: { total: number; Component?: React.ReactNode | React.ReactNode[] }) {
  const colors = ["#ff595e", "#ffca3a", "#8ac926", "#1982c4", "#6a4c93"]

  if (props.Component) {
    return <ConfettiScreen total={props.total} Component={props.Component} />
  }

  const availableComponents = [Rectangle, Circle]

  const defaultComponents = Array.from({ length: props.total }, () => {
    const RandomComponent =
      availableComponents[Math.floor(Math.random() * availableComponents.length)]
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    return <RandomComponent color={randomColor} />
  })

  return <ConfettiScreen total={props.total} Component={defaultComponents} />
}

export { Confetti }
export default Confetti
