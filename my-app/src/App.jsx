import Analytics from './componentsd/Analytics'
import React from 'react'
import Navbar from './componentsd/Navbar'
import Hero from './componentsd/Hero'
import Newslater from './componentsd/Newslater'
import Cards from "./componentsd/Cards"
import Footer from './componentsd/footer'
import SignUp from './componentsd/SignUp'
import SignIn from "./componentsd/SignIn"
import PersonalPage from './componentsd/personalPage'
import {BrowserRouter as Router , Route, Routes} from "react-router-dom"
import Setting from './componentsd/Setting'
import Budgets from './componentsd/Budgets'
import AboutUs from './Skeletons/AboutUs'
import Security from './Skeletons/Security'
import UpgradePlan from './Skeletons/UpgradePlan'
import ContactUs from './Skeletons/ContactUs'
function App() {


  return (
    <Router>
    <Routes>
         <Route path='/' element={
            <>
            <Navbar/>
            <Hero />
            <Newslater/>
            <Cards/>
            <Footer/>
            </>
         }/>
         <Route path="/signin" element={<SignIn/>}/>
         <Route path="/signup" element={<SignUp/>}/>
         <Route path='/personalPage' element={<PersonalPage/>}/>
         <Route path='/settings' element={<Setting/>}/>
         <Route path='/budgets' element={<Budgets/>}/>
       
         <Route path="/about" element={<AboutUs />} />
         <Route path="/contact" element={<ContactUs />} />
         <Route path="/security" element={<Security />} />
         <Route path="/upgrade" element={<UpgradePlan />} />
      
    </Routes>
    </Router>
    
  )
}

export default App
