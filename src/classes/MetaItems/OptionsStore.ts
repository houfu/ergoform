/*
 * Copyright (c) 2018. Ang Hou Fu.
 * Licensed under the MIT License. See LICENSE file in the project root for license information.
 */

import {checkItemInConstructor, IsItem} from "@classes/IsItem";
import {Item} from "@classes/Item";
import {checkItemType, isItemExpress, parseBoolean} from "@classes/utils";
import {Options} from "@classes/MetaItems/Options";

/**
 * Identifier for the [[OptionsStore]] item.
 * @type {string}
 */
export const OPTIONS = 'options';

export class OptionsStore implements IsItem {
    /**
     * OptionsStore contains an object of string keys and string values.
     * @type {{}}
     */
    options: Partial<Options> = {};

    constructor(item?: Item | string) {
        checkItemInConstructor(this, item, value => this.options.name = value);
    }


    /**
     * See [[IsItem.ConvertItem]].
     *
     * For OptionsStore item, there is no ItemExpress as it is not meaningful.
     * @param {Item} item
     * @constructor
     */
    ConvertItem(item: Item): void {
        checkItemType(item, OPTIONS);
        if (!isItemExpress(item)) {
            for (let key in item.options) {
                switch (key) {
                    case 'simple_input':
                        this.options.simple_input = parseBoolean(item.options[key]);
                        return;
                    default:
                        this.options[key] = item.options[key];
                }
            }
        } else {
            this.options.name = item.value;
        }
    }


}
