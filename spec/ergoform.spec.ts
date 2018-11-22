import {ALERT, Alert} from "@classes/ContentItems/Alert";
import {Semantic} from "@classes/ContentItems/Semantic";
import {HORIZONTAL_LINE, HorizontalLine} from "@classes/ContentItems/HorizontalLine";
import {CHECK_BOX, CheckBox} from "@classes/ModelItems/CheckBox";
import {parseErgoForm} from "../src/parser/ErgoForm";

describe('ErgoForm -- ', () => {
    describe('Parse Items -- ', function () {
        it('Resolve ItemExpress', function () {
            const result = [
                //Alert
                new Alert('Test Alert 1'),
                new HorizontalLine(),
                new CheckBox('Test CheckBox')
            ];
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
            const result = [
                resultAlert, new HorizontalLine(), resultCheckBox

            ];
            const testErgoForm2 = `["${ALERT}" : {"header": "Test Header 2", "sem": "information", "text": "Test Alert 2"}, "${HORIZONTAL_LINE}" : "", "${CHECK_BOX}": {"label": "Test CheckBox", "header": "Test Checkbox Header", "help": "Test Checkbox Help"}]`;
            expect(parseErgoForm(testErgoForm2)).toEqual(result);
        });
        it('Resolve a mix of items', function () {
            const resultAlert = new Alert('Test Alert 2');
            resultAlert.header = 'Test Header 2';
            resultAlert.sem = Semantic.info;
            const resultCheckBox = new CheckBox('Test CheckBox');
            const result = [
                resultAlert, new HorizontalLine(), resultCheckBox
            ];
            const testErgoForm2 = `["${ALERT}" : {"header": "Test Header 2", "sem": "information", "text": "Test Alert 2"}, "${HORIZONTAL_LINE}" : "", "${CHECK_BOX}": "Test CheckBox"]`;
            expect(parseErgoForm(testErgoForm2)).toEqual(result);
        });
    });
    describe('Parse ItemRows --', function () {
        it('Resolve ItemExpress', function () {
            const result = [
                //Alert
                new Alert('Test Alert 1'),
                new HorizontalLine(),
                new CheckBox('Test CheckBox')
            ];
            const testErgoForm1 = `"${ALERT}" : "Test Alert 1" \n
            "${HORIZONTAL_LINE}" : "" \n
            "${CHECK_BOX}": "Test CheckBox"`;
            expect(parseErgoForm(testErgoForm1)).toEqual(result);
        });
        it('Resolve ItemFull', function () {
            const resultAlert = new Alert('Test Alert 2');
            resultAlert.header = 'Test Header 2';
            resultAlert.sem = Semantic.info;
            const resultCheckBox = new CheckBox('Test CheckBox');
            resultCheckBox.header = 'Test Checkbox Header';
            resultCheckBox.help = 'Test Checkbox Help';
            const result = [
                resultAlert, new HorizontalLine(), resultCheckBox
            ];
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
            const result = [
                resultAlert, new HorizontalLine(), resultCheckBox
            ];
            const testErgoForm2 =
                `"${ALERT}" : {"header": "Test Header 2", "sem": "information", "text": "Test Alert 2"} \n
                 "${HORIZONTAL_LINE}" : "" \n
                 "${CHECK_BOX}": "Test CheckBox"]`;
            expect(parseErgoForm(testErgoForm2)).toEqual(result);
        });
    });
});
