import render from '.';
import type { TNode } from '../types';

const code_block = (node: TNode, mode: 'html'|'text'): string => {
    let out = mode === 'text' ? '\n' : '<pre>\n';
    if (Array.isArray(node.content)) {
        node.content.forEach(node => out += render(node, mode));
    }
    out = mode === 'text' ? '\n' : '</pre>\n';
    return out;
};

export default code_block;
