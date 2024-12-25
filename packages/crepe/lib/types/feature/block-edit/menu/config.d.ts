import type { BlockEditFeatureConfig } from '../index';
export declare function getGroups(filter?: string, config?: BlockEditFeatureConfig): {
    groups: ({
        key: string;
        label: string;
        items: import("./utils").MenuItem[];
    } & {
        range: [start: number, end: number];
    })[];
    size: number;
};
//# sourceMappingURL=config.d.ts.map