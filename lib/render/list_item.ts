import render from '.';
import type { TNode } from '../types';

const list_item = (node: TNode, mode: 'html'|'text'): string => {
    let out = mode === 'html' ? '<li>\n' : '\n';
    if (Array.isArray(node.content)) {
        node.content.forEach(node => out += render(node, mode));
    }
    out += mode === 'html' ? '</li>\n' : '\n';
    return out;
};

export default list_item;
