/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type CopiesScreenQueryVariables = {
    user_id: string;
};
export type CopiesScreenQueryResponse = {
    readonly copiesByUserId: ReadonlyArray<{
        readonly id: string;
        readonly coordinates: unknown | null;
        readonly coordinatesUpdatedAt: unknown | null;
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
            readonly comment: string | null;
            readonly rate: number | null;
            readonly user: {
                readonly id: string;
                readonly username: string;
            };
        }>;
    } | null> | null;
};
export type CopiesScreenQuery = {
    readonly response: CopiesScreenQueryResponse;
    readonly variables: CopiesScreenQueryVariables;
};



/*
query CopiesScreenQuery(
  $user_id: String!
) {
  copiesByUserId(userId: $user_id) {
    id
    coordinates
    coordinatesUpdatedAt
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
      comment
      rate
      user {
        id
        username
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "user_id",
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
    "name": "copiesByUserId",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "userId",
        "variableName": "user_id"
      }
    ],
    "concreteType": "Copy",
    "plural": true,
    "selections": [
      (v1/*: any*/),
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "coordinates",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "coordinatesUpdatedAt",
        "args": null,
        "storageKey": null
      },
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
            "name": "comment",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "rate",
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
    "name": "CopiesScreenQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "CopiesScreenQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "CopiesScreenQuery",
    "id": null,
    "text": "query CopiesScreenQuery(\n  $user_id: String!\n) {\n  copiesByUserId(userId: $user_id) {\n    id\n    coordinates\n    coordinatesUpdatedAt\n    book {\n      id\n      title\n      authors\n      thumbnailUrl\n      smallThumbnailUrl\n      description\n      categories\n      maturityRating\n    }\n    borrows {\n      id\n      comment\n      rate\n      user {\n        id\n        username\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '340c424a851007113e86c6ca274d68c9';
export default node;
