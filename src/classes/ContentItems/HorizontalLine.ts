import {Item, ItemExpress, ItemFull} from "@classes/Item";
import {checkItemType, isItemExpress} from "@classes/utils";

export const HORIZONTAL_LINE = 'horizontal-line';

export class HorizontalLine implements Item {
    cssClass: string = '';

    ConvertItem(item: ItemFull | ItemExpress): void {
        checkItemType(item, HORIZONTAL_LINE);
        if (!isItemExpress(item)) {
            this.cssClass = item.options['cssClass'] || '';
        }
    }

}