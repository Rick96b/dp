import axios from 'axios'
import { UserContext, userModel } from 'entities/user'
import React, { lazy, useContext, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Header } from 'widgets/header'

const LoginPage = lazy(() => import('./login-page').then((module) => ({ default: module.LoginPage })))
const GostsPage = lazy(() => import('./gosts-page').then((module) => ({ default: module.GostsPage })))
const GostReviewPage = lazy(() => import('./gost-review-page').then((module) => ({ default: module.GostReviewPage })))
const GostEditorPage = lazy(() => import('./gost-editor-page').then((module) => ({ default: module.GostEditorPage })))
const UsersPage = lazy(() => import('./users-page').then((module) => ({ default: module.UsersPage })))
const ResetPasswordPage = lazy(() => import('./reset-password-page').then((module) => ({ default: module.ResetPasswordPage })))




const AppRouter = () => {
    const {user, setUser} = useContext(UserContext)
   
    return (
        <>
            {user &&
                <Header />
            }
            {user ?
            <Routes>
                <Route path='/' element={<GostsPage />} />
                <Route path='/gost-review/:id' element={<GostReviewPage />} />
                <Route path='/gost-editor' element={<GostEditorPage />} />
                <Route path='/users-page' element={<UsersPage />} />
                <Route path='/reset-password' element={<ResetPasswordPage />} />
            </Routes>
            :
            <Routes>
                <Route path='*' element={<LoginPage />} />
            </Routes>
            }
        </>
    )
}

export default AppRouter;