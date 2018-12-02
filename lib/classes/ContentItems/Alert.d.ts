import {IsItem} from "@classes/IsItem";
import {IsSemantic, Semantic} from "@classes/ContentItems/Semantic";
import {Item} from "@classes/Item";

/**
 * Item identifier for the [[Alert]] Item
 * @type {string}
 */
export declare const ALERT = "alert";
/**
 * Display an alert in the form, highlighting important information that the user should take note.
 */
export declare class Alert implements IsItem, IsSemantic {
    /**
     * The main text of the alert. In an ItemExpress, this is the value set. Defaults to "".
     * @type {string}
     */
    text: string;
    /**
     * Optional property which displays a heading before `text`. Defaults to "".
     * @type {string}
     */
    header: string;
    /**
     * The semantic information attached to this Item. Value is an enum of type [[Semantic]]. The default value is `Semantic.none`.
     * @type {Semantic.none}
     */
    sem: Semantic;
    /**
     * Constructor for Alert item. It accepts a string (which sets the main text) or an Item which will be converted into an Alert item.
     * @param {Item | string} item
     */
    constructor(item?: Item | string);
    /**
     * See [[IsItem.ConvertItem]]
     * @param {Item} item
     * @constructor
     */
    ConvertItem(item: Item): void;
}
