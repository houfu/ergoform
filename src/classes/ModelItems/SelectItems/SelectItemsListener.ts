/*
 * Copyright (c) 2019. Ang Hou Fu.
 * Licensed under the MIT License. See LICENSE file in the project root for license information.
 */

// Generated from src/classes/ModelItems/SelectItems/SelectItems.g4 by ANTLR 4.6-SNAPSHOT


import {ParseTreeListener} from "antlr4ts/tree/ParseTreeListener";

import {ItemContext, KeyContext, PairContext, SelectItemsContext, ValueContext} from "./SelectItemsParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `SelectItemsParser`.
 */
export interface SelectItemsListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `SelectItemsParser.selectItems`.
	 * @param ctx the parse tree
	 */
	enterSelectItems?: (ctx: SelectItemsContext) => void;
	/**
	 * Exit a parse tree produced by `SelectItemsParser.selectItems`.
	 * @param ctx the parse tree
	 */
	exitSelectItems?: (ctx: SelectItemsContext) => void;

	/**
	 * Enter a parse tree produced by `SelectItemsParser.item`.
	 * @param ctx the parse tree
	 */
	enterItem?: (ctx: ItemContext) => void;
	/**
	 * Exit a parse tree produced by `SelectItemsParser.item`.
	 * @param ctx the parse tree
	 */
	exitItem?: (ctx: ItemContext) => void;

	/**
	 * Enter a parse tree produced by `SelectItemsParser.pair`.
	 * @param ctx the parse tree
	 */
	enterPair?: (ctx: PairContext) => void;
	/**
	 * Exit a parse tree produced by `SelectItemsParser.pair`.
	 * @param ctx the parse tree
	 */
	exitPair?: (ctx: PairContext) => void;

	/**
	 * Enter a parse tree produced by `SelectItemsParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `SelectItemsParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;

	/**
	 * Enter a parse tree produced by `SelectItemsParser.key`.
	 * @param ctx the parse tree
	 */
	enterKey?: (ctx: KeyContext) => void;
	/**
	 * Exit a parse tree produced by `SelectItemsParser.key`.
	 * @param ctx the parse tree
	 */
	exitKey?: (ctx: KeyContext) => void;
}

