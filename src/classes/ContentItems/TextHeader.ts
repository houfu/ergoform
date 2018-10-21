import {Item, ItemExpress, ItemFull} from "@classes/Item";
import {checkItemType, fillOptions, isItemExpress} from "@classes/utils";

export const TEXT_HEADER = 'text-header';

export class TextHeader implements Item {
    text: string;
    cssClass: string = '';
    headerLevel: number = 3;

    constructor(text: string = '') {
        this.text = text;
    }

    ConvertItem(item: ItemFull | ItemExpress): void {
        checkItemType(item, TEXT_HEADER);
        if (isItemExpress(item)) {
            this.text = item.value;
        } else {
            fillOptions(this, item, ((key, value) => this.setHeaderLevel(key, value)));
        }
    }

    private setHeaderLevel(key: string, value: string) {
        if (key === 'headerLevel') {
            const headerLevel = parseInt(value);
            if (headerLevel > 6 || !headerLevel) {
                throw new Error('TextHeaderItem.ConvertItem:'
                    + `HeaderLevel is not a valid number. Value was ${value}`);
            } else {
                this.headerLevel = headerLevel;
            }
        }
    }
}