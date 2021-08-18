import * as React from 'react'
import { SVGProps } from 'react'

interface Props extends Omit<SVGProps<SVGSVGElement>, 'xmlns' | 'viewBox'> {}

export function Logo(props: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 316.17 109.73"
      {...props}
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M169.61,54.34,182.28,7.9h28.83l-29.63,93.41H160.13l-13.61-45.5-13.61,45.5H111.56L81.94,7.9h28.82l12.68,46.44L136.78,11h19.75Z" />
          <path d="M39.45,35.25,0,24.49V0L79.35,25.17V43.3L40.7,54.87,79.35,66.43V84.56L0,109.73V85.25L39.45,74.48,2.61,63.14V46.36Z" />
          <path d="M217.6,8.33h98.57V54.65c0,28.73-22.11,50.13-49.28,50.13S217.6,83.38,217.6,54.65ZM290.82,37.9H243V50.57c0,15.2,9.43,24.64,23.94,24.64S291,65.77,290.82,50.57Z" />
        </g>
      </g>
    </svg>
  )
}
