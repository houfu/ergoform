"use strict";
/*
 * Copyright (c) 2018. Ang Hou Fu.
 * Licensed under the MIT License. See LICENSE file in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const IsItem_1 = require("@classes/IsItem");
const utils_1 = require("@classes/utils");
const SelectItem_1 = require("@classes/ModelItems/SelectItems/SelectItem");
const SelectBoxExpress_1 = require("@classes/ModelItems/SelectBoxExpress/SelectBoxExpress");
/**
 * A string identifier for the [[SelectBox]] item.
 * @type {string}
 */
exports.SELECT_BOX = 'select-box';
/**
 * A SelectBox presents a user with several options, and the user selects one or several.
 */
class SelectBox {
    /**
     * Constructor for the SelectBox item. It accepts a string (which sets the label and the items/options) or an item which will be converted into a SelectBox Item.
     * For more information on setting the string, see [[SelectBoxExpress]].
     * @param {Item | string} item
     */
    constructor(item) {
        /**
         * A field to contain the label.
         * @type {string}
         * @private
         */
        this._label = '';
        /**
         * A string specifying a name for the input control. This name is submitted along with the control's value when the form data is submitted
         * @type {string}
         */
        this.control = '';
        /**
         * A Boolean attribute indicating that an option with a non-empty string value must be selected.
         * @type {boolean}
         */
        this.required = false;
        /**
         * This Boolean attribute indicates that multiple options can be selected in the list. If it is not specified, then only one option can be selected at a time. When multiple is specified, most browsers will show a scrolling list box instead of a single line dropdown.
         * @type {boolean}
         */
        this.multiple = false;
        /**
         * If the control is presented as a scrolling list box (e.g. when multiple is specified), this attribute represents the number of rows in the list that should be visible at one time. Browsers are not required to present a select element as a scrolled list box. The default value is 0.
         * @type {number}
         */
        this.size = 0;
        /**
         * A string that is displayed to the user to guide how to input values into this control.
         * @type {string}
         */
        this.help = '';
        /**
         * An array of options in this SelectBox item.
         * @type {any[]}
         */
        this.items = [];
        IsItem_1.checkItemInConstructor(this, item, value => SelectBoxExpress_1.parseSelectBoxExpress(this, value));
    }
    /**
     * Accesses the label of this item. If no control value was set when the label is set, the control value is set as the label.
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
        utils_1.checkItemType(item, exports.SELECT_BOX);
        if (utils_1.isItemExpress(item)) {
            SelectBoxExpress_1.parseSelectBoxExpress(this, item.value);
        }
        else {
            utils_1.fillOptions(this, item, (key, value) => {
                switch (key) {
                    case 'required':
                        this.required = utils_1.parseBoolean(value);
                        return;
                    case 'multiple':
                        this.multiple = utils_1.parseBoolean(value);
                        return;
                    case 'size':
                        this.size = parseInt(value);
                        return;
                    case 'label':
                        this.label = value;
                        return;
                    case 'items':
                        this.items = SelectItem_1.parseSelectItems(value);
                        return;
                }
            });
        }
    }
}
exports.SelectBox = SelectBox;
