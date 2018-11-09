import {IsItem} from "@classes/IsItem";
import {Item, ItemExpress, ItemFull} from "@classes/Item";

export function isItemExpress(item: Item): item is ItemExpress {
    return (<ItemExpress>item).value !== undefined;
}

export function checkItemType(item: Item, type: string) {
    if (item.type !== type) {
        throw new Error(`CheckItemType: Item is not a ${type}, is ${item.type}`);
    }
}

export function fillOptions(target: IsItem, source: ItemFull, map?: (key: string, value: string, target: IsItem) => any) {
    for (let property in source.options) {
        if (!source.options.hasOwnProperty(property)) {
            return;
        }
        if (target.hasOwnProperty(property)) {
            if (typeof (<any>target)[property] === 'string') {
                (<any>target)[property] = source.options[property];
            }
        }
        if (map) {
            map(property, source.options[property], target);
        }
    }
}

export function parseBoolean(value: string): boolean {
    const answer = value.trim().toLowerCase();
    switch (answer) {
        case 'yes':
        case '1':
        case 'true':
        case 'yeah':
        case 'ya':
        case 'good':
        case 'ok':
        case 'on':
            return true;
        default:
            return false;
    }
}

export function removeQuotes(source: string): string {
    return source.substring(1, source.length-1);
}