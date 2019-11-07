export type Copy = {
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
    }>
};
