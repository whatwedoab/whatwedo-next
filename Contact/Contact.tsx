import DesignerCommunityDribbble
  from '../public/assets/icons/dribbble.svg'
import DeveloperCommunityGithub1
  from '../public/assets/icons/github-2.svg'
import ProfessionalNetworkLinkedin
  from '../public/assets/icons/linkedin.svg'
import SocialMediaFacebook
  from '../public/assets/icons/facebook-1.svg'
import SocialMediaTwitter
  from '../public/assets/icons/x-logo-twitter.svg'
import Link from 'next/link'
import React, {useCallback, useRef} from 'react'
import {useInView} from 'react-intersection-observer'
import {Image} from '../components/Image/Image'
import SocialInstagram from '../public/assets/icons/instagram-2.svg'
import {PAGE_IN_VIEW_OPTIONS} from '../services/App.context'
import {useActiveNav} from '../services/useActiveNav'
import {useBackgroundColor} from '../services/useBackgroundColor'
import {useColor} from '../services/useColor'
import {useOffsets} from '../services/useOffsets'
import {useScrollIn} from '../services/useScrollIn'
import {COLOR} from '../styles/COLOR'
import s from './Contact.module.scss'
import NextImage from 'next/image'

const ICON_SIZE = 32

const HREF = '/contact'

export function Contact() {
  const [inViewRef, inView, entry] = useInView(PAGE_IN_VIEW_OPTIONS)
  const ref = useRef<HTMLElement>()

  const setRefs = useCallback(
    (node: HTMLElement) => {
      ref.current = node
      inViewRef(node)
    },
    [inViewRef],
  )
  const { top, bottom } = useOffsets(ref)
  useBackgroundColor(HREF, COLOR.WHITE, top, bottom)
  useColor(HREF, COLOR.BLACK, top, bottom)
  useActiveNav(HREF, top, bottom)
  useScrollIn(inView, entry)

  return (
    <article ref={setRefs} className={s.article}>
      <h1>Contact</h1>
      <div className={s.gridContainer}>
        <section>
          <ul>
            <li>
              <Link href="tel:+46739-596-096">+46 (0) 739-596 096</Link>
            </li>
            <li>
              <Link href="mailto:mikael@whatwedo.se">mikael@whatwedo.se</Link>
            </li>
          </ul>
        </section>

        <section>
          <ul>
            <li>
              <a
                href="https://www.instagram.com/whatwedoab/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  alt="Instagram"
                  src={SocialInstagram}
                  width={ICON_SIZE}
                  height={ICON_SIZE}
                  containerClassName={s.icon}
                />
                Instagram
              </a>
            </li>

            <li>
              <a
                href="https://www.facebook.com/whatwedoab/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  alt="Facebook"
                  src={SocialMediaFacebook}
                  width={ICON_SIZE}
                  height={ICON_SIZE}
                  containerClassName={s.icon}
                />
                Facebook
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/company/what-we-do-ab"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  alt="LinkedIn"
                  src={ProfessionalNetworkLinkedin}
                  width={ICON_SIZE}
                  height={ICON_SIZE}
                  containerClassName={s.icon}
                />
                LinkedIn
              </a>
            </li>

            <li>
              <a
                href="https://github.com/whatwedoab"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  alt="Github"
                  src={DeveloperCommunityGithub1}
                  width={ICON_SIZE}
                  height={ICON_SIZE}
                  containerClassName={s.icon}
                />
                Github
              </a>
            </li>

            <li>
              <a
                href="https://dribbble.com/mikaeledgren"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  alt="Dribbble"
                  src={DesignerCommunityDribbble}
                  width={ICON_SIZE}
                  height={ICON_SIZE}
                  containerClassName={s.icon}
                />
                Dribbble
              </a>
            </li>

            <li>
              <a
                href="https://twitter.com/EdgrenMikael"
                target="_blank"
                rel="noreferrer"
              >
            <Image
              alt="X (Twitter)"
              src={SocialMediaTwitter}
              width={ICON_SIZE}
              height={ICON_SIZE}
              containerClassName={s.icon}
            />
                X (Twitter)
              </a>
            </li>
          </ul>
        </section>
      </div>

      {/*
      <section>
        <ul className={s.row}>
          <li>
          </li>
        </ul>
      </section>
*/}
    </article>
  )
}
