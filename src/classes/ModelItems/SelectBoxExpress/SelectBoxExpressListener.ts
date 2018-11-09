// Generated from src/grammars/SelectBoxExpress.g4 by ANTLR 4.6-SNAPSHOT


import {ParseTreeListener} from 'antlr4ts/tree/ParseTreeListener';

import {
    ItemContext,
    LabelContext,
    PairContext,
    SelectBoxExpressContext,
    SelectItemsContext,
    ValueContext
} from './SelectBoxExpressParser';


/**
 * This interface defines a complete listener for a parse tree produced by
 * `SelectBoxExpressParser`.
 */
export interface SelectBoxExpressListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `SelectBoxExpressParser.selectBoxExpress`.
	 * @param ctx the parse tree
	 */
	enterSelectBoxExpress?: (ctx: SelectBoxExpressContext) => void;
	/**
	 * Exit a parse tree produced by `SelectBoxExpressParser.selectBoxExpress`.
	 * @param ctx the parse tree
	 */
	exitSelectBoxExpress?: (ctx: SelectBoxExpressContext) => void;

	/**
	 * Enter a parse tree produced by `SelectBoxExpressParser.label`.
	 * @param ctx the parse tree
	 */
	enterLabel?: (ctx: LabelContext) => void;
	/**
	 * Exit a parse tree produced by `SelectBoxExpressParser.label`.
	 * @param ctx the parse tree
	 */
	exitLabel?: (ctx: LabelContext) => void;

	/**
	 * Enter a parse tree produced by `SelectBoxExpressParser.selectItems`.
	 * @param ctx the parse tree
	 */
	enterSelectItems?: (ctx: SelectItemsContext) => void;
	/**
	 * Exit a parse tree produced by `SelectBoxExpressParser.selectItems`.
	 * @param ctx the parse tree
	 */
	exitSelectItems?: (ctx: SelectItemsContext) => void;

	/**
	 * Enter a parse tree produced by `SelectBoxExpressParser.item`.
	 * @param ctx the parse tree
	 */
	enterItem?: (ctx: ItemContext) => void;
	/**
	 * Exit a parse tree produced by `SelectBoxExpressParser.item`.
	 * @param ctx the parse tree
	 */
	exitItem?: (ctx: ItemContext) => void;

	/**
	 * Enter a parse tree produced by `SelectBoxExpressParser.pair`.
	 * @param ctx the parse tree
	 */
	enterPair?: (ctx: PairContext) => void;
	/**
	 * Exit a parse tree produced by `SelectBoxExpressParser.pair`.
	 * @param ctx the parse tree
	 */
	exitPair?: (ctx: PairContext) => void;

	/**
	 * Enter a parse tree produced by `SelectBoxExpressParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `SelectBoxExpressParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;
}

