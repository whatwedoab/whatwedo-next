import React from 'react'
import s from './Pricing.module.scss'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { MailtoButton } from '../components/MailtoButton/MailtoButton'
import { motion } from 'framer-motion'
import { useScrollIn } from '../services/useScrollIn'
import { useBackgroundColor } from '../services/useBackgroundColor'
import { useColor } from '../services/useColor'
import { useActiveNav } from '../services/useActiveNav'
import { PAGE_IN_VIEW_OPTIONS } from '../services/App.context'
import { COLOR } from '../styles/COLOR'

export function Pricing() {
  const { ref, inView, entry } = useInView(PAGE_IN_VIEW_OPTIONS)
  useBackgroundColor('#0075C4', inView)
  useColor(COLOR.WHITE, inView)
  useActiveNav('/pricing', inView)
  useScrollIn(inView, entry)

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
    >
      <section className={s.text}>
        <h2>Pricing</h2>
        <div>
          <p>
            I know from experience how frustrating it can be browsing the web
            for a service but the <i>only</i> way to know what&apos;s included
            and the price, is by requesting a quote.
          </p>
          <p>
            Below are some of the services that I offer, with price (where
            applicable) and what&apos;s included. None of this is set in stone,
            of course, but hopefully it will give you a sense of what your
            options are.
          </p>
          <p>
            Please feel free to <Link href="/contact">contact</Link> me if you
            want to hear more about how I can help your business.
          </p>
        </div>
      </section>

      <section className={s.content}>
        <motion.div
          variants={variants}
          className={[s.packageContainer, s.consultantContainer].join(' ')}
        >
          <h4>
            <span>Default hourly rate</span>
          </h4>
          <span className={s.price}>$90</span>

          <ul>
            <li>
              Front end development
              <br />
              <small>HTML, CSS, Javascript, Angular, React</small>
            </li>
            <li>
              Back end development
              <br />
              <small>Java, NodeJS</small>
            </li>
            <li>
              Digital design
              <br />
              <small>Marketing assets, UI, web design etc.</small>
            </li>
            <li>+ more</li>
          </ul>

          <MailtoButton
            subject="Freelancing inquiry"
            className={s.mailtoButton}
          />
        </motion.div>

        <div>
          <h3>
            <span>Freelance</span>
          </h3>
          <p>
            Are you in need of an experienced front end developer to join your
            team? Or a UI designer to give your web site a touch up? Or maybe
            help setting up your email marketing? I work by hour and am happy to
            help.
          </p>
        </div>

        <motion.div className={s.packageContainer} variants={variants}>
          <h4>
            <span>Basic web site</span>
          </h4>
          <span className={s.price}>$1,500</span>
          <ul>
            <li>Web design</li>
            <li>Responsive</li>
            <li>CMS</li>
            <li>SEO</li>
            <li>Hosting setup</li>
            <li>Domain setup</li>
            <li>+ more</li>
          </ul>
          <MailtoButton
            subject="Basic web site inquiry"
            className={s.mailtoButton}
          />
        </motion.div>

        <motion.div className={s.packageContainer} variants={variants}>
          <h4>
            <span>Custom web site</span>
          </h4>
          <span className={s.price}>By request</span>
          <ul>
            <li>Web design</li>
            <li>Responsive</li>
            <li>CMS</li>
            <li>SEO</li>
            <li>Hosting setup</li>
            <li>Domain setup</li>
            <li>Advanced pages / features</li>
            <li>+ more</li>
          </ul>
          <MailtoButton
            subject="Custom web site inquiry"
            className={s.mailtoButton}
          />
        </motion.div>

        <motion.div className={s.packageContainer} variants={variants}>
          <h4>
            <span>Logo</span>
          </h4>
          <span className={s.price}>$1,500</span>
          <ul>
            <li>2 revisions</li>
            <li>Multiple file formats</li>
            <li>Favicon</li>
            <li>Guidelines</li>
            <li>+ more</li>
          </ul>
          <MailtoButton subject="Logo inquiry" className={s.mailtoButton} />
        </motion.div>

        <motion.div className={s.packageContainer} variants={variants}>
          <h4>
            <span>Visual brand identity</span>
          </h4>
          <span className={s.price}>By request</span>
          <ul>
            <li>Logo</li>
            <li>Web design</li>
            <li>Graphical assets</li>
            <li>Typography</li>
            <li>Color palette</li>
            <li>Guidelines</li>
            <li>Multiple revisions</li>
            <li>+ anything else that fits your business</li>
          </ul>
          <MailtoButton
            subject="Visual brand identity inquiry"
            className={s.mailtoButton}
          />
        </motion.div>

        <motion.div className={s.packageContainer} variants={variants}>
          <h4>
            <span>Mobile App</span>
          </h4>
          <span className={s.price}>By request</span>
          <ul>
            <li>Visual identity</li>
            <li>UI Design</li>
            <li>Android & iOS</li>
            <li>Authentication</li>
            <li>Cloud storage</li>
            <li>React Native</li>
            <li>+ more</li>
          </ul>
          <MailtoButton
            subject="Mobile app inquiry"
            className={s.mailtoButton}
          />
        </motion.div>

        <motion.div className={s.packageContainer} variants={variants}>
          <h4>
            <span>Web application</span>
          </h4>
          <span className={s.price}>By request</span>
          <ul>
            <li>Visual identity</li>
            <li>UI Design</li>
            <li>Authentication</li>
            <li>Cloud storage</li>
            <li>
              Front end
              <br />
              <small>Vanilla JS, React, Angular, Vue</small>
            </li>
            <li>
              Back end <br />
              <small>Java, NodeJS, Deno, Firebase</small>
            </li>
            <li>
              Database <br />
              <small>SQL, MongoDb, Firestore</small>
            </li>
            <li>+ more</li>
          </ul>
          <MailtoButton
            subject="Web application inquiry"
            className={s.mailtoButton}
          />
        </motion.div>
      </section>
    </motion.article>
  )
}
