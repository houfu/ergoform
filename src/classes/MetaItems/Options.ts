/*
 * Copyright (c) 2018. Ang Hou Fu.
 * Licensed under the MIT License. See LICENSE file in the project root for license information.
 */

import {checkItemInConstructor, IsItem} from "@classes/IsItem";
import {Item} from "@classes/Item";
import {checkItemType, isItemExpress, parseBoolean} from "@classes/utils";

/**
 * Identifier for the [[Options]] item.
 * @type {string}
 */
export const OPTIONS = 'options';

export class Options implements IsItem {
    /**
     * Options contains an object of string keys and string values.
     * @type {{}}
     */
    options: Record<string, string> = {};

    constructor(item?: Item | string) {
        checkItemInConstructor(this, item);
    }

    /**
     * Helper function to set an option in the [[options]].
     * @param {string} key
     * @param {string} value
     */
    setOption(key: string, value: string) {
        this.options[key] = value;
    }

    /**
     * Helper function to get the value of an option in the [[options]]. Returns the raw string form of the option.
     * @param {string} key
     * @returns {string}
     */
    getOption(key: string): string {
        return this.options[key]
    }

    /**
     * Helper function to get the value of an option in the [[options]]. Returns the result in a boolean format parsed from the string.
     * @param {string} key
     * @returns {boolean}
     */
    getOptionBoolean(key: string): boolean {
        if (this.options[key]) {
            return parseBoolean(this.options[key]);
        }
        return false;
    }

    /**
     * Helper function to get the value of an option in the [[options]]. Returns the result in a number or integer parsed from the string.
     * @param {string} key
     * @returns {number}
     */
    getOptionInt(key: string): number {
        return parseInt(this.options[key]);
    }

    /**
     * See [[IsItem.ConvertItem]].
     *
     * For Options item, there is no ItemExpress as it is not meaningful.
     * @param {Item} item
     * @constructor
     */
    ConvertItem(item: Item): void {
        checkItemType(item, OPTIONS);
        if (!isItemExpress(item)) {
            for (let key in item.options) {
                this.setOption(key, item.options[key])
            }
        }
    }

}
