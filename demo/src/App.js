"use client"

import React from "react"
import Confetti from "./Confetti/index.tsx"

export default function Demo() {
  return (
    <div className={"main"}>
      <div className="documentation">
        <h1>React Confetti</h1>
        <p className="mt-3">
          A simple, customizable React component to help you add a dash of surprise and delight to
          your site.
        </p>
        <p className="mt-5">
          <code className={"code"}>npm install @tholman/confetti</code>
        </p>
        <p className="mt-5">
          <code className={"code"}>{`<Confetti total={10} />`}</code>
        </p>
        <p className="mt-6">
          <a className="italic" href="https://github.com/tholman/confetti">
            See the documentation for full usage ↠
          </a>
        </p>
        <Confetti total={10} Component={<div className="w-3 h-2" style={{ background: "#333" }} />} />
      </div>
      <div className={"confettiContainer one"}>
        <Confetti
          total={30}
          Component={[<div className="w-3 h-2" style={{ background: "red" }} />, <div className="w-3 h-3" style={{ background: "red", borderRadius: "50%" }} />]}
        />
        <div className="controls">
          <code className="code">
            {'Custom Shapes'}
          </code>
        </div>
      </div>
      <div className={"confettiContainer two"}>
        <Confetti
          total={40}
          Component={<div className="w-3 h-2" style={{ background: "white" }} />}
        />
        <div className="controls">
          <code className="code">
          {'Custom Colors'}
          </code>
        </div>
      </div>
      <div className={"confettiContainer three"}>
        <Confetti
          total={70}
          Component={[
            <div className="w-3 h-2" style={{ background: "red" }} />,
            <div className="w-2 h-3" style={{ background: "rgb(25 115 238)" }} />,
          ]}
        />
        <div className="controls">
          <code className="code">
          {'Hot Swap & More'}
          </code>
        </div>
      </div>
    </div>
  )
}
