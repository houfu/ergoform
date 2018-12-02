"use strict";
// Generated from src/classes/ModelItems/SelectItems/SelectItems.g4 by ANTLR 4.6-SNAPSHOT
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const Decorators_1 = require("antlr4ts/Decorators");
const Parser_1 = require("antlr4ts/Parser");
const ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
const ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
const RecognitionException_1 = require("antlr4ts/RecognitionException");
const RuleVersion_1 = require("antlr4ts/RuleVersion");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = __importStar(require("antlr4ts/misc/Utils"));
class SelectItemsParser extends Parser_1.Parser {
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(SelectItemsParser._ATN, this);
    }
    get vocabulary() {
        return SelectItemsParser.VOCABULARY;
    }
    get grammarFileName() { return "SelectItems.g4"; }
    get ruleNames() { return SelectItemsParser.ruleNames; }
    get serializedATN() { return SelectItemsParser._serializedATN; }
    // @ts-ignore
    selectItems() {
        let _localctx = new SelectItemsContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, SelectItemsParser.RULE_selectItems);
        let _la;
        try {
            this.state = 24;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 1, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 10;
                        this.match(SelectItemsParser.T__0);
                        this.state = 11;
                        this.item();
                        this.state = 16;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === SelectItemsParser.T__1) {
                            {
                                {
                                    this.state = 12;
                                    this.match(SelectItemsParser.T__1);
                                    this.state = 13;
                                    this.item();
                                }
                            }
                            this.state = 18;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 19;
                        this.match(SelectItemsParser.T__2);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 21;
                        this.match(SelectItemsParser.T__0);
                        this.state = 22;
                        this.match(SelectItemsParser.T__2);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 23;
                        this.item();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @ts-ignore
    item() {
        let _localctx = new ItemContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, SelectItemsParser.RULE_item);
        try {
            this.state = 28;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 26;
                        this.value();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 27;
                        this.pair();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @ts-ignore
    pair() {
        let _localctx = new PairContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, SelectItemsParser.RULE_pair);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 30;
                this.key();
                this.state = 31;
                this.match(SelectItemsParser.T__3);
                this.state = 32;
                this.value();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @ts-ignore
    value() {
        let _localctx = new ValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, SelectItemsParser.RULE_value);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 34;
                this.match(SelectItemsParser.STRING);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @ts-ignore
    key() {
        let _localctx = new KeyContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, SelectItemsParser.RULE_key);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 36;
                this.match(SelectItemsParser.STRING);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    static get _ATN() {
        if (!SelectItemsParser.__ATN) {
            SelectItemsParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(SelectItemsParser._serializedATN));
        }
        return SelectItemsParser.__ATN;
    }
}
SelectItemsParser.T__0 = 1;
SelectItemsParser.T__1 = 2;
SelectItemsParser.T__2 = 3;
SelectItemsParser.T__3 = 4;
SelectItemsParser.STRING = 5;
SelectItemsParser.WS = 6;
SelectItemsParser.RULE_selectItems = 0;
SelectItemsParser.RULE_item = 1;
SelectItemsParser.RULE_pair = 2;
SelectItemsParser.RULE_value = 3;
SelectItemsParser.RULE_key = 4;
SelectItemsParser.ruleNames = [
    "selectItems", "item", "pair", "value", "key"
];
SelectItemsParser._LITERAL_NAMES = [
    undefined, "'['", "','", "']'", "':'"
];
SelectItemsParser._SYMBOLIC_NAMES = [
    undefined, undefined, undefined, undefined, undefined, "STRING", "WS"
];
SelectItemsParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(SelectItemsParser._LITERAL_NAMES, SelectItemsParser._SYMBOLIC_NAMES, []);
SelectItemsParser._serializedATN = "\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03\b)\x04\x02\t" +
    "\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x03\x02\x03" +
    "\x02\x03\x02\x03\x02\x07\x02\x11\n\x02\f\x02\x0E\x02\x14\v\x02\x03\x02" +
    "\x03\x02\x03\x02\x03\x02\x03\x02\x05\x02\x1B\n\x02\x03\x03\x03\x03\x05" +
    "\x03\x1F\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06" +
    "\x03\x06\x03\x06\x02\x02\x02\x07\x02\x02\x04\x02\x06\x02\b\x02\n\x02\x02" +
    "\x02\'\x02\x1A\x03\x02\x02\x02\x04\x1E\x03\x02\x02\x02\x06 \x03\x02\x02" +
    "\x02\b$\x03\x02\x02\x02\n&\x03\x02\x02\x02\f\r\x07\x03\x02\x02\r\x12\x05" +
    "\x04\x03\x02\x0E\x0F\x07\x04\x02\x02\x0F\x11\x05\x04\x03\x02\x10\x0E\x03" +
    "\x02\x02\x02\x11\x14\x03\x02\x02\x02\x12\x10\x03\x02\x02\x02\x12\x13\x03" +
    "\x02\x02\x02\x13\x15\x03\x02\x02\x02\x14\x12\x03\x02\x02\x02\x15\x16\x07" +
    "\x05\x02\x02\x16\x1B\x03\x02\x02\x02\x17\x18\x07\x03\x02\x02\x18\x1B\x07" +
    "\x05\x02\x02\x19\x1B\x05\x04\x03\x02\x1A\f\x03\x02\x02\x02\x1A\x17\x03" +
    "\x02\x02\x02\x1A\x19\x03\x02\x02\x02\x1B\x03\x03\x02\x02\x02\x1C\x1F\x05" +
    "\b\x05\x02\x1D\x1F\x05\x06\x04\x02\x1E\x1C\x03\x02\x02\x02\x1E\x1D\x03" +
    "\x02\x02\x02\x1F\x05\x03\x02\x02\x02 !\x05\n\x06\x02!\"\x07\x06\x02\x02" +
    "\"#\x05\b\x05\x02#\x07\x03\x02\x02\x02$%\x07\x07\x02\x02%\t\x03\x02\x02" +
    "\x02&\'\x07\x07\x02\x02\'\v\x03\x02\x02\x02\x05\x12\x1A\x1E";
