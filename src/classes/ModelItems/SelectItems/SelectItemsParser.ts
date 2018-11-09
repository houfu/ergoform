// Generated from src/classes/ModelItems/SelectItems/SelectItems.g4 by ANTLR 4.6-SNAPSHOT


import {ATN} from 'antlr4ts/atn/ATN';
import {ATNDeserializer} from 'antlr4ts/atn/ATNDeserializer';
import {NotNull, Override} from 'antlr4ts/Decorators';
import {Parser} from 'antlr4ts/Parser';
import {ParserRuleContext} from 'antlr4ts/ParserRuleContext';
import {ParserATNSimulator} from 'antlr4ts/atn/ParserATNSimulator';
import {RecognitionException} from 'antlr4ts/RecognitionException';
import {RuleVersion} from 'antlr4ts/RuleVersion';
import {TerminalNode} from 'antlr4ts/tree/TerminalNode';
import {TokenStream} from 'antlr4ts/TokenStream';
import {Vocabulary} from 'antlr4ts/Vocabulary';
import {VocabularyImpl} from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';

import {SelectItemsListener} from './SelectItemsListener';
import {SelectItemsVisitor} from './SelectItemsVisitor';


export class SelectItemsParser extends Parser {
	public static readonly T__0=1;
	public static readonly T__1=2;
	public static readonly T__2=3;
	public static readonly T__3=4;
	public static readonly STRING=5;
	public static readonly WS=6;
	public static readonly RULE_selectItems = 0;
	public static readonly RULE_item = 1;
	public static readonly RULE_pair = 2;
	public static readonly RULE_value = 3;
	public static readonly ruleNames: string[] = [
		"selectItems", "item", "pair", "value"
	];

	private static readonly _LITERAL_NAMES: (string | undefined)[] = [
		undefined, "'['", "','", "']'", "':'"
	];
	private static readonly _SYMBOLIC_NAMES: (string | undefined)[] = [
		undefined, undefined, undefined, undefined, undefined, "STRING", "WS"
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(SelectItemsParser._LITERAL_NAMES, SelectItemsParser._SYMBOLIC_NAMES, []);

	@Override
	@NotNull
	public get vocabulary(): Vocabulary {
		return SelectItemsParser.VOCABULARY;
	}

	@Override
	public get grammarFileName(): string { return "SelectItems.g4"; }

	@Override
	public get ruleNames(): string[] { return SelectItemsParser.ruleNames; }

	@Override
	public get serializedATN(): string { return SelectItemsParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(SelectItemsParser._ATN, this);
	}
    // @ts-ignore
    @RuleVersion(0)
	public selectItems(): SelectItemsContext {
		let _localctx: SelectItemsContext = new SelectItemsContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, SelectItemsParser.RULE_selectItems);
		let _la: number;
		try {
			this.state = 22;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,1,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 8;
				this.match(SelectItemsParser.T__0);
				this.state = 9;
				this.item();
				this.state = 14;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===SelectItemsParser.T__1) {
					{
					{
					this.state = 10;
					this.match(SelectItemsParser.T__1);
					this.state = 11;
					this.item();
					}
					}
					this.state = 16;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 17;
				this.match(SelectItemsParser.T__2);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 19;
				this.match(SelectItemsParser.T__0);
				this.state = 20;
				this.match(SelectItemsParser.T__2);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 21;
				this.item();
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
	// @ts-ignore
    @RuleVersion(0)
	public item(): ItemContext {
		let _localctx: ItemContext = new ItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, SelectItemsParser.RULE_item);
		try {
			this.state = 26;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,2,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 24;
				this.value();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 25;
				this.pair();
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
	// @ts-ignore
    @RuleVersion(0)
	public pair(): PairContext {
		let _localctx: PairContext = new PairContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, SelectItemsParser.RULE_pair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 28;
			this.value();
			this.state = 29;
			this.match(SelectItemsParser.T__3);
			this.state = 30;
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
	// @ts-ignore
    @RuleVersion(0)
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, SelectItemsParser.RULE_value);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 32;
			this.match(SelectItemsParser.STRING);
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

	public static readonly _serializedATN: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03\b%\x04\x02\t"+
		"\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x03\x02\x03\x02\x03\x02"+
		"\x03\x02\x07\x02\x0F\n\x02\f\x02\x0E\x02\x12\v\x02\x03\x02\x03\x02\x03"+
		"\x02\x03\x02\x03\x02\x05\x02\x19\n\x02\x03\x03\x03\x03\x05\x03\x1D\n\x03"+
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x02\x02\x02\x06"+
		"\x02\x02\x04\x02\x06\x02\b\x02\x02\x02$\x02\x18\x03\x02\x02\x02\x04\x1C"+
		"\x03\x02\x02\x02\x06\x1E\x03\x02\x02\x02\b\"\x03\x02\x02\x02\n\v\x07\x03"+
		"\x02\x02\v\x10\x05\x04\x03\x02\f\r\x07\x04\x02\x02\r\x0F\x05\x04\x03\x02"+
		"\x0E\f\x03\x02\x02\x02\x0F\x12\x03\x02\x02\x02\x10\x0E\x03\x02\x02\x02"+
		"\x10\x11\x03\x02\x02\x02\x11\x13\x03\x02\x02\x02\x12\x10\x03\x02\x02\x02"+
		"\x13\x14\x07\x05\x02\x02\x14\x19\x03\x02\x02\x02\x15\x16\x07\x03\x02\x02"+
		"\x16\x19\x07\x05\x02\x02\x17\x19\x05\x04\x03\x02\x18\n\x03\x02\x02\x02"+
		"\x18\x15\x03\x02\x02\x02\x18\x17\x03\x02\x02\x02\x19\x03\x03\x02\x02\x02"+
		"\x1A\x1D\x05\b\x05\x02\x1B\x1D\x05\x06\x04\x02\x1C\x1A\x03\x02\x02\x02"+
		"\x1C\x1B\x03\x02\x02\x02\x1D\x05\x03\x02\x02\x02\x1E\x1F\x05\b\x05\x02"+
		"\x1F \x07\x06\x02\x02 !\x05\b\x05\x02!\x07\x03\x02\x02\x02\"#\x07\x07"+
		"\x02\x02#\t\x03\x02\x02\x02\x05\x10\x18\x1C";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SelectItemsParser.__ATN) {
			SelectItemsParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SelectItemsParser._serializedATN));
		}

