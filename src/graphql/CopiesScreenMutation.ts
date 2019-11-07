import { commitMutation, Environment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro'
import { PayloadError } from 'relay-runtime';

// We start by defining our mutation from above using `graphql`
const mutation = graphql`
mutation CopiesScreenMutation($isbn: String!, $user_id: ID!, $pin: String!) {
    createCopy(isbn: $isbn, userId: $user_id, pin: $pin){
        id 
        book { 
          id 
          title
          authors
          thumbnailUrl
          smallThumbnailUrl
          description
          categories
          maturityRating
        }
        borrows {
          id
          rate
          comment
          borrowedAt
          releasedAt
          user {
            id
            username
            email
          }
        } 
    }
}
` ;

const commit = (
    environment: Environment,
    isbn: string,
    user_id: string,
    pin: string,
    onCompleted: ((response: any, errors: ReadonlyArray<PayloadError> | null | undefined) => void),
    onError: ((error: Error) => void) | null
) => {
    // Now we just call commitMutation with the appropriate parameters
    return commitMutation(
        environment,
        {
            mutation,
            variables:
                { user_id, isbn, pin },
            onCompleted: onCompleted,
            onError: onError
        }
    );
}

export default { commit };
