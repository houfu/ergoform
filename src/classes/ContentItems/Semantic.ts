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
        target.sem = +value;
    }
}

