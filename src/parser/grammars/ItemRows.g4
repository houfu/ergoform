grammar ItemRows;

itemRows
    : itemRow+
    ;

itemRow
    :   item (',' NEWLINE |';' NEWLINE | NEWLINE)?
    ;

item
    : itemExpress
    | itemFull
    ;

itemFull
    : itemType COLON obj
    ;

obj
   : '{' pair (',' pair)* '}'
   | '{' '}'
   ;

pair
   : key ':' value
   ;

key
    : STRING
    ;

value
   : STRING
   ;

itemExpress
    : itemType COLON expressValue
    ;

itemType
    : STRING
    ;

expressValue
    : STRING
    ;

COLON : ':' ;

STRING
   : '"' (ESC | SAFECODEPOINT)* '"'
   ;

fragment ESC
   : '\\' (["\\/bfnrt] | UNICODE)
   ;

fragment UNICODE
   : 'u' HEX HEX HEX HEX
   ;

fragment HEX
   : [0-9a-fA-F]
   ;

fragment SAFECODEPOINT
   : ~ ["\\\u0000-\u001F]
   ;

NUMBER
   : '-'? INT ('.' [0-9] +)? EXP?
   ;

fragment INT
   : '0' | [1-9] [0-9]*
   ;

// no leading zeros

fragment EXP
   : [Ee] [+\-]? INT
   ;

// \- since - means "range" inside [...]

NEWLINE
    : '\r'|'\n';

WS
   : [ \t] + -> skip
   ;