/*
 * Copyright (c) 2018. Ang Hou Fu.
 * Licensed under the MIT License. See LICENSE file in the project root for license information.
 */

import {checkItemInConstructor, IsItem} from "../IsItem";
import {IsModel} from "./IsModel";
import {checkItemType, fillOptions, isItemExpress} from "../utils";
import {Item} from "../Item";

/**
 * Item identifier for the [[CheckBox]] Item.
 * @type {string}
 */
export const CHECK_BOX = 'check-box';

/**
 * A check box input. The user can click on it to enter a boolean, yes-no property.
 */
export class CheckBox implements IsItem, IsModel {
    /**
     * Accesses the label of the item. If no control value is set, the control value is set as the label.
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
     * A string specifying a name for the input control. This name is submitted along with the control's value when the form data is submitted
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
     * An optional header which can be used to separate the form or introduce this item.
     * @type {string}
     */
    header: string = '';

    /**
     * Constructor for the CheckBox item. It accepts a string (which sets the label and an automatic control value) or an item which will be converted into a CheckBox Item.
     * @param {Item | string} item
     */
    constructor(item?: Item | string) {
        checkItemInConstructor<CheckBox>(this,item, value => this.label = value)
    }

    /**
     * See [[IsItem.ConvertItem]]
     * @param {Item} item
     * @constructor
     */
    ConvertItem(item: Item): void {
        checkItemType(item, CHECK_BOX);
        if (isItemExpress(item)) {
            this.label = item.value;
        } else {
            fillOptions(this, item, (key, value) => {
                if (key === 'label') {
                    this.label = value;
                }
            })
        }
    }

}
