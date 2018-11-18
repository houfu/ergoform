import {checkItemInConstructor, IsItem} from "@classes/IsItem";
import {IsModel} from "@classes/ModelItems/IsModel";
import {InputTypes} from "@classes/ModelItems/InputTypes";
import {checkItemType, fillOptions, isItemExpress, parseBoolean} from "@classes/utils";
import {Item} from "@classes/Item";

export const INPUT_BOX = 'input-box';

export class InputBox implements IsItem, IsModel {
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

    constructor(item? : Item | string) {
        checkItemInConstructor(this, item, label => this.label = label)
    }

    ConvertItem(item: Item): void {
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