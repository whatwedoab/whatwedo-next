import React from 'react'
import s from './Service.module.scss'
import { MailtoButton } from '../../components/MailtoButton/MailtoButton'

interface Props {
  name: string
  content: string[]
  price: string
  mailtoSubject?: string
}

export function Service(props: Props) {
  const { name, content, price, mailtoSubject } = props

  return (
    <div className={s.container}>
      <h2>
        <span>{name}</span>
      </h2>

      <span className={s.price}>{price}</span>

      <MailtoButton subject={mailtoSubject} className={s.mailtoButton} />

      <ul>
        {content.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    </div>
  )
}
