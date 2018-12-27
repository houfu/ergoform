/*
 * Copyright (c) 2018. Ang Hou Fu.
 * Licensed under the MIT License. See LICENSE file in the project root for license information.
 */

import {checkItemInConstructor, IsItem} from "../IsItem";
import {checkItemType, fillOptions, isItemExpress} from "../utils";
import {fillSemantic, IsSemantic, Semantic} from "./Semantic";
import {Item} from "../Item";

/**
 * Item identifier for the [[TextBox]] Item
 * @type {string}
 */
export const TEXT_BOX = 'text-box';

/**
 * Adds a text box to the form. It is an item that contains unformatted text, but can be styled using semantics.
 */
export class TextBox implements IsItem, IsSemantic {
    /**
     * The text to be contained in the Item. In an [[ItemExpress]] this is the value set by the notation.
     * @type {string}
     */
    text: string = '';
    /**
     * Adds CSS classes to the Item.
     * @type {string}
     */
    cssClass: string = '';
    /**
     * The semantic information attached to this Item. Value is an enum of type Semantic. The default value is Semantic.none.
     * @type {Semantic.none}
     */
    sem: Semantic = Semantic.none;

    /**
     * Constructor for TextBox item. It accepts a string (which sets the main text) or an Item which will be converted into an TextBox item.
     * @param {string | Item} item
     */
    constructor(item? : string | Item) {
        checkItemInConstructor(this, item, text => this.text = text)
    }

    /**
     * See [[IsItem.ConvertItem]]
     * @param {Item} item
     * @constructor
     */
    ConvertItem(item: Item) {
        checkItemType(item, TEXT_BOX);
        if (isItemExpress(item)) {
            this.text = item.value;
        } else {
            fillOptions(this, item, (key, value) => fillSemantic(key, value, this));
        }
    }
}
