"use strict";
/*
 * Copyright (c) 2018. Ang Hou Fu.
 * Licensed under the MIT License. See LICENSE file in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * An enum of types of input for the [[InputBox]] item. See (MDN documentation)[https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types] for more information.
 */
var InputTypes;
(function (InputTypes) {
    /**
     * A single-line text field. Line-breaks are automatically removed from the input value.
     */
    InputTypes[InputTypes["text"] = 1] = "text";
    /**
     * A control for entering a number.
     * @type {number}
     */
    InputTypes[InputTypes["number"] = 2] = "number";
    /**
     *  A field for editing an e-mail address.
     * @type {number}
     */
    InputTypes[InputTypes["email"] = 3] = "email";
    /**
     * A control for entering a date (year, month, and day, with no time).
     * @type {number}
     */
    InputTypes[InputTypes["date"] = 4] = "date";
    /**
     * A control for entering a time value with no time zone.
     * @type {number}
     */
    InputTypes[InputTypes["time"] = 5] = "time";
    /**
     * A field for entering a URL.
     * @type {number}
     */
    InputTypes[InputTypes["url"] = 6] = "url";
})(InputTypes = exports.InputTypes || (exports.InputTypes = {}));
