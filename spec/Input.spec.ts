import {ItemExpress, ItemFull} from "@classes/Item";
import {INPUT_BOX, InputBox} from "@classes/ModelItems/InputBox";
import {InputTypes} from "@classes/ModelItems/InputTypes";

describe('InputBox -- ', () => {
    describe('Should convert from an Item correctly. ', function () {
        it('Convert an ItemExpress', function () {
            const testItem: ItemExpress = {type: INPUT_BOX, value: 'Your Name: '};
            const testInput = new InputBox();
            testInput.ConvertItem(testItem);
            const result = new InputBox('Your Name: ');
            expect(testInput).toEqual(result);
        });
        it('Convert an ItemFull.', function () {
            const testItem: ItemFull = {
                type: INPUT_BOX, options: {
                    label: 'Your Name: ',
                    control: 'Control 1',
                    required:'yes',
                    help: 'A test help',
                    inputType: '2'
                }
            };
            const testInput = new InputBox();
            testInput.ConvertItem(testItem);
            const result = new InputBox('Your Name: ');
            result.inputType = InputTypes.number;
            result.control = 'Control 1';
            result.required = true;
            result.help = 'A test help';
            expect(testInput).toEqual(result);
        });
    });
});