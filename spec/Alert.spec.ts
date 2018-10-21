import {ALERT, Alert} from "@classes/ContentItems/Alert";
import {ItemExpress, ItemFull} from "@classes/Item";
import {Semantic} from "@classes/ContentItems/Semantic";

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