import React, { useState } from 'react';
import { LoginMutationResponse } from '../graphql/__generated__/LoginMutation.graphql';
import Hello from '../component/Hello';

type Props = {
    user: LoginMutationResponse
}

const CopiesScreen: React.FC<Props> = (props: Props) => {

    return (
        <Hello username={props.user.login.user.username} />
    )
}

export default CopiesScreen;
