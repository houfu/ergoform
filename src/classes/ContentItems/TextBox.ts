import {checkItemInConstructor, IsItem} from "../IsItem";
import {checkItemType, fillOptions, isItemExpress} from "../utils";
import {fillSemantic, IsSemantic, Semantic} from "@classes/ContentItems/Semantic";
import {Item} from "@classes/Item";

export const TEXT_BOX = 'text-box';

export class TextBox implements IsItem, IsSemantic {
    text: string = '';
    cssClass: string = '';
    sem: Semantic = Semantic.none;

    constructor(item? : string | Item) {
        checkItemInConstructor(this, item, text => this.text = text)
    }

    ConvertItem(item: Item) {
        checkItemType(item, TEXT_BOX);
        if (isItemExpress(item)) {
            this.text = item.value;
        } else {
            fillOptions(this, item, (key, value) => fillSemantic(key, value, this));
        }
    }
}
