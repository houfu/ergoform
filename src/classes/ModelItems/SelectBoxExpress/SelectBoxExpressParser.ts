/*
 * Copyright (c) 2019. Ang Hou Fu.
 * Licensed under the MIT License. See LICENSE file in the project root for license information.
 */

// Generated from src/classes/ModelItems/SelectBoxExpress/SelectBoxExpress.g4 by ANTLR 4.7.3-SNAPSHOT


import {ATN} from "antlr4ts/atn/ATN";
import {ATNDeserializer} from "antlr4ts/atn/ATNDeserializer";
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

import {SelectBoxExpressListener} from "./SelectBoxExpressListener";
import {SelectBoxExpressVisitor} from "./SelectBoxExpressVisitor";


export class SelectBoxExpressParser extends Parser {
    public static readonly T__0 = 1;
    public static readonly T__1 = 2;
    public static readonly T__2 = 3;
    public static readonly T__3 = 4;
    public static readonly T__4 = 5;
    public static readonly STRING = 6;
    public static readonly WS = 7;
	public static readonly RULE_selectBoxExpress = 0;
	public static readonly RULE_label = 1;
	public static readonly RULE_selectItems = 2;
	public static readonly RULE_item = 3;
	public static readonly RULE_pair = 4;
	public static readonly RULE_value = 5;
    public static readonly RULE_key = 6;
    // tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
        "selectBoxExpress", "label", "selectItems", "item", "pair", "value", "key",
	];

    private static readonly _LITERAL_NAMES: Array<string | undefined> = [
        undefined, "';'", "'['", "','", "']'", "':'",
    ];
    private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
        undefined, undefined, undefined, undefined, undefined, undefined, "STRING",
        "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(SelectBoxExpressParser._LITERAL_NAMES, SelectBoxExpressParser._SYMBOLIC_NAMES, []);

    // @Override
    // @NotNull
	public get vocabulary(): Vocabulary {
		return SelectBoxExpressParser.VOCABULARY;
	}

    // tslint:enable:no-trailing-whitespace

    // @Override
	public get grammarFileName(): string { return "SelectBoxExpress.g4"; }

    // @Override
	public get ruleNames(): string[] { return SelectBoxExpressParser.ruleNames; }

    // @Override
	public get serializedATN(): string { return SelectBoxExpressParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(SelectBoxExpressParser._ATN, this);
	}

    // @RuleVersion(0)
	public selectBoxExpress(): SelectBoxExpressContext {
		let _localctx: SelectBoxExpressContext = new SelectBoxExpressContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, SelectBoxExpressParser.RULE_selectBoxExpress);
		try {
            this.state = 19;
			this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 0, this._ctx)) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
                    this.state = 14;
				this.label();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
                    this.state = 15;
				this.label();
                    this.state = 16;
				this.match(SelectBoxExpressParser.T__0);
                    this.state = 17;
				this.selectItems();
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
	public label(): LabelContext {
		let _localctx: LabelContext = new LabelContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, SelectBoxExpressParser.RULE_label);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
                this.state = 21;
			this.match(SelectBoxExpressParser.STRING);
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
	public selectItems(): SelectItemsContext {
		let _localctx: SelectItemsContext = new SelectItemsContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, SelectBoxExpressParser.RULE_selectItems);
		let _la: number;
		try {
            this.state = 37;
			this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
                    this.state = 23;
				this.match(SelectBoxExpressParser.T__1);
                    this.state = 24;
				this.item();
                    this.state = 29;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
                    while (_la === SelectBoxExpressParser.T__2) {
					{
					{
                        this.state = 25;
					this.match(SelectBoxExpressParser.T__2);
                        this.state = 26;
					this.item();
					}
					}
                        this.state = 31;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
                    this.state = 32;
				this.match(SelectBoxExpressParser.T__3);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
                    this.state = 34;
				this.match(SelectBoxExpressParser.T__1);
                    this.state = 35;
				this.match(SelectBoxExpressParser.T__3);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
                    this.state = 36;
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

    // @RuleVersion(0)
	public item(): ItemContext {
		let _localctx: ItemContext = new ItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, SelectBoxExpressParser.RULE_item);
		try {
            this.state = 41;
			this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 3, this._ctx)) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
                    this.state = 39;
				this.value();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
                    this.state = 40;
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

    // @RuleVersion(0)
	public pair(): PairContext {
		let _localctx: PairContext = new PairContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, SelectBoxExpressParser.RULE_pair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
                this.state = 43;
                this.key();
                this.state = 44;
			this.match(SelectBoxExpressParser.T__4);
                this.state = 45;
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
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, SelectBoxExpressParser.RULE_value);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
                this.state = 47;
                this.match(SelectBoxExpressParser.STRING);
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
    public key(): KeyContext {
        let _localctx: KeyContext = new KeyContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, SelectBoxExpressParser.RULE_key);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 49;
			this.match(SelectBoxExpressParser.STRING);
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
        "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\t6\x04\x02\t" +
        "\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t" +
        "\x07\x04\b\t\b\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x05\x02\x16\n\x02" +
        "\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04\x1E\n\x04\f\x04" +
        "\x0E\x04!\v\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04(\n\x04" +
        "\x03\x05\x03\x05\x05\x05,\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07" +
        "\x03\x07\x03\b\x03\b\x03\b\x02\x02\x02\t\x02\x02\x04\x02\x06\x02\b\x02" +
        "\n\x02\f\x02\x0E\x02\x02\x02\x023\x02\x15\x03\x02\x02\x02\x04\x17\x03" +
        "\x02\x02\x02\x06\'\x03\x02\x02\x02\b+\x03\x02\x02\x02\n-\x03\x02\x02\x02" +
        "\f1\x03\x02\x02\x02\x0E3\x03\x02\x02\x02\x10\x16\x05\x04\x03\x02\x11\x12" +
        "\x05\x04\x03\x02\x12\x13\x07\x03\x02\x02\x13\x14\x05\x06\x04\x02\x14\x16" +
        "\x03\x02\x02\x02\x15\x10\x03\x02\x02\x02\x15\x11\x03\x02\x02\x02\x16\x03" +
        "\x03\x02\x02\x02\x17\x18\x07\b\x02\x02\x18\x05\x03\x02\x02\x02\x19\x1A" +
        "\x07\x04\x02\x02\x1A\x1F\x05\b\x05\x02\x1B\x1C\x07\x05\x02\x02\x1C\x1E" +
        "\x05\b\x05\x02\x1D\x1B\x03\x02\x02\x02\x1E!\x03\x02\x02\x02\x1F\x1D\x03" +
        "\x02\x02\x02\x1F \x03\x02\x02\x02 \"\x03\x02\x02\x02!\x1F\x03\x02\x02" +
        "\x02\"#\x07\x06\x02\x02#(\x03\x02\x02\x02$%\x07\x04\x02\x02%(\x07\x06" +
        "\x02\x02&(\x05\b\x05\x02\'\x19\x03\x02\x02\x02\'$\x03\x02\x02\x02\'&\x03" +
        "\x02\x02\x02(\x07\x03\x02\x02\x02),\x05\f\x07\x02*,\x05\n\x06\x02+)\x03" +
        "\x02\x02\x02+*\x03\x02\x02\x02,\t\x03\x02\x02\x02-.\x05\x0E\b\x02./\x07" +
        "\x07\x02\x02/0\x05\f\x07\x020\v\x03\x02\x02\x0212\x07\b\x02\x022\r\x03" +
        "\x02\x02\x0234\x07\b\x02\x024\x0F\x03\x02\x02\x02\x06\x15\x1F\'+";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SelectBoxExpressParser.__ATN) {
			SelectBoxExpressParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SelectBoxExpressParser._serializedATN));
		}

		return SelectBoxExpressParser.__ATN;
	}

}

