import { commitMutation, Environment } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

// We start by defining our mutation from above using `graphql`
const mutation = graphql`
  mutation LoginMutation($email: String!, $password: String!){
    login(email: $email, password: $password) {
      token { accessToken refreshToken tokenType expiresIn }
      user { id }
    }
  }
`;

const commit = (
  environment: Environment,
  email: string,
  password: string,
) => {
  // Now we just call commitMutation with the appropriate parameters
  return commitMutation(
    environment,
    {
      mutation,
      variables: {
        input: { email, password },
      },
    }
  );
}

export default { commit };
