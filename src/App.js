import logo from './logo.svg';
import './App.css';
import SignInForm from './components/SignInForm';
import NewsFeed from './components/NewsFeed';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      { user ? <NewsFeed user={user} /> : <SignInForm setUser={setUser} />  }
    </div>
  );
}

export default App;
