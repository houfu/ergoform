import {ATN} from 'antlr4ts/atn/ATN';
import {Parser} from 'antlr4ts/Parser';
import {ParserRuleContext} from 'antlr4ts/ParserRuleContext';
import {TerminalNode} from 'antlr4ts/tree/TerminalNode';
import {TokenStream} from 'antlr4ts/TokenStream';
import {Vocabulary} from 'antlr4ts/Vocabulary';
import {SelectItemsListener} from './SelectItemsListener';
import {SelectItemsVisitor} from './SelectItemsVisitor';

export declare class SelectItemsParser extends Parser {
    static readonly T__0 = 1;
    static readonly T__1 = 2;
    static readonly T__2 = 3;
    static readonly T__3 = 4;
    static readonly STRING = 5;
    static readonly WS = 6;
    static readonly RULE_selectItems = 0;
    static readonly RULE_item = 1;
    static readonly RULE_pair = 2;
    static readonly RULE_value = 3;
    static readonly RULE_key = 4;
    static readonly ruleNames: string[];
    private static readonly _LITERAL_NAMES;
    private static readonly _SYMBOLIC_NAMES;
    static readonly VOCABULARY: Vocabulary;
    readonly vocabulary: Vocabulary;
    readonly grammarFileName: string;
    readonly ruleNames: string[];
    readonly serializedATN: string;
    constructor(input: TokenStream);
    selectItems(): SelectItemsContext;
    item(): ItemContext;
    pair(): PairContext;
    value(): ValueContext;
    key(): KeyContext;
    static readonly _serializedATN: string;
    static __ATN: ATN;
    static readonly _ATN: ATN;
}
export declare class SelectItemsContext extends ParserRuleContext {
    item(): ItemContext[];
    item(i: number): ItemContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SelectItemsListener): void;
    exitRule(listener: SelectItemsListener): void;
    accept<Result>(visitor: SelectItemsVisitor<Result>): Result;
}
export declare class ItemContext extends ParserRuleContext {
    value(): ValueContext | undefined;
    pair(): PairContext | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SelectItemsListener): void;
    exitRule(listener: SelectItemsListener): void;
    accept<Result>(visitor: SelectItemsVisitor<Result>): Result;
}
export declare class PairContext extends ParserRuleContext {
    key(): KeyContext;
    value(): ValueContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SelectItemsListener): void;
    exitRule(listener: SelectItemsListener): void;
    accept<Result>(visitor: SelectItemsVisitor<Result>): Result;
}
export declare class ValueContext extends ParserRuleContext {
    STRING(): TerminalNode;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SelectItemsListener): void;
    exitRule(listener: SelectItemsListener): void;
    accept<Result>(visitor: SelectItemsVisitor<Result>): Result;
}
export declare class KeyContext extends ParserRuleContext {
    STRING(): TerminalNode;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SelectItemsListener): void;
    exitRule(listener: SelectItemsListener): void;
    accept<Result>(visitor: SelectItemsVisitor<Result>): Result;
}
