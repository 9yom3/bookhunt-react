import React from 'react'
import { Copy } from './../graphql/__generated__/Copy'

type Props = {
    copy: Copy
}
export default (props: Props) => {
    return (
        <div>
            <img alt={props.copy.book.title} height="100" src={`${props.copy.book.thumbnailUrl}`} />
            {props.copy.book.title}
        </div>
    )
}
