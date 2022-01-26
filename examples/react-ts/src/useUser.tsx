import React, { useState } from 'react'

type UnLoggedUser = {
  isLogged: false
}

type LoggedUser = {
  isLogged: true,
  email: string,
  age?: number
}

type User = UnLoggedUser | LoggedUser

const INITIAL_STATE = {
  isLogged: false
} as const

const useUser = () => {
  const [user, setUser] = useState<User>(INITIAL_STATE) // { isLogged: false }

  const loginHandler = (email: string)  =>{
    setUser({
      isLogged: true,
      email,
    })
  }

  const logoutHandler = () => {
    setUser(INITIAL_STATE)
  }

  return {
    user,
    loginHandler,
    logoutHandler,
  }
}

export default useUser
