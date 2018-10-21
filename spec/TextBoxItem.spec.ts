import {TEXT_BOX, TextBox} from "@classes/ContentItems/TextBox";
import {ItemExpress, ItemFull} from "@classes/Item";
import {Semantic} from "@classes/ContentItems/Semantic";


describe('TextBox -', () => {
    describe('Converting Items. ', () => {
        const testText = 'Text';
        it('Convert an ItemExpress', () => {
            const result:TextBox = new TextBox(testText);
            const testItem: ItemExpress = {type: TEXT_BOX, value: testText};
            let testResult = new TextBox('');
            testResult.ConvertItem(testItem);
            expect(testResult).toEqual(result);
        });
        it('Convert an ItemFull', () => {
            const result:TextBox = new TextBox(testText);
            result.sem = Semantic.primary;
            const testItem: ItemFull = {type: TEXT_BOX, options: {text: testText, sem: '1'}};
            let testResult = new TextBox();
            testResult.ConvertItem(testItem);
            expect(testResult).toEqual(result);
        });
    });
});
