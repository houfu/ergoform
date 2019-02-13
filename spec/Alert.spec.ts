/*
 * Copyright (c) 2019. Ang Hou Fu.
 * Licensed under the MIT License. See LICENSE file in the project root for license information.
 */

import {ALERT, Alert, ItemExpress, ItemFull, Semantic} from "../src";


describe('Alert -', () => {
    it('Should convert from an ItemExpress', function () {
        const result = new Alert('Test text');
        const testItem: ItemExpress = {type: ALERT, value: "Test text"};
        const testAlert = new Alert();
        testAlert.ConvertItem(testItem);
        expect(testAlert).toEqual(result);
    });
    it('Should convert from an ItemFull', function () {
        const result = new Alert('Test text');
        result.sem = Semantic.primary;
        result.header = 'Test Header';
        const testItem: ItemFull = {
            type: ALERT, options: {
                text: 'Test text',
                sem: '1',
                header: 'Test Header'
            }
        };
        const testAlert = new Alert();
        testAlert.ConvertItem(testItem);
        expect(testAlert).toEqual(result);
    });
});
