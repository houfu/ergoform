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
const Lexer_1 = require("antlr4ts/Lexer");
const LexerATNSimulator_1 = require("antlr4ts/atn/LexerATNSimulator");
const Decorators_1 = require("antlr4ts/Decorators");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = __importStar(require("antlr4ts/misc/Utils"));
class SelectItemsLexer extends Lexer_1.Lexer {
    constructor(input) {
        super(input);
        this._interp = new LexerATNSimulator_1.LexerATNSimulator(SelectItemsLexer._ATN, this);
    }
    get vocabulary() {
        return SelectItemsLexer.VOCABULARY;
    }
    get grammarFileName() { return "SelectItems.g4"; }
    get ruleNames() { return SelectItemsLexer.ruleNames; }
    get serializedATN() { return SelectItemsLexer._serializedATN; }
    get modeNames() { return SelectItemsLexer.modeNames; }
    static get _ATN() {
        if (!SelectItemsLexer.__ATN) {
            SelectItemsLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(SelectItemsLexer._serializedATN));
        }
        return SelectItemsLexer.__ATN;
    }
}
SelectItemsLexer.T__0 = 1;
SelectItemsLexer.T__1 = 2;
SelectItemsLexer.T__2 = 3;
SelectItemsLexer.T__3 = 4;
SelectItemsLexer.STRING = 5;
SelectItemsLexer.WS = 6;
SelectItemsLexer.modeNames = [
    "DEFAULT_MODE"
];
SelectItemsLexer.ruleNames = [
    "T__0", "T__1", "T__2", "T__3", "STRING", "ESC", "UNICODE", "HEX", "SAFECODEPOINT",
    "WS"
];
SelectItemsLexer._LITERAL_NAMES = [
    undefined, "'['", "','", "']'", "':'"
];
SelectItemsLexer._SYMBOLIC_NAMES = [
    undefined, undefined, undefined, undefined, undefined, "STRING", "WS"
];
SelectItemsLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(SelectItemsLexer._LITERAL_NAMES, SelectItemsLexer._SYMBOLIC_NAMES, []);
SelectItemsLexer._serializedATN = "\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x02\b?\b\x01\x04" +
    "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
    "\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x03\x02\x03\x02\x03" +
    "\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x07" +
    "\x06#\n\x06\f\x06\x0E\x06&\v\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07" +
    "\x05\x07-\n\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\n" +
    "\x03\n\x03\v\x06\v:\n\v\r\v\x0E\v;\x03\v\x03\v\x02\x02\x02\f\x03\x02\x03" +
    "\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\x02\x0F\x02\x02\x11" +
    "\x02\x02\x13\x02\x02\x15\x02\b\x03\x02\x06\n\x02$$11^^ddhhppttvv\x05\x02" +
    "2;CHch\x05\x02\x02!$$^^\x05\x02\v\f\x0F\x0F\"\">\x02\x03\x03\x02\x02\x02" +
    "\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02" +
    "\x02\v\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x03\x17\x03\x02\x02\x02" +
    "\x05\x19\x03\x02\x02\x02\x07\x1B\x03\x02\x02\x02\t\x1D\x03\x02\x02\x02" +
    "\v\x1F\x03\x02\x02\x02\r)\x03\x02\x02\x02\x0F.\x03\x02\x02\x02\x114\x03" +
    "\x02\x02\x02\x136\x03\x02\x02\x02\x159\x03\x02\x02\x02\x17\x18\x07]\x02" +
    "\x02\x18\x04\x03\x02\x02\x02\x19\x1A\x07.\x02\x02\x1A\x06\x03\x02\x02" +
    "\x02\x1B\x1C\x07_\x02\x02\x1C\b\x03\x02\x02\x02\x1D\x1E\x07<\x02\x02\x1E" +
    "\n\x03\x02\x02\x02\x1F$\x07$\x02\x02 #\x05\r\x07\x02!#\x05\x13\n\x02\"" +
    " \x03\x02\x02\x02\"!\x03\x02\x02\x02#&\x03\x02\x02\x02$\"\x03\x02\x02" +
    "\x02$%\x03\x02\x02\x02%\'\x03\x02\x02\x02&$\x03\x02\x02\x02\'(\x07$\x02" +
    "\x02(\f\x03\x02\x02\x02),\x07^\x02\x02*-\t\x02\x02\x02+-\x05\x0F\b\x02" +
    ",*\x03\x02\x02\x02,+\x03\x02\x02\x02-\x0E\x03\x02\x02\x02./\x07w\x02\x02" +
    "/0\x05\x11\t\x0201\x05\x11\t\x0212\x05\x11\t\x0223\x05\x11\t\x023\x10" +
    "\x03\x02\x02\x0245\t\x03\x02\x025\x12\x03\x02\x02\x0267\n\x04\x02\x02" +
    "7\x14\x03\x02\x02\x028:\t\x05\x02\x0298\x03\x02\x02\x02:;\x03\x02\x02" +
    "\x02;9\x03\x02\x02\x02;<\x03\x02\x02\x02<=\x03\x02\x02\x02=>\b\v\x02\x02" +
    ">\x16\x03\x02\x02\x02\x07\x02\"$,;\x03\b\x02\x02";
__decorate([
    Decorators_1.Override,
    Decorators_1.NotNull
], SelectItemsLexer.prototype, "vocabulary", null);
__decorate([
    Decorators_1.Override
], SelectItemsLexer.prototype, "grammarFileName", null);
__decorate([
    Decorators_1.Override
], SelectItemsLexer.prototype, "ruleNames", null);
__decorate([
    Decorators_1.Override
], SelectItemsLexer.prototype, "serializedATN", null);
__decorate([
    Decorators_1.Override
], SelectItemsLexer.prototype, "modeNames", null);
exports.SelectItemsLexer = SelectItemsLexer;
