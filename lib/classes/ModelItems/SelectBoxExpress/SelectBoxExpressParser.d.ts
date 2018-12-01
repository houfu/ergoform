import {ATN} from 'antlr4ts/atn/ATN';
import {Parser} from 'antlr4ts/Parser';
import {ParserRuleContext} from 'antlr4ts/ParserRuleContext';
import {TerminalNode} from 'antlr4ts/tree/TerminalNode';
import {TokenStream} from 'antlr4ts/TokenStream';
import {Vocabulary} from 'antlr4ts/Vocabulary';
import {SelectBoxExpressListener} from './SelectBoxExpressListener';
import {SelectBoxExpressVisitor} from './SelectBoxExpressVisitor';

export declare class SelectBoxExpressParser extends Parser {
    static readonly T__0 = 1;
    static readonly T__1 = 2;
    static readonly T__2 = 3;
    static readonly T__3 = 4;
    static readonly T__4 = 5;
    static readonly STRING = 6;
    static readonly WS = 7;
    static readonly RULE_selectBoxExpress = 0;
    static readonly RULE_label = 1;
    static readonly RULE_selectItems = 2;
    static readonly RULE_item = 3;
    static readonly RULE_pair = 4;
    static readonly RULE_value = 5;
    static readonly ruleNames: string[];
    private static readonly _LITERAL_NAMES;
    private static readonly _SYMBOLIC_NAMES;
    static readonly VOCABULARY: Vocabulary;
    readonly vocabulary: Vocabulary;
    readonly grammarFileName: string;
    readonly ruleNames: string[];
    readonly serializedATN: string;
    constructor(input: TokenStream);
    selectBoxExpress(): SelectBoxExpressContext;
    label(): LabelContext;
    selectItems(): SelectItemsContext;
    item(): ItemContext;
    pair(): PairContext;
    value(): ValueContext;
    static readonly _serializedATN: string;
    static __ATN: ATN;
    static readonly _ATN: ATN;
}
export declare class SelectBoxExpressContext extends ParserRuleContext {
    label(): LabelContext;
    selectItems(): SelectItemsContext | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SelectBoxExpressListener): void;
    exitRule(listener: SelectBoxExpressListener): void;
    accept<Result>(visitor: SelectBoxExpressVisitor<Result>): Result;
}
export declare class LabelContext extends ParserRuleContext {
    STRING(): TerminalNode;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SelectBoxExpressListener): void;
    exitRule(listener: SelectBoxExpressListener): void;
    accept<Result>(visitor: SelectBoxExpressVisitor<Result>): Result;
}
export declare class SelectItemsContext extends ParserRuleContext {
    item(): ItemContext[];
    item(i: number): ItemContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SelectBoxExpressListener): void;
    exitRule(listener: SelectBoxExpressListener): void;
    accept<Result>(visitor: SelectBoxExpressVisitor<Result>): Result;
}
export declare class ItemContext extends ParserRuleContext {
    value(): ValueContext | undefined;
    pair(): PairContext | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SelectBoxExpressListener): void;
    exitRule(listener: SelectBoxExpressListener): void;
    accept<Result>(visitor: SelectBoxExpressVisitor<Result>): Result;
}
export declare class PairContext extends ParserRuleContext {
    value(): ValueContext[];
    value(i: number): ValueContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SelectBoxExpressListener): void;
    exitRule(listener: SelectBoxExpressListener): void;
    accept<Result>(visitor: SelectBoxExpressVisitor<Result>): Result;
}
export declare class ValueContext extends ParserRuleContext {
    STRING(): TerminalNode;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SelectBoxExpressListener): void;
    exitRule(listener: SelectBoxExpressListener): void;
    accept<Result>(visitor: SelectBoxExpressVisitor<Result>): Result;
}
