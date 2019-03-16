/*
 * Copyright (c) 2019. Ang Hou Fu.
 * Licensed under the MIT License. See LICENSE file in the project root for license information.
 */

// Generated from src/parser/grammars/ErgoForm.g4 by ANTLR 4.7.3-SNAPSHOT


import {ATN} from "antlr4ts/atn/ATN";
import {ATNDeserializer} from "antlr4ts/atn/ATNDeserializer";
import {NoViableAltException} from "antlr4ts/NoViableAltException";
import {Parser} from "antlr4ts/Parser";
import {ParserRuleContext} from "antlr4ts/ParserRuleContext";
import {ParserATNSimulator} from "antlr4ts/atn/ParserATNSimulator";
import {RecognitionException} from "antlr4ts/RecognitionException";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import {TerminalNode} from "antlr4ts/tree/TerminalNode";
import {TokenStream} from "antlr4ts/TokenStream";
import {Vocabulary} from "antlr4ts/Vocabulary";
import {VocabularyImpl} from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import {ErgoFormListener} from "./ErgoFormListener";
import {ErgoFormVisitor} from "./ErgoFormVisitor";


export class ErgoFormParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly COLON = 7;
	public static readonly STRING = 8;
	public static readonly NUMBER = 9;
	public static readonly WS = 10;
	public static readonly NEWLINE = 11;
	public static readonly RULE_ergoForm = 0;
	public static readonly RULE_items = 1;
	public static readonly RULE_item = 2;
	public static readonly RULE_itemFull = 3;
	public static readonly RULE_obj = 4;
	public static readonly RULE_pair = 5;
	public static readonly RULE_key = 6;
	public static readonly RULE_value = 7;
	public static readonly RULE_itemExpress = 8;
	public static readonly RULE_itemType = 9;
	public static readonly RULE_expressValue = 10;
	public static readonly RULE_itemRows = 11;
	public static readonly RULE_itemRow = 12;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
        "ergoForm", "items", "item", "itemFull", "obj", "pair", "key", "value",
		"itemExpress", "itemType", "expressValue", "itemRows", "itemRow",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'['", "','", "']'", "'{'", "'}'", "';'", "':'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
		"COLON", "STRING", "NUMBER", "WS", "NEWLINE",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ErgoFormParser._LITERAL_NAMES, ErgoFormParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ErgoFormParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "ErgoForm.g4"; }

	// @Override
	public get ruleNames(): string[] { return ErgoFormParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return ErgoFormParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(ErgoFormParser._ATN, this);
	}
	// @RuleVersion(0)
	public ergoForm(): ErgoFormContext {
		let _localctx: ErgoFormContext = new ErgoFormContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, ErgoFormParser.RULE_ergoForm);
		try {
			this.state = 28;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ErgoFormParser.T__0:
				this.enterOuterAlt(_localctx, 1);
				{
                    this.state = 26;
				this.items();
				}
				break;
			case ErgoFormParser.STRING:
				this.enterOuterAlt(_localctx, 2);
				{
                    this.state = 27;
				this.itemRows();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public items(): ItemsContext {
		let _localctx: ItemsContext = new ItemsContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, ErgoFormParser.RULE_items);
		let _la: number;
		try {
			this.state = 43;
			this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
                    this.state = 30;
				this.match(ErgoFormParser.T__0);
                    this.state = 31;
				this.item();
                    this.state = 36;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
                    while (_la === ErgoFormParser.T__1) {
					{
					{
                        this.state = 32;
					this.match(ErgoFormParser.T__1);
                        this.state = 33;
					this.item();
					}
					}
                        this.state = 38;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
                    this.state = 39;
				this.match(ErgoFormParser.T__2);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
                    this.state = 41;
				this.match(ErgoFormParser.T__0);
                    this.state = 42;
				this.match(ErgoFormParser.T__2);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public item(): ItemContext {
		let _localctx: ItemContext = new ItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, ErgoFormParser.RULE_item);
		try {
			this.state = 47;
			this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 3, this._ctx)) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
                    this.state = 45;
				this.itemExpress();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
                    this.state = 46;
				this.itemFull();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public itemFull(): ItemFullContext {
		let _localctx: ItemFullContext = new ItemFullContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, ErgoFormParser.RULE_itemFull);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
                this.state = 49;
			this.itemType();
                this.state = 50;
			this.match(ErgoFormParser.COLON);
                this.state = 51;
			this.obj();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public obj(): ObjContext {
		let _localctx: ObjContext = new ObjContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, ErgoFormParser.RULE_obj);
		let _la: number;
		try {
			this.state = 66;
			this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 5, this._ctx)) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
                    this.state = 53;
                    this.match(ErgoFormParser.T__3);
                    this.state = 54;
				this.pair();
                    this.state = 59;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
                    while (_la === ErgoFormParser.T__1) {
					{
					{
                        this.state = 55;
					this.match(ErgoFormParser.T__1);
                        this.state = 56;
					this.pair();
					}
					}
                        this.state = 61;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
                    this.state = 62;
                    this.match(ErgoFormParser.T__4);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
                    this.state = 64;
                    this.match(ErgoFormParser.T__3);
                    this.state = 65;
                    this.match(ErgoFormParser.T__4);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pair(): PairContext {
		let _localctx: PairContext = new PairContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, ErgoFormParser.RULE_pair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
                this.state = 68;
			this.key();
                this.state = 69;
			this.match(ErgoFormParser.COLON);
                this.state = 70;
			this.value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public key(): KeyContext {
		let _localctx: KeyContext = new KeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, ErgoFormParser.RULE_key);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
                this.state = 72;
			this.match(ErgoFormParser.STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, ErgoFormParser.RULE_value);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
                this.state = 74;
			this.match(ErgoFormParser.STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public itemExpress(): ItemExpressContext {
		let _localctx: ItemExpressContext = new ItemExpressContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, ErgoFormParser.RULE_itemExpress);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
                this.state = 76;
			this.itemType();
                this.state = 77;
			this.match(ErgoFormParser.COLON);
                this.state = 78;
			this.expressValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public itemType(): ItemTypeContext {
		let _localctx: ItemTypeContext = new ItemTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, ErgoFormParser.RULE_itemType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
                this.state = 80;
			this.match(ErgoFormParser.STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressValue(): ExpressValueContext {
		let _localctx: ExpressValueContext = new ExpressValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, ErgoFormParser.RULE_expressValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
                this.state = 82;
			this.match(ErgoFormParser.STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public itemRows(): ItemRowsContext {
		let _localctx: ItemRowsContext = new ItemRowsContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, ErgoFormParser.RULE_itemRows);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
                this.state = 85;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 84;
                            this.itemRow();
                        }
                    }
                    this.state = 87;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === ErgoFormParser.STRING);
			}
        } catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
        } finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public itemRow(): ItemRowContext {
		let _localctx: ItemRowContext = new ItemRowContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, ErgoFormParser.RULE_itemRow);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
                this.state = 89;
                this.item();
                this.state = 95;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case ErgoFormParser.T__1: {
                        this.state = 90;
                        this.match(ErgoFormParser.T__1);
                        this.state = 91;
                        this.match(ErgoFormParser.NEWLINE);
                    }
                        break;
                    case ErgoFormParser.T__5: {
                        this.state = 92;
                        this.match(ErgoFormParser.T__5);
                        this.state = 93;
                        this.match(ErgoFormParser.NEWLINE);
                    }
                        break;
                    case ErgoFormParser.NEWLINE: {
                        this.state = 94;
                        this.match(ErgoFormParser.NEWLINE);
                    }
                        break;
                    case ErgoFormParser.EOF:
                    case ErgoFormParser.STRING:
                        break;
                    default:
                        break;
                }
			}
        } catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
        } finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
        "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\rd\x04\x02\t" +
		"\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t" +
		"\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04\x0E" +
		"\t\x0E\x03\x02\x03\x02\x05\x02\x1F\n\x02\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x07\x03%\n\x03\f\x03\x0E\x03(\v\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05" +
		"\x03.\n\x03\x03\x04\x03\x04\x05\x042\n\x04\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06<\n\x06\f\x06\x0E\x06?\v\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06E\n\x06\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03" +
		"\f\x03\f\x03\r\x06\rX\n\r\r\r\x0E\rY\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x05\x0Eb\n\x0E\x03\x0E\x02\x02\x02\x0F\x02\x02\x04\x02\x06" +
		"\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02" +
        "\x1A\x02\x02\x02\x02`\x02\x1E\x03\x02\x02\x02\x04-\x03\x02\x02\x02\x06" +
        "1\x03\x02\x02\x02\b3\x03\x02\x02\x02\nD\x03\x02\x02\x02\fF\x03\x02\x02" +
        "\x02\x0EJ\x03\x02\x02\x02\x10L\x03\x02\x02\x02\x12N\x03\x02\x02\x02\x14" +
        "R\x03\x02\x02\x02\x16T\x03\x02\x02\x02\x18W\x03\x02\x02\x02\x1A[\x03\x02" +
        "\x02\x02\x1C\x1F\x05\x04\x03\x02\x1D\x1F\x05\x18\r\x02\x1E\x1C\x03\x02" +
        "\x02\x02\x1E\x1D\x03\x02\x02\x02\x1F\x03\x03\x02\x02\x02 !\x07\x03\x02" +
        "\x02!&\x05\x06\x04\x02\"#\x07\x04\x02\x02#%\x05\x06\x04\x02$\"\x03\x02" +
        "\x02\x02%(\x03\x02\x02\x02&$\x03\x02\x02\x02&\'\x03\x02\x02\x02\')\x03" +
        "\x02\x02\x02(&\x03\x02\x02\x02)*\x07\x05\x02\x02*.\x03\x02\x02\x02+,\x07" +
        "\x03\x02\x02,.\x07\x05\x02\x02- \x03\x02\x02\x02-+\x03\x02\x02\x02.\x05" +
        "\x03\x02\x02\x02/2\x05\x12\n\x0202\x05\b\x05\x021/\x03\x02\x02\x0210\x03" +
        "\x02\x02\x022\x07\x03\x02\x02\x0234\x05\x14\v\x0245\x07\t\x02\x0256\x05" +
        "\n\x06\x026\t\x03\x02\x02\x0278\x07\x06\x02\x028=\x05\f\x07\x029:\x07" +
        "\x04\x02\x02:<\x05\f\x07\x02;9\x03\x02\x02\x02<?\x03\x02\x02\x02=;\x03" +
        "\x02\x02\x02=>\x03\x02\x02\x02>@\x03\x02\x02\x02?=\x03\x02\x02\x02@A\x07" +
        "\x07\x02\x02AE\x03\x02\x02\x02BC\x07\x06\x02\x02CE\x07\x07\x02\x02D7\x03" +
        "\x02\x02\x02DB\x03\x02\x02\x02E\v\x03\x02\x02\x02FG\x05\x0E\b\x02GH\x07" +
        "\t\x02\x02HI\x05\x10\t\x02I\r\x03\x02\x02\x02JK\x07\n\x02\x02K\x0F\x03" +
        "\x02\x02\x02LM\x07\n\x02\x02M\x11\x03\x02\x02\x02NO\x05\x14\v\x02OP\x07" +
        "\t\x02\x02PQ\x05\x16\f\x02Q\x13\x03\x02\x02\x02RS\x07\n\x02\x02S\x15\x03" +
		"\x02\x02\x02TU\x07\n\x02\x02U\x17\x03\x02\x02\x02VX\x05\x1A\x0E\x02WV" +
		"\x03\x02\x02\x02XY\x03\x02\x02\x02YW\x03\x02\x02\x02YZ\x03\x02\x02\x02" +
		"Z\x19\x03\x02\x02\x02[a\x05\x06\x04\x02\\]\x07\x04\x02\x02]b\x07\r\x02" +
		"\x02^_\x07\b\x02\x02_b\x07\r\x02\x02`b\x07\r\x02\x02a\\\x03\x02\x02\x02" +
		"a^\x03\x02\x02\x02a`\x03\x02\x02\x02ab\x03\x02\x02\x02b\x1B\x03\x02\x02" +
		"\x02\n\x1E&-1=DYa";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ErgoFormParser.__ATN) {
			ErgoFormParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ErgoFormParser._serializedATN));
		}

		return ErgoFormParser.__ATN;
	}

}

