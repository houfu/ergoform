/*
 * Copyright (c) 2018. Ang Hou Fu.
 * Licensed under the MIT License. See LICENSE file in the project root for license information.
 */

import {ANTLRInputStream, CommonTokenStream} from "antlr4ts";
import {SelectItemsLexer} from "@classes/ModelItems/SelectItems/SelectItemsLexer";
import {SelectItemsParser} from "@classes/ModelItems/SelectItems/SelectItemsParser";
import {removeQuotes} from "@classes/utils";

/**
 * An option in a [[SelectBox]].
 */
export class SelectItem {
    /**
     * Constructor for SelectItem. Parameters are the only fields in the class.
     * @param {string} key THe text that is displayed in the option.
     * @param {string} value The value that is passed to the form. If no value is set, the value is automatically set as the key.
     */
    constructor(public key: string = '', public value?: string) {
        if (!value) {
            this.value = key;
        }
    }
}

/**
 * Parse an array of SelectItem from a string `items`.
 * The grammar/definition of a string of a SelectItem is: "`key` `:` `value`".
 * The grammar/definition of a string of an array of SelectItem is "`[` `SelectItem` `,` (as many SelectItems as you want) `]`
 * @param {string} items
 * @returns {SelectItem[]}
 */
export function parseSelectItems(items: string): SelectItem[]  {
    let result: SelectItem[] = [];
    let inputStream = new ANTLRInputStream(items);
    let lexer = new SelectItemsLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new SelectItemsParser(tokenStream);
    let parseResult = parser.selectItems();
    let parseItems = parseResult.item();
    if (parseItems) {
        for (let item of parseItems) {
            let pair = item.pair();
            if (pair) {
                result.push(new SelectItem(removeQuotes(pair.value()[0].text), removeQuotes(pair.value()[1].text)))
            } else {
                let value = item.value();
                if (value) {
                    result.push(new SelectItem(removeQuotes(value.text)))
                }
            }
        }
    }
    return result;
}
