import React from 'react';
import { QueryRenderer } from 'react-relay';

import environment from './../environment'

import { LoginMutationResponse } from '../graphql/__generated__/LoginMutation.graphql';
import { CopiesScreenQuery } from '../graphql/__generated__/CopiesScreenQuery.graphql';

import Hello from '../component/Hello';
import { copyScreenQuery } from '../graphql/CopiesScreenQuery';
import CopyRow from '../component/CopyRow';
import AddCopy from '../component/AddCopy';
import CopiesScreenMutation from '../graphql/CopiesScreenMutation';
import { CopiesScreenMutationResponse } from '../graphql/__generated__/CopiesScreenMutation.graphql';

type Props = {
    user: LoginMutationResponse
}

const CopiesScreen: React.FC<Props> = (prop: Props) => {
    const { username } = prop.user.login.user

    const onSubmit = (isbn: string) => {
        CopiesScreenMutation.commit(environment, isbn, prop.user.login.user.id, '1234',
            (res: CopiesScreenMutationResponse, errors) => {
                alert('frefreifmerom')
                if (res != null) {
                    alert(JSON.stringify(res))
                } else {
                    alert(errors)
                }
            },
            (error) => { alert(error) }
        );
    }

    return (
        <QueryRenderer<CopiesScreenQuery>
            environment={environment}
            query={copyScreenQuery}
            variables={{ user_id: prop.user.login.user.id }}
            render={({ props, error }) => {
                if (error !== null) alert(error)
                if (props !== null && props.copiesByUserId !== null) {
                    return (
                        <div>
                            <Hello username={username} />
                            <AddCopy onSubmit={onSubmit} userId={prop.user.login.user.id} />
                            {props.copiesByUserId.map((copy, key) => <CopyRow key={key} copy={copy as any} />)}
                        </div>
                    )
                }
            }}
        />
    )
}

export default CopiesScreen;
