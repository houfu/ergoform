export interface Item {
    ConvertItem(item: ItemFull | ItemExpress): void;
}

export interface ItemFull {
    options: Record<string, string>;
    type: string;
}

export interface ItemExpress {
    type: string;
    value: string;
}