export class SelectBoxExpressContext extends ParserRuleContext {
	public label(): LabelContext {
		return this.getRuleContext(0, LabelContext);
	}
	public selectItems(): SelectItemsContext | undefined {
		return this.tryGetRuleContext(0, SelectItemsContext);
	}

    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

    // @Override
    public get ruleIndex(): number {
        return SelectBoxExpressParser.RULE_selectBoxExpress;
    }

    // @Override
	public enterRule(listener: SelectBoxExpressListener): void {
        if (listener.enterSelectBoxExpress) {
            listener.enterSelectBoxExpress(this);
        }
    }

    // @Override
	public exitRule(listener: SelectBoxExpressListener): void {
        if (listener.exitSelectBoxExpress) {
            listener.exitSelectBoxExpress(this);
        }
    }

    // @Override
	public accept<Result>(visitor: SelectBoxExpressVisitor<Result>): Result {
        if (visitor.visitSelectBoxExpress) {
            return visitor.visitSelectBoxExpress(this);
        } else {
            return visitor.visitChildren(this);
        }
	}
}


export class LabelContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(SelectBoxExpressParser.STRING, 0); }

    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

    // @Override
    public get ruleIndex(): number {
        return SelectBoxExpressParser.RULE_label;
    }

    // @Override
	public enterRule(listener: SelectBoxExpressListener): void {
        if (listener.enterLabel) {
            listener.enterLabel(this);
        }
    }

    // @Override
	public exitRule(listener: SelectBoxExpressListener): void {
        if (listener.exitLabel) {
            listener.exitLabel(this);
        }
    }

    // @Override
	public accept<Result>(visitor: SelectBoxExpressVisitor<Result>): Result {
        if (visitor.visitLabel) {
            return visitor.visitLabel(this);
        } else {
            return visitor.visitChildren(this);
        }
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

    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

    // @Override
    public get ruleIndex(): number {
        return SelectBoxExpressParser.RULE_selectItems;
    }

    // @Override
	public enterRule(listener: SelectBoxExpressListener): void {
        if (listener.enterSelectItems) {
            listener.enterSelectItems(this);
        }
    }

    // @Override
	public exitRule(listener: SelectBoxExpressListener): void {
        if (listener.exitSelectItems) {
            listener.exitSelectItems(this);
        }
    }

    // @Override
	public accept<Result>(visitor: SelectBoxExpressVisitor<Result>): Result {
        if (visitor.visitSelectItems) {
            return visitor.visitSelectItems(this);
        } else {
            return visitor.visitChildren(this);
        }
	}
}


