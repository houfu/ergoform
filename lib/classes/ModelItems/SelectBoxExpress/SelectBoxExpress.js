"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const antlr4ts_1 = require("antlr4ts");
const SelectBoxExpressLexer_1 = require("@classes/ModelItems/SelectBoxExpress/SelectBoxExpressLexer");
const SelectBoxExpressParser_1 = require("@classes/ModelItems/SelectBoxExpress/SelectBoxExpressParser");
const utils_1 = require("@classes/utils");
const SelectItem_1 = require("@classes/ModelItems/SelectItems/SelectItem");
/**
 * Parse a SelectBox express item value. As a label and options are required for a SelectBox, the express value has to contain both information.
 * A SelectBox express is defined in the following manner: "`label` `;` `array of SelectItem`"
 * For the definition of an array of SelectItem, see [[parseSelectItems]].
 * @param {SelectBox} target
 * @param {string} source
 */
function parseSelectBoxExpress(target, source) {
    let inputStream = new antlr4ts_1.ANTLRInputStream(source);
    let lexer = new SelectBoxExpressLexer_1.SelectBoxExpressLexer(inputStream);
    let tokenStream = new antlr4ts_1.CommonTokenStream(lexer);
    let parse = new SelectBoxExpressParser_1.SelectBoxExpressParser(tokenStream);
    let parseResult = parse.selectBoxExpress();
    target.label = utils_1.removeQuotes(parseResult.label().text);
    const selectItems = parseResult.selectItems();
    if (selectItems) {
        let resultItems = [];
        selectItems.item().forEach(item => {
            let pair = item.pair();
            if (pair) {
                resultItems.push(new SelectItem_1.SelectItem(utils_1.removeQuotes(pair.value()[0].text), utils_1.removeQuotes(pair.value()[1].text)));
            }
            else {
                const value = item.value();
                if (value) {
                    resultItems.push(new SelectItem_1.SelectItem(utils_1.removeQuotes(value.text)));
                }
            }
        });
        target.items = resultItems;
    }
}
exports.parseSelectBoxExpress = parseSelectBoxExpress;
