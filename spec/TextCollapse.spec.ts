/*
 * Copyright (c) 2019. Ang Hou Fu.
 * Licensed under the MIT License. See LICENSE file in the project root for license information.
 */

import {ItemExpress, ItemFull, Semantic, TEXT_COLLAPSE, TextCollapse} from "../src";

describe('TextCollapse --', () => {

    describe('Truncate text to header if there is no header provided.', () => {
        it('At construction stage.', function () {
            const testCollapse = new TextCollapse('Round and Round the Garden like a Teddy Bear');
            expect(testCollapse.header).toBe('Round and Round…')
        });
        it('When the text is set after initialization.', function () {
            const testCollapse = new TextCollapse();
            testCollapse.text = 'Round and Round the Garden like a Teddy Bear';
            expect(testCollapse.header).toBe('Round and Round…')
        });
        it('A header that is already set is not affected.', function () {
            const testCollapse = new TextCollapse();
            testCollapse.header = 'Test Header';
            testCollapse.text = 'Round and Round the Garden like a Teddy Bear';
            expect(testCollapse.header).toBe('Test Header');
        });
        it('A default header is changed when the text changes.', function () {
            const testCollapse = new TextCollapse('Hey, we are the Wiggles!');
            testCollapse.text = 'Round and Round the Garden like a Teddy Bear';
            expect(testCollapse.header).toBe('Round and Round…')
        });
    });

    describe('Convert from an Item correctly.', function () {
        it('Convert an ItemExpress.', function () {
            const testItemExpress: ItemExpress = {
                type: TEXT_COLLAPSE,
                value: 'Round and Round the Garden like a Teddy Bear'
            };
            const testCollapse = new TextCollapse();
            testCollapse.ConvertItem(testItemExpress);
            const result = new TextCollapse('Round and Round the Garden like a Teddy Bear');
            expect(testCollapse).toEqual(result);
        });
        it('Convert an ItemFull.', function () {
            const testItemFull: ItemFull = {
                options: {text: 'Round and Round the Garden like a Teddy Bear', header: 'Test Header', sem: '1'},
                type: TEXT_COLLAPSE
            };
            const testCollapse = new TextCollapse();
            testCollapse.ConvertItem(testItemFull);
            const result = new TextCollapse('Round and Round the Garden like a Teddy Bear');
            result.header = 'Test Header';
            result.sem = Semantic.primary;
            expect(testCollapse).toEqual(result);
        });
    });
});