export class ErgoFormContext extends ParserRuleContext {
	public items(): ItemsContext | undefined {
		return this.tryGetRuleContext(0, ItemsContext);
	}
	public itemRows(): ItemRowsContext | undefined {
		return this.tryGetRuleContext(0, ItemRowsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
    public get ruleIndex(): number {
        return ErgoFormParser.RULE_ergoForm;
    }
	// @Override
	public enterRule(listener: ErgoFormListener): void {
		if (listener.enterErgoForm) {
			listener.enterErgoForm(this);
		}
	}
	// @Override
	public exitRule(listener: ErgoFormListener): void {
		if (listener.exitErgoForm) {
			listener.exitErgoForm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErgoFormVisitor<Result>): Result {
		if (visitor.visitErgoForm) {
			return visitor.visitErgoForm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ItemsContext extends ParserRuleContext {
	public item(): ItemContext[];
	public item(i: number): ItemContext;
	public item(i?: number): ItemContext | ItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ItemContext);
		} else {
			return this.getRuleContext(i, ItemContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
    public get ruleIndex(): number {
        return ErgoFormParser.RULE_items;
    }
	// @Override
	public enterRule(listener: ErgoFormListener): void {
		if (listener.enterItems) {
			listener.enterItems(this);
		}
	}
	// @Override
	public exitRule(listener: ErgoFormListener): void {
		if (listener.exitItems) {
			listener.exitItems(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErgoFormVisitor<Result>): Result {
		if (visitor.visitItems) {
			return visitor.visitItems(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ItemContext extends ParserRuleContext {
	public itemExpress(): ItemExpressContext | undefined {
		return this.tryGetRuleContext(0, ItemExpressContext);
	}
	public itemFull(): ItemFullContext | undefined {
		return this.tryGetRuleContext(0, ItemFullContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
    public get ruleIndex(): number {
        return ErgoFormParser.RULE_item;
    }
	// @Override
	public enterRule(listener: ErgoFormListener): void {
		if (listener.enterItem) {
			listener.enterItem(this);
		}
	}
	// @Override
	public exitRule(listener: ErgoFormListener): void {
		if (listener.exitItem) {
			listener.exitItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErgoFormVisitor<Result>): Result {
		if (visitor.visitItem) {
			return visitor.visitItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ItemFullContext extends ParserRuleContext {
	public itemType(): ItemTypeContext {
		return this.getRuleContext(0, ItemTypeContext);
	}
	public COLON(): TerminalNode { return this.getToken(ErgoFormParser.COLON, 0); }
	public obj(): ObjContext {
		return this.getRuleContext(0, ObjContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
    public get ruleIndex(): number {
        return ErgoFormParser.RULE_itemFull;
    }
	// @Override
	public enterRule(listener: ErgoFormListener): void {
		if (listener.enterItemFull) {
			listener.enterItemFull(this);
		}
	}
	// @Override
	public exitRule(listener: ErgoFormListener): void {
		if (listener.exitItemFull) {
			listener.exitItemFull(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErgoFormVisitor<Result>): Result {
		if (visitor.visitItemFull) {
			return visitor.visitItemFull(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjContext extends ParserRuleContext {
	public pair(): PairContext[];
	public pair(i: number): PairContext;
	public pair(i?: number): PairContext | PairContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PairContext);
		} else {
			return this.getRuleContext(i, PairContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
    public get ruleIndex(): number {
        return ErgoFormParser.RULE_obj;
    }
	// @Override
	public enterRule(listener: ErgoFormListener): void {
		if (listener.enterObj) {
			listener.enterObj(this);
		}
	}
	// @Override
	public exitRule(listener: ErgoFormListener): void {
		if (listener.exitObj) {
			listener.exitObj(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErgoFormVisitor<Result>): Result {
		if (visitor.visitObj) {
			return visitor.visitObj(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PairContext extends ParserRuleContext {
	public key(): KeyContext {
		return this.getRuleContext(0, KeyContext);
	}

    public COLON(): TerminalNode {
        return this.getToken(ErgoFormParser.COLON, 0);
    }
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
    public get ruleIndex(): number {
        return ErgoFormParser.RULE_pair;
    }
	// @Override
	public enterRule(listener: ErgoFormListener): void {
		if (listener.enterPair) {
			listener.enterPair(this);
		}
	}
	// @Override
	public exitRule(listener: ErgoFormListener): void {
		if (listener.exitPair) {
			listener.exitPair(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErgoFormVisitor<Result>): Result {
		if (visitor.visitPair) {
			return visitor.visitPair(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KeyContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(ErgoFormParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
    public get ruleIndex(): number {
        return ErgoFormParser.RULE_key;
    }
	// @Override
	public enterRule(listener: ErgoFormListener): void {
		if (listener.enterKey) {
			listener.enterKey(this);
		}
	}
	// @Override
	public exitRule(listener: ErgoFormListener): void {
		if (listener.exitKey) {
			listener.exitKey(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErgoFormVisitor<Result>): Result {
		if (visitor.visitKey) {
			return visitor.visitKey(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(ErgoFormParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
    public get ruleIndex(): number {
        return ErgoFormParser.RULE_value;
    }
	// @Override
	public enterRule(listener: ErgoFormListener): void {
		if (listener.enterValue) {
			listener.enterValue(this);
		}
	}
	// @Override
	public exitRule(listener: ErgoFormListener): void {
		if (listener.exitValue) {
			listener.exitValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErgoFormVisitor<Result>): Result {
		if (visitor.visitValue) {
			return visitor.visitValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ItemExpressContext extends ParserRuleContext {
	public itemType(): ItemTypeContext {
		return this.getRuleContext(0, ItemTypeContext);
	}
	public COLON(): TerminalNode { return this.getToken(ErgoFormParser.COLON, 0); }
	public expressValue(): ExpressValueContext {
		return this.getRuleContext(0, ExpressValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
    public get ruleIndex(): number {
        return ErgoFormParser.RULE_itemExpress;
    }
	// @Override
	public enterRule(listener: ErgoFormListener): void {
		if (listener.enterItemExpress) {
			listener.enterItemExpress(this);
		}
	}
	// @Override
	public exitRule(listener: ErgoFormListener): void {
		if (listener.exitItemExpress) {
			listener.exitItemExpress(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErgoFormVisitor<Result>): Result {
		if (visitor.visitItemExpress) {
			return visitor.visitItemExpress(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ItemTypeContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(ErgoFormParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
    public get ruleIndex(): number {
        return ErgoFormParser.RULE_itemType;
    }
	// @Override
	public enterRule(listener: ErgoFormListener): void {
		if (listener.enterItemType) {
			listener.enterItemType(this);
		}
	}
	// @Override
	public exitRule(listener: ErgoFormListener): void {
		if (listener.exitItemType) {
			listener.exitItemType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErgoFormVisitor<Result>): Result {
		if (visitor.visitItemType) {
			return visitor.visitItemType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressValueContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(ErgoFormParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
    public get ruleIndex(): number {
        return ErgoFormParser.RULE_expressValue;
    }
	// @Override
	public enterRule(listener: ErgoFormListener): void {
		if (listener.enterExpressValue) {
			listener.enterExpressValue(this);
		}
	}
	// @Override
	public exitRule(listener: ErgoFormListener): void {
		if (listener.exitExpressValue) {
			listener.exitExpressValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErgoFormVisitor<Result>): Result {
		if (visitor.visitExpressValue) {
			return visitor.visitExpressValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ItemRowsContext extends ParserRuleContext {
	public itemRow(): ItemRowContext[];
	public itemRow(i: number): ItemRowContext;
	public itemRow(i?: number): ItemRowContext | ItemRowContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ItemRowContext);
		} else {
			return this.getRuleContext(i, ItemRowContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
    public get ruleIndex(): number {
        return ErgoFormParser.RULE_itemRows;
    }
	// @Override
	public enterRule(listener: ErgoFormListener): void {
		if (listener.enterItemRows) {
			listener.enterItemRows(this);
		}
	}
	// @Override
	public exitRule(listener: ErgoFormListener): void {
		if (listener.exitItemRows) {
			listener.exitItemRows(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErgoFormVisitor<Result>): Result {
		if (visitor.visitItemRows) {
			return visitor.visitItemRows(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ItemRowContext extends ParserRuleContext {
	public item(): ItemContext {
		return this.getRuleContext(0, ItemContext);
	}

    public NEWLINE(): TerminalNode | undefined {
        return this.tryGetToken(ErgoFormParser.NEWLINE, 0);
    }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
    public get ruleIndex(): number {
        return ErgoFormParser.RULE_itemRow;
    }
	// @Override
	public enterRule(listener: ErgoFormListener): void {
		if (listener.enterItemRow) {
			listener.enterItemRow(this);
		}
	}
	// @Override
	public exitRule(listener: ErgoFormListener): void {
		if (listener.exitItemRow) {
			listener.exitItemRow(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErgoFormVisitor<Result>): Result {
		if (visitor.visitItemRow) {
			return visitor.visitItemRow(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


