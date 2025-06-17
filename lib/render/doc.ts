import render from '.';
import type { TNode } from '../types';

const doc = (node: TNode, mode: 'html'|'text'): string => {
    let out = '';
    if (Array.isArray(node.content)) {
        node.content.forEach(node => out += render(node, mode));
    }
    return out;
};

export default doc;
