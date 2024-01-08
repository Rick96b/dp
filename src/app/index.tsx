import React, { useState } from 'react'

import { withProviders } from './providers'
import AppRouter from 'pages'
import './styles/index.scss'
import axios from 'axios'

const App = () => {
  const [user, setUser] = useState({})

  axios.get('https://backend-seaz96.kexogg.ru/api/accounts/self-info', {withCredentials: true})
  .then(repsonce => console.log(repsonce))
  return (
    <>
      <AppRouter />
    </>
  )
}

export default withProviders(App);