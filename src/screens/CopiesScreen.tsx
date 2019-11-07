import React from 'react';
import environment from './../environment'
import { LoginMutationResponse } from '../graphql/__generated__/LoginMutation.graphql';
import { CopiesScreenQuery } from '../graphql/__generated__/CopiesScreenQuery.graphql';
import Hello from '../component/Hello';
import { QueryRenderer } from 'react-relay';
import { copyScreenQuery } from '../graphql/CopiesScreenQuery';
import CopyRow from '../component/CopyRow';

type Props = {
    user: LoginMutationResponse
}

const CopiesScreen: React.FC<Props> = (prop: Props) => {
    const { username } = prop.user.login.user

    return (
        <QueryRenderer<CopiesScreenQuery>
            environment={environment}
            query={copyScreenQuery}
            variables={{ user_id: prop.user.login.user.id }}
            render={({ props, error }) => {
                if (error !== null) alert(error)
                if (props !== null && props.copiesByUserId !== null) {
                    return (
                        <>
                            <Hello username={username} />
                            {props.copiesByUserId.map((copy, key) => {
                                return <CopyRow key={key} copy={copy as any} />
                            })}
                        </>
                    )
                }
            }}
        />
    )
}

export default CopiesScreen;
