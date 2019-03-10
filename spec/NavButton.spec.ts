/*
 * Copyright (c) 2019. Ang Hou Fu.
 * Licensed under the MIT License. See LICENSE file in the project root for license information.
 */

import {ItemExpress, ItemFull, NAV_BUTTON, NavButton} from "../src";

describe('NavButton -- ', function () {
    describe('Converting Items', function () {
        it('Convert an ItemExpress', function () {
            const testItem: ItemExpress = {type: NAV_BUTTON, value: "Nav"};
            const testNavButton = new NavButton(testItem);
            const result = new NavButton('Nav');
            expect(testNavButton).toEqual(result);
        });
        it('Convert an ItemFull', function () {
            const testItem: ItemFull = {
                options: {label: 'Nav', message: 'Next', cssClass: 'MyButton'},
                type: NAV_BUTTON
            };
            const testNavButton = new NavButton(testItem);
            const result = new NavButton('Nav');
            result.message = 'Next';
            result.cssClass = 'MyButton';
            expect(testNavButton).toEqual(result);
        });
    });
});
