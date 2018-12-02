"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Type guard to determine if [[Item]] is an [[ItemExpress]] or [[ItemFull]]
 * @param {Item} item
 * @returns {item is ItemExpress}
 */
function isItemExpress(item) {
    return item.value !== undefined;
}
exports.isItemExpress = isItemExpress;
/**
 * Support function to determine if Item matches type.
 * @param {Item} item The item to be tested.
 * @param {string} type The identifier which the item should possess.
 */
function checkItemType(item, type) {
    if (item.type !== type) {
        throw new Error(`CheckItemType: Item is not a ${type}, is ${item.type}`);
    }
}
exports.checkItemType = checkItemType;
/**
 * Support function for filling options. It checks the Item for properties and passes them to the target.
 * For every property, the optional map function is called.
 * This is useful for overriding the standard behaviour, especially numbers, booleans and other validators.
 * @param {IsItem} target The result item which should have all the options in the source.
 * @param {ItemFull} source The source item with the options.
 * @param {(key: string, value: string, target: IsItem) => any} map Function for overriding default behaviour of transferring string values, if necessary.
 */
function fillOptions(target, source, map) {
    for (let property in source.options) {
        if (!source.options.hasOwnProperty(property)) {
            return;
        }
        if (target.hasOwnProperty(property)) {
            if (typeof target[property] === 'string') {
                target[property] = source.options[property];
            }
        }
        if (map) {
            map(property, source.options[property], target);
        }
    }
}
exports.fillOptions = fillOptions;
/**
 * Support function to translate strings representing booleans to booleans. Note that the function accepts alternatives.
 * @param {string} value
 * @returns {boolean}
 */
function parseBoolean(value) {
    const answer = value.trim().toLowerCase();
    switch (answer) {
        case 'yes':
        case '1':
        case 'true':
        case 'yeah':
        case 'ya':
        case 'good':
        case 'ok':
        case 'on':
            return true;
        default:
            return false;
    }
}
exports.parseBoolean = parseBoolean;
/**
 * Support function to remove quotes from the raw string entries.
 * @param {string} source
 * @returns {string}
 */
function removeQuotes(source) {
    return source.substring(1, source.length - 1);
}
exports.removeQuotes = removeQuotes;
