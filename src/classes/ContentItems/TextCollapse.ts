import {checkItemInConstructor, IsItem} from "@classes/IsItem";
import {fillSemantic, IsSemantic, Semantic} from "@classes/ContentItems/Semantic";
import {checkItemType, fillOptions, isItemExpress} from "@classes/utils";
import {Item} from "@classes/Item";

export const TEXT_COLLAPSE = 'text-collapse';

export class TextCollapse implements IsItem, IsSemantic {
    set text(value: string) {
        this.setAutomaticHeader(this._text, value);
        this._text = value;
    }

    sem: Semantic = Semantic.none;
    private _text: string = '';
    header: string = '';

    constructor(item?: Item | string) {
        checkItemInConstructor(this, item, text => this.text = text)
    }

    ConvertItem(item: Item): void {
        checkItemType(item, TEXT_COLLAPSE);
        if (isItemExpress(item)) {
            this.text = item.value;
        } else {
            fillOptions(this, item, (key, value) => {
                if (key === 'text') {
                    this.text = value;
                }
                fillSemantic(key, value, this)
            });
        }
    }

    setAutomaticHeader(previous: string, current: string) {
        this.header = this.header ?
            (this.header !== previous.substring(0, 15) + '…') ?
                this.header : this.header = current.substring(0, 15) + '…' :
            this.header = current.substring(0, 15) + '…';
    }

}