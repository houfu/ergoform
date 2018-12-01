import {IsItem} from "@classes/IsItem";
import {IsModel} from "@classes/ModelItems/IsModel";
import {InputTypes} from "@classes/ModelItems/InputTypes";
import {Item} from "@classes/Item";

/**
 * Identifier for the [[InputBox]] item.
 * @type {string}
 */
export declare const INPUT_BOX = "input-box";
/**
 * An input box in a form. This item is based on the HTML `<input>`.
 */
export declare class InputBox implements IsItem, IsModel {
    /**
     * Returns or sets the label of the InputBox. If there is no control value, the control value is set as the label.
     * @returns {string}
     */
    label: string;
    /**
     * A string specifying a name for the input control. This name is submitted along with the control's value when the form data is submitted.
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
     * Specifies whether the user must input a value into this field. Defaults to false or not required.
     * @type {boolean}
     */
    required: boolean;
    /**
     * Specifies what kind of input is expected from the user. Defaults to `text`, the most common use case.
     * @type {InputTypes.text}
     */
    inputType: InputTypes;
    /**
     * Constructor for the InputBox item. It accepts a string (which sets the label and an automatic control value) or an item which will be converted into a InputBox Item.
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
