import React, { useState } from 'react';

import LoginScreen from './screens/LoginScreen'
import {
  Switch,
  Route,
  Redirect,
  withRouter,
  RouteComponentProps
} from "react-router-dom";

import './App.scss';
import CopiesScreen from './screens/CopiesScreen';
import { LoginMutationResponse } from './graphql/__generated__/LoginMutation.graphql';

type Props = {
}

const App: React.FC<RouteComponentProps<Props>> = (props: RouteComponentProps<Props>) => {
  const [loginRes, setLoginRes] = useState<LoginMutationResponse | null>(null)

  const onLogin = (res: LoginMutationResponse) => {
    setLoginRes(res)
    props.history.push('/copies')
  }

  return (
    <div className="container">
      <Switch>
        <Route exact path="/">
          <Redirect from="/" to="/login" />
        </Route>
        <Route path="/login">
          <LoginScreen onLogin={onLogin} />
        </Route>
        <Route path="/copies">
          {loginRes ? <CopiesScreen user={loginRes} /> : <Redirect from="/" to="/login" />}
        </Route>
      </Switch>
    </div>

  )
}

export default withRouter(App);
