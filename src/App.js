import './App.css';
import NavMenu from './components/NavMenu';
import { Routes, Route } from 'react-router-dom'
import TeamsPage from './pages/TeamsPage'
import ConfigurationPage from './pages/ConfigurationPage'
import MainPage from './pages/MainPage'
import { useState } from 'react';
import { Context } from './context'; 

function App() {

  const delete_card = (id) =>{
      setUsers(users.filter(el=>el.id!==id))
  }

  const [teams, setTeams] = useState([])

  const [users, setUsers] = useState([])

  const add_team =(team_massiv) =>{
    setTeams([...teams, team_massiv])
  }

  const add_user = (user_massiv) => {
    setUsers([...users, user_massiv])
  }
  return (
    <div>
      <Context.Provider value={{users,add_team, add_user, teams, delete_card}}>
      <NavMenu/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/configuration' element={ <ConfigurationPage/> }/>
        <Route path='/teams' element={<TeamsPage/>}/>
      </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;
