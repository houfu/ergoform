import {IsItem} from "@classes/IsItem";
import {ANTLRInputStream, CommonTokenStream} from "antlr4ts";
import {ErgoFormLexer} from "./ErgoFormLexer";
import {ErgoFormParser, ItemContext, ItemRowContext} from "./ErgoFormParser";
import {createItemExpress, createItemFull, resolveItem} from "./ItemFactory";

/**
 * Main function for parsing an ErgoForm into an array of [[IsItem]].
 * @param {string} source
 * @returns {IsItem[] | undefined}
 */
export function parseErgoForm(source: string): IsItem[] | undefined {
    let inputStream = new ANTLRInputStream(source);
    let lexer = new ErgoFormLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new ErgoFormParser(tokenStream);
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
            return parseItemRows(rowArray)
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
            const resolvedItem = resolveItem(itemExpress.type, itemExpress);
            if (resolvedItem) {
                result.push(resolvedItem)
            }
        } else {
            const itemContext = item.itemFull();
            if (itemContext) {
                const itemFull = createItemFull(itemContext);
                const resolvedItem = resolveItem(itemFull.type, itemFull);
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
            const resolvedItem = resolveItem(itemExpress.type, itemExpress);
            if (resolvedItem) {
                result.push(resolvedItem)
            }
        } else {
            const itemContext = row.item().itemFull();
            if (itemContext) {
                const itemFull = createItemFull(itemContext);
                const resolvedItem = resolveItem(itemFull.type, itemFull);
                if (resolvedItem) {
                    result.push(resolvedItem)
                }
            }
        }
    }
    return result;
}