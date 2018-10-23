import {IsItem} from "@classes/IsItem";
import {IsModel} from "@classes/ModelItems/IsModel";
import {checkItemType, fillOptions, isItemExpress} from "@classes/utils";
import {Item} from "@classes/Item";

export const CHECK_BOX = 'check-box';

export class CheckBox implements IsItem, IsModel {
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
    header: string = '';

    constructor(label: string = '') {
        this.label = label;
    }

    ConvertItem(item: Item): void {
        checkItemType(item, CHECK_BOX);
        if (isItemExpress(item)) {
            this.label = item.value;
        } else {
            fillOptions(this, item, (key, value) => {
                if (key === 'label') {
                    this.label = value;
                }
            })
        }
    }

}