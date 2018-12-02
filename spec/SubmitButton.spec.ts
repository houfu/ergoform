/*
 * Copyright (c) 2018. Ang Hou Fu.
 * Licensed under the MIT License. See LICENSE file in the project root for license information.
 */

import {ItemExpress, ItemFull} from "../src";
import {SUBMIT_BUTTON, SubmitButton} from "../src/classes/ModelItems/SubmitButton";

describe('SubmitButton -- ', function () {
    it('should convert from an ItemExpress', function () {
        const testItem: ItemExpress = {type: SUBMIT_BUTTON, value: "Submit 1"};
        const testSubmitButton = new SubmitButton(testItem);
        const result = new SubmitButton('Submit 1');
        expect(testSubmitButton).toEqual(result);
    });
    it('should convert from an ItemFull', function () {
        const testItem: ItemFull = {type: SUBMIT_BUTTON, options: {"label":"Submit 1", "cssClass": 'submit'}};
        const testSubmitButton = new SubmitButton(testItem);
        const result = new SubmitButton('Submit 1');
        result.cssClass = 'submit';
        expect(testSubmitButton).toEqual(result);
    });
});