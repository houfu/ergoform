/*
 * Copyright (c) 2018. Ang Hou Fu.
 * Licensed under the MIT License. See LICENSE file in the project root for license information.
 */

/**
 * An enum of types of input for the [[InputBox]] item. See (MDN documentation)[https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types] for more information.
 */
export enum InputTypes {
    /**
     * A single-line text field. Line-breaks are automatically removed from the input value.
     */
    text = 1,
    /**
     * A control for entering a number.
     * @type {number}
     */
    number,
    /**
     *  A field for editing an e-mail address.
     * @type {number}
     */
    email,
    /**
     * A control for entering a date (year, month, and day, with no time).
     * @type {number}
     */
    date,
    /**
     * A control for entering a time value with no time zone.
     * @type {number}
     */
    time,
    /**
     * A field for entering a URL.
     * @type {number}
     */
    url
}