__decorate([
    Decorators_1.Override,
    Decorators_1.NotNull
], SelectItemsParser.prototype, "vocabulary", null);
__decorate([
    Decorators_1.Override
], SelectItemsParser.prototype, "grammarFileName", null);
__decorate([
    Decorators_1.Override
], SelectItemsParser.prototype, "ruleNames", null);
__decorate([
    Decorators_1.Override
], SelectItemsParser.prototype, "serializedATN", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], SelectItemsParser.prototype, "selectItems", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], SelectItemsParser.prototype, "item", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], SelectItemsParser.prototype, "pair", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], SelectItemsParser.prototype, "value", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], SelectItemsParser.prototype, "key", null);
exports.SelectItemsParser = SelectItemsParser;
class SelectItemsContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    item(i) {
        if (i === undefined) {
            return this.getRuleContexts(ItemContext);
        }
        else {
            return this.getRuleContext(i, ItemContext);
        }
    }
    get ruleIndex() { return SelectItemsParser.RULE_selectItems; }
    enterRule(listener) {
        if (listener.enterSelectItems)
            listener.enterSelectItems(this);
    }
    exitRule(listener) {
        if (listener.exitSelectItems)
            listener.exitSelectItems(this);
    }
    accept(visitor) {
        if (visitor.visitSelectItems)
            return visitor.visitSelectItems(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_1.Override
], SelectItemsContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_1.Override
], SelectItemsContext.prototype, "enterRule", null);
__decorate([
    Decorators_1.Override
], SelectItemsContext.prototype, "exitRule", null);
__decorate([
    Decorators_1.Override
], SelectItemsContext.prototype, "accept", null);
exports.SelectItemsContext = SelectItemsContext;
class ItemContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    value() {
        return this.tryGetRuleContext(0, ValueContext);
    }
    pair() {
        return this.tryGetRuleContext(0, PairContext);
    }
    get ruleIndex() { return SelectItemsParser.RULE_item; }
    enterRule(listener) {
        if (listener.enterItem)
            listener.enterItem(this);
    }
    exitRule(listener) {
        if (listener.exitItem)
            listener.exitItem(this);
    }
    accept(visitor) {
        if (visitor.visitItem)
            return visitor.visitItem(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_1.Override
], ItemContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_1.Override
], ItemContext.prototype, "enterRule", null);
__decorate([
    Decorators_1.Override
], ItemContext.prototype, "exitRule", null);
__decorate([
    Decorators_1.Override
], ItemContext.prototype, "accept", null);
exports.ItemContext = ItemContext;
class PairContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    key() {
        return this.getRuleContext(0, KeyContext);
    }
    value() {
        return this.getRuleContext(0, ValueContext);
    }
    get ruleIndex() { return SelectItemsParser.RULE_pair; }
    enterRule(listener) {
        if (listener.enterPair)
            listener.enterPair(this);
    }
    exitRule(listener) {
        if (listener.exitPair)
            listener.exitPair(this);
    }
    accept(visitor) {
        if (visitor.visitPair)
            return visitor.visitPair(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_1.Override
], PairContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_1.Override
], PairContext.prototype, "enterRule", null);
__decorate([
    Decorators_1.Override
], PairContext.prototype, "exitRule", null);
__decorate([
    Decorators_1.Override
], PairContext.prototype, "accept", null);
exports.PairContext = PairContext;
class ValueContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    STRING() { return this.getToken(SelectItemsParser.STRING, 0); }
    get ruleIndex() { return SelectItemsParser.RULE_value; }
    enterRule(listener) {
        if (listener.enterValue)
            listener.enterValue(this);
    }
    exitRule(listener) {
        if (listener.exitValue)
            listener.exitValue(this);
    }
    accept(visitor) {
        if (visitor.visitValue)
            return visitor.visitValue(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_1.Override
], ValueContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_1.Override
], ValueContext.prototype, "enterRule", null);
__decorate([
    Decorators_1.Override
], ValueContext.prototype, "exitRule", null);
__decorate([
    Decorators_1.Override
], ValueContext.prototype, "accept", null);
exports.ValueContext = ValueContext;
class KeyContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    STRING() { return this.getToken(SelectItemsParser.STRING, 0); }
    get ruleIndex() { return SelectItemsParser.RULE_key; }
    enterRule(listener) {
        if (listener.enterKey)
            listener.enterKey(this);
    }
    exitRule(listener) {
        if (listener.exitKey)
            listener.exitKey(this);
    }
    accept(visitor) {
        if (visitor.visitKey)
            return visitor.visitKey(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_1.Override
], KeyContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_1.Override
], KeyContext.prototype, "enterRule", null);
__decorate([
    Decorators_1.Override
], KeyContext.prototype, "exitRule", null);
__decorate([
    Decorators_1.Override
], KeyContext.prototype, "accept", null);
exports.KeyContext = KeyContext;
