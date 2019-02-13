/*
 * Copyright (c) 2019. Ang Hou Fu.
 * Licensed under the MIT License. See LICENSE file in the project root for license information.
 */

import {
    ALERT,
    Alert,
    CHECK_BOX,
    CheckBox,
    ErgoForm,
    HORIZONTAL_LINE,
    HorizontalLine,
    OPTIONS,
    OptionsStore,
    parseErgoForm,
    Semantic
} from "../src";


describe('ErgoForm -- ', () => {
    describe('Parse Items -- ', function () {
        it('Resolve ItemExpress', function () {
            const resultItems = [
                new Alert('Test Alert 1'),
                new HorizontalLine(),
                new CheckBox('Test CheckBox')
            ];
            const result = new ErgoForm(resultItems);
            const testErgoForm1 = `["${ALERT}" : "Test Alert 1", "${HORIZONTAL_LINE}" : "", "${CHECK_BOX}": "Test CheckBox"]`;
            expect(parseErgoForm(testErgoForm1)).toEqual(result);
        });
        it('Resolve ItemFull', function () {
            const resultAlert = new Alert('Test Alert 2');
            resultAlert.header = 'Test Header 2';
            resultAlert.sem = Semantic.info;
            const resultCheckBox = new CheckBox('Test CheckBox');
            resultCheckBox.header = 'Test Checkbox Header';
            resultCheckBox.help = 'Test Checkbox Help';
            const resultItems = [
                resultAlert, new HorizontalLine(), resultCheckBox

            ];
            const result = new ErgoForm(resultItems);
            const testErgoForm2 = `["${ALERT}" : {"header": "Test Header 2", "sem": "information", "text": "Test Alert 2"}, "${HORIZONTAL_LINE}" : "", "${CHECK_BOX}": {"label": "Test CheckBox", "header": "Test Checkbox Header", "help": "Test Checkbox Help"}]`;
            expect(parseErgoForm(testErgoForm2)).toEqual(result);
        });
        it('Resolve a mix of items', function () {
            const resultAlert = new Alert('Test Alert 3');
            resultAlert.header = 'Test Header 2';
            resultAlert.sem = Semantic.info;
            const resultCheckBox = new CheckBox('Test CheckBox');
            const resultItems = [
                resultAlert, new HorizontalLine(), resultCheckBox
            ];
            const result = new ErgoForm(resultItems);
            const testErgoForm2 = `["${ALERT}" : {"header": "Test Header 2", "sem": "information", "text": "Test Alert 3"}, "${HORIZONTAL_LINE}" : "", "${CHECK_BOX}": "Test CheckBox"]`;
            expect(parseErgoForm(testErgoForm2)).toEqual(result);
        });
        it('should resolve a mix of items with OptionsStore', function () {
            const resultOptionsStore = new OptionsStore('My test ErgoForm4');
            resultOptionsStore.options.simple_input = false;
            const resultItems = [
                new Alert('Test Alert 1'),
                new HorizontalLine(),
                resultOptionsStore
            ];
            const result = new ErgoForm(resultItems);
            const testErgoForm1 = `["${ALERT}" : "Test Alert 1", "${HORIZONTAL_LINE}" : "", "${OPTIONS}": {"name": "My test ErgoForm4", "simple_input" : "no"}]`;
            expect(parseErgoForm(testErgoForm1)).toEqual(result);
        });
    });
    describe('Parse ItemRows --', function () {
        it('Resolve ItemExpress', function () {
            const resultItems = [
                new Alert('Test Alert 1'),
                new HorizontalLine(),
                new CheckBox('Test CheckBox')
            ];
            const result = new ErgoForm(resultItems);
            const testErgoForm1 = `"${ALERT}" : "Test Alert 1"  "${HORIZONTAL_LINE}" : "" "${CHECK_BOX}": "Test CheckBox"`;
            console.log(testErgoForm1);
            expect(parseErgoForm(testErgoForm1)).toEqual(result);
        });
        it('Resolve ItemFull', function () {
            const resultAlert = new Alert('Test Alert 2');
            resultAlert.header = 'Test Header 2';
            resultAlert.sem = Semantic.info;
            const resultCheckBox = new CheckBox('Test CheckBox');
            resultCheckBox.header = 'Test Checkbox Header';
            resultCheckBox.help = 'Test Checkbox Help';
            const resultItems = [
                resultAlert, new HorizontalLine(), resultCheckBox
            ];
            const result = new ErgoForm(resultItems);
            const testErgoForm2 =
                `"${ALERT}" : {"header": "Test Header 2", "sem": "information", "text": "Test Alert 2"} \n
                "${HORIZONTAL_LINE}" : "" \n
                "${CHECK_BOX}": {"label": "Test CheckBox", "header": "Test Checkbox Header", "help": "Test Checkbox Help"}`;
            expect(parseErgoForm(testErgoForm2)).toEqual(result);
        });
        it('Resolve a mix of items', function () {
            const resultAlert = new Alert('Test Alert 2');
            resultAlert.header = 'Test Header 2';
            resultAlert.sem = Semantic.info;
            const resultCheckBox = new CheckBox('Test CheckBox');
            const resultItems = [
                resultAlert, new HorizontalLine(), resultCheckBox
            ];
            const result = new ErgoForm(resultItems);
            const testErgoForm2 =
                `"${ALERT}" : {"header": "Test Header 2", "sem": "information", "text": "Test Alert 2"} \n
                 "${HORIZONTAL_LINE}" : "" \n
                 "${CHECK_BOX}": "Test CheckBox"]`;
            expect(parseErgoForm(testErgoForm2)).toEqual(result);
        });
        it('should resolve a mix of items with OptionsStore', function () {
            const resultOptionsStore = new OptionsStore('My test ErgoForm4');
            resultOptionsStore.options.simple_input = false;
            const resultItems = [
                new Alert('Test Alert 1'),
                new HorizontalLine(),
                resultOptionsStore
            ];
            const result = new ErgoForm(resultItems);
            const testErgoForm1 = `"${ALERT}" : "Test Alert 1" \n
            "${HORIZONTAL_LINE}" : "" \n
            "${OPTIONS}": {"name": "My test ErgoForm4", "simple_input" : "no"}`;
            expect(parseErgoForm(testErgoForm1)).toEqual(result);
        });
    });
});
