import React from 'react'

type Props = {
    username: string
}
export default (props: Props) => <div className="hello">Hello {props.username}!</div>
