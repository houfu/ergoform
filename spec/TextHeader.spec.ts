/*
 * Copyright (c) 2019. Ang Hou Fu.
 * Licensed under the MIT License. See LICENSE file in the project root for license information.
 */

import {ItemExpress, ItemFull, TEXT_HEADER, TextHeader} from "../src";


describe('TextHeader -', ()=> {
    it('ConvertItem should convert ItemExpress', function () {
        const result1: TextHeader = new TextHeader('Hello World');
        const testItem: ItemExpress = {type: TEXT_HEADER, value: "Hello World"};
        let testResult = new TextHeader();
        testResult.ConvertItem(testItem);
        expect(testResult).toEqual(result1);
    });
    it('ConvertItem should convert ItemFull', function () {
        const result2: TextHeader = new TextHeader('Hello World');
        result2.cssClass = 'test-css';
        result2.headerLevel = 1;
        let testItemFull: ItemFull = {
            options: {text: 'Hello World', cssClass: 'test-css', headerLevel: '1'},
            type: TEXT_HEADER
        };
        let testResult = new TextHeader();
        testResult.ConvertItem(testItemFull);
        expect(testResult).toEqual(result2);
    });
});
