import {IsItem} from "@classes/IsItem";
import {IsModel} from "@classes/ModelItems/IsModel";
import {Item} from "@classes/Item";

/**
 * Item identifier for the [[CheckBox]] Item.
 * @type {string}
 */
export declare const CHECK_BOX = "check-box";
/**
 * A check box input. The user can click on it to enter a boolean, yes-no property.
 */
export declare class CheckBox implements IsItem, IsModel {
    /**
     * Accesses the label of the item. If no control value is set, the control value is set as the label.
     * @returns {string}
     */
    label: string;
    /**
     * A string specifying a name for the input control. This name is submitted along with the control's value when the form data is submitted
     * @type {string}
     */
    control: string;
    /**
     * Field for the label property.
     * @type {string}
     * @private
     */
    private _label;
    /**
     * An optional help string to guide the user on how to fill this item in the form.
     * @type {string}
     */
    help: string;
    /**
     * An optional header which can be used to separate the form or introduce this item.
     * @type {string}
     */
    header: string;
    /**
     * Constructor for the CheckBox item. It accepts a string (which sets the label and an automatic control value) or an item which will be converted into a CheckBox Item.
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
