/*
 * Copyright (c) 2019. Ang Hou Fu.
 * Licensed under the MIT License. See LICENSE file in the project root for license information.
 */

import {checkItemInConstructor, IsItem} from "../IsItem";
import {Item} from "../Item";
import {checkItemType, isItemExpress, parseBoolean} from "../utils";
import {Options} from "./Options";

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
            for (const key in item.options) {
                if (item.options.hasOwnProperty(key)) {
                    switch (key) {
                        case 'simple_input':
                        case 'mute_parser_errors':
                            this.options[key] = parseBoolean(item.options[key]);
                            return;
                        default:
                            this.options[key] = item.options[key];
                    }
                }
            }
        } else {
            this.options.name = item.value;
        }
    }


}
