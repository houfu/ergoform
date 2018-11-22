// Generated from src/parser/grammars/ErgoForm.g4 by ANTLR 4.6-SNAPSHOT


import {ParseTreeVisitor} from 'antlr4ts/tree/ParseTreeVisitor';

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ErgoFormParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface ErgoFormVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `ErgoFormParser.ergoForm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitErgoForm?: (ctx: ErgoFormContext) => Result;

	/**
	 * Visit a parse tree produced by `ErgoFormParser.items`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitItems?: (ctx: ItemsContext) => Result;

	/**
	 * Visit a parse tree produced by `ErgoFormParser.itemRows`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitItemRows?: (ctx: ItemRowsContext) => Result;

	/**
	 * Visit a parse tree produced by `ErgoFormParser.itemRow`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitItemRow?: (ctx: ItemRowContext) => Result;

	/**
	 * Visit a parse tree produced by `ErgoFormParser.item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitItem?: (ctx: ItemContext) => Result;

	/**
	 * Visit a parse tree produced by `ErgoFormParser.itemFull`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitItemFull?: (ctx: ItemFullContext) => Result;

	/**
	 * Visit a parse tree produced by `ErgoFormParser.obj`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObj?: (ctx: ObjContext) => Result;

	/**
	 * Visit a parse tree produced by `ErgoFormParser.pair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPair?: (ctx: PairContext) => Result;

	/**
	 * Visit a parse tree produced by `ErgoFormParser.array`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArray?: (ctx: ArrayContext) => Result;

	/**
	 * Visit a parse tree produced by `ErgoFormParser.key`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKey?: (ctx: KeyContext) => Result;

	/**
	 * Visit a parse tree produced by `ErgoFormParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;

	/**
	 * Visit a parse tree produced by `ErgoFormParser.itemExpress`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitItemExpress?: (ctx: ItemExpressContext) => Result;

	/**
	 * Visit a parse tree produced by `ErgoFormParser.itemType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitItemType?: (ctx: ItemTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ErgoFormParser.expressValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressValue?: (ctx: ExpressValueContext) => Result;
}

