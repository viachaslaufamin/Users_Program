import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom' 

export default function NavMenu() {
  return (
    <div className={s.nav_menu}>
      <Link to='/'>Main</Link>
      <Link to='/configuration'>Configuration</Link>
      <Link to='/teams'>Team</Link>
    </div>
  )
}
