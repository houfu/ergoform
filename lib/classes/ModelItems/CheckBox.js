"use strict";
/*
 * Copyright (c) 2018. Ang Hou Fu.
 * Licensed under the MIT License. See LICENSE file in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const IsItem_1 = require("@classes/IsItem");
const utils_1 = require("@classes/utils");
/**
 * Item identifier for the [[CheckBox]] Item.
 * @type {string}
 */
exports.CHECK_BOX = 'check-box';
/**
 * A check box input. The user can click on it to enter a boolean, yes-no property.
 */
class CheckBox {
    /**
     * Constructor for the CheckBox item. It accepts a string (which sets the label and an automatic control value) or an item which will be converted into a CheckBox Item.
     * @param {Item | string} item
     */
    constructor(item) {
        /**
         * A string specifying a name for the input control. This name is submitted along with the control's value when the form data is submitted
         * @type {string}
         */
        this.control = '';
        /**
         * Field for the label property.
         * @type {string}
         * @private
         */
        this._label = '';
        /**
         * An optional help string to guide the user on how to fill this item in the form.
         * @type {string}
         */
        this.help = '';
        /**
         * An optional header which can be used to separate the form or introduce this item.
         * @type {string}
         */
        this.header = '';
        IsItem_1.checkItemInConstructor(this, item, value => this.label = value);
    }
    /**
     * Accesses the label of the item. If no control value is set, the control value is set as the label.
     * @returns {string}
     */
    get label() {
        return this._label;
    }
    set label(value) {
        if (!this.control || this._label === this.control) {
            this.control = value;
        }
        this._label = value;
    }
    /**
     * See [[IsItem.ConvertItem]]
     * @param {Item} item
     * @constructor
     */
    ConvertItem(item) {
        utils_1.checkItemType(item, exports.CHECK_BOX);
        if (utils_1.isItemExpress(item)) {
            this.label = item.value;
        }
        else {
            utils_1.fillOptions(this, item, (key, value) => {
                if (key === 'label') {
                    this.label = value;
                }
            });
        }
    }
}
exports.CheckBox = CheckBox;
