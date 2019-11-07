/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CopyRow_copy = {
    readonly book: {
        readonly title: string;
        readonly thumbnailUrl: string | null;
    };
    readonly " $refType": "CopyRow_copy";
};
export type CopyRow_copy$data = CopyRow_copy;
export type CopyRow_copy$key = {
    readonly " $data"?: CopyRow_copy$data;
    readonly " $fragmentRefs": FragmentRefs<"CopyRow_copy">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "CopyRow_copy",
  "type": "Copy",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "book",
      "storageKey": null,
      "args": null,
      "concreteType": "Book",
      "plural": false,
      "selections": [
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
          "name": "thumbnailUrl",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
(node as any).hash = '638ffb105599505b83a0a90da5354faf';
export default node;
