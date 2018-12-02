import {IsItem} from "@classes/IsItem";
import {IsSemantic, Semantic} from "@classes/ContentItems/Semantic";
import {Item} from "@classes/Item";

/**
 * Item identifier for the [[TextCollapse]] Item
 * @type {string}
 */
export declare const TEXT_COLLAPSE = "text-collapse";
/**
 * Display a textbox which shows a header in default, and the user may click on it to display the rest of the text. Semantic information can be used to convey meaning or context to the Item.
 */
export declare class TextCollapse implements IsItem, IsSemantic {
    /**
     * Setter for main text. If no header is set, setting the text value automatically creates a header.
     * @param {string} value
     */
    /**
    * Getter for main text. Returns the private `_text` field.
    * @returns {string}
    */
    text: string;
    /**
     * The semantic information attached to this TextCollapse. Value is an enum of type [[Semantic]]. The default value is [[Semantic.none]].
     * @type {Semantic.none}
     */
    sem: Semantic;
    /**
     * The main text for the TextCollapse item.
     * @type {string}
     * @private
     */
    private _text;
    /**
     * The header text which is show to users when the item is collapsed. Setting a text without setting a header would create an automatic header comprising the first 15 characters of `text`.
     * @type {string}
     */
    header: string;
    /**
     * Constructor for TextCollapse item. It accepts a string (which sets the main text and an automatic header) or an Item which will be converted into an TextCollapse item.
     * @param {Item | string} item
     */
    constructor(item?: Item | string);
    /**
     * See [[IsItem.ConvertItem]]
     * @param {Item} item
     * @constructor
     */
    ConvertItem(item: Item): void;
    /**
     * Utility function to set an automatic header when no header is set. See [[header]].
     * @param {string} previous
     * @param {string} current
     */
    private setAutomaticHeader;
}
