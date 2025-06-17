import render from '.';
import type { TNode } from '../types';

const list = (node: TNode, mode: 'html'|'text'): string => {
    let out = mode === 'text' ? '\n' : (node.type === 'bullet_list' ? '<ul>\n' : '<ol>\n');
    if (Array.isArray(node.content)) {
        node.content.forEach(node => out += render(node, mode));
    }
    out += mode === 'text' ? '\n' : (node.type === 'bullet_list' ? '</ul>\n' : '</ol>\n');
    return out;
};

export default list;
