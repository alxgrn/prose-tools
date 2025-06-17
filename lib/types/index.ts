export type TNode = {
    type: string;
    text?: string;
    content?: TNode[];
    attrs?: {
        [name: string]: string|number|null|string[];
    };
    marks?: [{
        [name: string]: string|number|null;
    }];
};
