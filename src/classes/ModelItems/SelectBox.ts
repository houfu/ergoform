import {IsItem} from "@classes/IsItem";
import {IsModel} from "@classes/ModelItems/IsModel";
import {checkItemType, fillOptions, isItemExpress, parseBoolean} from "@classes/utils";
import {parseSelectItems, SelectItem} from "@classes/ModelItems/SelectItems/SelectItem";
import {Item} from "@classes/Item";
import {parseSelectBoxExpress} from "@classes/ModelItems/SelectBoxExpress/SelectBoxExpress";

export const SELECT_BOX = 'select-box';

export class SelectBox implements IsItem, IsModel {
    private _label: string = '';
    control: string = '';
    required: boolean = false;
    multiple: boolean = false;
    size = 0;
    help: string = '';
    items: SelectItem[] = [];

    get label(): string {
        return this._label;
    }

    set label(value: string) {
        if (!this.control || this._label === this.control) {
            this.control = value;
        }
        this._label = value;
    }

    constructor(label: string, items: string | SelectItem[] ) {
        this.label = label;
        if (typeof items === "string") {
            this.items = parseSelectItems(items);
        } else {
            this.items = items;
        }
    }

    ConvertItem(item: Item): void {
        checkItemType(item, SELECT_BOX);
        if (isItemExpress(item)) {
            let newItem = parseSelectBoxExpress(item.value);
            Object.assign(this, newItem);
        } else {
            fillOptions(this, item, (key, value) => {
                switch (key) {
                    case 'required':
                        this.required = parseBoolean(value);
                        return;
                    case 'multiple':
                        this.multiple = parseBoolean(value);
                        return;
                    case 'size':
                        this.size = parseInt(value);
                        return;
                    case 'label':
                        this.label = value;
                        return;
                    case 'items':
                        this.items = parseSelectItems(value);
                        return;
                }
            })
        }
    }
}

