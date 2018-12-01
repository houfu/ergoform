import {IsItem} from "@classes/IsItem";
import {IsModel} from "@classes/ModelItems/IsModel";
import {SelectItem} from "@classes/ModelItems/SelectItems/SelectItem";
import {Item} from "@classes/Item";

/**
 * A string identifier for the [[SelectBox]] item.
 * @type {string}
 */
export declare const SELECT_BOX = "select-box";
/**
 * A SelectBox presents a user with several options, and the user selects one or several.
 */
export declare class SelectBox implements IsItem, IsModel {
    /**
     * A field to contain the label.
     * @type {string}
     * @private
     */
    private _label;
    /**
     * A string specifying a name for the input control. This name is submitted along with the control's value when the form data is submitted
     * @type {string}
     */
    control: string;
    /**
     * A Boolean attribute indicating that an option with a non-empty string value must be selected.
     * @type {boolean}
     */
    required: boolean;
    /**
     * This Boolean attribute indicates that multiple options can be selected in the list. If it is not specified, then only one option can be selected at a time. When multiple is specified, most browsers will show a scrolling list box instead of a single line dropdown.
     * @type {boolean}
     */
    multiple: boolean;
    /**
     * If the control is presented as a scrolling list box (e.g. when multiple is specified), this attribute represents the number of rows in the list that should be visible at one time. Browsers are not required to present a select element as a scrolled list box. The default value is 0.
     * @type {number}
     */
    size: number;
    /**
     * A string that is displayed to the user to guide how to input values into this control.
     * @type {string}
     */
    help: string;
    /**
     * An array of options in this SelectBox item.
     * @type {any[]}
     */
    items: SelectItem[];
    /**
     * Accesses the label of this item. If no control value was set when the label is set, the control value is set as the label.
     * @returns {string}
     */
    label: string;
    /**
     * Constructor for the SelectBox item. It accepts a string (which sets the label and the items/options) or an item which will be converted into a SelectBox Item.
     * For more information on setting the string, see [[SelectBoxExpress]].
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
