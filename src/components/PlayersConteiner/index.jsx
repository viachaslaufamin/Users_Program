import React, { useContext } from 'react'
import PlayerCard from '../PlayerCard'
import s from './index.module.css'
import { Context } from '../../context'

export default function PlayersConteiner() {
   const {users} = useContext(Context)

  return (
    <div className={s.card}>
      {
      users.length === 0 
      ? <p className={s.ps}> No Users</p>
      :  users.map(el=><PlayerCard {...el} key={el.id}/>)
    }
    </div>
  )
}