/*
 * Copyright (c) 2018. Ang Hou Fu.
 * Licensed under the MIT License. See LICENSE file in the project root for license information.
 */

import {checkItemInConstructor, IsItem} from "../IsItem";
import {IsModel} from "./IsModel";
import {InputTypes} from "./InputTypes";
import {checkItemType, fillOptions, isItemExpress, parseBoolean} from "../utils";
import {Item} from "../Item";

/**
 * Identifier for the [[InputBox]] item.
 * @type {string}
 */
export const INPUT_BOX = 'input-box';

/**
 * An input box in a form. This item is based on the HTML `<input>`.
 */
export class InputBox implements IsItem, IsModel {
    /**
     * Returns or sets the label of the InputBox. If there is no control value, the control value is set as the label.
     * @returns {string}
     */
    get label(): string {
        return this._label;
    }

    set label(value: string) {
        if (!this.control || this._label === this.control) {
            this.control = value;
        }
        this._label = value;
    }

    /**
     * A string specifying a name for the input control. This name is submitted along with the control's value when the form data is submitted.
     * @type {string}
     */
    control: string = '';
    /**
     * Field for the label property.
     * @type {string}
     * @private
     */
    private _label: string = '';
    /**
     * An optional help string to guide the user on how to fill this item in the form.
     * @type {string}
     */
    help: string = '';
    /**
     * Specifies whether the user must input a value into this field. Defaults to false or not required.
     * @type {boolean}
     */
    required: boolean = false;

    /**
     * Specifies what kind of input is expected from the user. Defaults to `text`, the most common use case.
     * @type {InputTypes.text}
     */
    inputType: InputTypes = InputTypes.text;

    /**
     * Constructor for the InputBox item. It accepts a string (which sets the label and an automatic control value) or an item which will be converted into a InputBox Item.
     * @param {Item | string} item
     */
    constructor(item? : Item | string) {
        checkItemInConstructor(this, item, label => this.label = label)
    }

    /**
     * See [[IsItem.ConvertItem]]
     * @param {Item} item
     * @constructor
     */
    ConvertItem(item: Item): void {
        checkItemType(item, INPUT_BOX);
        if (isItemExpress(item)) {
            this.label = item.value;
        } else {
            fillOptions(this, item, (key, value) => {
                switch (key) {
                    case 'label':
                        this.label = value;
                        return;
                    case 'required':
                        this.required = parseBoolean(value);
                        return;
                    case 'inputType':
                        this.inputType = +value;
                        return;
                }
            })
        }
    }

}
