declare module '*.scss' {
    const content: Record<string, string>;
    export default content;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

declare module '*.svg' {
    import { FunctionComponent, SVGAttributes } from 'react';

    const content: FunctionComponent<SVGAttributes<SVGElement>>;
    export default content;
}

declare const __IS_DEV__: boolean;
declare const __API__: string;

type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;