		return SelectItemsParser.__ATN;
	}

}

export class SelectItemsContext extends ParserRuleContext {
	public item(): ItemContext[];
	public item(i: number): ItemContext;
	public item(i?: number): ItemContext | ItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ItemContext);
		} else {
			return this.getRuleContext(i, ItemContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SelectItemsParser.RULE_selectItems; }
	@Override
	public enterRule(listener: SelectItemsListener): void {
		if (listener.enterSelectItems) listener.enterSelectItems(this);
	}
	@Override
	public exitRule(listener: SelectItemsListener): void {
		if (listener.exitSelectItems) listener.exitSelectItems(this);
	}
	@Override
	public accept<Result>(visitor: SelectItemsVisitor<Result>): Result {
		if (visitor.visitSelectItems) return visitor.visitSelectItems(this);
		else return visitor.visitChildren(this);
	}
}


export class ItemContext extends ParserRuleContext {
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	public pair(): PairContext | undefined {
		return this.tryGetRuleContext(0, PairContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SelectItemsParser.RULE_item; }
	@Override
	public enterRule(listener: SelectItemsListener): void {
		if (listener.enterItem) listener.enterItem(this);
	}
	@Override
	public exitRule(listener: SelectItemsListener): void {
		if (listener.exitItem) listener.exitItem(this);
	}
	@Override
	public accept<Result>(visitor: SelectItemsVisitor<Result>): Result {
		if (visitor.visitItem) return visitor.visitItem(this);
		else return visitor.visitChildren(this);
	}
}


export class PairContext extends ParserRuleContext {
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SelectItemsParser.RULE_pair; }
	@Override
	public enterRule(listener: SelectItemsListener): void {
		if (listener.enterPair) listener.enterPair(this);
	}
	@Override
	public exitRule(listener: SelectItemsListener): void {
		if (listener.exitPair) listener.exitPair(this);
	}
	@Override
	public accept<Result>(visitor: SelectItemsVisitor<Result>): Result {
		if (visitor.visitPair) return visitor.visitPair(this);
		else return visitor.visitChildren(this);
	}
}


export class ValueContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(SelectItemsParser.STRING, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SelectItemsParser.RULE_value; }
	@Override
	public enterRule(listener: SelectItemsListener): void {
		if (listener.enterValue) listener.enterValue(this);
	}
	@Override
	public exitRule(listener: SelectItemsListener): void {
		if (listener.exitValue) listener.exitValue(this);
	}
	@Override
	public accept<Result>(visitor: SelectItemsVisitor<Result>): Result {
		if (visitor.visitValue) return visitor.visitValue(this);
		else return visitor.visitChildren(this);
	}
}


