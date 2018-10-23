import {IsItem} from "@classes/IsItem";
import {checkItemType, isItemExpress} from "@classes/utils";
import {Item} from "@classes/Item";

export const HORIZONTAL_LINE = 'horizontal-line';

export class HorizontalLine implements IsItem {
    cssClass: string = '';

    ConvertItem(item: Item): void {
        checkItemType(item, HORIZONTAL_LINE);
        if (!isItemExpress(item)) {
            this.cssClass = item.options['cssClass'] || '';
        }
    }

}