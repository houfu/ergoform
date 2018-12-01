"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Alert_1 = require("@classes/ContentItems/Alert");
const HorizontalLine_1 = require("@classes/ContentItems/HorizontalLine");
const TextBox_1 = require("@classes/ContentItems/TextBox");
const TextCollapse_1 = require("@classes/ContentItems/TextCollapse");
const TextHeader_1 = require("@classes/ContentItems/TextHeader");
const CheckBox_1 = require("@classes/ModelItems/CheckBox");
const InputBox_1 = require("@classes/ModelItems/InputBox");
const SelectBox_1 = require("@classes/ModelItems/SelectBox");
const utils_1 = require("@classes/utils");
const Options_1 = require("@classes/MetaItems/Options");
/**
 * Main function for resolving an Item into its result.
 * @param {string} type The identifier of the Item
 * @param {Item} item The ItemExpress or ItemFull to be resolved.
 * @param {resolver} resolvers An array of custom resolvers.
 * Note that if the identifier used is the same as the default categories, it is overwritten.
 * @returns {IsItem | undefined} The result Item. If there is no resolution, returns **undefined**.
 */
function resolveItem(type, item, ...resolvers) {
    let result;
    result = defaultResolver(type, item);
    resolvers.forEach(value => {
        const resolveResult = value(type, item);
        if (resolveResult) {
            result = resolveResult;
        }
    });
    return result;
}
exports.resolveItem = resolveItem;
/**
 * Function for resolving default items. See [[resolveItem]]
 * @param {string} type
 * @param {Item} item
 * @returns {IsItem | undefined}
 */
function defaultResolver(type, item) {
    switch (type) {
        case Alert_1.ALERT: return createItemFromType(Alert_1.Alert, item);
        case HorizontalLine_1.HORIZONTAL_LINE: return createItemFromType(HorizontalLine_1.HorizontalLine, item);
        case TextBox_1.TEXT_BOX: return createItemFromType(TextBox_1.TextBox, item);
        case TextCollapse_1.TEXT_COLLAPSE: return createItemFromType(TextCollapse_1.TextCollapse, item);
        case TextHeader_1.TEXT_HEADER: return createItemFromType(TextHeader_1.TextHeader, item);
        case CheckBox_1.CHECK_BOX: return createItemFromType(CheckBox_1.CheckBox, item);
        case InputBox_1.INPUT_BOX: return createItemFromType(InputBox_1.InputBox, item);
        case SelectBox_1.SELECT_BOX: return createItemFromType(SelectBox_1.SelectBox, item);
        case Options_1.OPTIONS: return createItemFromType(Options_1.Options, item);
    }
}
/**
 * Support function for creating items. The item must follow the [[ItemConstructor]] interface.
 * @param {ItemConstructor} itemConstructor
 * @param {Item} item
 * @returns {IsItem}
 */
function createItemFromType(itemConstructor, item) {
    return new itemConstructor(item);
}
exports.createItemFromType = createItemFromType;
/**
 * Support function to create an ItemExpress from the parser.
 * @param {ItemExpressContext} source
 * @returns {ItemExpress}
 */
function createItemExpress(source) {
    return {
        type: utils_1.removeQuotes(source.itemType().text),
        value: utils_1.removeQuotes(source.expressValue().text)
    };
}
exports.createItemExpress = createItemExpress;
/**
 * Support function to create an ItemFull from the parser.
 * @param {ItemFullContext} source
 * @returns {ItemFull}
 */
function createItemFull(source) {
    let obj = {};
    const pairs = source.obj().pair();
    for (let pair of pairs) {
        obj[utils_1.removeQuotes(pair.key().text)] = utils_1.removeQuotes(pair.value().text);
    }
    return {
        options: obj,
        type: utils_1.removeQuotes(source.itemType().text)
    };
}
exports.createItemFull = createItemFull;
