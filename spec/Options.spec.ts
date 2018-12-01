/*
 * Copyright (c) 2018. Ang Hou Fu.
 * Licensed under the MIT License. See LICENSE file in the project root for license information.
 */


import {Options, OPTIONS} from "@classes/MetaItems/Options";
import {ItemFull} from "@classes/Item";

describe('Options -- ', function () {
    describe('Should Convert an Item -- ', function () {
        it('An ItemFull', function () {
            const testItem: ItemFull = {
                options: {'key1' : 'option1', 'key2': 'option2'}, type: OPTIONS
            };
            const testOptions = new Options();
            testOptions.ConvertItem(testItem);
            const result = new Options();
            result.options['key1'] = 'option1';
            result.options['key2'] = 'option2';
            expect(testOptions).toEqual(result);
        });
    });
    describe('Utility functions should actually help -- ', function () {
        const testOption = new Options();
        testOption.options['key1'] = 'option1';
        testOption.options['key2'] = 'option2';
        testOption.options['boolean'] = 'yes';
        testOption.options['number'] = '5';
        it('Get should work', function () {
            expect(testOption.getOption('key1')).toEqual('option1');
            expect(testOption.getOption('Non existent field')).toBeFalsy();
        });
        it('GetBoolean should work', function () {
            expect(testOption.getOptionBoolean('key1')).toBe(false);
            expect(testOption.getOptionBoolean('Nonexistent Field')).toBe(false);
            expect(testOption.getOptionBoolean('boolean')).toBe(true);
        });
        it('GetNumber should work', function () {
            expect(testOption.getOptionInt('key1')).toBeNaN();
            expect(testOption.getOptionInt('Non existent field')).toBeNaN();
            expect(testOption.getOptionInt('number')).toBe(5);
        });
        it('Set should work', function () {
            testOption.setOption('key 3', 'Hello world');
            expect(testOption.options['key 3']).toBe('Hello world');
        });
    });
});