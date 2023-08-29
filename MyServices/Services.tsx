import {motion} from 'framer-motion'
import Link from 'next/link'
import React, {useRef} from 'react'
import {useActiveNav} from '../services/useActiveNav'
import {useBackgroundColor} from '../services/useBackgroundColor'
import {useColor} from '../services/useColor'
import {useOffsets} from '../services/useOffsets'
import {COLOR} from '../styles/COLOR'
import {Service} from './Service/Service'
import s from './Services.module.scss'

const HREF = '/services'

export function Services() {
  const ref = useRef<HTMLElement>(null)

  const { top, bottom } = useOffsets(ref)
  useBackgroundColor(HREF, COLOR.GREY_LIGHTEST, top, bottom)
  useColor(HREF, COLOR.BLUE, top, bottom)
  useActiveNav(HREF, top, bottom)

  const articleVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.4 } },
  }

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  }

  return (
    <motion.article
      variants={articleVariants}
      initial="hidden"
      animate="visible"
      ref={ref}
      className={s.article}
    >
      <h1>Services</h1>
      <section>
        <p>
          I know how difficult it can be to find a designer or developer that
          fits within your budget. I&apos;m flexible and can work with you to find a
          solution that works for both of us.
        </p>
        <p>
          Please feel free to <Link href="/contact">contact</Link> me if you
          want to hear more about how I can help your business.
        </p>
      </section>

      <section className={s.content}>
        <motion.div className={s.packageContainer} variants={variants}>
          <Service
            name="Basic web site"
            content={[
              'Web design',
              'Responsive',
              'CMS',
              'SEO',
              'Hosting setup',
              'Domain setup',
              '+ more',
            ]}
            price="$1,500"
            mailtoSubject="Basic web site inquiry"
          />
        </motion.div>

        <motion.div className={s.packageContainer} variants={variants}>
          <Service
            name="Logo"
            content={[
              '2 revisions',
              'Multiple file formats',
              'Multiple color versions',
              'Favicon',
              'Research',
              'Guidelines',
              '+ more',
            ]}
            price="$1,500"
            mailtoSubject="Logo inquiry"
          />
        </motion.div>

        <motion.div
          variants={variants}
          className={[s.packageContainer, s.consultantContainer].join(' ')}
        >
          <Service
            name="Freelance"
            content={[
              'HTML',
              'CSS',
              'Javascript',
              'Angular',
              'React',
              'NextJS',
              'NodeJS',
              'Firebase',
              'Marketing assets',
              'UI',
              'Web design',
              'Email design',
              'DM automation',
              'Data visualisation',
              '+ more',
            ]}
            price="from $75/hour"
            mailtoSubject="Freelancing inquiry"
          />
        </motion.div>
      </section>
      <h2>More</h2>
      <p>
        <Link href="/contact">Contact me</Link> to get a quote.
      </p>
      <ul>
        <li>Advanced web site</li>
        <li>Mobile app</li>
        <li>Web app</li>
        <li>Visual brand identity</li>
      </ul>
    </motion.article>
  )
}
