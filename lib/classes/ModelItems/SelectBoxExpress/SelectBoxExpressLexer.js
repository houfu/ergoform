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
const Lexer_1 = require("antlr4ts/Lexer");
const LexerATNSimulator_1 = require("antlr4ts/atn/LexerATNSimulator");
const Decorators_1 = require("antlr4ts/Decorators");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = __importStar(require("antlr4ts/misc/Utils"));
class SelectBoxExpressLexer extends Lexer_1.Lexer {
    constructor(input) {
        super(input);
        this._interp = new LexerATNSimulator_1.LexerATNSimulator(SelectBoxExpressLexer._ATN, this);
    }
    get vocabulary() {
        return SelectBoxExpressLexer.VOCABULARY;
    }
    get grammarFileName() { return "SelectBoxExpress.g4"; }
    get ruleNames() { return SelectBoxExpressLexer.ruleNames; }
    get serializedATN() { return SelectBoxExpressLexer._serializedATN; }
    get modeNames() { return SelectBoxExpressLexer.modeNames; }
    static get _ATN() {
        if (!SelectBoxExpressLexer.__ATN) {
            SelectBoxExpressLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(SelectBoxExpressLexer._serializedATN));
        }
        return SelectBoxExpressLexer.__ATN;
    }
}
SelectBoxExpressLexer.T__0 = 1;
SelectBoxExpressLexer.T__1 = 2;
SelectBoxExpressLexer.T__2 = 3;
SelectBoxExpressLexer.T__3 = 4;
SelectBoxExpressLexer.T__4 = 5;
SelectBoxExpressLexer.STRING = 6;
SelectBoxExpressLexer.WS = 7;
SelectBoxExpressLexer.modeNames = [
    "DEFAULT_MODE"
];
SelectBoxExpressLexer.ruleNames = [
    "T__0", "T__1", "T__2", "T__3", "T__4", "STRING", "ESC", "UNICODE", "HEX",
    "SAFECODEPOINT", "WS"
];
SelectBoxExpressLexer._LITERAL_NAMES = [
    undefined, "';'", "'['", "','", "']'", "':'"
];
SelectBoxExpressLexer._SYMBOLIC_NAMES = [
    undefined, undefined, undefined, undefined, undefined, undefined, "STRING",
    "WS"
];
SelectBoxExpressLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(SelectBoxExpressLexer._LITERAL_NAMES, SelectBoxExpressLexer._SYMBOLIC_NAMES, []);
SelectBoxExpressLexer._serializedATN = "\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x02\tC\b\x01\x04" +
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
__decorate([
    Decorators_1.Override,
    Decorators_1.NotNull
], SelectBoxExpressLexer.prototype, "vocabulary", null);
__decorate([
    Decorators_1.Override
], SelectBoxExpressLexer.prototype, "grammarFileName", null);
__decorate([
    Decorators_1.Override
], SelectBoxExpressLexer.prototype, "ruleNames", null);
__decorate([
    Decorators_1.Override
], SelectBoxExpressLexer.prototype, "serializedATN", null);
__decorate([
    Decorators_1.Override
], SelectBoxExpressLexer.prototype, "modeNames", null);
exports.SelectBoxExpressLexer = SelectBoxExpressLexer;
