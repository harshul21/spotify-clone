import { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';

function App() {

  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token){
      setToken(_token)
    }

    console.log("I HAVE A TOKEN >>", token);
  }, []);

  return (
    <div className="App">
      {
        token ? (
          <h1>I am logged In</h1>
        ) : (
          <Login />
        )
      }

    </div>
  );
}

export default App;
