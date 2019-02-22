/*
 * Copyright (c) 2019. Ang Hou Fu.
 * Licensed under the MIT License. See LICENSE file in the project root for license information.
 */

import {ErgoForm} from "./ErgoForm";

export class OptionsHelper {
    constructor(private ergoForm: ErgoForm) {
    }

    getOption(key: string): any | undefined {
        const options = this.ergoForm.options;
        const result = Object.keys(options).find(value => value === key);
        return result ? options[key] : undefined;
    }
}

export function GetOption(ergoForm: ErgoForm, key: string) {
    const helper = new OptionsHelper(ergoForm);
    return helper.getOption(key);
}
