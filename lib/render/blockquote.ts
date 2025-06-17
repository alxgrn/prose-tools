import render from '.';
import type { TNode } from '../types';

const blockquote = (node: TNode, mode: 'html'|'text'): string => {
    let out = mode === 'html' ? '<blockquote>\n' : '\n';
    if (Array.isArray(node.content)) {
        node.content.forEach(node => out += render(node, mode));
    }
    out += mode === 'html' ? '</blockquote>\n' : '\n';
    return out;
};

export default blockquote;
