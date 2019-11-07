import {
    Environment,
    Network,
    RecordSource,
    Store,
} from 'relay-runtime';

async function fetchQuery(
    operation: { text: any; },
    variables: any,
) {
    const response = await fetch('https://api.book-hunt.com/api/v1/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: operation.text,
            variables,
        }),
    });
    return response.json();
}

const environment = new Environment({
    network: Network.create(fetchQuery),
    store: new Store(new RecordSource()),
});

export default environment;
