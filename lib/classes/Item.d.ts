/**
 * Type alias for ItemFull or ItemExpress. Use [[IsItemExpress]] as a type guard tp determine the correct type.
 */
export declare type Item = ItemFull | ItemExpress;
/**
 * ItemFull is the full notation for describing an item of an ErgoForm.
 *
 * The grammar or definition is defined as " `type` `:` `{` `pairs`  `}`. Of which pairs are  "`key` `:` `value` " separated by commas (`,`).
 */
export interface ItemFull {
    options: Record<string, string>;
    type: string;
}
/**
 * ItemExpress is a short notation for describing an Item of an Ergoform.
 *
 * The grammar or definition is defined as  "`type` `:` `value`".
 */
export interface ItemExpress {
    type: string;
    value: string;
}
