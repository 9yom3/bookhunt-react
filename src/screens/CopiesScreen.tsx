import React, { useState } from 'react';
import { QueryRenderer } from 'react-relay';

import environment from './../environment'

import { LoginMutationResponse } from '../graphql/__generated__/LoginMutation.graphql';
import { CopiesScreenQuery } from '../graphql/__generated__/CopiesScreenQuery.graphql';

import Hello from '../component/Hello';
import { copyScreenQuery } from '../graphql/CopiesScreenQuery';
import CopyRow from '../component/CopyRow';
import AddCopy from '../component/AddCopy';

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
            render={({ props, error, retry }) => {
                if (error !== null) alert(error)
                if (props !== null && props.copiesByUserId !== null) {
                    return (
                        <div>
                            <Hello username={username} />
                            <AddCopy retry={retry} userId={prop.user.login.user.id} />
                            {props.copiesByUserId.map((copy, key) => <CopyRow key={key} copy={copy as any} />)}
                        </div>
                    )
                }
            }}
        />
    )
}

export default CopiesScreen;
