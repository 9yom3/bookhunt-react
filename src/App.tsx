import React from 'react';
import LoginScreen from './screens/LoginScreen'
import './App.css';

const App: React.FC = () => {
  const onLogin = () => {
  }

  return (
    <LoginScreen onSubmit={onLogin} />
  );
}

export default App;
