import {Item, ItemExpress, ItemFull} from "../Item";
import {checkItemType, fillOptions, isItemExpress} from "../utils";
import {fillSemantic, IsSemantic, Semantic} from "@classes/ContentItems/Semantic";

export const TEXT_BOX = 'text-box';

export class TextBox implements Item, IsSemantic {
    text: string;
    cssClass: string = '';
    sem: Semantic = Semantic.none;

    constructor(text: string = '') {
        this.text = text;
    }

    ConvertItem(item: ItemFull | ItemExpress) {
        checkItemType(item, TEXT_BOX);
        if (isItemExpress(item)) {
            this.text = item.value;
        } else {
            fillOptions(this, item, (key, value) => fillSemantic(key, value, this));
        }
    }
}
