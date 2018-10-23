import {Item, ItemExpress, ItemFull} from "@classes/Item";
import {IsModel} from "@classes/ModelItems/IsModel";
import {InputTypes} from "@classes/ModelItems/InputTypes";
import {checkItemType, fillOptions, isItemExpress, parseBoolean} from "@classes/utils";

export const INPUT_BOX = 'input-box';

export class InputBox implements Item, IsModel {
    get label(): string {
        return this._label;
    }

    set label(value: string) {
        if (!this.control || this._label === this.control) {
            this.control = value;
        }
        this._label = value;
    }

    control: string = '';
    private _label: string = '';
    help: string = '';
    required: boolean = false;
    inputType: InputTypes = InputTypes.text;

    constructor(label: string = '') {
        this.label = label;
    }

    ConvertItem(item: ItemFull | ItemExpress): void {
        checkItemType(item, INPUT_BOX);
        if (isItemExpress(item)) {
            this.label = item.value;
        } else {
            fillOptions(this, item, (key, value) => {
                switch (key) {
                    case 'label':
                        this.label = value;
                        return;
                    case 'required':
                        this.required = parseBoolean(value);
                        return;
                    case 'inputType':
                        this.inputType = +value;
                        return;
                }
            })
        }
    }

}