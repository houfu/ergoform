"use strict";
/*
 * Copyright (c) 2018. Ang Hou Fu.
 * Licensed under the MIT License. See LICENSE file in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const IsItem_1 = require("@classes/IsItem");
const utils_1 = require("@classes/utils");
/**
 * Item identifier for the [[TextHeader]] Item
 * @type {string}
 */
exports.TEXT_HEADER = 'text-header';
/**
 * A text header for the form. This can be used to introduce or separate different sections of a form.
 */
class TextHeader {
    /**
     * Constructor for TextHeader item. It accepts a string (which sets the text of the header) or an Item which will be converted into a TextHeader item.
     * @param {Item | string} item
     */
    constructor(item) {
        /**
         * The text of the header.
         * @type {string}
         */
        this.text = '';
        /**
         * Optional CSS classes which are tagged to this header.
         * @type {string}
         */
        this.cssClass = '';
        /**
         * The level of the header. The level of a header conveys the size and weight of the header, such as h1, h2, h3 etc. The default level is h3, or 3.
         * @type {number}
         */
        this.headerLevel = 3;
        IsItem_1.checkItemInConstructor(this, item, value => this.text = value);
    }
    /**
     * See [[IsItem.ConvertItem]]
     * @param {Item} item
     * @constructor
     */
    ConvertItem(item) {
        utils_1.checkItemType(item, exports.TEXT_HEADER);
        if (utils_1.isItemExpress(item)) {
            this.text = item.value;
        }
        else {
            utils_1.fillOptions(this, item, ((key, value) => this.setHeaderLevel(key, value)));
        }
    }
    /**
     * Utility function to check whether the value passed can be used for the [[headerLevel]] field. If the number passed is more than 6 or 0, it will throw an error.
     * @param {string} key The key must be 'headerLevel' or the function will not do anything.
     * @param {string} value The value which is to be parsed. Must be an integer between 1 and 6.
     */
    setHeaderLevel(key, value) {
        if (key === 'headerLevel') {
            const headerLevel = parseInt(value);
            if (headerLevel > 6 || !headerLevel) {
                throw new Error('TextHeaderItem.ConvertItem:'
                    + `HeaderLevel is not a valid number. Value was ${value}`);
            }
            else {
                this.headerLevel = headerLevel;
            }
        }
    }
}
exports.TextHeader = TextHeader;
