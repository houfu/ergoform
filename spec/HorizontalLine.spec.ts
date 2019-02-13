/*
 * Copyright (c) 2019. Ang Hou Fu.
 * Licensed under the MIT License. See LICENSE file in the project root for license information.
 */

import {HORIZONTAL_LINE, HorizontalLine, ItemExpress, ItemFull} from "../src";


describe('HorizontalLine -', ()=> {
    const result: HorizontalLine = new HorizontalLine();
    it('Should convert from an ItemExpress', function () {
        let testItem: ItemExpress = {type: HORIZONTAL_LINE, value: 'No use!'};
        const testLine = new HorizontalLine();
        testLine.ConvertItem(testItem);
        expect(testLine).toEqual(result);
    });
    it('Should convert from an ItemFull', function () {
        let testItem: ItemFull = {options: {dummy: 'Useless!'}, type: HORIZONTAL_LINE};
        const testLine = new HorizontalLine();
        testLine.ConvertItem(testItem);
        expect(testLine).toEqual(result);
    });
});
