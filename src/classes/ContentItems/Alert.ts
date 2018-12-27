/*
 * Copyright (c) 2018. Ang Hou Fu.
 * Licensed under the MIT License. See LICENSE file in the project root for license information.
 */

import {checkItemInConstructor, IsItem} from "../IsItem";
import {fillSemantic, IsSemantic, Semantic} from "./Semantic";
import {Item} from "../Item";
import {checkItemType, fillOptions, isItemExpress} from "../utils";

/**
 * Item identifier for the [[Alert]] Item
 * @type {string}
 */
export const ALERT = 'alert';

/**
 * Display an alert in the form, highlighting important information that the user should take note.
 */
export class Alert implements IsItem, IsSemantic {
    /**
     * The main text of the alert. In an ItemExpress, this is the value set. Defaults to "".
     * @type {string}
     */
    text: string = '';
    /**
     * Optional property which displays a heading before `text`. Defaults to "".
     * @type {string}
     */
    header: string = '';
    /**
     * The semantic information attached to this Item. Value is an enum of type [[Semantic]]. The default value is `Semantic.none`.
     * @type {Semantic.none}
     */
    sem: Semantic = Semantic.none;

    /**
     * Constructor for Alert item. It accepts a string (which sets the main text) or an Item which will be converted into an Alert item.
     * @param {Item | string} item
     */
    constructor(item?: Item | string) {
        checkItemInConstructor(this, item, text => this.text = text)
    }

    /**
     * See [[IsItem.ConvertItem]]
     * @param {Item} item
     * @constructor
     */
    ConvertItem(item: Item): void {
        checkItemType(item, ALERT);
        if (isItemExpress(item)) {
            this.text = item.value;
        } else {
            fillOptions(this, item, (key, value) => fillSemantic(key, value, this));
        }
    }

}
