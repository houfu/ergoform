import {checkItemType, fillOptions, isItemExpress, parseBoolean} from "@classes/utils";
import {ItemFull} from "@classes/Item";
import {TEXT_BOX, TextBox} from "@classes/ContentItems/TextBox";
import {TEXT_HEADER, TextHeader} from "@classes/ContentItems/TextHeader";

describe('Utils are helper functions.', () => {
    it('isItemExpress should determine the type correctly.', function () {
        const testItem = {type: 'test', options: {value: 'hello'}};
        expect(isItemExpress(testItem)).toEqual(false);
        const testItem2 = {type: 'test', value: 'hello world'};
        expect(isItemExpress(testItem2)).toEqual(true);
    });
    it('checkItemType should throw if wrong type.', function () {
        const testItem = {type: 'Oops', value: 'hello world'};
        expect(function () {
            checkItemType(testItem, 'test')
        }).toThrow();
    });
    describe('FillOptions transfers ItemFull options to an Item.', function () {
        it('Simple Options should be filled properly', function () {
            let testItemFull: ItemFull = {options: {text: 'Hello Text', cssClass: 'test-css'}, type: TEXT_BOX};
            let target = new TextBox();
            fillOptions(target, testItemFull);
            const result = new TextBox('Hello Text');
            result.cssClass = 'test-css';
            expect(target).toEqual(result);
        });
        it('Complex options with map should be filled properly.', function () {
            let testItemFull: ItemFull = {
                options: {text: 'Hello Text', cssClass: 'test-css', headerLevel: '1'},
                type: TEXT_HEADER
            };
            let target = new TextHeader();
            fillOptions(target, testItemFull, ((key, value, target) => {
                if (key === 'headerLevel') {
                    const headerLevel = parseInt(value);
                    if (headerLevel > 6 || !headerLevel) {
                        throw new Error(`TextHeaderItem.ConvertItem: HeaderLevel is not a valid number. Value was ${value}`);
                    } else {
                        (<TextHeader>target).headerLevel = headerLevel;
                    }
                }}));
            const result = new TextHeader('Hello Text');
            result.cssClass = 'test-css';
            result.headerLevel = 1;
            expect(target).toEqual(result);
        });
    });
    describe('ParseBoolean turns strings into booleans.', function () {
        it('Yes is true.', function () {
            expect(parseBoolean('1')).toBe(true);
        });
        it('Everything else is false.', function () {
            expect(parseBoolean('Boogie Woogie')).toBe(false);
        });
        it('Garbled Nonsense still returns true.', function () {
            expect(parseBoolean('        yeS    ')).toBe(true);
        });
    });
});
