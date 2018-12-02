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
 * Item identifier for the [[Alert]] Item
 * @type {string}
 */
exports.ALERT = 'alert';
/**
 * Display an alert in the form, highlighting important information that the user should take note.
 */
class Alert {
    /**
     * Constructor for Alert item. It accepts a string (which sets the main text) or an Item which will be converted into an Alert item.
     * @param {Item | string} item
     */
    constructor(item) {
        /**
         * The main text of the alert. In an ItemExpress, this is the value set. Defaults to "".
         * @type {string}
         */
        this.text = '';
        /**
         * Optional property which displays a heading before `text`. Defaults to "".
         * @type {string}
         */
        this.header = '';
        /**
         * The semantic information attached to this Item. Value is an enum of type [[Semantic]]. The default value is `Semantic.none`.
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
        utils_1.checkItemType(item, exports.ALERT);
        if (utils_1.isItemExpress(item)) {
            this.text = item.value;
        }
        else {
            utils_1.fillOptions(this, item, (key, value) => Semantic_1.fillSemantic(key, value, this));
        }
    }
}
exports.Alert = Alert;
