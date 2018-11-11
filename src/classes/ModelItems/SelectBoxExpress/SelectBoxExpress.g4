grammar SelectBoxExpress;

import selectItems;

selectBoxExpress
    :   label
    |   label ';' selectItems;

label
    :   STRING;

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