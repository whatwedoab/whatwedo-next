import { MutableRefObject, useEffect, useState } from 'react'

export function useOffsets<T extends HTMLElement>(
  ref: MutableRefObject<T | undefined>,
): { top: number | null; bottom: number | null } {
  const [top, setTop] = useState<number | null>(null)
  const [bottom, setBottom] = useState<number | null>(null)

  useEffect(() => {
    if (!!ref.current) {
      setTimeout(() => {
        if (!!ref.current) {
          setTop(ref.current.offsetTop)
          setBottom(ref.current.offsetTop + ref.current.clientHeight)
        }
      })
      setTimeout(() => {
        if (!!ref.current) {
          setTop(ref.current.offsetTop)
          console.log('setting late offsettop', ref.current?.offsetTop)
          setBottom(ref.current.offsetTop + ref.current.clientHeight)
        }
      }, 1000)
    }
  }, [ref])

  return { top, bottom }
}
