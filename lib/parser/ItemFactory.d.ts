import {ItemExpressContext, ItemFullContext} from "./ErgoFormParser";
import {Item, ItemExpress, ItemFull} from "@classes/Item";
import {IsItem, ItemConstructor} from "@classes/IsItem";
/**
 * Type definition for a resolver function.
 */
export declare type resolver = (type: string, item: Item) => IsItem | undefined;
/**
 * Main function for resolving an Item into its result.
 * @param {string} type The identifier of the Item
 * @param {Item} item The ItemExpress or ItemFull to be resolved.
 * @param {resolver} resolvers An array of custom resolvers.
 * Note that if the identifier used is the same as the default categories, it is overwritten.
 * @returns {IsItem | undefined} The result Item. If there is no resolution, returns **undefined**.
 */
export declare function resolveItem(type: string, item: Item, ...resolvers: resolver[]): IsItem | undefined;
/**
 * Support function for creating items. The item must follow the [[ItemConstructor]] interface.
 * @param {ItemConstructor} itemConstructor
 * @param {Item} item
 * @returns {IsItem}
 */
export declare function createItemFromType(itemConstructor: ItemConstructor, item?: Item): IsItem;
/**
 * Support function to create an ItemExpress from the parser.
 * @param {ItemExpressContext} source
 * @returns {ItemExpress}
 */
export declare function createItemExpress(source: ItemExpressContext): ItemExpress;
/**
 * Support function to create an ItemFull from the parser.
 * @param {ItemFullContext} source
 * @returns {ItemFull}
 */
export declare function createItemFull(source: ItemFullContext): ItemFull;
