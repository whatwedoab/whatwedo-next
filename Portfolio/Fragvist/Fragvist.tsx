import React, { useRef } from 'react'
import s from './Fragvist.module.scss'
import { Tags } from '../../components/Tags/Tags'
import { Image } from '../../components/Image/Image'
import { useBackgroundColor } from '../../services/useBackgroundColor'
import { useColor } from '../../services/useColor'
import { useActiveNav } from '../../services/useActiveNav'
import { COLOR } from '../../styles/COLOR'
import { useOffsets } from '../../services/useOffsets'
import useIsMobile from '../../services/useIsMobile'

const parallaxImages = [
  {
    alt: 'Frågvist',
    src: '/assets/fragvist/fragvist-mockup-debossed.jpg',
  },
  {
    alt: 'Frågvist',
    src: '/assets/fragvist/fragvist-mockup-business-cards.jpg',
  },
  {
    alt: 'Frågvist',
    src: '/assets/fragvist/fragvist-mockup-things.jpg',
  },
  {
    alt: 'Frågvist',
    src: '/assets/fragvist/fragvist-mockup-pins.jpg',
  },
]

const mosaicHrefs = Array.from(new Array(6)).map(
  (_, i) => `/assets/fragvist/mosaic/Web 1280 – ${i + 1}.png`,
)

export default function Fragvist() {
  const ref = useRef<HTMLElement>(null)
  const { top, bottom } = useOffsets(ref)
  useBackgroundColor('fragvist', COLOR.FRAGVIST.BEIGE, top, bottom)
  useColor('fragvist', COLOR.BLACK, top, bottom)
  useActiveNav('/portfolio', top, bottom)
  const isMobile = useIsMobile()

  return (
    <>
      <div className={s.piecesContainer}>
        <div className={s.pieceYellow}>
          <Image
            src="/assets/fragvist/fragvist-piece-yellow.svg"
            layout="fill"
            objectFit="contain"
            alt="Frågvist"
          />
        </div>
        <div className={s.piecePink}>
          <Image
            src="/assets/fragvist/fragvist-piece-pink.svg"
            layout="fill"
            objectFit="contain"
            alt="Frågvist"
          />
        </div>
        <div className={s.pieceGreen}>
          <Image
            src="/assets/fragvist/fragvist-piece-green.svg"
            layout="fill"
            objectFit="contain"
            alt="Frågvist"
          />
        </div>
        <div className={s.pieceBlue}>
          <Image
            src="/assets/fragvist/fragvist-piece-blue.svg"
            layout="fill"
            objectFit="contain"
            alt="Frågvist"
          />
        </div>
      </div>
      <article className={s.article} ref={ref}>
        <section className={s.nameContainer}>
          <Image
            alt="Frågvist logo"
            objectFit="contain"
            layout="fill"
            src="/assets/fragvist/fragvist-logo.svg"
            priority
            containerClassName={s.logoContainer}
          />
          <Tags
            containerClassName={s.tagsContainer}
            delay={1.5}
            tags={['logo', 'branding', 'web design', 'web development', 'CMS']}
          />
        </section>

        <section className={s.textContainer}>
          <p>
            Frågvist is a Swedish company that produces and arranges quizzes,
            puzzles, games and events.
          </p>
        </section>

        <section className={s.mockup1Container}>
          <Image
            src={'/assets/fragvist/fragvist-identity.png'}
            alt="Frågvist visual identity"
            layout="fill"
            objectFit={'contain'}
          />
        </section>

        <section className={s.textContainer}>
          <p>
            I was tasked with creating a visual brand identity that works both
            when speaking to companies — potential clients — as well as ordinary
            people — the quiz participants.
          </p>
        </section>

        <section className={s.mockup2Container}>
          <Image
            src={'/assets/fragvist/fragvist-stationary-2.png'}
            alt="Frågvist stationary"
            layout="fill"
            objectFit="cover"
          />
          <Image
            src={'/assets/fragvist/fragvist-stationary-1.png'}
            alt="Frågvist stationary"
            layout="fill"
            objectFit="cover"
          />
        </section>

        <section className={s.textContainer}>
          <p>
            It needs to come across as professional and trustworthy, while at
            the same time playful and joyous. The typeface has that duality.
            It&apos; a slab serif with a roundness and just that right amount of
            quirkiness to play in both divisions.
          </p>
        </section>

        {!isMobile && (
          <>
            <section className={s.mockup1Container}>
              <Image
                src={'/assets/fragvist/fragvist-pins.png'}
                alt="Frågvist pins"
                layout="fill"
                objectFit="cover"
              />
            </section>
            <section className={s.mockup1Container}>
              <Image
                src={'/assets/fragvist/fragvist-debossed.png'}
                alt="Frågvist mark debossed on paper"
                layout="fill"
                objectFit="cover"
              />
            </section>
          </>
        )}
        {isMobile && (
          <section className={s.mockup2Container}>
            <Image
              src={'/assets/fragvist/fragvist-pins.png'}
              alt="Frågvist pins"
              layout="fill"
              objectFit="cover"
            />
            <Image
              src={'/assets/fragvist/fragvist-debossed.png'}
              alt="Frågvist mark debossed on paper"
              layout="fill"
              objectFit="cover"
            />
          </section>
        )}
        <section className={s.textContainer}>
          <p>
            The logomark is a flirt with the 90&apos;s, a reminder of the analog
            days. While quizzes and games like the ones Frågvist arrange become
            more and more digital, they&apos;re still at their best on site, in
            person. We want people to be reminded of that when they see
            Frågvist.
          </p>
        </section>

        <section className={s.mockup1Container}>
          <Image
            src={'/assets/fragvist/fragvist-tshirts.png'}
            alt="Frågvist t-shirts"
            layout="fill"
            objectFit="cover"
          />
        </section>
      </article>
    </>
  )
}
