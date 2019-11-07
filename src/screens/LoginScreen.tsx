import React, { useState } from 'react';
import environment from './../environment'
import LoginMutation from '../graphql/LoginMutation';

type Props = {
    onSubmit: () => void
}

const App: React.FC<Props> = (props: Props) => {
    const [email, setEmail] = useState('laibulle@gmail.com')
    const [password, setPassword] = useState('password')

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        LoginMutation.commit(
            environment,
            email,
            password,
        );
        props.onSubmit()
    }

    return (

        <form onSubmit={onSubmit}>
            <input type="email" value={email} placeholder="Email" onChange={e => setEmail(e.target.value)} />
            <input type="password" value={password} placeholder="Password" onChange={e => setPassword(e.target.value)} />
            <input type="submit" value="Login" />
        </form>
    );
}

export default App;
