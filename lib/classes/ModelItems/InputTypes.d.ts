/**
 * An enum of types of input for the [[InputBox]] item. See (MDN documentation)[https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types] for more information.
 */
export declare enum InputTypes {
    /**
     * A single-line text field. Line-breaks are automatically removed from the input value.
     */
    text = 1,
    /**
     * A control for entering a number.
     * @type {number}
     */
    number = 2,
    /**
     *  A field for editing an e-mail address.
     * @type {number}
     */
    email = 3,
    /**
     * A control for entering a date (year, month, and day, with no time).
     * @type {number}
     */
    date = 4,
    /**
     * A control for entering a time value with no time zone.
     * @type {number}
     */
    time = 5,
    /**
     * A field for entering a URL.
     * @type {number}
     */
    url = 6
}
