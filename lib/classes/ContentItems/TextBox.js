"use strict";
/*
 * Copyright (c) 2018. Ang Hou Fu.
 * Licensed under the MIT License. See LICENSE file in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const IsItem_1 = require("../IsItem");
const utils_1 = require("../utils");
const Semantic_1 = require("@classes/ContentItems/Semantic");
/**
 * Item identifier for the [[TextBox]] Item
 * @type {string}
 */
exports.TEXT_BOX = 'text-box';
/**
 * Adds a text box to the form. It is an item that contains unformatted text, but can be styled using semantics.
 */
class TextBox {
    /**
     * Constructor for TextBox item. It accepts a string (which sets the main text) or an Item which will be converted into an TextBox item.
     * @param {string | Item} item
     */
    constructor(item) {
        /**
         * The text to be contained in the Item. In an [[ItemExpress]] this is the value set by the notation.
         * @type {string}
         */
        this.text = '';
        /**
         * Adds CSS classes to the Item.
         * @type {string}
         */
        this.cssClass = '';
        /**
         * The semantic information attached to this Item. Value is an enum of type Semantic. The default value is Semantic.none.
         * @type {Semantic.none}
         */
        this.sem = Semantic_1.Semantic.none;
        IsItem_1.checkItemInConstructor(this, item, text => this.text = text);
    }
    /**
     * See [[IsItem.ConvertItem]]
     * @param {Item} item
     * @constructor
     */
    ConvertItem(item) {
        utils_1.checkItemType(item, exports.TEXT_BOX);
        if (utils_1.isItemExpress(item)) {
            this.text = item.value;
        }
        else {
            utils_1.fillOptions(this, item, (key, value) => Semantic_1.fillSemantic(key, value, this));
        }
    }
}
exports.TextBox = TextBox;
