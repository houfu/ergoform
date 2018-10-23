import {IsItem} from "@classes/IsItem";
import {checkItemType, fillOptions, isItemExpress} from "@classes/utils";
import {Item} from "@classes/Item";

export const TEXT_HEADER = 'text-header';

export class TextHeader implements IsItem {
    text: string;
    cssClass: string = '';
    headerLevel: number = 3;

    constructor(text: string = '') {
        this.text = text;
    }

    ConvertItem(item: Item): void {
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