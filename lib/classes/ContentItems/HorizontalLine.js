"use strict";
/*
 * Copyright (c) 2018. Ang Hou Fu.
 * Licensed under the MIT License. See LICENSE file in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@classes/utils");
/**
 * Item identifier for the [[HorizontalLine]] class item.
 * @type {string}
 */
exports.HORIZONTAL_LINE = 'horizontal-line';
/**
 * Adds a horizontal line in the form. Use this as a way to separate different sections of a form.
 */
class HorizontalLine {
    constructor(item) {
        /**
         * Adds custom CSS classes to the horizontal line. Defaults to "".
         * @type {string}
         */
        this.cssClass = '';
        if (item && (!(typeof item === "string"))) {
            this.ConvertItem(item);
        }
    }
    ConvertItem(item) {
        utils_1.checkItemType(item, exports.HORIZONTAL_LINE);
        if (!utils_1.isItemExpress(item)) {
            this.cssClass = item.options['cssClass'] || '';
        }
    }
}
exports.HorizontalLine = HorizontalLine;
