export type Item = ItemFull | ItemExpress;

export interface ItemFull {
    options: Record<string, string>;
    type: string;
}

export interface ItemExpress {
    type: string;
    value: string;
}