export class ItemContext extends ParserRuleContext {
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	public pair(): PairContext | undefined {
		return this.tryGetRuleContext(0, PairContext);
	}

    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

    // @Override
    public get ruleIndex(): number {
        return SelectBoxExpressParser.RULE_item;
    }

    // @Override
	public enterRule(listener: SelectBoxExpressListener): void {
        if (listener.enterItem) {
            listener.enterItem(this);
        }
    }

    // @Override
	public exitRule(listener: SelectBoxExpressListener): void {
        if (listener.exitItem) {
            listener.exitItem(this);
        }
    }

    // @Override
	public accept<Result>(visitor: SelectBoxExpressVisitor<Result>): Result {
        if (visitor.visitItem) {
            return visitor.visitItem(this);
        } else {
            return visitor.visitChildren(this);
        }
	}
}


export class PairContext extends ParserRuleContext {
    public key(): KeyContext {
        return this.getRuleContext(0, KeyContext);
    }

    public value(): ValueContext {
        return this.getRuleContext(0, ValueContext);
    }

    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState);
    }

    // @Override
    public get ruleIndex(): number {
        return SelectBoxExpressParser.RULE_pair;
    }

    // @Override
    public enterRule(listener: SelectBoxExpressListener): void {
        if (listener.enterPair) {
            listener.enterPair(this);
        }
    }

    // @Override
    public exitRule(listener: SelectBoxExpressListener): void {
        if (listener.exitPair) {
            listener.exitPair(this);
        }
    }

    // @Override
    public accept<Result>(visitor: SelectBoxExpressVisitor<Result>): Result {
        if (visitor.visitPair) {
            return visitor.visitPair(this);
		} else {
            return visitor.visitChildren(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
    public STRING(): TerminalNode {
        return this.getToken(SelectBoxExpressParser.STRING, 0);
    }

    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

    // @Override
    public get ruleIndex(): number {
        return SelectBoxExpressParser.RULE_value;
    }

    // @Override
	public enterRule(listener: SelectBoxExpressListener): void {
        if (listener.enterValue) {
            listener.enterValue(this);
        }
    }

    // @Override
	public exitRule(listener: SelectBoxExpressListener): void {
        if (listener.exitValue) {
            listener.exitValue(this);
        }
    }

    // @Override
	public accept<Result>(visitor: SelectBoxExpressVisitor<Result>): Result {
        if (visitor.visitValue) {
            return visitor.visitValue(this);
        } else {
            return visitor.visitChildren(this);
        }
	}
}


export class KeyContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(SelectBoxExpressParser.STRING, 0); }

    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

    // @Override
    public get ruleIndex(): number {
        return SelectBoxExpressParser.RULE_key;
    }

    // @Override
	public enterRule(listener: SelectBoxExpressListener): void {
        if (listener.enterKey) {
            listener.enterKey(this);
        }
    }

    // @Override
	public exitRule(listener: SelectBoxExpressListener): void {
        if (listener.exitKey) {
            listener.exitKey(this);
        }
    }

    // @Override
	public accept<Result>(visitor: SelectBoxExpressVisitor<Result>): Result {
        if (visitor.visitKey) {
            return visitor.visitKey(this);
        } else {
            return visitor.visitChildren(this);
        }
	}
}


