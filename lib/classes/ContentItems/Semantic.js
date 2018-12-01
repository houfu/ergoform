"use strict";
/*
 * Copyright (c) 2018. Ang Hou Fu.
 * Licensed under the MIT License. See LICENSE file in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Enum of Semantic types. This can be used to convey the meaning or context of an item. For an example of how this can be implemented, take a look at [Bootstrap alerts](https://getbootstrap.com/docs/4.1/components/alerts/#examples).
 */
var Semantic;
(function (Semantic) {
    /**
     * No contextual or meaning is associated with this item. The default value.
     */
    Semantic[Semantic["none"] = 0] = "none";
    /**
     * The primary semantic is suggested to be used with information which is very important to the user.
     */
    Semantic[Semantic["primary"] = 1] = "primary";
    /**
     * The secondary semantic is suggested to be used with information that the user should read but not as important compared to the primary semantic.
     */
    Semantic[Semantic["secondary"] = 2] = "secondary";
    /**
     * The success semantic is suggested to be used to inform the user that his or her actions have succeeded or are correct.
     */
    Semantic[Semantic["success"] = 3] = "success";
    /**
     * The information or info semantic is suggested to be used to inform the user of useful information.
     */
    Semantic[Semantic["info"] = 4] = "info";
    /**
     * The danger semantic is suggested to be used to inform the user that his or her actions failed or have resulted in errors.
     */
    Semantic[Semantic["danger"] = 5] = "danger";
    /**
     * The warning semantic is suggested to be used to inform the user that his or her actions could result in errors or have adverse effects.
     */
    Semantic[Semantic["warning"] = 6] = "warning";
    /**
     * The light semantic is suggested to be used to convey information in a light background.
     */
    Semantic[Semantic["light"] = 7] = "light";
    /**
     * The dark semantic is suggested to be used to convey information in a dark background.
     */
    Semantic[Semantic["dark"] = 8] = "dark";
})(Semantic = exports.Semantic || (exports.Semantic = {}));
/**
 * Utility function to fill a semantic field. Used together with [[IsItem.ConvertItem]].
 * @param {string} key Used together with [[IsItem.ConvertItem]]. Key must be 'sem', otherwise the function will do nothing.
 * @param {string} value Used together with [[IsItem.ConvertItem]]. The string to be parsed into [[Semantic]] and filled in `target`.
 * @param {IsSemantic} target Item to fill semantic field with.
 */
function fillSemantic(key, value, target) {
    if (key === 'sem') {
        target.sem = parseSemantic(value);
    }
}
exports.fillSemantic = fillSemantic;
/**
 * Utility function to parse a string value to the [[Semantic]] type. If there is no match, returns [[Semantic.none]].
 * **Note**: the value is not required to correspond directly with the [[Semantic]] string value and some alternatives are accepted. As the Enum is subject to changes, it is highly recommended for users to refrain from using index values (such as 0, 1 etc) and use more user friendly strings instead.
 * @param {string} value String value to parse.
 * @returns {Semantic} Matched [[Semantic]] from string.
 */
function parseSemantic(value) {
    const answer = value.trim().toLowerCase();
    switch (answer) {
        case '0':
        case 'none':
        case 'nothing':
        case 'no':
            return Semantic.none;
        case '1':
        case 'primary':
            return Semantic.primary;
        case '2':
        case 'secondary':
            return Semantic.secondary;
        case '3':
        case 'success':
            return Semantic.success;
        case '4':
        case 'info':
        case 'information':
            return Semantic.info;
        case '5':
        case 'danger':
        case 'error':
            return Semantic.danger;
        case '6':
        case 'warning':
            return Semantic.warning;
        case '7':
        case 'light':
            return Semantic.light;
        case '8':
        case 'dark':
            return Semantic.primary;
        default:
            return Semantic.none;
    }
}
exports.parseSemantic = parseSemantic;
