/*
 * Copyright (c) 2019. Ang Hou Fu.
 * Licensed under the MIT License. See LICENSE file in the project root for license information.
 */

import {ItemExpressContext, ItemFullContext} from "./ErgoFormParser";
import {
    Alert,
    ALERT,
    CHECK_BOX,
    CheckBox,
    HORIZONTAL_LINE,
    HorizontalLine,
    INPUT_BOX,
    InputBox,
    IsItem,
    Item,
    ItemConstructor,
    ItemExpress,
    ItemFull,
    MARKDOWN_BOX,
    MarkdownBox,
    OPTIONS,
    OptionsStore,
    removeQuotes,
    SELECT_BOX,
    SelectBox,
    SUBMIT_BUTTON,
    SubmitButton,
    TEXT_BOX,
    TEXT_COLLAPSE,
    TEXT_HEADER,
    TextBox,
    TextCollapse,
    TextHeader
} from "..";


/**
 * Type definition for a resolver function.
 */
export interface resolver {
    (item: Item): IsItem | undefined;
}

/**
 * Main function for resolving an Item into its result.
 * @param {Item} item The ItemExpress or ItemFull to be resolved.
 * Note that if the identifier used is the same as the default categories, it is overwritten.
 * @param resolvers Custom resolvers which can be used to resolve a custom item.
 * @returns {IsItem | undefined} The result Item. If there is no resolution, returns **undefined**.
 */
export function resolveItem(item: Item, ...resolvers: resolver[]): IsItem | undefined {
    let result;
    result = defaultResolver(item);
    resolvers.forEach(value => {
        const resolveResult = value(item);
        if (resolveResult) {
            result = resolveResult;
        }
    });
    return result;
}

/**
 * Function for resolving default items. See [[resolveItem]]
 * @param {Item} item
 * @returns {IsItem | undefined}
 */
function defaultResolver(item: Item): IsItem | undefined {
    switch (item.type) {
        case ALERT: return createItemFromType(Alert, item);
        case HORIZONTAL_LINE: return createItemFromType(HorizontalLine, item);
        case TEXT_BOX: return createItemFromType(TextBox, item);
        case TEXT_COLLAPSE: return createItemFromType(TextCollapse, item);
        case TEXT_HEADER: return createItemFromType(TextHeader, item);
        case CHECK_BOX: return  createItemFromType(CheckBox, item);
        case INPUT_BOX: return createItemFromType(InputBox, item);
        case SELECT_BOX: return createItemFromType(SelectBox, item);
        case OPTIONS: return createItemFromType(OptionsStore, item);
        case SUBMIT_BUTTON:
            return createItemFromType(SubmitButton, item);
        case MARKDOWN_BOX:
            return createItemFromType(MarkdownBox, item);
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
