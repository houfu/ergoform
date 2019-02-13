/*
 * Copyright (c) 2019. Ang Hou Fu.
 * Licensed under the MIT License. See LICENSE file in the project root for license information.
 */

import {ItemExpress, ItemFull, SELECT_BOX, SelectBox} from "../src";


describe('SelectBox -- ', () => {
    describe('Converting items…', function () {
        describe('Convert an ItemExpress… ', function () {
            it('A simple one with only a label', function () {
                const result: SelectBox = new SelectBox('"test1"');
                const testItem: ItemExpress = {type: SELECT_BOX, value: '"test1"'};
                let testResult = new SelectBox();
                testResult.ConvertItem(testItem);
                expect(testResult).toEqual(result);
            });
            it('A more complex one with a label and items.', function () {
                const result = new SelectBox('"test2"; ["item1", "item2", "item3"]');
                const testItem: ItemExpress = {type: SELECT_BOX, value: '"test2"; ["item1", "item2", "item3"]'};
                let testResult = new SelectBox();
                testResult.ConvertItem(testItem);
                expect(testResult).toEqual(result);
            });
        });
        it('Convert an Itemfull.', function () {
            const result: SelectBox = new SelectBox('"test3"; ["item1", "item2", "item3"]');
            result.multiple = true;
            result.help = 'No problem!';
            result.size = 3;
            const testItem: ItemFull = {
                options: {
                    label: 'test3',
                    items: '["item1", "item2", "item3"]',
                    multiple: 'yes',
                    help: 'No problem!',
                    size: '3'
                }, type: SELECT_BOX
            };
            let testResult = new SelectBox();
            testResult.ConvertItem(testItem);
            expect(testResult).toEqual(result);
        });
    });
});
