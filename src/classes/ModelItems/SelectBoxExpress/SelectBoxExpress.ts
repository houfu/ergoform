import {SelectBox} from "@classes/ModelItems/SelectBox";
import {ANTLRInputStream, CommonTokenStream} from "antlr4ts";
import {SelectBoxExpressLexer} from "@classes/ModelItems/SelectBoxExpress/SelectBoxExpressLexer";
import {SelectBoxExpressParser} from "@classes/ModelItems/SelectBoxExpress/SelectBoxExpressParser";
import {removeQuotes} from "@classes/utils";

export function parseSelectBoxExpress(source: string): SelectBox {
    let inputStream = new ANTLRInputStream(source);
    let lexer = new SelectBoxExpressLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parse = new SelectBoxExpressParser(tokenStream);
    let parseResult = parse.selectBoxExpress();
    if (parseResult.selectItems()) {
        return new SelectBox(removeQuotes(parseResult.label().text),
            removeQuotes(parseResult.selectItems()!.text));
    }
    return new SelectBox(removeQuotes(parseResult.label().text),
        '');
}