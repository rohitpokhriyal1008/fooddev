
import React, { Suspense, lazy } from 'react'
import Hero from './components/Hero'
import { Route, Routes } from 'react-router-dom'
import Restaurentmenu from './components/Restaurentmenu'
import Contact from './components/Contact'
import About from './components/About'
import Navbar from './components/Navbar'


const App = () => {

  const Grocery = lazy(() => import("./components/Grocery"))

  return (

    <div className='w-screen h-screen'>
      <Navbar/>
      <Routes>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path='/' element={<Hero/>}/>
        <Route path='/restaurent/:resid' element={<Restaurentmenu/>}/>
        <Route path="/Grocery" element={ <Suspense fallback={<h1>Load..</h1>}>
        <Grocery/>
        </Suspense>
        } />
      </Routes>
    </div>
  )
}

export default App