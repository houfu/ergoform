import {IsItem} from "@classes/IsItem";
import {Item} from "@classes/Item";

/**
 * Item identifier for the [[HorizontalLine]] class item.
 * @type {string}
 */
export declare const HORIZONTAL_LINE = "horizontal-line";
/**
 * Adds a horizontal line in the form. Use this as a way to separate different sections of a form.
 */
export declare class HorizontalLine implements IsItem {
    /**
     * Adds custom CSS classes to the horizontal line. Defaults to "".
     * @type {string}
     */
    cssClass: string;
    constructor(item?: Item | string);
    ConvertItem(item: Item): void;
}
