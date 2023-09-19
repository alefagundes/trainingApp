/* eslint-disable no-unused-vars */
import style from './Message.module.scss'
import bus from '../../utils/bus'
import { useState, useEffect } from 'react'

export const Message = () => {
  const [visibility, setVisibility] = useState(false);
  const [message, setMessage] = useState('Teste alessandro teste');
  const [type, setType] = useState('');

  useEffect(() => {
    bus.addListener('flash', ({ message, type }) => {
      setVisibility(true)
      setMessage(message)
      setType(type)

      setTimeout(() => {
        setVisibility(false)
      }, 3000)
    })
  }, [])

  return (
    visibility && (
      <div className={`${style.message}`}>
        <p className={`${style[type]}`}>{message}</p>
      </div>
    )
  )
}
