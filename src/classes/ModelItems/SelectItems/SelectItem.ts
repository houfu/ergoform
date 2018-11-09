import {ANTLRInputStream, CommonTokenStream} from "antlr4ts";
import {SelectItemsLexer} from "@classes/ModelItems/SelectItems/SelectItemsLexer";
import {SelectItemsParser} from "@classes/ModelItems/SelectItems/SelectItemsParser";
import {removeQuotes} from "@classes/utils";

export class SelectItem {
    constructor(public key: string = '', public value?: string) {
        if (!value) {
            this.value = key;
        }
    }
}

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
