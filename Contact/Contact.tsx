import React, { useCallback, useRef } from 'react'
import s from './Contact.module.scss'
import SocialInstagram from '@streamlinehq/streamlinehq/img/streamline-bold/logos/photos-images/social-instagram.svg'
import SocialMediaFacebook from '@streamlinehq/streamlinehq/img/streamline-bold/logos/social-medias/social-media-facebook.svg'
import SocialMediaTwitter from '@streamlinehq/streamlinehq/img/streamline-bold/logos/social-medias/social-media-twitter.svg'
import DeveloperCommunityGithub1 from '@streamlinehq/streamlinehq/img/streamline-bold/logos/developer-communities/developer-community-github-1.svg'
import ProfessionalNetworkLinkedin from '@streamlinehq/streamlinehq/img/streamline-bold/logos/professional-networks/professional-network-linkedin.svg'
import DesignerCommunityDribbble from '@streamlinehq/streamlinehq/img/streamline-bold/logos/designers-communities/designer-community-dribbble.svg'
import { Image } from '../components/Image/Image'
import { useInView } from 'react-intersection-observer'
import { useScrollIn } from '../services/useScrollIn'
import { useColor } from '../services/useColor'
import { useActiveNav } from '../services/useActiveNav'
import { PAGE_IN_VIEW_OPTIONS } from '../services/App.context'
import { COLOR } from '../styles/COLOR'
import Link from 'next/link'
import { useBackgroundColor } from '../services/useBackgroundColor'
import { useOffsets } from '../services/useOffsets'

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
              alt="Twitter"
              src={SocialMediaTwitter}
              width={ICON_SIZE}
              height={ICON_SIZE}
              containerClassName={s.icon}
            />
                Twitter
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
