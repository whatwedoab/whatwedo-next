import React from 'react'
import s from './Contact.module.scss'
import Phone from '@streamlinehq/streamlinehq/img/streamline-regular/phones-mobile-devices/phone/phone.svg'
import Envelope from '@streamlinehq/streamlinehq/img/streamline-regular/emails/envelopes/envelope.svg'
import SocialInstagram from '@streamlinehq/streamlinehq/img/streamline-bold/logos/photos-images/social-instagram.svg'
import SocialMediaFacebook from '@streamlinehq/streamlinehq/img/streamline-bold/logos/social-medias/social-media-facebook.svg'
import DesignerCommunityDribbble from '@streamlinehq/streamlinehq/img/streamline-bold/logos/designers-communities/designer-community-dribbble.svg'
import SocialMediaTwitter from '@streamlinehq/streamlinehq/img/streamline-bold/logos/social-medias/social-media-twitter.svg'
import DeveloperCommunityGithub1 from '@streamlinehq/streamlinehq/img/streamline-bold/logos/developer-communities/developer-community-github-1.svg'
import { Image } from '../components/Image/Image'
import { useTheme } from '../services/ThemeContext'
import { useInView } from 'react-intersection-observer'
import { useNavState } from '../components/Nav/NavStateContext'

export function Contact() {
  const { ref, inView } = useInView({ threshold: 0.2 })
  useTheme({ backgroundColor: '#f2cfcf', color: '#000' }, inView)
  useNavState('/contact', inView)
  return (
    <section className={s.container} ref={ref}>
      <h2>Contact</h2>
      <ul className={s.row}>
        <li>
          <Image
            alt="Phone"
            src={Phone}
            width={50}
            height={50}
            className={s.icon}
          />
          <span className={s.detailText}>+46 (0) 739-596 096</span>
        </li>
        <li>
          <Image
            alt="Email"
            src={Envelope}
            width={50}
            height={50}
            className={s.icon}
          />
          <span className={s.detailText}>mikael@whatwedo.se</span>
        </li>
        <li>
          <Image
            alt="Instagram"
            src={SocialInstagram}
            width={50}
            height={50}
            className={s.icon}
          />
          <Image
            alt="Facebook"
            src={SocialMediaFacebook}
            width={50}
            height={50}
            className={s.icon}
          />
          <Image
            alt="Twitter"
            src={SocialMediaTwitter}
            width={50}
            height={50}
            className={s.icon}
          />
          <Image
            alt="Dribbble"
            src={DesignerCommunityDribbble}
            width={50}
            height={50}
            className={s.icon}
          />
          <Image
            alt="Github"
            src={DeveloperCommunityGithub1}
            width={50}
            height={50}
            className={s.icon}
          />
        </li>
      </ul>
    </section>
  )
}
