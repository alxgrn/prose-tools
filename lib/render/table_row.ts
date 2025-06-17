import render from '.';
import type { TNode } from '../types';

const table_row = (node: TNode, mode: 'html'|'text'): string => {
    let out = mode === 'html' ? '<tr>\n' : '\n';
    if (Array.isArray(node.content)) {
        node.content.forEach(node => out += render(node, mode));
    }
    out += mode === 'html' ? '</tr>\n' : '\n';
    return out;
};

export default table_row;
