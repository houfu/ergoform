grammar Items;

import Item;

items
    :   '[' item (',' item)* ']'
    |   '[' ']'
    ;