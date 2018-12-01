import {SelectBox} from "@classes/ModelItems/SelectBox";

/**
 * Parse a SelectBox express item value. As a label and options are required for a SelectBox, the express value has to contain both information.
 * A SelectBox express is defined in the following manner: "`label` `;` `array of SelectItem`"
 * For the definition of an array of SelectItem, see [[parseSelectItems]].
 * @param {SelectBox} target
 * @param {string} source
 */
export declare function parseSelectBoxExpress(target: SelectBox, source: string): void;
