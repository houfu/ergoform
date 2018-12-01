import {ParseTreeListener} from 'antlr4ts/tree/ParseTreeListener';
import {
    ArrayContext,
    ErgoFormContext,
    ExpressValueContext,
    ItemContext,
    ItemExpressContext,
    ItemFullContext,
    ItemRowContext,
    ItemRowsContext,
    ItemsContext,
    ItemTypeContext,
    KeyContext,
    ObjContext,
    PairContext,
    ValueContext
} from './ErgoFormParser';

/**
 * This interface defines a complete listener for a parse tree produced by
 * `ErgoFormParser`.
 */
export interface ErgoFormListener extends ParseTreeListener {
    /**
     * Enter a parse tree produced by `ErgoFormParser.ergoForm`.
     * @param ctx the parse tree
     */
    enterErgoForm?: (ctx: ErgoFormContext) => void;
    /**
     * Exit a parse tree produced by `ErgoFormParser.ergoForm`.
     * @param ctx the parse tree
     */
    exitErgoForm?: (ctx: ErgoFormContext) => void;
    /**
     * Enter a parse tree produced by `ErgoFormParser.items`.
     * @param ctx the parse tree
     */
    enterItems?: (ctx: ItemsContext) => void;
    /**
     * Exit a parse tree produced by `ErgoFormParser.items`.
     * @param ctx the parse tree
     */
    exitItems?: (ctx: ItemsContext) => void;
    /**
     * Enter a parse tree produced by `ErgoFormParser.itemRows`.
     * @param ctx the parse tree
     */
    enterItemRows?: (ctx: ItemRowsContext) => void;
    /**
     * Exit a parse tree produced by `ErgoFormParser.itemRows`.
     * @param ctx the parse tree
     */
    exitItemRows?: (ctx: ItemRowsContext) => void;
    /**
     * Enter a parse tree produced by `ErgoFormParser.itemRow`.
     * @param ctx the parse tree
     */
    enterItemRow?: (ctx: ItemRowContext) => void;
    /**
     * Exit a parse tree produced by `ErgoFormParser.itemRow`.
     * @param ctx the parse tree
     */
    exitItemRow?: (ctx: ItemRowContext) => void;
    /**
     * Enter a parse tree produced by `ErgoFormParser.item`.
     * @param ctx the parse tree
     */
    enterItem?: (ctx: ItemContext) => void;
    /**
     * Exit a parse tree produced by `ErgoFormParser.item`.
     * @param ctx the parse tree
     */
    exitItem?: (ctx: ItemContext) => void;
    /**
     * Enter a parse tree produced by `ErgoFormParser.itemFull`.
     * @param ctx the parse tree
     */
    enterItemFull?: (ctx: ItemFullContext) => void;
    /**
     * Exit a parse tree produced by `ErgoFormParser.itemFull`.
     * @param ctx the parse tree
     */
    exitItemFull?: (ctx: ItemFullContext) => void;
    /**
     * Enter a parse tree produced by `ErgoFormParser.obj`.
     * @param ctx the parse tree
     */
    enterObj?: (ctx: ObjContext) => void;
    /**
     * Exit a parse tree produced by `ErgoFormParser.obj`.
     * @param ctx the parse tree
     */
    exitObj?: (ctx: ObjContext) => void;
    /**
     * Enter a parse tree produced by `ErgoFormParser.pair`.
     * @param ctx the parse tree
     */
    enterPair?: (ctx: PairContext) => void;
    /**
     * Exit a parse tree produced by `ErgoFormParser.pair`.
     * @param ctx the parse tree
     */
    exitPair?: (ctx: PairContext) => void;
    /**
     * Enter a parse tree produced by `ErgoFormParser.array`.
     * @param ctx the parse tree
     */
    enterArray?: (ctx: ArrayContext) => void;
    /**
     * Exit a parse tree produced by `ErgoFormParser.array`.
     * @param ctx the parse tree
     */
    exitArray?: (ctx: ArrayContext) => void;
    /**
     * Enter a parse tree produced by `ErgoFormParser.key`.
     * @param ctx the parse tree
     */
    enterKey?: (ctx: KeyContext) => void;
    /**
     * Exit a parse tree produced by `ErgoFormParser.key`.
     * @param ctx the parse tree
     */
    exitKey?: (ctx: KeyContext) => void;
    /**
     * Enter a parse tree produced by `ErgoFormParser.value`.
     * @param ctx the parse tree
     */
    enterValue?: (ctx: ValueContext) => void;
    /**
     * Exit a parse tree produced by `ErgoFormParser.value`.
     * @param ctx the parse tree
     */
    exitValue?: (ctx: ValueContext) => void;
    /**
     * Enter a parse tree produced by `ErgoFormParser.itemExpress`.
     * @param ctx the parse tree
     */
    enterItemExpress?: (ctx: ItemExpressContext) => void;
    /**
     * Exit a parse tree produced by `ErgoFormParser.itemExpress`.
     * @param ctx the parse tree
     */
    exitItemExpress?: (ctx: ItemExpressContext) => void;
    /**
     * Enter a parse tree produced by `ErgoFormParser.itemType`.
     * @param ctx the parse tree
     */
    enterItemType?: (ctx: ItemTypeContext) => void;
    /**
     * Exit a parse tree produced by `ErgoFormParser.itemType`.
     * @param ctx the parse tree
     */
    exitItemType?: (ctx: ItemTypeContext) => void;
    /**
     * Enter a parse tree produced by `ErgoFormParser.expressValue`.
     * @param ctx the parse tree
     */
    enterExpressValue?: (ctx: ExpressValueContext) => void;
    /**
     * Exit a parse tree produced by `ErgoFormParser.expressValue`.
     * @param ctx the parse tree
     */
    exitExpressValue?: (ctx: ExpressValueContext) => void;
}
