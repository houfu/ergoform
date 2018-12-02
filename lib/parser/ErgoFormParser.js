"use strict";
// Generated from src/parser/grammars/ErgoForm.g4 by ANTLR 4.6-SNAPSHOT
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
const NoViableAltException_1 = require("antlr4ts/NoViableAltException");
const Parser_1 = require("antlr4ts/Parser");
const ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
const ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
const RecognitionException_1 = require("antlr4ts/RecognitionException");
const RuleVersion_1 = require("antlr4ts/RuleVersion");
const Token_1 = require("antlr4ts/Token");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = __importStar(require("antlr4ts/misc/Utils"));
class ErgoFormParser extends Parser_1.Parser {
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(ErgoFormParser._ATN, this);
    }
    get vocabulary() {
        return ErgoFormParser.VOCABULARY;
    }
    get grammarFileName() { return "ErgoForm.g4"; }
    get ruleNames() { return ErgoFormParser.ruleNames; }
    get serializedATN() { return ErgoFormParser._serializedATN; }
    // @ts-ignore
    ergoForm() {
        let _localctx = new ErgoFormContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, ErgoFormParser.RULE_ergoForm);
        try {
            this.state = 30;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ErgoFormParser.T__0:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 28;
                        this.items();
                    }
                    break;
                case ErgoFormParser.STRING:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 29;
                        this.itemRows();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
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
    items() {
        let _localctx = new ItemsContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, ErgoFormParser.RULE_items);
        let _la;
        try {
            this.state = 45;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 32;
                        this.match(ErgoFormParser.T__0);
                        this.state = 33;
                        this.item();
                        this.state = 38;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === ErgoFormParser.T__1) {
                            {
                                {
                                    this.state = 34;
                                    this.match(ErgoFormParser.T__1);
                                    this.state = 35;
                                    this.item();
                                }
                            }
                            this.state = 40;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 41;
                        this.match(ErgoFormParser.T__2);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 43;
                        this.match(ErgoFormParser.T__0);
                        this.state = 44;
                        this.match(ErgoFormParser.T__2);
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
    itemRows() {
        let _localctx = new ItemRowsContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, ErgoFormParser.RULE_itemRows);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 48;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 47;
                            this.itemRow();
                        }
                    }
                    this.state = 50;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === ErgoFormParser.STRING);
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
    itemRow() {
        let _localctx = new ItemRowContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, ErgoFormParser.RULE_itemRow);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 52;
                this.item();
                this.state = 53;
                _la = this._input.LA(1);
                if (!(_la === ErgoFormParser.T__3 || _la === ErgoFormParser.T__4)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
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
        this.enterRule(_localctx, 8, ErgoFormParser.RULE_item);
        try {
            this.state = 57;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 4, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 55;
                        this.itemExpress();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 56;
                        this.itemFull();
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
    itemFull() {
        let _localctx = new ItemFullContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, ErgoFormParser.RULE_itemFull);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 59;
                this.itemType();
                this.state = 60;
                this.match(ErgoFormParser.COLON);
                this.state = 61;
                this.obj();
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
    obj() {
        let _localctx = new ObjContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, ErgoFormParser.RULE_obj);
        let _la;
        try {
            this.state = 76;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 6, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 63;
                        this.match(ErgoFormParser.T__5);
                        this.state = 64;
                        this.pair();
                        this.state = 69;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === ErgoFormParser.T__1) {
                            {
                                {
                                    this.state = 65;
                                    this.match(ErgoFormParser.T__1);
                                    this.state = 66;
                                    this.pair();
                                }
                            }
                            this.state = 71;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 72;
                        this.match(ErgoFormParser.T__6);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 74;
                        this.match(ErgoFormParser.T__5);
                        this.state = 75;
                        this.match(ErgoFormParser.T__6);
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
        this.enterRule(_localctx, 14, ErgoFormParser.RULE_pair);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 78;
                this.key();
                this.state = 79;
                this.match(ErgoFormParser.COLON);
                this.state = 80;
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
    array() {
        let _localctx = new ArrayContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, ErgoFormParser.RULE_array);
        let _la;
        try {
            this.state = 95;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 8, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 82;
                        this.match(ErgoFormParser.T__0);
                        this.state = 83;
                        this.value();
                        this.state = 88;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === ErgoFormParser.T__1) {
                            {
                                {
                                    this.state = 84;
                                    this.match(ErgoFormParser.T__1);
                                    this.state = 85;
                                    this.value();
                                }
                            }
                            this.state = 90;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 91;
                        this.match(ErgoFormParser.T__2);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 93;
                        this.match(ErgoFormParser.T__0);
                        this.state = 94;
                        this.match(ErgoFormParser.T__2);
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
    key() {
        let _localctx = new KeyContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, ErgoFormParser.RULE_key);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 97;
                this.match(ErgoFormParser.STRING);
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
        this.enterRule(_localctx, 20, ErgoFormParser.RULE_value);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 99;
                this.match(ErgoFormParser.STRING);
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
    itemExpress() {
        let _localctx = new ItemExpressContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, ErgoFormParser.RULE_itemExpress);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 101;
                this.itemType();
                this.state = 102;
                this.match(ErgoFormParser.COLON);
                this.state = 103;
                this.expressValue();
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
    itemType() {
        let _localctx = new ItemTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, ErgoFormParser.RULE_itemType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 105;
                this.match(ErgoFormParser.STRING);
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
    expressValue() {
        let _localctx = new ExpressValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, ErgoFormParser.RULE_expressValue);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 107;
                this.match(ErgoFormParser.STRING);
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
        if (!ErgoFormParser.__ATN) {
            ErgoFormParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(ErgoFormParser._serializedATN));
        }
        return ErgoFormParser.__ATN;
    }
}
ErgoFormParser.T__0 = 1;
ErgoFormParser.T__1 = 2;
ErgoFormParser.T__2 = 3;
ErgoFormParser.T__3 = 4;
ErgoFormParser.T__4 = 5;
ErgoFormParser.T__5 = 6;
ErgoFormParser.T__6 = 7;
ErgoFormParser.COLON = 8;
ErgoFormParser.STRING = 9;
ErgoFormParser.NUMBER = 10;
ErgoFormParser.WS = 11;
ErgoFormParser.RULE_ergoForm = 0;
ErgoFormParser.RULE_items = 1;
ErgoFormParser.RULE_itemRows = 2;
ErgoFormParser.RULE_itemRow = 3;
ErgoFormParser.RULE_item = 4;
ErgoFormParser.RULE_itemFull = 5;
ErgoFormParser.RULE_obj = 6;
ErgoFormParser.RULE_pair = 7;
ErgoFormParser.RULE_array = 8;
ErgoFormParser.RULE_key = 9;
ErgoFormParser.RULE_value = 10;
ErgoFormParser.RULE_itemExpress = 11;
ErgoFormParser.RULE_itemType = 12;
ErgoFormParser.RULE_expressValue = 13;
ErgoFormParser.ruleNames = [
    "ergoForm", "items", "itemRows", "itemRow", "item", "itemFull", "obj",
    "pair", "array", "key", "value", "itemExpress", "itemType", "expressValue"
];
ErgoFormParser._LITERAL_NAMES = [
    undefined, "'['", "','", "']'", "'\r'", "'\n'", "'{'", "'}'", "':'"
];
ErgoFormParser._SYMBOLIC_NAMES = [
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, "COLON", "STRING", "NUMBER", "WS"
];
ErgoFormParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(ErgoFormParser._LITERAL_NAMES, ErgoFormParser._SYMBOLIC_NAMES, []);
ErgoFormParser._serializedATN = "\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03\rp\x04\x02\t" +
    "\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t" +
    "\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04\x0E" +
    "\t\x0E\x04\x0F\t\x0F\x03\x02\x03\x02\x05\x02!\n\x02\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x07\x03\'\n\x03\f\x03\x0E\x03*\v\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x05\x030\n\x03\x03\x04\x06\x043\n\x04\r\x04\x0E\x044\x03" +
    "\x05\x03\x05\x03\x05\x03\x06\x03\x06\x05\x06<\n\x06\x03\x07\x03\x07\x03" +
    "\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x07\bF\n\b\f\b\x0E\bI\v\b\x03\b\x03" +
    "\b\x03\b\x03\b\x05\bO\n\b\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03" +
    "\n\x07\nY\n\n\f\n\x0E\n\\\v\n\x03\n\x03\n\x03\n\x03\n\x05\nb\n\n\x03\v" +
    "\x03\v\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03" +
    "\x0F\x03\x0F\x02\x02\x02\x10\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
    "\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x02\x03" +
    "\x03\x02\x06\x07j\x02 \x03\x02\x02\x02\x04/\x03\x02\x02\x02\x062\x03\x02" +
    "\x02\x02\b6\x03\x02\x02\x02\n;\x03\x02\x02\x02\f=\x03\x02\x02\x02\x0E" +
    "N\x03\x02\x02\x02\x10P\x03\x02\x02\x02\x12a\x03\x02\x02\x02\x14c\x03\x02" +
    "\x02\x02\x16e\x03\x02\x02\x02\x18g\x03\x02\x02\x02\x1Ak\x03\x02\x02\x02" +
    "\x1Cm\x03\x02\x02\x02\x1E!\x05\x04\x03\x02\x1F!\x05\x06\x04\x02 \x1E\x03" +
    "\x02\x02\x02 \x1F\x03\x02\x02\x02!\x03\x03\x02\x02\x02\"#\x07\x03\x02" +
    "\x02#(\x05\n\x06\x02$%\x07\x04\x02\x02%\'\x05\n\x06\x02&$\x03\x02\x02" +
    "\x02\'*\x03\x02\x02\x02(&\x03\x02\x02\x02()\x03\x02\x02\x02)+\x03\x02" +
    "\x02\x02*(\x03\x02\x02\x02+,\x07\x05\x02\x02,0\x03\x02\x02\x02-.\x07\x03" +
    "\x02\x02.0\x07\x05\x02\x02/\"\x03\x02\x02\x02/-\x03\x02\x02\x020\x05\x03" +
    "\x02\x02\x0213\x05\b\x05\x0221\x03\x02\x02\x0234\x03\x02\x02\x0242\x03" +
    "\x02\x02\x0245\x03\x02\x02\x025\x07\x03\x02\x02\x0267\x05\n\x06\x0278" +
    "\t\x02\x02\x028\t\x03\x02\x02\x029<\x05\x18\r\x02:<\x05\f\x07\x02;9\x03" +
    "\x02\x02\x02;:\x03\x02\x02\x02<\v\x03\x02\x02\x02=>\x05\x1A\x0E\x02>?" +
    "\x07\n\x02\x02?@\x05\x0E\b\x02@\r\x03\x02\x02\x02AB\x07\b\x02\x02BG\x05" +
    "\x10\t\x02CD\x07\x04\x02\x02DF\x05\x10\t\x02EC\x03\x02\x02\x02FI\x03\x02" +
    "\x02\x02GE\x03\x02\x02\x02GH\x03\x02\x02\x02HJ\x03\x02\x02\x02IG\x03\x02" +
    "\x02\x02JK\x07\t\x02\x02KO\x03\x02\x02\x02LM\x07\b\x02\x02MO\x07\t\x02" +
    "\x02NA\x03\x02\x02\x02NL\x03\x02\x02\x02O\x0F\x03\x02\x02\x02PQ\x05\x14" +
    "\v\x02QR\x07\n\x02\x02RS\x05\x16\f\x02S\x11\x03\x02\x02\x02TU\x07\x03" +
    "\x02\x02UZ\x05\x16\f\x02VW\x07\x04\x02\x02WY\x05\x16\f\x02XV\x03\x02\x02" +
    "\x02Y\\\x03\x02\x02\x02ZX\x03\x02\x02\x02Z[\x03\x02\x02\x02[]\x03\x02" +
    "\x02\x02\\Z\x03\x02\x02\x02]^\x07\x05\x02\x02^b\x03\x02\x02\x02_`\x07" +
    "\x03\x02\x02`b\x07\x05\x02\x02aT\x03\x02\x02\x02a_\x03\x02\x02\x02b\x13" +
    "\x03\x02\x02\x02cd\x07\v\x02\x02d\x15\x03\x02\x02\x02ef\x07\v\x02\x02" +
    "f\x17\x03\x02\x02\x02gh\x05\x1A\x0E\x02hi\x07\n\x02\x02ij\x05\x1C\x0F" +
    "\x02j\x19\x03\x02\x02\x02kl\x07\v\x02\x02l\x1B\x03\x02\x02\x02mn\x07\v" +
    "\x02\x02n\x1D\x03\x02\x02\x02\v (/4;GNZa";
__decorate([
    Decorators_1.Override,
    Decorators_1.NotNull
], ErgoFormParser.prototype, "vocabulary", null);
__decorate([
    Decorators_1.Override
], ErgoFormParser.prototype, "grammarFileName", null);
__decorate([
    Decorators_1.Override
], ErgoFormParser.prototype, "ruleNames", null);
__decorate([
    Decorators_1.Override
], ErgoFormParser.prototype, "serializedATN", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], ErgoFormParser.prototype, "ergoForm", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], ErgoFormParser.prototype, "items", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], ErgoFormParser.prototype, "itemRows", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], ErgoFormParser.prototype, "itemRow", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], ErgoFormParser.prototype, "item", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], ErgoFormParser.prototype, "itemFull", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], ErgoFormParser.prototype, "obj", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], ErgoFormParser.prototype, "pair", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], ErgoFormParser.prototype, "array", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], ErgoFormParser.prototype, "key", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], ErgoFormParser.prototype, "value", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], ErgoFormParser.prototype, "itemExpress", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], ErgoFormParser.prototype, "itemType", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], ErgoFormParser.prototype, "expressValue", null);
exports.ErgoFormParser = ErgoFormParser;
class ErgoFormContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    items() {
        return this.tryGetRuleContext(0, ItemsContext);
    }
    itemRows() {
        return this.tryGetRuleContext(0, ItemRowsContext);
    }
    get ruleIndex() { return ErgoFormParser.RULE_ergoForm; }
    enterRule(listener) {
        if (listener.enterErgoForm)
            listener.enterErgoForm(this);
    }
    exitRule(listener) {
        if (listener.exitErgoForm)
            listener.exitErgoForm(this);
    }
    accept(visitor) {
        if (visitor.visitErgoForm)
            return visitor.visitErgoForm(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_1.Override
], ErgoFormContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_1.Override
], ErgoFormContext.prototype, "enterRule", null);
__decorate([
    Decorators_1.Override
], ErgoFormContext.prototype, "exitRule", null);
__decorate([
    Decorators_1.Override
], ErgoFormContext.prototype, "accept", null);
exports.ErgoFormContext = ErgoFormContext;
class ItemsContext extends ParserRuleContext_1.ParserRuleContext {
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
    get ruleIndex() { return ErgoFormParser.RULE_items; }
    enterRule(listener) {
        if (listener.enterItems)
            listener.enterItems(this);
    }
    exitRule(listener) {
        if (listener.exitItems)
            listener.exitItems(this);
    }
    accept(visitor) {
        if (visitor.visitItems)
            return visitor.visitItems(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_1.Override
], ItemsContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_1.Override
], ItemsContext.prototype, "enterRule", null);
__decorate([
    Decorators_1.Override
], ItemsContext.prototype, "exitRule", null);
__decorate([
    Decorators_1.Override
], ItemsContext.prototype, "accept", null);
exports.ItemsContext = ItemsContext;
class ItemRowsContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    itemRow(i) {
        if (i === undefined) {
            return this.getRuleContexts(ItemRowContext);
        }
        else {
            return this.getRuleContext(i, ItemRowContext);
        }
    }
    get ruleIndex() { return ErgoFormParser.RULE_itemRows; }
    enterRule(listener) {
        if (listener.enterItemRows)
            listener.enterItemRows(this);
    }
    exitRule(listener) {
        if (listener.exitItemRows)
            listener.exitItemRows(this);
    }
    accept(visitor) {
        if (visitor.visitItemRows)
            return visitor.visitItemRows(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_1.Override
], ItemRowsContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_1.Override
], ItemRowsContext.prototype, "enterRule", null);
__decorate([
    Decorators_1.Override
], ItemRowsContext.prototype, "exitRule", null);
__decorate([
    Decorators_1.Override
], ItemRowsContext.prototype, "accept", null);
exports.ItemRowsContext = ItemRowsContext;
class ItemRowContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    item() {
        return this.getRuleContext(0, ItemContext);
    }
    get ruleIndex() { return ErgoFormParser.RULE_itemRow; }
    enterRule(listener) {
        if (listener.enterItemRow)
            listener.enterItemRow(this);
    }
    exitRule(listener) {
        if (listener.exitItemRow)
            listener.exitItemRow(this);
    }
    accept(visitor) {
        if (visitor.visitItemRow)
            return visitor.visitItemRow(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_1.Override
], ItemRowContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_1.Override
], ItemRowContext.prototype, "enterRule", null);
__decorate([
    Decorators_1.Override
], ItemRowContext.prototype, "exitRule", null);
__decorate([
    Decorators_1.Override
], ItemRowContext.prototype, "accept", null);
exports.ItemRowContext = ItemRowContext;
class ItemContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    itemExpress() {
        return this.tryGetRuleContext(0, ItemExpressContext);
    }
    itemFull() {
        return this.tryGetRuleContext(0, ItemFullContext);
    }
    get ruleIndex() { return ErgoFormParser.RULE_item; }
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
class ItemFullContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    itemType() {
        return this.getRuleContext(0, ItemTypeContext);
    }
    COLON() { return this.getToken(ErgoFormParser.COLON, 0); }
    obj() {
        return this.getRuleContext(0, ObjContext);
    }
    get ruleIndex() { return ErgoFormParser.RULE_itemFull; }
    enterRule(listener) {
        if (listener.enterItemFull)
            listener.enterItemFull(this);
    }
    exitRule(listener) {
        if (listener.exitItemFull)
            listener.exitItemFull(this);
    }
    accept(visitor) {
        if (visitor.visitItemFull)
            return visitor.visitItemFull(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_1.Override
], ItemFullContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_1.Override
], ItemFullContext.prototype, "enterRule", null);
__decorate([
    Decorators_1.Override
], ItemFullContext.prototype, "exitRule", null);
__decorate([
    Decorators_1.Override
], ItemFullContext.prototype, "accept", null);
exports.ItemFullContext = ItemFullContext;
class ObjContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    pair(i) {
        if (i === undefined) {
            return this.getRuleContexts(PairContext);
        }
        else {
            return this.getRuleContext(i, PairContext);
        }
    }
    get ruleIndex() { return ErgoFormParser.RULE_obj; }
    enterRule(listener) {
        if (listener.enterObj)
            listener.enterObj(this);
    }
    exitRule(listener) {
        if (listener.exitObj)
            listener.exitObj(this);
    }
    accept(visitor) {
        if (visitor.visitObj)
            return visitor.visitObj(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_1.Override
], ObjContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_1.Override
], ObjContext.prototype, "enterRule", null);
__decorate([
    Decorators_1.Override
], ObjContext.prototype, "exitRule", null);
__decorate([
    Decorators_1.Override
], ObjContext.prototype, "accept", null);
exports.ObjContext = ObjContext;
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
    get ruleIndex() { return ErgoFormParser.RULE_pair; }
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
class ArrayContext extends ParserRuleContext_1.ParserRuleContext {
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
    get ruleIndex() { return ErgoFormParser.RULE_array; }
    enterRule(listener) {
        if (listener.enterArray)
            listener.enterArray(this);
    }
    exitRule(listener) {
        if (listener.exitArray)
            listener.exitArray(this);
    }
    accept(visitor) {
        if (visitor.visitArray)
            return visitor.visitArray(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_1.Override
], ArrayContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_1.Override
], ArrayContext.prototype, "enterRule", null);
__decorate([
    Decorators_1.Override
], ArrayContext.prototype, "exitRule", null);
__decorate([
    Decorators_1.Override
], ArrayContext.prototype, "accept", null);
exports.ArrayContext = ArrayContext;
class KeyContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    STRING() { return this.getToken(ErgoFormParser.STRING, 0); }
    get ruleIndex() { return ErgoFormParser.RULE_key; }
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
class ValueContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    STRING() { return this.getToken(ErgoFormParser.STRING, 0); }
    get ruleIndex() { return ErgoFormParser.RULE_value; }
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
class ItemExpressContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    itemType() {
        return this.getRuleContext(0, ItemTypeContext);
    }
    COLON() { return this.getToken(ErgoFormParser.COLON, 0); }
    expressValue() {
        return this.getRuleContext(0, ExpressValueContext);
    }
    get ruleIndex() { return ErgoFormParser.RULE_itemExpress; }
    enterRule(listener) {
        if (listener.enterItemExpress)
            listener.enterItemExpress(this);
    }
    exitRule(listener) {
        if (listener.exitItemExpress)
            listener.exitItemExpress(this);
    }
    accept(visitor) {
        if (visitor.visitItemExpress)
            return visitor.visitItemExpress(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_1.Override
], ItemExpressContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_1.Override
], ItemExpressContext.prototype, "enterRule", null);
__decorate([
    Decorators_1.Override
], ItemExpressContext.prototype, "exitRule", null);
__decorate([
    Decorators_1.Override
], ItemExpressContext.prototype, "accept", null);
exports.ItemExpressContext = ItemExpressContext;
class ItemTypeContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    STRING() { return this.getToken(ErgoFormParser.STRING, 0); }
    get ruleIndex() { return ErgoFormParser.RULE_itemType; }
    enterRule(listener) {
        if (listener.enterItemType)
            listener.enterItemType(this);
    }
    exitRule(listener) {
        if (listener.exitItemType)
            listener.exitItemType(this);
    }
    accept(visitor) {
        if (visitor.visitItemType)
            return visitor.visitItemType(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_1.Override
], ItemTypeContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_1.Override
], ItemTypeContext.prototype, "enterRule", null);
__decorate([
    Decorators_1.Override
], ItemTypeContext.prototype, "exitRule", null);
__decorate([
    Decorators_1.Override
], ItemTypeContext.prototype, "accept", null);
exports.ItemTypeContext = ItemTypeContext;
class ExpressValueContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    STRING() { return this.getToken(ErgoFormParser.STRING, 0); }
    get ruleIndex() { return ErgoFormParser.RULE_expressValue; }
    enterRule(listener) {
        if (listener.enterExpressValue)
            listener.enterExpressValue(this);
    }
    exitRule(listener) {
        if (listener.exitExpressValue)
            listener.exitExpressValue(this);
    }
    accept(visitor) {
        if (visitor.visitExpressValue)
            return visitor.visitExpressValue(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_1.Override
], ExpressValueContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_1.Override
], ExpressValueContext.prototype, "enterRule", null);
__decorate([
    Decorators_1.Override
], ExpressValueContext.prototype, "exitRule", null);
__decorate([
    Decorators_1.Override
], ExpressValueContext.prototype, "accept", null);
exports.ExpressValueContext = ExpressValueContext;
