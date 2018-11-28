grammar SelectItems;

selectItems
    :   '[' item (',' item)* ']'
    |   '[' ']'
    |   item
    ;

item
    :   value
    |   pair
    ;

/* TODO: pair should be key and value to match class definition. */

pair
    :   value ':' value
    ;

value
    :   STRING
    ;

/*
 * Lexer Rules
 */

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

WS
   : [ \t\n\r] + -> skip
   ;
