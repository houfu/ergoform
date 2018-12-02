import {IsItem} from "@classes/IsItem";
import {Item, ItemExpress, ItemFull} from "@classes/Item";

/**
 * Type guard to determine if [[Item]] is an [[ItemExpress]] or [[ItemFull]]
 * @param {Item} item
 * @returns {item is ItemExpress}
 */
export declare function isItemExpress(item: Item): item is ItemExpress;
/**
 * Support function to determine if Item matches type.
 * @param {Item} item The item to be tested.
 * @param {string} type The identifier which the item should possess.
 */
export declare function checkItemType(item: Item, type: string): void;
/**
 * Support function for filling options. It checks the Item for properties and passes them to the target.
 * For every property, the optional map function is called.
 * This is useful for overriding the standard behaviour, especially numbers, booleans and other validators.
 * @param {IsItem} target The result item which should have all the options in the source.
 * @param {ItemFull} source The source item with the options.
 * @param {(key: string, value: string, target: IsItem) => any} map Function for overriding default behaviour of transferring string values, if necessary.
 */
export declare function fillOptions(target: IsItem, source: ItemFull, map?: (key: string, value: string, target: IsItem) => any): void;
/**
 * Support function to translate strings representing booleans to booleans. Note that the function accepts alternatives.
 * @param {string} value
 * @returns {boolean}
 */
export declare function parseBoolean(value: string): boolean;
/**
 * Support function to remove quotes from the raw string entries.
 * @param {string} source
 * @returns {string}
 */
export declare function removeQuotes(source: string): string;
