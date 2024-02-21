import React, {useContext} from 'react'
import s from './index.module.css'
import { Context } from '../../context'; 

export default function AddTeamForm() {
   const {add_team} = useContext(Context)
   const add_teams = (event) => {
      event.preventDefault();
      const { team } = event.target
      const team_massiv = {
         value: team.value,
         label: team.value
      }
      add_team(team_massiv);
      event.target.reset();
   }
  return (
    <div>
      <form onSubmit={add_teams} className={s.form}>
         <label>
         <p>Add Team</p>
         <input type="text" placeholder='Team' name='team'/>
         </label>
         <button>AddTeam</button>
      </form>
    </div>
  )
}
