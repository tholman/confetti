"use client"

import React, { useEffect, useRef } from "react"
import Confetti, { Rectangle, Circle } from "@tholman/confetti"

export default function Demo() {
  const borderRefs = useRef([])

  useEffect(() => {
    // Store current refs in a variable that will be captured in the closure
    const currentRefs = borderRefs.current

    currentRefs.forEach((rect, index) => {
      if (!rect) return

      const perimeter = rect.getTotalLength()
      const dashLength = Math.floor(Math.random() * (120 - 70 + 1)) + 70

      // Random offset for each animation
      const randomDelay = Math.random() * -2

      rect.style.stroke = "url(#border-gradient)"
      rect.style.strokeWidth = "2"
      rect.style.strokeDasharray = `${dashLength}, ${perimeter - dashLength}`
      rect.style.strokeDashoffset = perimeter

      const styleName = `rotate-${Math.random().toString(36).substr(2, 9)}`

      const styleSheet = document.createElement("style")
      styleSheet.textContent = `
        @keyframes ${styleName} {
          to {
            stroke-dashoffset: 0;
          }
        }
      `
      document.head.appendChild(styleSheet)

      rect.style.animation = `${styleName} 8s linear forwards infinite`
      rect.style.animationDelay = `${randomDelay}s`

      // Add hover handlers
      const container = rect.closest(".code-border")
      container?.addEventListener("mouseenter", () => {
        const growFactor = 3.4 // 15% increase
        rect.style.strokeDasharray = `${dashLength * growFactor}, ${
          perimeter - dashLength * growFactor
        }`
      })

      container?.addEventListener("mouseleave", () => {
        rect.style.strokeDasharray = `${dashLength}, ${perimeter - dashLength}`
      })
    })

    return () => {
      // Use captured refs in cleanup
      currentRefs.forEach((rect) => {
        const container = rect.closest(".code-border")
        container?.removeEventListener("mouseenter", () => {})
        container?.removeEventListener("mouseleave", () => {})
      })
    }
  }, [])

  // Helper function to add refs
  const addToRefs = (el) => {
    if (el && !borderRefs.current.includes(el)) {
      borderRefs.current.push(el)
    }
  }

  return (
    <div className={"main"}>
      <div className="documentation">
        <h1>React Confetti</h1>
        <p className="mt-3">
          A simple, customizable React component to help you add a dash of surprise and delight to
          your site.
        </p>
        <div className="codewrapper">
          <code className={"code"}>
            <svg
              className="code-border"
              width="100%"
              height="100%"
              style={{ position: "absolute", top: 0, left: 0 }}
            >
              <defs>
                <linearGradient id="border-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1488fc" stopOpacity="0" />
                  <stop offset="20%" stopColor="#1488fc" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#1488fc" stopOpacity="0.6" />
                  <stop offset="80%" stopColor="#1488fc" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#1488fc" stopOpacity="0" />
                </linearGradient>
              </defs>
              <rect
                ref={addToRefs}
                width="100%"
                height="100%"
                fill="none"
                stroke="url(#border-gradient)"
                strokeWidth="2"
                rx="8"
              />
            </svg>
            npm install @tholman/confetti
          </code>
        </div>
        <div className="codewrapper">
          <code className={"code"}>
            {" "}
            <svg
              className="code-border"
              width="100%"
              height="100%"
              style={{ position: "absolute", top: 0, left: 0 }}
            >
              <defs>
                <linearGradient id="border-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1488fc" stopOpacity="0" />
                  <stop offset="20%" stopColor="#1488fc" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#1488fc" stopOpacity="0.6" />
                  <stop offset="80%" stopColor="#1488fc" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#1488fc" stopOpacity="0" />
                </linearGradient>
              </defs>
              <rect
                ref={addToRefs}
                width="100%"
                height="100%"
                fill="none"
                stroke="url(#border-gradient)"
                strokeWidth="2"
                rx="8"
              />
            </svg>
            {`import Confetti from '@tholman/confetti';`}
          </code>
        </div>
        <div className="mt-5 codewrapper">
          <code className={"code"}>
            {" "}
            <svg
              className="code-border"
              width="100%"
              height="100%"
              style={{ position: "absolute", top: 0, left: 0 }}
            >
              <defs>
                <linearGradient id="border-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1488fc" stopOpacity="0" />
                  <stop offset="20%" stopColor="#1488fc" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#1488fc" stopOpacity="0.6" />
                  <stop offset="80%" stopColor="#1488fc" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#1488fc" stopOpacity="0" />
                </linearGradient>
              </defs>
              <rect
                ref={addToRefs}
                width="100%"
                height="100%"
                fill="none"
                stroke="url(#border-gradient)"
                strokeWidth="2"
                rx="8"
              />
            </svg>
            {`<Confetti total={99} />`}
          </code>
        </div>
        <p className="mt-6">
          <a className="italic" href="https://github.com/tholman/confetti">
            See the documentation for full usage ↠
          </a>
        </p>
        <Confetti total={10} Component={<Rectangle color="#333" />} />
      </div>
      <div className={"confettiContainer one"}>
        <Confetti total={30} Component={[<Rectangle color="red" />, <Circle color="#8B0000" />]} />
        {/* <div className="controls">
          <code className="code">
            {'Customize Shapes or Use your own Components'}
          </code>
        </div> */}
      </div>
      <div className={"confettiContainer two"}>
        <Confetti total={40} Component={<Rectangle color="white" />} />
        {/* <div className="controls">
          <code className="code">
          {'Have as much confetti as you want'}
          </code>
        </div> */}
      </div>
      <div className={"confettiContainer three"}>
        <Confetti
          total={70}
          Component={[<Rectangle color="red" />, <Circle color="rgb(25 115 238)" />]}
        />
        {/* <div className="controls">
          <code className="code">
          {'Hot Swap Confetti mid fall'}
          </code>
        </div> */}
      </div>
    </div>
  )
}
