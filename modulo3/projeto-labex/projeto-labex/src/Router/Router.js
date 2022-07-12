import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import Home from '../Pages/Home/HomePage'
import ListTripsPage from '../Pages/ListTripsPage/ListTripsPage'
import Login from '../Pages/LoginPage/LoginPage'
const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="principal" element={<ListTripsPage />} />
                    <Route path="login" element={<Login />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default Router