/*
 * Copyright (c) 2018. Ang Hou Fu.
 * Licensed under the MIT License. See LICENSE file in the project root for license information.
 */

import {checkItemInConstructor, IsItem} from "@classes/IsItem";
import {fillSemantic, IsSemantic, Semantic} from "@classes/ContentItems/Semantic";
import {checkItemType, fillOptions, isItemExpress} from "@classes/utils";
import {Item} from "@classes/Item";

/**
 * Item identifier for the [[TextCollapse]] Item
 * @type {string}
 */
export const TEXT_COLLAPSE = 'text-collapse';

/**
 * Display a textbox which shows a header in default, and the user may click on it to display the rest of the text. Semantic information can be used to convey meaning or context to the Item.
 */
export class TextCollapse implements IsItem, IsSemantic {
    /**
     * Setter for main text. If no header is set, setting the text value automatically creates a header.
     * @param {string} value
     */
    set text(value: string) {
        this.setAutomaticHeader(this._text, value);
        this._text = value;
    }

    /**
     * Getter for main text. Returns the private `_text` field.
     * @returns {string}
     */
    get text(): string {
        return this._text;
    }

    /**
     * The semantic information attached to this TextCollapse. Value is an enum of type [[Semantic]]. The default value is [[Semantic.none]].
     * @type {Semantic.none}
     */
    sem: Semantic = Semantic.none;
    /**
     * The main text for the TextCollapse item.
     * @type {string}
     * @private
     */
    private _text: string = '';
    /**
     * The header text which is show to users when the item is collapsed. Setting a text without setting a header would create an automatic header comprising the first 15 characters of `text`.
     * @type {string}
     */
    header: string = '';

    /**
     * Constructor for TextCollapse item. It accepts a string (which sets the main text and an automatic header) or an Item which will be converted into an TextCollapse item.
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
        checkItemType(item, TEXT_COLLAPSE);
        if (isItemExpress(item)) {
            this.text = item.value;
        } else {
            fillOptions(this, item, (key, value) => {
                if (key === 'text') {
                    this.text = value;
                }
                fillSemantic(key, value, this)
            });
        }
    }

    /**
     * Utility function to set an automatic header when no header is set. See [[header]].
     * @param {string} previous
     * @param {string} current
     */
    private setAutomaticHeader(previous: string, current: string) {
        this.header = this.header ?
            (this.header !== previous.substring(0, 15) + '…') ?
                this.header : this.header = current.substring(0, 15) + '…' :
            this.header = current.substring(0, 15) + '…';
    }

}