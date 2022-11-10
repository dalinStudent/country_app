import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CountryList from './pages/CountryList'
import CountryInfo from './pages/CountryInfo'

const Routes = () => (
 <Router>
    <Routes>
        <Route path='/' element={<CountryList />} />
        <Route path='/country/:name' element={<CountryInfo />} />
    </Routes>
 </Router>
)

export default Routes;