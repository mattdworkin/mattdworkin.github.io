"use client"

import { useEffect, useRef } from "react"

export function Donut() {
  const preRef = useRef<HTMLPreElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!preRef.current || !canvasRef.current) return

    const pretag = preRef.current
    const canvastag = canvasRef.current

    let tmr1: NodeJS.Timeout | undefined
    let tmr2: NodeJS.Timeout | undefined
    let A = 1
    let B = 1

    const asciiframe = () => {
      const b: string[] = []
      const z: number[] = []
      A += 0.07
      B += 0.03
      const cA = Math.cos(A),
        sA = Math.sin(A),
        cB = Math.cos(B),
        sB = Math.sin(B)

      for (let k = 0; k < 1760; k++) {
        b[k] = k % 80 === 79 ? "\n" : " "
        z[k] = 0
      }

      for (let j = 0; j < 6.28; j += 0.07) {
        const ct = Math.cos(j),
          st = Math.sin(j)
        for (let i = 0; i < 6.28; i += 0.02) {
          const sp = Math.sin(i),
            cp = Math.cos(i),
            h = ct + 2,
            D = 1 / (sp * h * sA + st * cA + 5),
            t = sp * h * cA - st * sA

          const x = Math.floor(40 + 30 * D * (cp * h * cB - t * sB)),
            y = Math.floor(12 + 15 * D * (cp * h * sB + t * cB)),
            o = x + 80 * y,
            N = Math.floor(
              8 * ((st * sA - sp * ct * cA) * cB - sp * ct * sA - st * cA - cp * ct * sB)
            )

          if (y < 22 && y >= 0 && x >= 0 && x < 79 && D > z[o]) {
            z[o] = D
            b[o] = ".,-~:;=!*#$@"[N > 0 ? N : 0]
          }
        }
      }
      pretag.innerHTML = b.join("")
    }

    const R1 = 1
    const R2 = 2
    const K1 = 150
    const K2 = 5

    const canvasframe = () => {
      const ctx = canvastag.getContext("2d")
      if (!ctx) return

      ctx.fillStyle = "#000"
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)

      if (tmr1 === undefined) {
        A += 0.07
        B += 0.03
      }

      const cA = Math.cos(A),
        sA = Math.sin(A),
        cB = Math.cos(B),
        sB = Math.sin(B)

      for (let j = 0; j < 6.28; j += 0.3) {
        const ct = Math.cos(j),
          st = Math.sin(j)
        for (let i = 0; i < 6.28; i += 0.1) {
          const sp = Math.sin(i),
            cp = Math.cos(i)
          const ox = R2 + R1 * ct,
            oy = R1 * st

          const x = ox * (cB * cp + sA * sB * sp) - oy * cA * sB
          const y = ox * (sB * cp - sA * cB * sp) + oy * cA * cB
          const ooz = 1 / (K2 + cA * ox * sp + sA * oy)
          const xp = 150 + K1 * ooz * x
          const yp = 120 - K1 * ooz * y
          const L =
            0.7 *
            (cp * ct * sB - cA * ct * sp - sA * st + cB * (cA * st - ct * sA * sp))

          if (L > 0) {
            ctx.fillStyle = `rgba(255,255,255,${L})`
            ctx.fillRect(xp, yp, 1.5, 1.5)
          }
        }
      }
    }

    // Start ASCII animation
    asciiframe()
    tmr1 = setInterval(asciiframe, 50)

    // Start canvas animation
    tmr2 = setInterval(canvasframe, 50)

    return () => {
      if (tmr1) clearInterval(tmr1)
      if (tmr2) clearInterval(tmr2)
    }
  }, [])

  return (
    <div className="flex flex-col items-center gap-8">
      <pre
        ref={preRef}
        className="font-mono text-[8px] text-green-500 bg-black whitespace-pre leading-none p-4 rounded"
      />
      <canvas
        ref={canvasRef}
        width="320"
        height="240"
        className="bg-black rounded"
      />
    </div>
  )
}
