import { useEffect, useState } from 'react'

export function useParagraphPrinter(
  texts: string[],
  speed = 250,
  start = true,
  onComplete?: () => void,
): string[] {
  const [paragraphs, setParagraphs] = useState<string[]>([''])
  const [paragraphIndex, setParagraphIndex] = useState<number>(0)

  useEffect(() => {
    if (!start) {
      return
    }

    const text = texts[paragraphIndex]
    const printedParagraphs = paragraphs.filter((_, i) => i !== paragraphIndex)
    const printedText = paragraphs[paragraphIndex]
    const nextIndex = printedText.length

    if (nextIndex >= text?.length) {
      onComplete && onComplete()
      return
    }

    const lastChar =
      nextIndex > 0 ? text.substring(nextIndex - 1, nextIndex) : null
    const nextChar = text.substring(nextIndex, nextIndex + 1)
    const isNewParagraph = paragraphIndex !== 0 && nextIndex === 0
    const isAfterPunctuation = !!lastChar && ['.', '!', '?'].includes(lastChar)

    const waitTime = isNewParagraph
      ? Math.max(Math.round(Math.random() * (speed * 4)), speed * 2)
      : isAfterPunctuation
      ? Math.max(Math.round(Math.random() * (speed * 3)), speed * 2)
      : Math.round(Math.random() * speed)

    const timeoutHandler = setTimeout(() => {
      const paragraphsContent = [
        ...printedParagraphs,
        `${printedText}${nextChar}`,
      ]
      setParagraphs(paragraphsContent)
      if (
        printedText.length + 1 === text.length &&
        paragraphIndex + 1 !== texts.length
      ) {
        setParagraphs([...paragraphsContent, ''])
        setParagraphIndex(paragraphIndex + 1)
      }
    }, waitTime)
    return () => clearTimeout(timeoutHandler)
  }, [start, paragraphs, paragraphIndex])

  return paragraphs
}
