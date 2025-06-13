import React from 'react'
import Landingpage from './screens/Landingpage'
import { Route,Routes } from 'react-router-dom'
import Codepage from './screens/Codepage'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Landingpage/>}/>
        <Route path='/codepage' element={<Codepage/>}/>
      </Routes>
    </div>
  )
}

export default App
