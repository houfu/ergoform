"use strict";
/*
 * Copyright (c) 2018. Ang Hou Fu.
 * Licensed under the MIT License. See LICENSE file in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const IsItem_1 = require("@classes/IsItem");
const Semantic_1 = require("@classes/ContentItems/Semantic");
const utils_1 = require("@classes/utils");
/**
 * Item identifier for the [[TextCollapse]] Item
 * @type {string}
 */
exports.TEXT_COLLAPSE = 'text-collapse';
/**
 * Display a textbox which shows a header in default, and the user may click on it to display the rest of the text. Semantic information can be used to convey meaning or context to the Item.
 */
class TextCollapse {
    /**
     * Constructor for TextCollapse item. It accepts a string (which sets the main text and an automatic header) or an Item which will be converted into an TextCollapse item.
     * @param {Item | string} item
     */
    constructor(item) {
        /**
         * The semantic information attached to this TextCollapse. Value is an enum of type [[Semantic]]. The default value is [[Semantic.none]].
         * @type {Semantic.none}
         */
        this.sem = Semantic_1.Semantic.none;
        /**
         * The main text for the TextCollapse item.
         * @type {string}
         * @private
         */
        this._text = '';
        /**
         * The header text which is show to users when the item is collapsed. Setting a text without setting a header would create an automatic header comprising the first 15 characters of `text`.
         * @type {string}
         */
        this.header = '';
        IsItem_1.checkItemInConstructor(this, item, text => this.text = text);
    }
    /**
     * Setter for main text. If no header is set, setting the text value automatically creates a header.
     * @param {string} value
     */
    set text(value) {
        this.setAutomaticHeader(this._text, value);
        this._text = value;
    }
    /**
     * Getter for main text. Returns the private `_text` field.
     * @returns {string}
     */
    get text() {
        return this._text;
    }
    /**
     * See [[IsItem.ConvertItem]]
     * @param {Item} item
     * @constructor
     */
    ConvertItem(item) {
        utils_1.checkItemType(item, exports.TEXT_COLLAPSE);
        if (utils_1.isItemExpress(item)) {
            this.text = item.value;
        }
        else {
            utils_1.fillOptions(this, item, (key, value) => {
                if (key === 'text') {
                    this.text = value;
                }
                Semantic_1.fillSemantic(key, value, this);
            });
        }
    }
    /**
     * Utility function to set an automatic header when no header is set. See [[header]].
     * @param {string} previous
     * @param {string} current
     */
    setAutomaticHeader(previous, current) {
        this.header = this.header ?
            (this.header !== previous.substring(0, 15) + '…') ?
                this.header : this.header = current.substring(0, 15) + '…' :
            this.header = current.substring(0, 15) + '…';
    }
}
exports.TextCollapse = TextCollapse;
