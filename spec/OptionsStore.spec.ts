/*
 * Copyright (c) 2019. Ang Hou Fu.
 * Licensed under the MIT License. See LICENSE file in the project root for license information.
 */


import {ItemFull, OPTIONS, OptionsStore} from "../src";

describe('OptionsStore -- ', function () {
    describe('Should Convert an Item -- ', function () {
        it('An ItemFull', function () {
            const testItem: ItemFull = {
                options: {'key1' : 'option1', 'key2': 'option2'}, type: OPTIONS
            };
            const testOptions = new OptionsStore();
            testOptions.ConvertItem(testItem);
            const result = new OptionsStore();
            result.options['key1'] = 'option1';
            result.options['key2'] = 'option2';
            expect(testOptions).toEqual(result);
        });
    });
});
