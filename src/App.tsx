import React, { useState } from 'react';
import LoginScreen from './screens/LoginScreen'
import './App.css';
import { LoginMutationResponse } from './graphql/__generated__/LoginMutation.graphql';
import CopiesScreen from './screens/CopiesScreen';

const App: React.FC = () => {
  const [loginRes, setLoginRes] = useState<LoginMutationResponse | null>(null)

  const onLogin = (res: LoginMutationResponse) => {
    setLoginRes(res)
  }

  if (!loginRes) { return <LoginScreen onLogin={onLogin} /> }

  return (
    <CopiesScreen user={loginRes} />
  )
}

export default App;
