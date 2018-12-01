"use strict";
/*
 * Copyright (c) 2018. Ang Hou Fu.
 * Licensed under the MIT License. See LICENSE file in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const IsItem_1 = require("@classes/IsItem");
const InputTypes_1 = require("@classes/ModelItems/InputTypes");
const utils_1 = require("@classes/utils");
/**
 * Identifier for the [[InputBox]] item.
 * @type {string}
 */
exports.INPUT_BOX = 'input-box';
/**
 * An input box in a form. This item is based on the HTML `<input>`.
 */
class InputBox {
    /**
     * Constructor for the InputBox item. It accepts a string (which sets the label and an automatic control value) or an item which will be converted into a InputBox Item.
     * @param {Item | string} item
     */
    constructor(item) {
        /**
         * A string specifying a name for the input control. This name is submitted along with the control's value when the form data is submitted.
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
         * Specifies whether the user must input a value into this field. Defaults to false or not required.
         * @type {boolean}
         */
        this.required = false;
        /**
         * Specifies what kind of input is expected from the user. Defaults to `text`, the most common use case.
         * @type {InputTypes.text}
         */
        this.inputType = InputTypes_1.InputTypes.text;
        IsItem_1.checkItemInConstructor(this, item, label => this.label = label);
    }
    /**
     * Returns or sets the label of the InputBox. If there is no control value, the control value is set as the label.
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
        utils_1.checkItemType(item, exports.INPUT_BOX);
        if (utils_1.isItemExpress(item)) {
            this.label = item.value;
        }
        else {
            utils_1.fillOptions(this, item, (key, value) => {
                switch (key) {
                    case 'label':
                        this.label = value;
                        return;
                    case 'required':
                        this.required = utils_1.parseBoolean(value);
                        return;
                    case 'inputType':
                        this.inputType = +value;
                        return;
                }
            });
        }
    }
}
exports.InputBox = InputBox;
