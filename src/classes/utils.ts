import {IsItem} from "@classes/IsItem";
import {Item, ItemExpress, ItemFull} from "@classes/Item";

/**
 * Type guard to determine if [[Item]] is an [[ItemExpress]] or [[ItemFull]]
 * @param {Item} item
 * @returns {item is ItemExpress}
 */
export function isItemExpress(item: Item): item is ItemExpress {
    return (<ItemExpress>item).value !== undefined;
}

/**
 * Support function to determine if Item matches type.
 * @param {Item} item The item to be tested.
 * @param {string} type The identifier which the item should possess.
 */
export function checkItemType(item: Item, type: string) {
    if (item.type !== type) {
        throw new Error(`CheckItemType: Item is not a ${type}, is ${item.type}`);
    }
}

/**
 * Support function for filling options. It checks the Item for properties and passes them to the target.
 * For every property, the optional map function is called.
 * This is useful for overriding the standard behaviour, especially numbers, booleans and other validators.
 * @param {IsItem} target The result item which should have all the options in the source.
 * @param {ItemFull} source The source item with the options.
 * @param {(key: string, value: string, target: IsItem) => any} map Function for overriding default behaviour of transferring string values, if necessary.
 */
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

/**
 * Support function to translate strings representing booleans to booleans. Note that the function accepts alternatives.
 * @param {string} value
 * @returns {boolean}
 */
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

/**
 * Support function to remove quotes from the raw string entries.
 * @param {string} source
 * @returns {string}
 */
export function removeQuotes(source: string): string {
    return source.substring(1, source.length-1);
}