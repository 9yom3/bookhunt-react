import React, { useState } from 'react'

type Props = {
    userId: string
    onSubmit: (isbn: string) => void
}

export default (props: Props) => {
    const [isbn, setISBN] = useState('')

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        props.onSubmit(isbn)
        setISBN('')
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="ISBN" value={isbn} onChange={(e) => setISBN(e.target.value)} />
            <input type="submit" value="Add" />
        </form>
    )
}
