/*
 * Copyright (c) 2018. Ang Hou Fu.
 * Licensed under the MIT License. See LICENSE file in the project root for license information.
 */

import {checkItemInConstructor, IsItem} from "../IsItem";
import {Item} from "../Item";
import {checkItemType, fillOptions, isItemExpress} from "../utils";

/**
 * A string identifier for the [[SubmitButton]] item.
 * @type {string}
 */
export const SUBMIT_BUTTON = 'submit-button';

/**
 * A button which the user clicks to submit his input to the form.
 */
export class SubmitButton implements IsItem {
    /**
     * Add a custom cssClass to the button
     * @type {string}
     */
    cssClass: string = '';

    /**
     * The text that will be displayed on the button itself.
     * @type {string}
     */
    label: string = 'Submit';

    /**
     * Constructor for the SubmitButton item. It accepts an item which will be converted to a SubmitButton or the label of the button.
     * @param {Item | string} item
     */
    constructor(item? : Item | string) {
        checkItemInConstructor(this, item, value => this.label = value)
    }

    /**
     * See [[IsItem.ConvertItem]]. Note that nothing will be done to an ItemExpress of type SubmitButton -- the button is just created.
     * @param {Item} item
     * @constructor
     */
    ConvertItem(item: Item): void {
        checkItemType(item, SUBMIT_BUTTON);
        if (!isItemExpress(item)) {
            fillOptions(this, item)
        } else {
            this.label = item.value;
        }
    }

}
