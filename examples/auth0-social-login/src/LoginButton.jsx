import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react'

const LoginButton = () => {
  const { loginWithRedirect, user } = useAuth0()


  return(
    <button onClick={loginWithRedirect}>
      Login
    </button>
  )
}

export default LoginButton
