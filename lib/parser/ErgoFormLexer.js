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
const Lexer_1 = require("antlr4ts/Lexer");
const LexerATNSimulator_1 = require("antlr4ts/atn/LexerATNSimulator");
const Decorators_1 = require("antlr4ts/Decorators");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = __importStar(require("antlr4ts/misc/Utils"));
class ErgoFormLexer extends Lexer_1.Lexer {
    constructor(input) {
        super(input);
        this._interp = new LexerATNSimulator_1.LexerATNSimulator(ErgoFormLexer._ATN, this);
    }
    get vocabulary() {
        return ErgoFormLexer.VOCABULARY;
    }
    get grammarFileName() { return "ErgoForm.g4"; }
    get ruleNames() { return ErgoFormLexer.ruleNames; }
    get serializedATN() { return ErgoFormLexer._serializedATN; }
    get modeNames() { return ErgoFormLexer.modeNames; }
    static get _ATN() {
        if (!ErgoFormLexer.__ATN) {
            ErgoFormLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(ErgoFormLexer._serializedATN));
        }
        return ErgoFormLexer.__ATN;
    }
}
ErgoFormLexer.T__0 = 1;
ErgoFormLexer.T__1 = 2;
ErgoFormLexer.T__2 = 3;
ErgoFormLexer.T__3 = 4;
ErgoFormLexer.T__4 = 5;
ErgoFormLexer.T__5 = 6;
ErgoFormLexer.T__6 = 7;
ErgoFormLexer.COLON = 8;
ErgoFormLexer.STRING = 9;
ErgoFormLexer.NUMBER = 10;
ErgoFormLexer.WS = 11;
ErgoFormLexer.modeNames = [
    "DEFAULT_MODE"
];
ErgoFormLexer.ruleNames = [
    "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "COLON", "STRING",
    "ESC", "UNICODE", "HEX", "SAFECODEPOINT", "NUMBER", "INT", "EXP", "WS"
];
ErgoFormLexer._LITERAL_NAMES = [
    undefined, "'['", "','", "']'", "'\r'", "'\n'", "'{'", "'}'", "':'"
];
ErgoFormLexer._SYMBOLIC_NAMES = [
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, "COLON", "STRING", "NUMBER", "WS"
];
ErgoFormLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(ErgoFormLexer._LITERAL_NAMES, ErgoFormLexer._SYMBOLIC_NAMES, []);
ErgoFormLexer._serializedATN = "\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x02\rt\b\x01\x04" +
    "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
    "\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
    "\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
    "\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06" +
    "\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\n\x07" +
    "\n9\n\n\f\n\x0E\n<\v\n\x03\n\x03\n\x03\v\x03\v\x03\v\x05\vC\n\v\x03\f" +
    "\x03\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x05" +
    "\x0FP\n\x0F\x03\x0F\x03\x0F\x03\x0F\x06\x0FU\n\x0F\r\x0F\x0E\x0FV\x05" +
    "\x0FY\n\x0F\x03\x0F\x05\x0F\\\n\x0F\x03\x10\x03\x10\x03\x10\x07\x10a\n" +
    "\x10\f\x10\x0E\x10d\v\x10\x05\x10f\n\x10\x03\x11\x03\x11\x05\x11j\n\x11" +
    "\x03\x11\x03\x11\x03\x12\x06\x12o\n\x12\r\x12\x0E\x12p\x03\x12\x03\x12" +
    "\x02\x02\x02\x13\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07" +
    "\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\x02\x17\x02\x02\x19\x02" +
    "\x02\x1B\x02\x02\x1D\x02\f\x1F\x02\x02!\x02\x02#\x02\r\x03\x02\n\n\x02" +
    "$$11^^ddhhppttvv\x05\x022;CHch\x05\x02\x02!$$^^\x03\x022;\x03\x023;\x04" +
    "\x02GGgg\x04\x02--//\x05\x02\v\f\x0F\x0F\"\"x\x02\x03\x03\x02\x02\x02" +
    "\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02" +
    "\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02" +
    "\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02" +
    "#\x03\x02\x02\x02\x03%\x03\x02\x02\x02\x05\'\x03\x02\x02\x02\x07)\x03" +
    "\x02\x02\x02\t+\x03\x02\x02\x02\v-\x03\x02\x02\x02\r/\x03\x02\x02\x02" +
    "\x0F1\x03\x02\x02\x02\x113\x03\x02\x02\x02\x135\x03\x02\x02\x02\x15?\x03" +
    "\x02\x02\x02\x17D\x03\x02\x02\x02\x19J\x03\x02\x02\x02\x1BL\x03\x02\x02" +
    "\x02\x1DO\x03\x02\x02\x02\x1Fe\x03\x02\x02\x02!g\x03\x02\x02\x02#n\x03" +
    "\x02\x02\x02%&\x07]\x02\x02&\x04\x03\x02\x02\x02\'(\x07.\x02\x02(\x06" +
    "\x03\x02\x02\x02)*\x07_\x02\x02*\b\x03\x02\x02\x02+,\x07\x0F\x02\x02," +
    "\n\x03\x02\x02\x02-.\x07\f\x02\x02.\f\x03\x02\x02\x02/0\x07}\x02\x020" +
    "\x0E\x03\x02\x02\x0212\x07\x7F\x02\x022\x10\x03\x02\x02\x0234\x07<\x02" +
    "\x024\x12\x03\x02\x02\x025:\x07$\x02\x0269\x05\x15\v\x0279\x05\x1B\x0E" +
    "\x0286\x03\x02\x02\x0287\x03\x02\x02\x029<\x03\x02\x02\x02:8\x03\x02\x02" +
    "\x02:;\x03\x02\x02\x02;=\x03\x02\x02\x02<:\x03\x02\x02\x02=>\x07$\x02" +
    "\x02>\x14\x03\x02\x02\x02?B\x07^\x02\x02@C\t\x02\x02\x02AC\x05\x17\f\x02" +
    "B@\x03\x02\x02\x02BA\x03\x02\x02\x02C\x16\x03\x02\x02\x02DE\x07w\x02\x02" +
    "EF\x05\x19\r\x02FG\x05\x19\r\x02GH\x05\x19\r\x02HI\x05\x19\r\x02I\x18" +
    "\x03\x02\x02\x02JK\t\x03\x02\x02K\x1A\x03\x02\x02\x02LM\n\x04\x02\x02" +
    "M\x1C\x03\x02\x02\x02NP\x07/\x02\x02ON\x03\x02\x02\x02OP\x03\x02\x02\x02" +
    "PQ\x03\x02\x02\x02QX\x05\x1F\x10\x02RT\x070\x02\x02SU\t\x05\x02\x02TS" +
    "\x03\x02\x02\x02UV\x03\x02\x02\x02VT\x03\x02\x02\x02VW\x03\x02\x02\x02" +
    "WY\x03\x02\x02\x02XR\x03\x02\x02\x02XY\x03\x02\x02\x02Y[\x03\x02\x02\x02" +
    "Z\\\x05!\x11\x02[Z\x03\x02\x02\x02[\\\x03\x02\x02\x02\\\x1E\x03\x02\x02" +
    "\x02]f\x072\x02\x02^b\t\x06\x02\x02_a\t\x05\x02\x02`_\x03\x02\x02\x02" +
    "ad\x03\x02\x02\x02b`\x03\x02\x02\x02bc\x03\x02\x02\x02cf\x03\x02\x02\x02" +
    "db\x03\x02\x02\x02e]\x03\x02\x02\x02e^\x03\x02\x02\x02f \x03\x02\x02\x02" +
    "gi\t\x07\x02\x02hj\t\b\x02\x02ih\x03\x02\x02\x02ij\x03\x02\x02\x02jk\x03" +
    "\x02\x02\x02kl\x05\x1F\x10\x02l\"\x03\x02\x02\x02mo\t\t\x02\x02nm\x03" +
    "\x02\x02\x02op\x03\x02\x02\x02pn\x03\x02\x02\x02pq\x03\x02\x02\x02qr\x03" +
    "\x02\x02\x02rs\b\x12\x02\x02s$\x03\x02\x02\x02\x0E\x028:BOVX[beip\x03" +
    "\b\x02\x02";
__decorate([
    Decorators_1.Override,
    Decorators_1.NotNull
], ErgoFormLexer.prototype, "vocabulary", null);
__decorate([
    Decorators_1.Override
], ErgoFormLexer.prototype, "grammarFileName", null);
__decorate([
    Decorators_1.Override
], ErgoFormLexer.prototype, "ruleNames", null);
__decorate([
    Decorators_1.Override
], ErgoFormLexer.prototype, "serializedATN", null);
__decorate([
    Decorators_1.Override
], ErgoFormLexer.prototype, "modeNames", null);
exports.ErgoFormLexer = ErgoFormLexer;
