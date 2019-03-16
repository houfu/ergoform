/*
 * Copyright (c) 2019. Ang Hou Fu.
 * Licensed under the MIT License. See LICENSE file in the project root for license information.
 */

/**
 * Options contains the full class properties of an OptionStore. Most implementations would only
 */
export class Options {
    /**
     * Name of the ergoform. Optional and defaults to 'My Ergoform'
     * @type {string}
     */
    name: string = 'My ErgoForm';
    /**
     * An option
     * @type {boolean}
     */
    simple_input: boolean = true;
    mute_parser_errors: boolean = true;

    [key: string] : any
}
