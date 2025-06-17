import render from '.';
import type { TNode } from '../types';

const table = (node: TNode, mode: 'html'|'text'): string => {
    if (!Array.isArray(node.content)) return '';
    let out = '';
    node.content.forEach(node => out += render(node, mode));
    return mode === 'html' ? `\n<table><tbody>${out}</tbody></table>\n` : `\n${out}\n`;
};

export default table;
