/*
 * Copyright (c) 2019. Ang Hou Fu.
 * Licensed under the MIT License. See LICENSE file in the project root for license information.
 */

// Generated from src/classes/ModelItems/SelectBoxExpress/SelectBoxExpress.g4 by ANTLR 4.6-SNAPSHOT


import {ATN} from "antlr4ts/atn/ATN";
import {ATNDeserializer} from "antlr4ts/atn/ATNDeserializer";
import {CharStream} from "antlr4ts/CharStream";
import {Lexer} from "antlr4ts/Lexer";
import {LexerATNSimulator} from "antlr4ts/atn/LexerATNSimulator";
import {Vocabulary} from "antlr4ts/Vocabulary";
import {VocabularyImpl} from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class SelectBoxExpressLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly STRING = 6;
	public static readonly WS = 7;
	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "STRING", "ESC", "UNICODE", "HEX",
		"SAFECODEPOINT", "WS",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "';'", "'['", "','", "']'", "':'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, "STRING",
		"WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(SelectBoxExpressLexer._LITERAL_NAMES, SelectBoxExpressLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return SelectBoxExpressLexer.VOCABULARY;
	}

	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(SelectBoxExpressLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "SelectBoxExpress.g4"; }

	// @Override
	public get ruleNames(): string[] { return SelectBoxExpressLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return SelectBoxExpressLexer._serializedATN; }

	// @Override
	public get modeNames(): string[] { return SelectBoxExpressLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x02\tC\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x03\x02\x03" +
		"\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03" +
		"\x07\x03\x07\x03\x07\x07\x07\'\n\x07\f\x07\x0E\x07*\v\x07\x03\x07\x03" +
		"\x07\x03\b\x03\b\x03\b\x05\b1\n\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t" +
		"\x03\n\x03\n\x03\v\x03\v\x03\f\x06\f>\n\f\r\f\x0E\f?\x03\f\x03\f\x02\x02" +
		"\x02\r\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b" +
		"\x0F\x02\x02\x11\x02\x02\x13\x02\x02\x15\x02\x02\x17\x02\t\x03\x02\x06" +
		"\n\x02$$11^^ddhhppttvv\x05\x022;CHch\x05\x02\x02!$$^^\x05\x02\v\f\x0F" +
		"\x0F\"\"B\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03" +
		"\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02" +
		"\x02\x02\x02\x17\x03\x02\x02\x02\x03\x19\x03\x02\x02\x02\x05\x1B\x03\x02" +
		"\x02\x02\x07\x1D\x03\x02\x02\x02\t\x1F\x03\x02\x02\x02\v!\x03\x02\x02" +
		"\x02\r#\x03\x02\x02\x02\x0F-\x03\x02\x02\x02\x112\x03\x02\x02\x02\x13" +
		"8\x03\x02\x02\x02\x15:\x03\x02\x02\x02\x17=\x03\x02\x02\x02\x19\x1A\x07" +
		"=\x02\x02\x1A\x04\x03\x02\x02\x02\x1B\x1C\x07]\x02\x02\x1C\x06\x03\x02" +
		"\x02\x02\x1D\x1E\x07.\x02\x02\x1E\b\x03\x02\x02\x02\x1F \x07_\x02\x02" +
		" \n\x03\x02\x02\x02!\"\x07<\x02\x02\"\f\x03\x02\x02\x02#(\x07$\x02\x02" +
		"$\'\x05\x0F\b\x02%\'\x05\x15\v\x02&$\x03\x02\x02\x02&%\x03\x02\x02\x02" +
		"\'*\x03\x02\x02\x02(&\x03\x02\x02\x02()\x03\x02\x02\x02)+\x03\x02\x02" +
		"\x02*(\x03\x02\x02\x02+,\x07$\x02\x02,\x0E\x03\x02\x02\x02-0\x07^\x02" +
		"\x02.1\t\x02\x02\x02/1\x05\x11\t\x020.\x03\x02\x02\x020/\x03\x02\x02\x02" +
		"1\x10\x03\x02\x02\x0223\x07w\x02\x0234\x05\x13\n\x0245\x05\x13\n\x025" +
		"6\x05\x13\n\x0267\x05\x13\n\x027\x12\x03\x02\x02\x0289\t\x03\x02\x029" +
		"\x14\x03\x02\x02\x02:;\n\x04\x02\x02;\x16\x03\x02\x02\x02<>\t\x05\x02" +
		"\x02=<\x03\x02\x02\x02>?\x03\x02\x02\x02?=\x03\x02\x02\x02?@\x03\x02\x02" +
		"\x02@A\x03\x02\x02\x02AB\b\f\x02\x02B\x18\x03\x02\x02\x02\x07\x02&(0?" +
		"\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SelectBoxExpressLexer.__ATN) {
			SelectBoxExpressLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SelectBoxExpressLexer._serializedATN));
		}

		return SelectBoxExpressLexer.__ATN;
	}

}

