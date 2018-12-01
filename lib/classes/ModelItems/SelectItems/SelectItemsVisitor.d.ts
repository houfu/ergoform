import {ParseTreeVisitor} from 'antlr4ts/tree/ParseTreeVisitor';
import {ItemContext, KeyContext, PairContext, SelectItemsContext, ValueContext} from './SelectItemsParser';

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SelectItemsParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface SelectItemsVisitor<Result> extends ParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `SelectItemsParser.selectItems`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectItems?: (ctx: SelectItemsContext) => Result;
    /**
     * Visit a parse tree produced by `SelectItemsParser.item`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitItem?: (ctx: ItemContext) => Result;
    /**
     * Visit a parse tree produced by `SelectItemsParser.pair`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPair?: (ctx: PairContext) => Result;
    /**
     * Visit a parse tree produced by `SelectItemsParser.value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValue?: (ctx: ValueContext) => Result;
    /**
     * Visit a parse tree produced by `SelectItemsParser.key`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitKey?: (ctx: KeyContext) => Result;
}
