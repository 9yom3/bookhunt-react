import React from 'react';

import {
  withRouter,
  RouteComponentProps
} from "react-router-dom";

import './App.scss';

type Props = {
}

const App: React.FC<RouteComponentProps<Props>> = (props: RouteComponentProps<Props>) => {

  return (
    <div className="container">
      Hello World !
    </div>

  )
}

export default withRouter(App);
