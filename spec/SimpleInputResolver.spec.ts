/*
 * Copyright (c) 2019. Ang Hou Fu.
 * Licensed under the MIT License. See LICENSE file in the project root for license information.
 */

import {InputBox, InputTypes, ItemExpress, ItemFull} from "../src";
import {SimpleInputResolver} from "../src/opt/SimpleInputResolver";

describe('SimpleInputResolver', function () {
    describe('SimpleInputResolve should convert items', function () {
        it('Convert an ItemExpress', function () {
            const testItem: ItemExpress = {type: 'text', value: 'Your Name: '};
            const testInput = SimpleInputResolver(testItem);
            const result = new InputBox('Your Name: ');
            expect(testInput).toEqual(result);
        });
        it('Convert an ItemFull.', function () {
            const testItem: ItemFull = {
                type: 'number', options: {
                    label: 'Your Name: ',
                    control: 'Control 1',
                    required: 'yes',
                    help: 'A test help',
                }
            };
            const testInput = SimpleInputResolver(testItem);
            const result = new InputBox('Your Name: ');
            result.inputType = InputTypes.number;
            result.control = 'Control 1';
            result.required = true;
            result.help = 'A test help';
            expect(testInput).toEqual(result);
        });
    });
});
