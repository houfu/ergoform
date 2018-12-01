"use strict";
/*
 * Copyright (c) 2018. Ang Hou Fu.
 * Licensed under the MIT License. See LICENSE file in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const IsItem_1 = require("@classes/IsItem");
const utils_1 = require("@classes/utils");
/**
 * Identifier for the [[Options]] item.
 * @type {string}
 */
exports.OPTIONS = 'options';
class Options {
    constructor(item) {
        /**
         * Options contains an object of string keys and string values.
         * @type {{}}
         */
        this.options = {};
        IsItem_1.checkItemInConstructor(this, item);
    }
    /**
     * Helper function to set an option in the [[options]].
     * @param {string} key
     * @param {string} value
     */
    setOption(key, value) {
        this.options[key] = value;
    }
    /**
     * Helper function to get the value of an option in the [[options]]. Returns the raw string form of the option.
     * @param {string} key
     * @returns {string}
     */
    getOption(key) {
        return this.options[key];
    }
    /**
     * Helper function to get the value of an option in the [[options]]. Returns the result in a boolean format parsed from the string.
     * @param {string} key
     * @returns {boolean}
     */
    getOptionBoolean(key) {
        if (this.options[key]) {
            return utils_1.parseBoolean(this.options[key]);
        }
        return false;
    }
    /**
     * Helper function to get the value of an option in the [[options]]. Returns the result in a number or integer parsed from the string.
     * @param {string} key
     * @returns {number}
     */
    getOptionInt(key) {
        return parseInt(this.options[key]);
    }
    /**
     * See [[IsItem.ConvertItem]].
     *
     * For Options item, there is no ItemExpress as it is not meaningful.
     * @param {Item} item
     * @constructor
     */
    ConvertItem(item) {
        utils_1.checkItemType(item, exports.OPTIONS);
        if (!utils_1.isItemExpress(item)) {
            for (let key in item.options) {
                this.setOption(key, item.options[key]);
            }
        }
    }
}
exports.Options = Options;
