import {ATN} from 'antlr4ts/atn/ATN';
import {Parser} from 'antlr4ts/Parser';
import {ParserRuleContext} from 'antlr4ts/ParserRuleContext';
import {TerminalNode} from 'antlr4ts/tree/TerminalNode';
import {TokenStream} from 'antlr4ts/TokenStream';
import {Vocabulary} from 'antlr4ts/Vocabulary';
import {ErgoFormListener} from './ErgoFormListener';
import {ErgoFormVisitor} from './ErgoFormVisitor';

export declare class ErgoFormParser extends Parser {
    static readonly T__0 = 1;
    static readonly T__1 = 2;
    static readonly T__2 = 3;
    static readonly T__3 = 4;
    static readonly T__4 = 5;
    static readonly T__5 = 6;
    static readonly T__6 = 7;
    static readonly COLON = 8;
    static readonly STRING = 9;
    static readonly NUMBER = 10;
    static readonly WS = 11;
    static readonly RULE_ergoForm = 0;
    static readonly RULE_items = 1;
    static readonly RULE_itemRows = 2;
    static readonly RULE_itemRow = 3;
    static readonly RULE_item = 4;
    static readonly RULE_itemFull = 5;
    static readonly RULE_obj = 6;
    static readonly RULE_pair = 7;
    static readonly RULE_array = 8;
    static readonly RULE_key = 9;
    static readonly RULE_value = 10;
    static readonly RULE_itemExpress = 11;
    static readonly RULE_itemType = 12;
    static readonly RULE_expressValue = 13;
    static readonly ruleNames: string[];
    private static readonly _LITERAL_NAMES;
    private static readonly _SYMBOLIC_NAMES;
    static readonly VOCABULARY: Vocabulary;
    readonly vocabulary: Vocabulary;
    readonly grammarFileName: string;
    readonly ruleNames: string[];
    readonly serializedATN: string;
    constructor(input: TokenStream);
    ergoForm(): ErgoFormContext;
    items(): ItemsContext;
    itemRows(): ItemRowsContext;
    itemRow(): ItemRowContext;
    item(): ItemContext;
    itemFull(): ItemFullContext;
    obj(): ObjContext;
    pair(): PairContext;
    array(): ArrayContext;
    key(): KeyContext;
    value(): ValueContext;
    itemExpress(): ItemExpressContext;
    itemType(): ItemTypeContext;
    expressValue(): ExpressValueContext;
    static readonly _serializedATN: string;
    static __ATN: ATN;
    static readonly _ATN: ATN;
}
export declare class ErgoFormContext extends ParserRuleContext {
    items(): ItemsContext | undefined;
    itemRows(): ItemRowsContext | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: ErgoFormListener): void;
    exitRule(listener: ErgoFormListener): void;
    accept<Result>(visitor: ErgoFormVisitor<Result>): Result;
}
export declare class ItemsContext extends ParserRuleContext {
    item(): ItemContext[];
    item(i: number): ItemContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: ErgoFormListener): void;
    exitRule(listener: ErgoFormListener): void;
    accept<Result>(visitor: ErgoFormVisitor<Result>): Result;
}
export declare class ItemRowsContext extends ParserRuleContext {
    itemRow(): ItemRowContext[];
    itemRow(i: number): ItemRowContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: ErgoFormListener): void;
    exitRule(listener: ErgoFormListener): void;
    accept<Result>(visitor: ErgoFormVisitor<Result>): Result;
}
export declare class ItemRowContext extends ParserRuleContext {
    item(): ItemContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: ErgoFormListener): void;
    exitRule(listener: ErgoFormListener): void;
    accept<Result>(visitor: ErgoFormVisitor<Result>): Result;
}
export declare class ItemContext extends ParserRuleContext {
    itemExpress(): ItemExpressContext | undefined;
    itemFull(): ItemFullContext | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: ErgoFormListener): void;
    exitRule(listener: ErgoFormListener): void;
    accept<Result>(visitor: ErgoFormVisitor<Result>): Result;
}
export declare class ItemFullContext extends ParserRuleContext {
    itemType(): ItemTypeContext;
    COLON(): TerminalNode;
    obj(): ObjContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: ErgoFormListener): void;
    exitRule(listener: ErgoFormListener): void;
    accept<Result>(visitor: ErgoFormVisitor<Result>): Result;
}
export declare class ObjContext extends ParserRuleContext {
    pair(): PairContext[];
    pair(i: number): PairContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: ErgoFormListener): void;
    exitRule(listener: ErgoFormListener): void;
    accept<Result>(visitor: ErgoFormVisitor<Result>): Result;
}
export declare class PairContext extends ParserRuleContext {
    key(): KeyContext;
    value(): ValueContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: ErgoFormListener): void;
    exitRule(listener: ErgoFormListener): void;
    accept<Result>(visitor: ErgoFormVisitor<Result>): Result;
}
export declare class ArrayContext extends ParserRuleContext {
    value(): ValueContext[];
    value(i: number): ValueContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: ErgoFormListener): void;
    exitRule(listener: ErgoFormListener): void;
    accept<Result>(visitor: ErgoFormVisitor<Result>): Result;
}
export declare class KeyContext extends ParserRuleContext {
    STRING(): TerminalNode;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: ErgoFormListener): void;
    exitRule(listener: ErgoFormListener): void;
    accept<Result>(visitor: ErgoFormVisitor<Result>): Result;
}
export declare class ValueContext extends ParserRuleContext {
    STRING(): TerminalNode;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: ErgoFormListener): void;
    exitRule(listener: ErgoFormListener): void;
    accept<Result>(visitor: ErgoFormVisitor<Result>): Result;
}
export declare class ItemExpressContext extends ParserRuleContext {
    itemType(): ItemTypeContext;
    COLON(): TerminalNode;
    expressValue(): ExpressValueContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: ErgoFormListener): void;
    exitRule(listener: ErgoFormListener): void;
    accept<Result>(visitor: ErgoFormVisitor<Result>): Result;
}
export declare class ItemTypeContext extends ParserRuleContext {
    STRING(): TerminalNode;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: ErgoFormListener): void;
    exitRule(listener: ErgoFormListener): void;
    accept<Result>(visitor: ErgoFormVisitor<Result>): Result;
}
export declare class ExpressValueContext extends ParserRuleContext {
    STRING(): TerminalNode;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: ErgoFormListener): void;
    exitRule(listener: ErgoFormListener): void;
    accept<Result>(visitor: ErgoFormVisitor<Result>): Result;
}
