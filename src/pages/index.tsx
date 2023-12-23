import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { GostTable } from 'widgets/gosts-table'
import { Header } from 'widgets/header'

const LoginPage = lazy(() => import('./login-page').then((module) => ({ default: module.LoginPage })))

const AppRouter = () => {

    return (
        <>
            <Header />
            <Routes>
                <Route path='*' element={<GostTable />} />
            </Routes>
        </>
    )
}

export default AppRouter;