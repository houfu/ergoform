"use strict";
/*
 * Copyright (c) 2018. Ang Hou Fu.
 * Licensed under the MIT License. See LICENSE file in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Utility function for converting items passed into constructers using the type information of the specific Item class.
 * @param {T} source Source item
 * @param {Item | string} item The item to be converted
 * @param {(value: string) => void} stringFn Function if the value passed is a string and not an item.
 */
function checkItemInConstructor(source, item, stringFn) {
    if (item) {
        if (typeof item === 'string') {
            if (stringFn) {
                stringFn(item);
            }
        }
        else {
            source.ConvertItem(item);
        }
    }
}
exports.checkItemInConstructor = checkItemInConstructor;
