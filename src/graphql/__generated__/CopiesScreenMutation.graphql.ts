/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type CopiesScreenMutationVariables = {
    isbn: string;
    user_id: string;
    pin: string;
};
export type CopiesScreenMutationResponse = {
    readonly createCopy: {
        readonly id: string;
        readonly book: {
            readonly id: string;
            readonly title: string;
            readonly authors: ReadonlyArray<string> | null;
            readonly thumbnailUrl: string | null;
            readonly smallThumbnailUrl: string | null;
            readonly description: string | null;
            readonly categories: ReadonlyArray<string | null> | null;
            readonly maturityRating: string | null;
        };
        readonly borrows: ReadonlyArray<{
            readonly id: string;
            readonly rate: number | null;
            readonly comment: string | null;
            readonly borrowedAt: string | null;
            readonly releasedAt: string | null;
            readonly user: {
                readonly id: string;
                readonly username: string;
                readonly email: string;
            };
        }>;
    } | null;
};
export type CopiesScreenMutation = {
    readonly response: CopiesScreenMutationResponse;
    readonly variables: CopiesScreenMutationVariables;
};



/*
mutation CopiesScreenMutation(
  $isbn: String!
  $user_id: ID!
  $pin: String!
) {
  createCopy(isbn: $isbn, userId: $user_id, pin: $pin) {
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
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "isbn",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "user_id",
    "type": "ID!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "pin",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createCopy",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "isbn",
        "variableName": "isbn"
      },
      {
        "kind": "Variable",
        "name": "pin",
        "variableName": "pin"
      },
      {
        "kind": "Variable",
        "name": "userId",
        "variableName": "user_id"
      }
    ],
    "concreteType": "Copy",
    "plural": false,
    "selections": [
      (v1/*: any*/),
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "book",
        "storageKey": null,
        "args": null,
        "concreteType": "Book",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "title",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "authors",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "thumbnailUrl",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "smallThumbnailUrl",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "description",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "categories",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "maturityRating",
            "args": null,
            "storageKey": null
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "borrows",
        "storageKey": null,
        "args": null,
        "concreteType": "Borrow",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "rate",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "comment",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "borrowedAt",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "releasedAt",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "user",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "username",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "email",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CopiesScreenMutation",
    "type": "RootMutationType",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "CopiesScreenMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "CopiesScreenMutation",
    "id": null,
    "text": "mutation CopiesScreenMutation(\n  $isbn: String!\n  $user_id: ID!\n  $pin: String!\n) {\n  createCopy(isbn: $isbn, userId: $user_id, pin: $pin) {\n    id\n    book {\n      id\n      title\n      authors\n      thumbnailUrl\n      smallThumbnailUrl\n      description\n      categories\n      maturityRating\n    }\n    borrows {\n      id\n      rate\n      comment\n      borrowedAt\n      releasedAt\n      user {\n        id\n        username\n        email\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'e57225d7bf3b598b1863086aba4b9c87';
export default node;
