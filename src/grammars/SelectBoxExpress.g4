grammar SelectBoxExpress;

import selectItems;

selectBoxExpress
    :   label
    |   label ';' selectItems;

label
    :   STRING;

WS
   : [ \t\n\r] + -> skip
   ;