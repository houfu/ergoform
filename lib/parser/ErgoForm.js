"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const antlr4ts_1 = require("antlr4ts");
const ErgoFormLexer_1 = require("./ErgoFormLexer");
const ErgoFormParser_1 = require("./ErgoFormParser");
const ItemFactory_1 = require("./ItemFactory");
/**
 * Main function for parsing an ErgoForm into an array of [[IsItem]].
 * @param {string} source
 * @returns {IsItem[] | undefined}
 */
function parseErgoForm(source) {
    let inputStream = new antlr4ts_1.ANTLRInputStream(source);
    let lexer = new ErgoFormLexer_1.ErgoFormLexer(inputStream);
    let tokenStream = new antlr4ts_1.CommonTokenStream(lexer);
    let parser = new ErgoFormParser_1.ErgoFormParser(tokenStream);
    const form = parser.ergoForm();
    if (form) {
        const items = form.items();
        if (items) {
            const itemArray = items.item();
            return parseItems(itemArray);
        }
        const rows = form.itemRows();
        if (rows) {
            const rowArray = rows.itemRow();
            return parseItemRows(rowArray);
        }
    }
}
exports.parseErgoForm = parseErgoForm;
/**
 * Support function for parsing items if they are in the Items style.
 *
 * An Items-style ErgoForm has a definition as follows: `[` `item``,` `item``,` ... `]`
 * For the definition of an item, see [[ItemExpress]] and [[ItemFull]].
 * @param {ItemContext[]} source
 * @returns {IsItem[]}
 */
function parseItems(source) {
    const result = [];
    for (let item of source) {
        const itemContext = item.itemExpress();
        if (itemContext) {
            const itemExpress = ItemFactory_1.createItemExpress(itemContext);
            const resolvedItem = ItemFactory_1.resolveItem(itemExpress.type, itemExpress);
            if (resolvedItem) {
                result.push(resolvedItem);
            }
        }
        else {
            const itemContext = item.itemFull();
            if (itemContext) {
                const itemFull = ItemFactory_1.createItemFull(itemContext);
                const resolvedItem = ItemFactory_1.resolveItem(itemFull.type, itemFull);
                if (resolvedItem) {
                    result.push(resolvedItem);
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
function parseItemRows(source) {
    const result = [];
    for (let row of source) {
        const itemContext = row.item().itemExpress();
        if (itemContext) {
            const itemExpress = ItemFactory_1.createItemExpress(itemContext);
            const resolvedItem = ItemFactory_1.resolveItem(itemExpress.type, itemExpress);
            if (resolvedItem) {
                result.push(resolvedItem);
            }
        }
        else {
            const itemContext = row.item().itemFull();
            if (itemContext) {
                const itemFull = ItemFactory_1.createItemFull(itemContext);
                const resolvedItem = ItemFactory_1.resolveItem(itemFull.type, itemFull);
                if (resolvedItem) {
                    result.push(resolvedItem);
                }
            }
        }
    }
    return result;
}
