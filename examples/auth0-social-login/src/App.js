import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react'

import logo from './logo.svg';
import './App.css';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

function App() {
  const { isAuthenticated, isLoading, user } = useAuth0();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {
          isAuthenticated

          ? (
            <>
              <img src={user?.picture} alt={user?.nickname} />
              <prev>
                {JSON.stringify(user, null, 2)}
              </prev>

              <LogoutButton />
            </>
          )

          : <LoginButton />
        }
      </header>
    </div>
  );
}

export default App;
