"use strict";
// Generated from src/classes/ModelItems/SelectBoxExpress/SelectBoxExpress.g4 by ANTLR 4.6-SNAPSHOT
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
class SelectBoxExpressParser extends Parser_1.Parser {
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(SelectBoxExpressParser._ATN, this);
    }
    get vocabulary() {
        return SelectBoxExpressParser.VOCABULARY;
    }
    get grammarFileName() { return "SelectBoxExpress.g4"; }
    get ruleNames() { return SelectBoxExpressParser.ruleNames; }
    get serializedATN() { return SelectBoxExpressParser._serializedATN; }
    // @ts-ignore
    selectBoxExpress() {
        let _localctx = new SelectBoxExpressContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, SelectBoxExpressParser.RULE_selectBoxExpress);
        try {
            this.state = 17;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 0, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 12;
                        this.label();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 13;
                        this.label();
                        this.state = 14;
                        this.match(SelectBoxExpressParser.T__0);
                        this.state = 15;
                        this.selectItems();
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
    label() {
        let _localctx = new LabelContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, SelectBoxExpressParser.RULE_label);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 19;
                this.match(SelectBoxExpressParser.STRING);
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
    selectItems() {
        let _localctx = new SelectItemsContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, SelectBoxExpressParser.RULE_selectItems);
        let _la;
        try {
            this.state = 35;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 21;
                        this.match(SelectBoxExpressParser.T__1);
                        this.state = 22;
                        this.item();
                        this.state = 27;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === SelectBoxExpressParser.T__2) {
                            {
                                {
                                    this.state = 23;
                                    this.match(SelectBoxExpressParser.T__2);
                                    this.state = 24;
                                    this.item();
                                }
                            }
                            this.state = 29;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 30;
                        this.match(SelectBoxExpressParser.T__3);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 32;
                        this.match(SelectBoxExpressParser.T__1);
                        this.state = 33;
                        this.match(SelectBoxExpressParser.T__3);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 34;
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
        this.enterRule(_localctx, 6, SelectBoxExpressParser.RULE_item);
        try {
            this.state = 39;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 3, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 37;
                        this.value();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 38;
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
        this.enterRule(_localctx, 8, SelectBoxExpressParser.RULE_pair);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 41;
                this.value();
                this.state = 42;
                this.match(SelectBoxExpressParser.T__4);
                this.state = 43;
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
        this.enterRule(_localctx, 10, SelectBoxExpressParser.RULE_value);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 45;
                this.match(SelectBoxExpressParser.STRING);
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
        if (!SelectBoxExpressParser.__ATN) {
            SelectBoxExpressParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(SelectBoxExpressParser._serializedATN));
        }
        return SelectBoxExpressParser.__ATN;
    }
}
SelectBoxExpressParser.T__0 = 1;
SelectBoxExpressParser.T__1 = 2;
SelectBoxExpressParser.T__2 = 3;
SelectBoxExpressParser.T__3 = 4;
SelectBoxExpressParser.T__4 = 5;
SelectBoxExpressParser.STRING = 6;
SelectBoxExpressParser.WS = 7;
SelectBoxExpressParser.RULE_selectBoxExpress = 0;
SelectBoxExpressParser.RULE_label = 1;
SelectBoxExpressParser.RULE_selectItems = 2;
SelectBoxExpressParser.RULE_item = 3;
SelectBoxExpressParser.RULE_pair = 4;
SelectBoxExpressParser.RULE_value = 5;
SelectBoxExpressParser.ruleNames = [
    "selectBoxExpress", "label", "selectItems", "item", "pair", "value"
];
SelectBoxExpressParser._LITERAL_NAMES = [
    undefined, "';'", "'['", "','", "']'", "':'"
];
SelectBoxExpressParser._SYMBOLIC_NAMES = [
    undefined, undefined, undefined, undefined, undefined, undefined, "STRING",
    "WS"
];
SelectBoxExpressParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(SelectBoxExpressParser._LITERAL_NAMES, SelectBoxExpressParser._SYMBOLIC_NAMES, []);
SelectBoxExpressParser._serializedATN = "\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03\t2\x04\x02\t" +
    "\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t" +
    "\x07\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x05\x02\x14\n\x02\x03\x03" +
    "\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04\x1C\n\x04\f\x04\x0E\x04" +
    "\x1F\v\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04&\n\x04\x03" +
    "\x05\x03\x05\x05\x05*\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03" +
    "\x07\x03\x07\x02\x02\x02\b\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x02" +
    "\x020\x02\x13\x03\x02\x02\x02\x04\x15\x03\x02\x02\x02\x06%\x03\x02\x02" +
    "\x02\b)\x03\x02\x02\x02\n+\x03\x02\x02\x02\f/\x03\x02\x02\x02\x0E\x14" +
    "\x05\x04\x03\x02\x0F\x10\x05\x04\x03\x02\x10\x11\x07\x03\x02\x02\x11\x12" +
    "\x05\x06\x04\x02\x12\x14\x03\x02\x02\x02\x13\x0E\x03\x02\x02\x02\x13\x0F" +
    "\x03\x02\x02\x02\x14\x03\x03\x02\x02\x02\x15\x16\x07\b\x02\x02\x16\x05" +
    "\x03\x02\x02\x02\x17\x18\x07\x04\x02\x02\x18\x1D\x05\b\x05\x02\x19\x1A" +
    "\x07\x05\x02\x02\x1A\x1C\x05\b\x05\x02\x1B\x19\x03\x02\x02\x02\x1C\x1F" +
    "\x03\x02\x02\x02\x1D\x1B\x03\x02\x02\x02\x1D\x1E\x03\x02\x02\x02\x1E " +
    "\x03\x02\x02\x02\x1F\x1D\x03\x02\x02\x02 !\x07\x06\x02\x02!&\x03\x02\x02" +
    "\x02\"#\x07\x04\x02\x02#&\x07\x06\x02\x02$&\x05\b\x05\x02%\x17\x03\x02" +
    "\x02\x02%\"\x03\x02\x02\x02%$\x03\x02\x02\x02&\x07\x03\x02\x02\x02\'*" +
    "\x05\f\x07\x02(*\x05\n\x06\x02)\'\x03\x02\x02\x02)(\x03\x02\x02\x02*\t" +
    "\x03\x02\x02\x02+,\x05\f\x07\x02,-\x07\x07\x02\x02-.\x05\f\x07\x02.\v" +
    "\x03\x02\x02\x02/0\x07\b\x02\x020\r\x03\x02\x02\x02\x06\x13\x1D%)";
