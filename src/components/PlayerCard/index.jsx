import React, {useContext} from 'react'
import s from './index.module.css'
import { Context } from '../../context'


export default function PlayerCard({id, user, team}) {
   const {delete_card} = useContext(Context)
  return (
    <div  
    className={s.user_card}
    onClick={()=>delete_card(id)}
    >
      <p>{user}</p>
      <p>{team}</p>
    </div>
  )
}
