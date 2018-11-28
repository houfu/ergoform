/*
 * Copyright (c) 2018. Ang Hou Fu.
 * Licensed under the MIT License. See LICENSE file in the project root for license information.
 */

import {Item} from "@classes/Item";

/**
 * Interface for identifying items of an ErgoForm.
 */
export interface IsItem {
    /**
     * Function for converting the information of an ItemExpress or an ItemFull to the item.
     * @param {Item} item
     * @constructor
     */
    ConvertItem(item: Item): void;
}

/**
 * Interface to check if the constructor fits the requirement to use checkItemInConstructor.
 */
export interface ItemConstructor {
    new (item?: Item | string): IsItem
}

/**
 * Utility function for converting items passed into constructers using the type information of the specific Item class.
 * @param {T} source Source item
 * @param {Item | string} item The item to be converted
 * @param {(value: string) => void} stringFn Function if the value passed is a string and not an item.
 */
export function checkItemInConstructor<T extends IsItem>(source: T, item?: Item | string, stringFn?: (value: string) => void) {
    if (item) {
        if (typeof item === 'string') {
            if (stringFn){
                stringFn(item);
            }
        } else {
            source.ConvertItem(item);
        }
    }
}