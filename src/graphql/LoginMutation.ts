import { commitMutation, Environment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro'
import { PayloadError } from 'relay-runtime';

// We start by defining our mutation from above using `graphql`
const mutation = graphql`
  mutation LoginMutation($email: String!, $password: String!){
    login(email: $email, password: $password) {
      token { accessToken refreshToken tokenType expiresIn }
      user { id username }
    }
  }
` ;

const commit = (
  environment: Environment,
  email: string,
  password: string,
  onCompleted: ((response: any, errors: ReadonlyArray<PayloadError> | null | undefined) => void),
  onError: ((error: Error) => void) | null
) => {
  // Now we just call commitMutation with the appropriate parameters
  return commitMutation(
    environment,
    {
      mutation,
      variables:
        { email, password },
      onCompleted: onCompleted,
      onError: onError
    }
  );
}

export default { commit };
