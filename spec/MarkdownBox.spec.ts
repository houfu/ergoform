/*
 * Copyright (c) 2019. Ang Hou Fu.
 * Licensed under the MIT License. See LICENSE file in the project root for license information.
 */

import {ItemExpress, ItemFull, MARKDOWN_BOX, MarkdownBox} from "../src";

describe('MarkdownBox --', function () {
    describe('Converting Items. ', () => {
        const testText = 'Text';
        it('Convert an ItemExpress', () => {
            const result: MarkdownBox = new MarkdownBox(testText);
            const testItem: ItemExpress = {type: MARKDOWN_BOX, value: testText};
            let testResult = new MarkdownBox('');
            testResult.ConvertItem(testItem);
            expect(testResult).toEqual(result);
        });
        it('Convert an ItemFull', () => {
            const result: MarkdownBox = new MarkdownBox(testText);
            const testItem: ItemFull = {type: MARKDOWN_BOX, options: {content: testText}};
            let testResult = new MarkdownBox();
            testResult.ConvertItem(testItem);
            expect(testResult).toEqual(result);
        });
    });
});
