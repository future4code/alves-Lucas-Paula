import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import Home from '../Pages/Home/HomePage'
import ListTripsPage from '../Pages/ListTripsPage/ListTripsPage'
import Login from '../Pages/LoginPage/LoginPage'
import AdminHomePage from '../Pages/AdminHomePage/AdminHomePage'
import ApplicationFormPage from '../Pages/ApplicationFormPage/ApplicationFormPage'
import CreateTripPage from '../Pages/CreateTripPage/CreateTripPage'
const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="principal" element={<ListTripsPage />} />
                    <Route path="login" element={<Login />} />
                    <Route path='admin' element={<AdminHomePage />} />
                    <Route path="aplicacao" element={<ApplicationFormPage />} />
                    <Route path='criar' element={<CreateTripPage />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default Router