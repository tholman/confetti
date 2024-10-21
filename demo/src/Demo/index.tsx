"use client"

import React from "react"
import clsx from "clsx"
import Confetti from "../Confetti"
import style from "./style.module.css"

export default function Demo() {
  return (
    <div className={clsx(style.authenticatorContainer)}>
      <div className={clsx(style.documentation, "flex flex-col justify-center")}>
        <h1>React Confetti</h1>
        <p className={'mt-3'}>
          A simple, customizable React component to help you add a dash of surprise and delight to your
          site.
        </p>
        <p className={'mt-5'}>
          <code className={clsx(style.code)}>npm install @tholman/confetti</code>
        </p>
        <p className={'mt-5'}>
          <code className={clsx(style.code)}>{`<Confetti total={10} />`}</code>
        </p>
        <p className={'mt-6'}>
          <a className={'italic'} href="https://github.com/tholman/confetti">
            See the documentation for full usage ↠
          </a>
        </p>
        <Confetti total={5} Component={<div className={clsx("w-3 h-2")} style={{ background: "red" }} />} />
      </div>
      <div className={clsx(style.confettiContainer, style.one)}>
        <Confetti total={10} Component={<div className={clsx("w-3 h-2")} style={{ background: "red" }} />} />
      </div>
      <div className={clsx(style.confettiContainer, style.two)}>
        <Confetti total={20} Component={<div className={clsx("w-3 h-2")} style={{ background: "red" }} />}>
      </div>
      <div className={clsx(style.confettiContainer, style.three)}>
        <Confetti
          total={70}
          Component={[<div className={clsx("w-3 h-2")} style={{ background: "red" }} />, <div className={clsx("w-2 h-3")} style={{ background: "rgb(25 115 238)" }} />]}
        />
      </div>
    </div>
  )
}
