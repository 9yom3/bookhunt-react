import React, { useState } from 'react';
import environment from './../environment'
import LoginMutation from '../graphql/LoginMutation';
import { LoginMutationResponse } from '../graphql/__generated__/LoginMutation.graphql';

type Props = {
    onLogin: (res: LoginMutationResponse) => void
}

const LoginScreen: React.FC<Props> = (props: Props) => {
    const [email, setEmail] = useState('laibulle@gmail.com')
    const [password, setPassword] = useState('password')
    const [error, setError] = useState('')

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        LoginMutation.commit(environment, email, password,
            (res: LoginMutationResponse, errors) => {
                if (res != null) {
                    props.onLogin(res)
                } else {
                    setError('invalid credentials')
                }
            },
            (error) => { alert(error) }
        );
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="error">{error}</div>
            <div>
                <input type="email" value={email} placeholder="Email" onChange={e => setEmail(e.target.value)} />

            </div>
            <div>
                <input type="password" value={password} placeholder="Password" onChange={e => setPassword(e.target.value)} />

            </div>
            <div>
                <input type="submit" value="Login" />
            </div>
        </form>
    );
}

export default LoginScreen;
