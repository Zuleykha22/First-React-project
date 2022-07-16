import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Detail from '../Pages/Detail'
import Home from '../Pages/Home'

function MyRoute() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/detail/:id' element={<Detail />} />
        </Routes>
    </div>
  )
}

export default MyRoute