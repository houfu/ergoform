/*
 * Copyright (c) 2019. Ang Hou Fu.
 * Licensed under the MIT License. See LICENSE file in the project root for license information.
 */

import {resolver} from "../parser/ItemFactory";
import {INPUT_BOX, InputBox, InputTypes, IsItem, Item} from "..";

export const SimpleInputResolver: resolver = function (item: Item): IsItem | undefined {
    let input = undefined;
    switch (item.type) {
        case 'text':
            input = InputTypes.text;
            break;
        case 'number':
            input = InputTypes.number;
            break;
        case 'email':
            input = InputTypes.email;
            break;
        case 'date':
            input = InputTypes.date;
            break;
        case 'time':
            input = InputTypes.time;
            break;
        case 'url':
            input = InputTypes.url;
            break;
    }
    const result = (input: InputTypes, item: Item) => {
        const newItem: Item = Object.assign(item, {type: INPUT_BOX});
        const result = new InputBox(newItem);
        result.inputType = input;
        return result;
    };
    return input ? result(input, item) : undefined;
};
