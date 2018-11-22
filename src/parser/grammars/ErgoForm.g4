grammar ErgoForm;

import Item;

ergoForm
    : items
    | itemRows
    ;

items
    :   '[' item (',' item)* ']'
    |   '[' ']'
    ;

itemRows
    : itemRow+;

itemRow
    :   item ('\r' | '\n')
    ;
