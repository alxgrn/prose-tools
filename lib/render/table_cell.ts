import render from '.';
import type { TNode } from '../types';

const table_cell = (node: TNode, mode: 'html'|'text') => {
    const rowspan = node.attrs?.rowspan ? parseInt(node.attrs.rowspan + '') : 1;
    const colspan = node.attrs?.colspan ? parseInt(node.attrs.colspan + '') : 1;
    let type = node.type === 'table_header' ? 'th' : 'td';
    let out = mode === 'html' ? `<${type} colspan="${colspan}" rowspan="${rowspan}">\n` : '';
    if (Array.isArray(node.content)) {
        node.content.forEach(node => out += render(node, mode));
    }
    out += mode === 'html' ? `</${type}>\n` : '\n';
    return out;
};

export default table_cell;
