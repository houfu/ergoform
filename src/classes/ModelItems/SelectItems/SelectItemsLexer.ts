/*
 * Copyright (c) 2019. Ang Hou Fu.
 * Licensed under the MIT License. See LICENSE file in the project root for license information.
 */

// Generated from src/classes/ModelItems/SelectItems/SelectItems.g4 by ANTLR 4.7.3-SNAPSHOT


import {ATN} from "antlr4ts/atn/ATN";
import {ATNDeserializer} from "antlr4ts/atn/ATNDeserializer";
import {CharStream} from "antlr4ts/CharStream";
import {Lexer} from "antlr4ts/Lexer";
import {LexerATNSimulator} from "antlr4ts/atn/LexerATNSimulator";
import {Vocabulary} from "antlr4ts/Vocabulary";
import {VocabularyImpl} from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class SelectItemsLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly STRING = 5;
	public static readonly WS = 6;

    // tslint:disable:no-trailing-whitespace
    public static readonly channelNames: string[] = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
    ];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
        "T__0", "T__1", "T__2", "T__3", "STRING", "ESC", "UNICODE", "HEX", "SAFECODEPOINT",
		"WS",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'['", "','", "']'", "':'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, "STRING", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(SelectItemsLexer._LITERAL_NAMES, SelectItemsLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return SelectItemsLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(SelectItemsLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "SelectItems.g4"; }

	// @Override
	public get ruleNames(): string[] { return SelectItemsLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return SelectItemsLexer._serializedATN; }

    // @Override
    public get channelNames(): string[] {
        return SelectItemsLexer.channelNames;
    }

	// @Override
	public get modeNames(): string[] { return SelectItemsLexer.modeNames; }

	public static readonly _serializedATN: string =
        "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\b?\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x03\x02\x03\x02\x03" +
		"\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x07" +
		"\x06#\n\x06\f\x06\x0E\x06&\v\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07" +
		"\x05\x07-\n\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\n" +
		"\x03\n\x03\v\x06\v:\n\v\r\v\x0E\v;\x03\v\x03\v\x02\x02\x02\f\x03\x02\x03" +
		"\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\x02\x0F\x02\x02\x11" +
		"\x02\x02\x13\x02\x02\x15\x02\b\x03\x02\x06\n\x02$$11^^ddhhppttvv\x05\x02" +
        "2;CHch\x05\x02\x02!$$^^\x05\x02\v\f\x0F\x0F\"\"\x02>\x02\x03\x03\x02\x02" +
        "\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02" +
        "\x02\x02\v\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x03\x17\x03\x02\x02" +
        "\x02\x05\x19\x03\x02\x02\x02\x07\x1B\x03\x02\x02\x02\t\x1D\x03\x02\x02" +
        "\x02\v\x1F\x03\x02\x02\x02\r)\x03\x02\x02\x02\x0F.\x03\x02\x02\x02\x11" +
        "4\x03\x02\x02\x02\x136\x03\x02\x02\x02\x159\x03\x02\x02\x02\x17\x18\x07" +
        "]\x02\x02\x18\x04\x03\x02\x02\x02\x19\x1A\x07.\x02\x02\x1A\x06\x03\x02" +
        "\x02\x02\x1B\x1C\x07_\x02\x02\x1C\b\x03\x02\x02\x02\x1D\x1E\x07<\x02\x02" +
        "\x1E\n\x03\x02\x02\x02\x1F$\x07$\x02\x02 #\x05\r\x07\x02!#\x05\x13\n\x02" +
        "\" \x03\x02\x02\x02\"!\x03\x02\x02\x02#&\x03\x02\x02\x02$\"\x03\x02\x02" +
		"\x02$%\x03\x02\x02\x02%\'\x03\x02\x02\x02&$\x03\x02\x02\x02\'(\x07$\x02" +
		"\x02(\f\x03\x02\x02\x02),\x07^\x02\x02*-\t\x02\x02\x02+-\x05\x0F\b\x02" +
		",*\x03\x02\x02\x02,+\x03\x02\x02\x02-\x0E\x03\x02\x02\x02./\x07w\x02\x02" +
		"/0\x05\x11\t\x0201\x05\x11\t\x0212\x05\x11\t\x0223\x05\x11\t\x023\x10" +
		"\x03\x02\x02\x0245\t\x03\x02\x025\x12\x03\x02\x02\x0267\n\x04\x02\x02" +
		"7\x14\x03\x02\x02\x028:\t\x05\x02\x0298\x03\x02\x02\x02:;\x03\x02\x02" +
		"\x02;9\x03\x02\x02\x02;<\x03\x02\x02\x02<=\x03\x02\x02\x02=>\b\v\x02\x02" +
		">\x16\x03\x02\x02\x02\x07\x02\"$,;\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SelectItemsLexer.__ATN) {
			SelectItemsLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SelectItemsLexer._serializedATN));
		}

		return SelectItemsLexer.__ATN;
	}

}

