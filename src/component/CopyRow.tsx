import React from 'react'
import { createFragmentContainer } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro'
import { CopyRow_copy } from './__generated__/CopyRow_copy.graphql';

type Props = {
    copy: CopyRow_copy
}

const CopyRow = (props: Props) => {
    return (
        <div className="copy-row">
            <img alt={props.copy.book.title} height="100" src={`${props.copy.book.thumbnailUrl}`} />
            <span>{props.copy.book.title}</span>
        </div>
    )
}

export default createFragmentContainer(CopyRow, {
    // For each of the props that depend on server data, we define a corresponding
    // key in this object. Here, the component expects server data to populate the
    // `item` prop, so we'll specify the fragment from above at the `item` key.
    copy: graphql`
      fragment CopyRow_copy on Copy {
          book { title  thumbnailUrl }
      }
    `,
});
