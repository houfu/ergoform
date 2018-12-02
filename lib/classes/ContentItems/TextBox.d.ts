import {IsItem} from "../IsItem";
import {IsSemantic, Semantic} from "@classes/ContentItems/Semantic";
import {Item} from "@classes/Item";

/**
 * Item identifier for the [[TextBox]] Item
 * @type {string}
 */
export declare const TEXT_BOX = "text-box";
/**
 * Adds a text box to the form. It is an item that contains unformatted text, but can be styled using semantics.
 */
export declare class TextBox implements IsItem, IsSemantic {
    /**
     * The text to be contained in the Item. In an [[ItemExpress]] this is the value set by the notation.
     * @type {string}
     */
    text: string;
    /**
     * Adds CSS classes to the Item.
     * @type {string}
     */
    cssClass: string;
    /**
     * The semantic information attached to this Item. Value is an enum of type Semantic. The default value is Semantic.none.
     * @type {Semantic.none}
     */
    sem: Semantic;
    /**
     * Constructor for TextBox item. It accepts a string (which sets the main text) or an Item which will be converted into an TextBox item.
     * @param {string | Item} item
     */
    constructor(item?: string | Item);
    /**
     * See [[IsItem.ConvertItem]]
     * @param {Item} item
     * @constructor
     */
    ConvertItem(item: Item): void;
}
