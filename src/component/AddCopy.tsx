import React, { useState } from 'react'
import environment from './../environment'
import CopiesScreenMutation from '../graphql/CopiesScreenMutation'
import { CopiesScreenMutationResponse } from '../graphql/__generated__/CopiesScreenMutation.graphql'

type Props = {
    userId: string
    retry: (() => void) | null
}

export default (props: Props) => {
    const [isbn, setISBN] = useState('')
    const [createError, setCreateError] = useState('')


    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        CopiesScreenMutation.commit(environment, isbn, props.userId, '1234',
            (res: CopiesScreenMutationResponse, errors) => {
                if (res.createCopy != null && props.retry) {
                    props.retry()
                } else {
                    setCreateError('invalid ISBN')
                }
            },
            (error) => { alert(error) }
        );

        setISBN('')
    }

    return (
        <>
            <div className="error">{createError}</div>
            <form onSubmit={onSubmit}>
                <div>ISBN sample 2822201420, 2203059370</div>
                <input type="text" placeholder="ISBN" value={isbn} onChange={(e) => setISBN(e.target.value)} />
                <input type="submit" value="Add" />
            </form>
        </>
    )
}
