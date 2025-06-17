import render from '.';
import type { TNode } from '../types';

const paragraph = (node: TNode, mode: 'html'|'text'): string => {
    let out = mode === 'html' ? '<p>\n' : '\n';
    if (Array.isArray(node.content)) {
        node.content.forEach(node => out += render(node, mode));
    }
    out += mode === 'html' ? '</p>\n' : '\n';
    return out;
};

export default paragraph;
