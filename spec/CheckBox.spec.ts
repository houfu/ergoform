import {ItemExpress, ItemFull} from "@classes/Item";
import {CHECK_BOX, CheckBox} from "@classes/ModelItems/CheckBox";

describe('CheckBox -- ', () => {
    describe('Should convert from an Item. ', function () {
        it('An ItemExpress.', function () {
            const testItem: ItemExpress = {type: CHECK_BOX, value: 'Default Label'};
            const testBox = new CheckBox();
            testBox.ConvertItem(testItem);
            const result = new CheckBox('Default Label');
            expect(testBox).toEqual(result);
        });
        it('An ItemFull', function () {
            const testItem: ItemFull = {
                options: {label: 'Default Label', control: 'CheckBox1', help: 'Test Help'},
                type: CHECK_BOX
            };
            const testBox = new CheckBox();
            testBox.ConvertItem(testItem);
            const result = new CheckBox('Default Label');
            result.control = 'CheckBox1';
            result.help = 'Test Help';
            expect(testBox).toEqual(result);
        });
    });
});