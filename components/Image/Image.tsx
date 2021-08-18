import React, { CSSProperties, useEffect, useRef } from 'react'
import NextImage, { ImageProps } from 'next/image'

type Props = ImageProps & {
  onLoadingComplete?: () => any
  containerStyle?: CSSProperties
  containerClassName?: string
}

export function Image(props: Props) {
  const {
    onLoadingComplete = () => null,
    containerStyle,
    containerClassName,
    ...rest
  } = props
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (
      (ref.current?.firstChild?.firstChild as HTMLImageElement | undefined)
        ?.complete
    ) {
      onLoadingComplete()
    }
  }, [onLoadingComplete])

  return (
    <div ref={ref} style={containerStyle} className={containerClassName}>
      <NextImage onLoad={() => onLoadingComplete()} {...rest} />
    </div>
  )
}
