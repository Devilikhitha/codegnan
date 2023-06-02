import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './container/Home'
import About  from './container/About'
import Contact from './container/Contact'
import Navigation from './container/Navigation'
import "./App.css"
import NotFound from './container/NotFound'


export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/*' element={<NotFound/>}/>

      
      </Routes>
      </BrowserRouter>
    </div>
  )
}
