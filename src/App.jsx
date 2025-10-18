import React, { useState } from 'react';
import Login from './pages/Login';
import AppLayout from './layouts/AppLayout';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  return <AppLayout />;
};

export default App;