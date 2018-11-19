export interface IsSemantic {
    sem: Semantic;
}

export enum Semantic {
    none,
    primary,
    secondary,
    success,
    info,
    danger,
    warning,
    light,
    dark
}

export function fillSemantic(key: string, value: string, target: IsSemantic) {
    if (key === 'sem') {
        target.sem = parseSemantic(value);
    }
}

export function parseSemantic(value: string): Semantic {
    const answer = value.trim().toLowerCase();
    switch (answer) {
        case '0':
        case 'none':
        case 'nothing':
        case 'no':
            return Semantic.none;
        case '1':
        case 'primary':
            return Semantic.primary;
        case '2':
        case 'secondary':
            return Semantic.secondary;
        case '3':
        case 'success':
            return Semantic.success;
        case '4':
        case 'info':
        case 'information':
            return Semantic.info;
        case '5':
        case 'danger':
        case 'error':
            return Semantic.danger;
        case '6':
        case 'warning':
            return Semantic.warning;
        case '7':
        case 'light':
            return Semantic.light;
        case '8':
        case 'dark':
            return Semantic.primary;
        default:
            return Semantic.none;
    }
}
