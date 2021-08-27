import React, { useMemo, useRef } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { IS_PROD } from '../../pages/_app'

export const DEFAULT_KEYWORDS = [
  'what we do',
  'wwd',
  'design',
  'designer',
  'web design',
  'web designer',
  'mobile app',
  'mobile app developer',
  'visual branding',
  'visual identity',
  'app',
  'developer',
  'web developer',
  'app developer',
  'full stack developer',
  'frontend developer',
  'freelance',
  'freelancer',
  'self employed',
  'consultant',
  'logo',
  'logodesign',
  'logo design',
  'logodesigner',
  'logo designer',
  'logo designer for hire',
  'designer for hire',
  'developer for hire',
  'front end developer for hire',
  'freelance developer for hire',
  'freelance designer for hire',
]

interface Props {
  image?: string
  description?: string
  keywords?: string[]
  title?: string
  noIndex?: boolean
  noFollow?: boolean
}

export function PageHead(props: Props) {
  const {
    image = 'https://whatwedo.se/assets/wwd-logo-blue-red.png',
    description = 'I am a designer and full stack developer. I create digital things. Feel free to browse some of my work, read more about me or get in touch.',
    title = 'What we do — designer and developer',
    keywords = [],
    noIndex = false,
    noFollow = false,
  } = props
  const router = useRouter()
  const url = useRef<string>(`https://whatwedo.se/${router.asPath}`).current

  const allKeywords = useMemo(() => [...keywords, DEFAULT_KEYWORDS], [keywords])

  const robots = []
  if (noIndex || !IS_PROD) {
    robots.push('noindex')
  }
  if (noFollow || !IS_PROD) {
    robots.push('nofollow')
  }
  const robotsValue = !!robots.length && robots.join(', ')

  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="title" key="title" content={title} />
      <meta name="description" content={description} />
      {robotsValue && <meta name="robots" content={robotsValue} />}
      <meta
        name="copyright"
        content={`Copyright (c) What we do AB ${new Date().getFullYear()}`}
      />
      <meta name="keywords" key="keywords" content={allKeywords.join(', ')} />
      <meta property="quote" key="quote" content={description} />
      <meta property="image" key="image" content={image} />
      <meta property="og:type" key="og:type" content="website" />
      <meta property="og:title" key="og:title" content={title} />
      <meta property="og:quote" key="og:quote" content={description} />
      <meta
        property="og:hashtag"
        key="og:hashtag"
        content="#whatwedo #desginer #developer"
      />
      <meta property="og:image" key="og:image" content={image} />
      <meta property="og:image:type" key="og:image:type" content="image/*" />
      <meta property="og:url" key="og:url" content={url} />
      <meta property="og:site_name" key="og:site_name" content="What we do" />
      <meta
        property="og:description"
        key="og:description"
        content={description}
      />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  )
}
