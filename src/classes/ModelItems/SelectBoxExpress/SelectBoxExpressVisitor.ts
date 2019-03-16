/*
 * Copyright (c) 2019. Ang Hou Fu.
 * Licensed under the MIT License. See LICENSE file in the project root for license information.
 */

// Generated from src/classes/ModelItems/SelectBoxExpress/SelectBoxExpress.g4 by ANTLR 4.7.3-SNAPSHOT


import {ParseTreeVisitor} from "antlr4ts/tree/ParseTreeVisitor";

import {
    ItemContext,
    KeyContext,
    LabelContext,
    PairContext,
    SelectBoxExpressContext,
    SelectItemsContext,
    ValueContext
} from "./SelectBoxExpressParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SelectBoxExpressParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface SelectBoxExpressVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `SelectBoxExpressParser.selectBoxExpress`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectBoxExpress?: (ctx: SelectBoxExpressContext) => Result;

	/**
	 * Visit a parse tree produced by `SelectBoxExpressParser.label`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabel?: (ctx: LabelContext) => Result;

	/**
	 * Visit a parse tree produced by `SelectBoxExpressParser.selectItems`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectItems?: (ctx: SelectItemsContext) => Result;

	/**
	 * Visit a parse tree produced by `SelectBoxExpressParser.item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitItem?: (ctx: ItemContext) => Result;

	/**
	 * Visit a parse tree produced by `SelectBoxExpressParser.pair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPair?: (ctx: PairContext) => Result;

	/**
	 * Visit a parse tree produced by `SelectBoxExpressParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;

    /**
     * Visit a parse tree produced by `SelectBoxExpressParser.key`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitKey?: (ctx: KeyContext) => Result;
}

