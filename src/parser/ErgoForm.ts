/*
 * Copyright (c) 2019. Ang Hou Fu.
 * Licensed under the MIT License. See LICENSE file in the project root for license information.
 */

import {ANTLRInputStream, CommonTokenStream} from "antlr4ts";
import {ErgoFormLexer} from "./ErgoFormLexer";
import {ErgoFormContext, ErgoFormParser, ItemContext, ItemRowContext} from "./ErgoFormParser";
import {createItemExpress, createItemFull, resolveItem} from "./ItemFactory";
import {IsItem, Options, OptionsStore} from "..";


export class ErgoForm {
    items: IsItem[] = [];
    options: Options = new Options();

    constructor(items?: IsItem[]) {
        if (items) {
            this.items = items;
            getOptions(this);
        }
    }
}

/**
 * Main function for parsing an ErgoForm into an array of [[IsItem]].
 * @param {string} source
 * @returns {IsItem[] | undefined}
 */
export function parseErgoForm(source: string): ErgoForm {
    let inputStream = new ANTLRInputStream(source);
    let lexer = new ErgoFormLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new ErgoFormParser(tokenStream);
    const form = parser.ergoForm();
    let result = parseErgoFormItems(form);
    if (result) {
        getOptions(result);
        return result;
    } else {
        throw new Error('There are no items in the source ErgoForm');
    }
}

function parseErgoFormItems(source: ErgoFormContext): ErgoForm | undefined {
    if (source) {
        const items = source.items();
        if (items) {
            const itemArray = items.item();
            return new ErgoForm(parseItems(itemArray));
        }
        const rows = source.itemRows();
        if (rows) {
            const rowArray = rows.itemRow();
            return new ErgoForm(parseItemRows(rowArray));
        }
    }
}

/**
 * Support function for parsing items if they are in the Items style.
 *
 * An Items-style ErgoForm has a definition as follows: `[` `item``,` `item``,` ... `]`
 * For the definition of an item, see [[ItemExpress]] and [[ItemFull]].
 * @param {ItemContext[]} source
 * @returns {IsItem[]}
 */
function parseItems(source: ItemContext[]): IsItem[] {
    const result = [];
    for (let item of source) {
        const itemContext = item.itemExpress();
        if (itemContext) {
            const itemExpress = createItemExpress(itemContext);
            const resolvedItem = resolveItem(itemExpress);
            if (resolvedItem) {
                result.push(resolvedItem)
            }
        } else {
            const itemContext = item.itemFull();
            if (itemContext) {
                const itemFull = createItemFull(itemContext);
                const resolvedItem = resolveItem(itemFull);
                if (resolvedItem) {
                    result.push(resolvedItem)
                }
            }
        }
    }
    return result;
}

/**
 * Support function for parsing items if they are in the ItemRows style.
 *
 * An ItemRows-style has the following grammar or definition: `item` `\newline` `item` `\newline`...
 * For the definition of an item, see [[ItemExpress]] and [[ItemFull]].
 * @param {ItemRowContext[]} source
 * @returns {IsItem[]}
 */
function parseItemRows(source: ItemRowContext[]): IsItem[] {
    const result = [];
    for (let row of source) {
        const itemContext = row.item().itemExpress();
        if (itemContext) {
            const itemExpress = createItemExpress(itemContext);
            const resolvedItem = resolveItem(itemExpress);
            if (resolvedItem) {
                result.push(resolvedItem)
            }
        } else {
            const itemContext = row.item().itemFull();
            if (itemContext) {
                const itemFull = createItemFull(itemContext);
                const resolvedItem = resolveItem(itemFull);
                if (resolvedItem) {
                    result.push(resolvedItem)
                }
            }
        }
    }
    return result;
}

function getOptions(source: ErgoForm) {
    let option = source.items.find(value => value instanceof OptionsStore);
    if (option) {
        Object.assign(source.options, option)
    }
}
