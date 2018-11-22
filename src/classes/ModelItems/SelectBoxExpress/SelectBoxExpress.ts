import {SelectBox} from "@classes/ModelItems/SelectBox";
import {ANTLRInputStream, CommonTokenStream} from "antlr4ts";
import {SelectBoxExpressLexer} from "@classes/ModelItems/SelectBoxExpress/SelectBoxExpressLexer";
import {SelectBoxExpressParser} from "@classes/ModelItems/SelectBoxExpress/SelectBoxExpressParser";
import {removeQuotes} from "@classes/utils";
import {SelectItem} from "@classes/ModelItems/SelectItems/SelectItem";

export function parseSelectBoxExpress(target: SelectBox, source: string) {
    let inputStream = new ANTLRInputStream(source);
    let lexer = new SelectBoxExpressLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parse = new SelectBoxExpressParser(tokenStream);
    let parseResult = parse.selectBoxExpress();
    target.label = removeQuotes(parseResult.label().text);
    const selectItems = parseResult.selectItems();
    if (selectItems) {
        let resultItems: SelectItem[] = [];
        selectItems.item().forEach(item => {
            let pair = item.pair();
            if (pair) {
                resultItems.push(new SelectItem(removeQuotes(pair.value()[0].text), removeQuotes(pair.value()[1].text)))
            } else {
                const value = item.value();
                if (value) {
                    resultItems.push(new SelectItem(removeQuotes(value.text)))
                }
            }
        });
        target.items = resultItems;
    }
}