__decorate([
    Decorators_1.Override,
    Decorators_1.NotNull
], SelectBoxExpressParser.prototype, "vocabulary", null);
__decorate([
    Decorators_1.Override
], SelectBoxExpressParser.prototype, "grammarFileName", null);
__decorate([
    Decorators_1.Override
], SelectBoxExpressParser.prototype, "ruleNames", null);
__decorate([
    Decorators_1.Override
], SelectBoxExpressParser.prototype, "serializedATN", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], SelectBoxExpressParser.prototype, "selectBoxExpress", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], SelectBoxExpressParser.prototype, "label", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], SelectBoxExpressParser.prototype, "selectItems", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], SelectBoxExpressParser.prototype, "item", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], SelectBoxExpressParser.prototype, "pair", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], SelectBoxExpressParser.prototype, "value", null);
exports.SelectBoxExpressParser = SelectBoxExpressParser;
class SelectBoxExpressContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    label() {
        return this.getRuleContext(0, LabelContext);
    }
    selectItems() {
        return this.tryGetRuleContext(0, SelectItemsContext);
    }
    get ruleIndex() { return SelectBoxExpressParser.RULE_selectBoxExpress; }
    enterRule(listener) {
        if (listener.enterSelectBoxExpress)
            listener.enterSelectBoxExpress(this);
    }
    exitRule(listener) {
        if (listener.exitSelectBoxExpress)
            listener.exitSelectBoxExpress(this);
    }
    accept(visitor) {
        if (visitor.visitSelectBoxExpress)
            return visitor.visitSelectBoxExpress(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_1.Override
], SelectBoxExpressContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_1.Override
], SelectBoxExpressContext.prototype, "enterRule", null);
__decorate([
    Decorators_1.Override
], SelectBoxExpressContext.prototype, "exitRule", null);
__decorate([
    Decorators_1.Override
], SelectBoxExpressContext.prototype, "accept", null);
exports.SelectBoxExpressContext = SelectBoxExpressContext;
class LabelContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    STRING() { return this.getToken(SelectBoxExpressParser.STRING, 0); }
    get ruleIndex() { return SelectBoxExpressParser.RULE_label; }
    enterRule(listener) {
        if (listener.enterLabel)
            listener.enterLabel(this);
    }
    exitRule(listener) {
        if (listener.exitLabel)
            listener.exitLabel(this);
    }
    accept(visitor) {
        if (visitor.visitLabel)
            return visitor.visitLabel(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_1.Override
], LabelContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_1.Override
], LabelContext.prototype, "enterRule", null);
__decorate([
    Decorators_1.Override
], LabelContext.prototype, "exitRule", null);
__decorate([
    Decorators_1.Override
], LabelContext.prototype, "accept", null);
exports.LabelContext = LabelContext;
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
    get ruleIndex() { return SelectBoxExpressParser.RULE_selectItems; }
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
    get ruleIndex() { return SelectBoxExpressParser.RULE_item; }
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
    value(i) {
        if (i === undefined) {
            return this.getRuleContexts(ValueContext);
        }
        else {
            return this.getRuleContext(i, ValueContext);
        }
    }
    get ruleIndex() { return SelectBoxExpressParser.RULE_pair; }
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
    STRING() { return this.getToken(SelectBoxExpressParser.STRING, 0); }
    get ruleIndex() { return SelectBoxExpressParser.RULE_value; }
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
