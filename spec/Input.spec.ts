import {ItemExpress, ItemFull} from "@classes/Item";
import {Input, INPUT} from "@classes/ModelItems/Input";
import {InputTypes} from "@classes/ModelItems/InputTypes";

describe('Input -- ', () => {
    describe('Should convert from an Item correctly. ', function () {
        it('Convert an ItemExpress', function () {
            const testItem: ItemExpress = {type: INPUT, value: 'Your Name: '};
            const testInput = new Input();
            testInput.ConvertItem(testItem);
            const result = new Input('Your Name: ');
            expect(testInput).toEqual(result);
        });
        it('Convert an ItemFull.', function () {
            const testItem: ItemFull = {
                type: INPUT, options: {
                    label: 'Your Name: ',
                    control: 'Control 1',
                    required:'yes',
                    help: 'A test help',
                    inputType: '2'
                }
            };
            const testInput = new Input();
            testInput.ConvertItem(testItem);
            const result = new Input('Your Name: ');
            result.inputType = InputTypes.number;
            result.control = 'Control 1';
            result.required = true;
            result.help = 'A test help';
            expect(testInput).toEqual(result);
        });
    });
});