/**
 * Interface for Content and other items which can display semantic information.
 */
export interface IsSemantic {
    sem: Semantic;
}
/**
 * Enum of Semantic types. This can be used to convey the meaning or context of an item. For an example of how this can be implemented, take a look at [Bootstrap alerts](https://getbootstrap.com/docs/4.1/components/alerts/#examples).
 */
export declare enum Semantic {
    /**
     * No contextual or meaning is associated with this item. The default value.
     */
    none = 0,
    /**
     * The primary semantic is suggested to be used with information which is very important to the user.
     */
    primary = 1,
    /**
     * The secondary semantic is suggested to be used with information that the user should read but not as important compared to the primary semantic.
     */
    secondary = 2,
    /**
     * The success semantic is suggested to be used to inform the user that his or her actions have succeeded or are correct.
     */
    success = 3,
    /**
     * The information or info semantic is suggested to be used to inform the user of useful information.
     */
    info = 4,
    /**
     * The danger semantic is suggested to be used to inform the user that his or her actions failed or have resulted in errors.
     */
    danger = 5,
    /**
     * The warning semantic is suggested to be used to inform the user that his or her actions could result in errors or have adverse effects.
     */
    warning = 6,
    /**
     * The light semantic is suggested to be used to convey information in a light background.
     */
    light = 7,
    /**
     * The dark semantic is suggested to be used to convey information in a dark background.
     */
    dark = 8
}
/**
 * Utility function to fill a semantic field. Used together with [[IsItem.ConvertItem]].
 * @param {string} key Used together with [[IsItem.ConvertItem]]. Key must be 'sem', otherwise the function will do nothing.
 * @param {string} value Used together with [[IsItem.ConvertItem]]. The string to be parsed into [[Semantic]] and filled in `target`.
 * @param {IsSemantic} target Item to fill semantic field with.
 */
export declare function fillSemantic(key: string, value: string, target: IsSemantic): void;
/**
 * Utility function to parse a string value to the [[Semantic]] type. If there is no match, returns [[Semantic.none]].
 * **Note**: the value is not required to correspond directly with the [[Semantic]] string value and some alternatives are accepted. As the Enum is subject to changes, it is highly recommended for users to refrain from using index values (such as 0, 1 etc) and use more user friendly strings instead.
 * @param {string} value String value to parse.
 * @returns {Semantic} Matched [[Semantic]] from string.
 */
export declare function parseSemantic(value: string): Semantic;
