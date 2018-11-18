import {Item} from "@classes/Item";

export interface IsItem {
    ConvertItem(item: Item): void;
}

export interface ItemConstructor {
    new (item?: Item | string): IsItem
}

export function checkItemInConstructor<T extends IsItem>(source: T, item?: Item | string, stringFn?: (value: string) => void) {
    if (item) {
        if (typeof item === 'string') {
            if (stringFn){
                stringFn(item);
            }
        } else {
            source.ConvertItem(item);
        }
    }
}