import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Header } from 'widgets/header'

const LoginPage = lazy(() => import('./login-page').then((module) => ({ default: module.LoginPage })))
const GostsPage = lazy(() => import('./gosts-page').then((module) => ({ default: module.GostsPage })))

const AppRouter = () => {

    return (
        <>
            <Header />
            <Routes>
                <Route path='*' element={<GostsPage />} />
            </Routes>
        </>
    )
}

export default AppRouter;