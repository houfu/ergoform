import {IsItem} from "@classes/IsItem";
import {Item} from "@classes/Item";

/**
 * Identifier for the [[Options]] item.
 * @type {string}
 */
export declare const OPTIONS = "options";
export declare class Options implements IsItem {
    /**
     * Options contains an object of string keys and string values.
     * @type {{}}
     */
    options: Record<string, string>;
    constructor(item?: Item | string);
    /**
     * Helper function to set an option in the [[options]].
     * @param {string} key
     * @param {string} value
     */
    setOption(key: string, value: string): void;
    /**
     * Helper function to get the value of an option in the [[options]]. Returns the raw string form of the option.
     * @param {string} key
     * @returns {string}
     */
    getOption(key: string): string;
    /**
     * Helper function to get the value of an option in the [[options]]. Returns the result in a boolean format parsed from the string.
     * @param {string} key
     * @returns {boolean}
     */
    getOptionBoolean(key: string): boolean;
    /**
     * Helper function to get the value of an option in the [[options]]. Returns the result in a number or integer parsed from the string.
     * @param {string} key
     * @returns {number}
     */
    getOptionInt(key: string): number;
    /**
     * See [[IsItem.ConvertItem]].
     *
     * For Options item, there is no ItemExpress as it is not meaningful.
     * @param {Item} item
     * @constructor
     */
    ConvertItem(item: Item): void;
}
