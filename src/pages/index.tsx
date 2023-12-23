import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const LoginPage = lazy(() => import('./login-page').then((module) => ({ default: module.LoginPage })))

const AppRouter = () => {

    return (
        <Routes>
            <Route path='*' element={<LoginPage />} />
        </Routes>
    )
}

export default AppRouter;