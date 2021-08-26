import { DESKTOP_HEADER_HEIGHT } from './App.context'

export function isTop(
  scrollPos: number,
  top: number | null | undefined,
  bottom: number | null | undefined,
) {
  return (
    top !== null &&
    top !== undefined &&
    bottom !== null &&
    bottom !== undefined &&
    scrollPos >= top - DESKTOP_HEADER_HEIGHT &&
    scrollPos < bottom - DESKTOP_HEADER_HEIGHT
  )
}

export function isScrolledIn(
  scrollPos: number,
  top: number | null | undefined,
  bottom: number | null | undefined,
) {
  return (
    top !== null &&
    top !== undefined &&
    bottom !== null &&
    bottom !== undefined &&
    scrollPos >= top - DESKTOP_HEADER_HEIGHT / 2 &&
    scrollPos < bottom - DESKTOP_HEADER_HEIGHT / 2
  )
}
