/**
 * An option in a [[SelectBox]].
 */
export declare class SelectItem {
    key: string;
    value?: string | undefined;
    /**
     * Constructor for SelectItem. Parameters are the only fields in the class.
     * @param {string} key THe text that is displayed in the option.
     * @param {string} value The value that is passed to the form. If no value is set, the value is automatically set as the key.
     */
    constructor(key?: string, value?: string | undefined);
}
/**
 * Parse an array of SelectItem from a string `items`.
 * The grammar/definition of a string of a SelectItem is: "`key` `:` `value`".
 * The grammar/definition of a string of an array of SelectItem is "`[` `SelectItem` `,` (as many SelectItems as you want) `]`
 * @param {string} items
 * @returns {SelectItem[]}
 */
export declare function parseSelectItems(items: string): SelectItem[];
