import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home_page'
import EventosPage from '../pages/eventos_page'
import GymPage from '../pages/gym_page'
import TalleresPage from '../pages/talleres_page'
import EquiposPage from '../pages/equipos_page'
import NoticiasPage from '../pages/noticias_page'

import NavBar from '../components/nav_bar'

const Layout = () => {
  return (
    <BrowserRouter>
      <div className='layout'>
        <h1 className='layout__title'></h1>
        <NavBar />
        <div className='layout__page'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path= '/eventos' element={<EventosPage/>} />
            <Route path= '/talleres' element={<TalleresPage/>} />
            <Route path= '/gym' element={<GymPage/>} />
            <Route path= '/equipos' element={<EquiposPage/>} />
            <Route path= '/noticias' element={<NoticiasPage/>} />

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Layout
