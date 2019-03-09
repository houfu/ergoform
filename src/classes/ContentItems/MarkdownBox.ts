/*
 * Copyright (c) 2019. Ang Hou Fu.
 * Licensed under the MIT License. See LICENSE file in the project root for license information.
 */

import {checkItemInConstructor, IsItem} from "../IsItem";
import {Item} from "../Item";
import {checkItemType, fillOptions, isItemExpress} from "../utils";

export const MARKDOWN_BOX = 'markdown';

export class MarkdownBox implements IsItem {
    content: string = '';

    constructor(item?: Item | string) {
        checkItemInConstructor(this, item, value => this.content = value);
    }

    ConvertItem(item: Item): void {
        checkItemType(item, MARKDOWN_BOX);
        if (isItemExpress(item)) {
            this.content = item.value;
        } else {
            fillOptions(this, item);
        }
    }

}
