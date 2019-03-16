/*
 * Copyright (c) 2019. Ang Hou Fu.
 * Licensed under the MIT License. See LICENSE file in the project root for license information.
 */

import {checkItemInConstructor, IsItem} from "../IsItem";
import {Item} from "../Item";
import {checkItemType, fillOptions, isItemExpress} from "../utils";

export const NAV_BUTTON = 'nav-button';

export class NavButton implements IsItem {
    cssClass: string = '';
    message: string = 'Navigate';
    private _label: string = 'Navigate';


    get label(): string {
        return this._label;
    }

    set label(value: string) {
        if (this._label == this.message) {
            this.message = value;
        }
        this._label = value;
    }

    constructor(item?: Item | string) {
        checkItemInConstructor(this, item, value => this.label = value)
    }

    ConvertItem(item: Item): void {
        checkItemType(item, NAV_BUTTON);
        if (isItemExpress(item)) {
            this.label = item.value;
        } else {
            fillOptions(this, item, (key, value) => {
                if (key === 'label') {
                    this.label = value;
                }
            });
        }
    }
}
