"use strict";
/*
 * Copyright (c) 2018. Ang Hou Fu.
 * Licensed under the MIT License. See LICENSE file in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const antlr4ts_1 = require("antlr4ts");
const SelectItemsLexer_1 = require("@classes/ModelItems/SelectItems/SelectItemsLexer");
const SelectItemsParser_1 = require("@classes/ModelItems/SelectItems/SelectItemsParser");
const utils_1 = require("@classes/utils");
/**
 * An option in a [[SelectBox]].
 */
class SelectItem {
    /**
     * Constructor for SelectItem. Parameters are the only fields in the class.
     * @param {string} key THe text that is displayed in the option.
     * @param {string} value The value that is passed to the form. If no value is set, the value is automatically set as the key.
     */
    constructor(key = '', value) {
        this.key = key;
        this.value = value;
        if (!value) {
            this.value = key;
        }
    }
}
exports.SelectItem = SelectItem;
/**
 * Parse an array of SelectItem from a string `items`.
 * The grammar/definition of a string of a SelectItem is: "`key` `:` `value`".
 * The grammar/definition of a string of an array of SelectItem is "`[` `SelectItem` `,` (as many SelectItems as you want) `]`
 * @param {string} items
 * @returns {SelectItem[]}
 */
function parseSelectItems(items) {
    let result = [];
    let inputStream = new antlr4ts_1.ANTLRInputStream(items);
    let lexer = new SelectItemsLexer_1.SelectItemsLexer(inputStream);
    let tokenStream = new antlr4ts_1.CommonTokenStream(lexer);
    let parser = new SelectItemsParser_1.SelectItemsParser(tokenStream);
    let parseResult = parser.selectItems();
    let parseItems = parseResult.item();
    if (parseItems) {
        for (let item of parseItems) {
            let pair = item.pair();
            if (pair) {
                result.push(new SelectItem(utils_1.removeQuotes(pair.key().text), utils_1.removeQuotes(pair.value().text)));
            }
            else {
                let value = item.value();
                if (value) {
                    result.push(new SelectItem(utils_1.removeQuotes(value.text)));
                }
            }
        }
    }
    return result;
}
exports.parseSelectItems = parseSelectItems;
