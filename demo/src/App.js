"use client"

import React from "react"
import Confetti, { Rectangle, Circle } from "./Confetti/index.tsx"

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
        <Confetti total={10} Component={<Rectangle color="#333" />} />
      </div>
      <div className={"confettiContainer one"}>
        <Confetti
          total={30}
          Component={[
            <Rectangle color="red" />,
            <Circle color="#8B0000" />,
          ]}
        />
        <div className="controls">
          <code className="code">
            {'Customize Shapes or Use your own Components'}
          </code>
        </div>
      </div>
      <div className={"confettiContainer two"}>
        <Confetti
          total={40}
          Component={<Rectangle color="white" />}
        />
        <div className="controls">
          <code className="code">
          {'Have as much confetti as you want'}
          </code>
        </div>
      </div>
      <div className={"confettiContainer three"}>
        <Confetti
          total={70}
          Component={[
            <Rectangle color="red" />,
            <Circle color="rgb(25 115 238)" />,
          ]}
        />
        <div className="controls">
          <code className="code">
          {'Hot Swap Confetti mid fall'}
          </code>
        </div>
      </div>
    </div>
  )
}
