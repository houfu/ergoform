import {ItemExpressContext, ItemFullContext} from "./ErgoFormParser";
import {Item, ItemExpress, ItemFull} from "@classes/Item";
import {IsItem, ItemConstructor} from "@classes/IsItem";
import {Alert, ALERT} from "@classes/ContentItems/Alert";
import {HORIZONTAL_LINE, HorizontalLine} from "@classes/ContentItems/HorizontalLine";
import {TEXT_BOX, TextBox} from "@classes/ContentItems/TextBox";
import {TEXT_COLLAPSE, TextCollapse} from "@classes/ContentItems/TextCollapse";
import {TEXT_HEADER, TextHeader} from "@classes/ContentItems/TextHeader";
import {CHECK_BOX, CheckBox} from "@classes/ModelItems/CheckBox";
import {INPUT_BOX, InputBox} from "@classes/ModelItems/InputBox";
import {SELECT_BOX, SelectBox} from "@classes/ModelItems/SelectBox";
import {removeQuotes} from "@classes/utils";
import {Options, OPTIONS} from "@classes/MetaItems/Options";

/**
 * Type definition for a resolver function.
 */
export type resolver = (type: string, item: Item) => IsItem | undefined;

/**
 * Main function for resolving an Item into its result.
 * @param {string} type The identifier of the Item
 * @param {Item} item The ItemExpress or ItemFull to be resolved.
 * @param {resolver} resolvers An array of custom resolvers.
 * Note that if the identifier used is the same as the default categories, it is overwritten.
 * @returns {IsItem | undefined} The result Item. If there is no resolution, returns **undefined**.
 */
export function resolveItem(type: string, item: Item, ...resolvers: resolver[]): IsItem | undefined {
    let result;
    result = defaultResolver(type, item);
    resolvers.forEach(value => {
        const resolveResult = value(type, item);
        if (resolveResult) {
            result = resolveResult;
        }
    });
    return result;
}

/**
 * Function for resolving default items. See [[resolveItem]]
 * @param {string} type
 * @param {Item} item
 * @returns {IsItem | undefined}
 */
function defaultResolver(type: string, item: Item): IsItem | undefined {
    switch (type) {
        case ALERT: return createItemFromType(Alert, item);
        case HORIZONTAL_LINE: return createItemFromType(HorizontalLine, item);
        case TEXT_BOX: return createItemFromType(TextBox, item);
        case TEXT_COLLAPSE: return createItemFromType(TextCollapse, item);
        case TEXT_HEADER: return createItemFromType(TextHeader, item);
        case CHECK_BOX: return  createItemFromType(CheckBox, item);
        case INPUT_BOX: return createItemFromType(InputBox, item);
        case SELECT_BOX: return createItemFromType(SelectBox, item);
        case OPTIONS: return createItemFromType(Options, item);
    }
}

/**
 * Support function for creating items. The item must follow the [[ItemConstructor]] interface.
 * @param {ItemConstructor} itemConstructor
 * @param {Item} item
 * @returns {IsItem}
 */
export function createItemFromType(itemConstructor: ItemConstructor, item?: Item): IsItem {
    return new itemConstructor(item);
}

/**
 * Support function to create an ItemExpress from the parser.
 * @param {ItemExpressContext} source
 * @returns {ItemExpress}
 */
export function createItemExpress(source: ItemExpressContext): ItemExpress {
    return {
        type: removeQuotes(source.itemType().text),
        value: removeQuotes(source.expressValue().text)
    }
}

/**
 * Support function to create an ItemFull from the parser.
 * @param {ItemFullContext} source
 * @returns {ItemFull}
 */
export function createItemFull(source: ItemFullContext): ItemFull {
    let obj: { [key: string]: string } = {};
    const pairs = source.obj().pair();
    for (let pair of pairs) {
        obj[removeQuotes(pair.key().text)] = removeQuotes(pair.value().text);
    }
    return {
        options: obj,
        type: removeQuotes(source.itemType().text)
    }
}