import React, {useContext} from 'react'
import s from './index.module.css'
import Select from 'react-select'
import { Context } from '../../context'


export default function AddUserForm() {

   const{add_user, teams} = useContext(Context);

   const add_users = (event) => {
      event.preventDefault();
      const { user, team_name } = event.target;
      const user_massiv = {
         id: Date.now(),
         user: user.value,
         team: team_name.value
      }

      add_user(user_massiv)

      event.target.reset()
   };
  return (
    <div>
      <form onSubmit={add_users} className={s.form}>
         <label>
         <p>Add User</p>
         <input type="text" placeholder='User' name='user'/>
         </label>
         <Select name='team_name' options={teams}/>
         <button>AddUser</button>
      </form>
    </div>
  )
}
