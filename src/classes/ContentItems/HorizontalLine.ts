/*
 * Copyright (c) 2018. Ang Hou Fu.
 * Licensed under the MIT License. See LICENSE file in the project root for license information.
 */

import {IsItem} from "@classes/IsItem";
import {checkItemType, isItemExpress} from "@classes/utils";
import {Item} from "@classes/Item";

/**
 * Item identifier for the [[HorizontalLine]] class item.
 * @type {string}
 */
export const HORIZONTAL_LINE = 'horizontal-line';

/**
 * Adds a horizontal line in the form. Use this as a way to separate different sections of a form.
 */
export class HorizontalLine implements IsItem {
    /**
     * Adds custom CSS classes to the horizontal line. Defaults to "".
     * @type {string}
     */
    cssClass: string = '';

    constructor(item?: Item | string) {
        if (item && (!(typeof item === "string"))) {
            this.ConvertItem(item)
        }
    }

    ConvertItem(item: Item): void {
        checkItemType(item, HORIZONTAL_LINE);
        if (!isItemExpress(item)) {
            this.cssClass = item.options['cssClass'] || '';
        }
    }

}