import React from 'react'
import { Tags } from '../../components/Tags/Tags'
import s from './MorePortfolioItem.module.scss'
import { Image } from '../../components/Image/Image'
import AppWindowNext from '@streamlinehq/streamlinehq/img/streamline-regular/programing-apps-websites/apps-window/app-window-next.svg'

interface Props {
  name: string
  linkName: string
  href: string
  description: string
  tags: string[]
  image: string
}

export function MorePortfolioItem(props: Props) {
  const { image, description, linkName, name, tags, href } = props

  return (
    <div className={s.container}>
      <Image
        alt={name}
        src={image}
        layout="fill"
        objectFit="contain"
        objectPosition="right"
        containerClassName={s.imageContainer}
      />
      <div className={s.textContainer}>
        <span>
          <h3>
            {name}
            <a href={href} target="_blank" rel="noreferrer">
              <Image
                src={AppWindowNext}
                alt={linkName}
                width={20}
                height={20}
                objectPosition="bottom center"
              />
            </a>
          </h3>
        </span>
        <p>{description}</p>
        <Tags tags={tags} containerClassName={s.tagsContainer} />
      </div>
    </div>
  )
}
