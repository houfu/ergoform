import {Item, ItemExpress, ItemFull} from "@classes/Item";
import {fillSemantic, IsSemantic, Semantic} from "@classes/ContentItems/Semantic";
import {checkItemType, fillOptions, isItemExpress} from "@classes/utils";

export const ALERT = 'alert';

export class Alert implements Item, IsSemantic {
    text: string;
    header: string = '';
    sem: Semantic = Semantic.none;

    constructor(text: string = '') {
        this.text = text;
    }

    ConvertItem(item: ItemFull | ItemExpress): void {
        checkItemType(item, ALERT);
        if (isItemExpress(item)) {
            this.text = item.value;
        } else {
            fillOptions(this, item, (key, value) => fillSemantic(key, value, this));
        }
    }

}