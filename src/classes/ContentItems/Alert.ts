import {IsItem} from "@classes/IsItem";
import {fillSemantic, IsSemantic, Semantic} from "@classes/ContentItems/Semantic";
import {checkItemType, fillOptions, isItemExpress} from "@classes/utils";
import {Item} from "@classes/Item";

export const ALERT = 'alert';

export class Alert implements IsItem, IsSemantic {
    text: string;
    header: string = '';
    sem: Semantic = Semantic.none;

    constructor(text: string = '') {
        this.text = text;
    }

    ConvertItem(item: Item): void {
        checkItemType(item, ALERT);
        if (isItemExpress(item)) {
            this.text = item.value;
        } else {
            fillOptions(this, item, (key, value) => fillSemantic(key, value, this));
        }
    }

}