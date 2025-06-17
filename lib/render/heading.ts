import render from '.';
import type { TNode } from '../types';

const heading = (node: TNode, mode: 'html'|'text') => {
    if (!Array.isArray(node.content)) return '';
    let out = '';
    let h = '';
    if (mode === 'html') {
        switch (node.attrs?.level) {
            case 1: h = 'h1'; break;
            case 2: h = 'h2'; break;
            case 3: h = 'h3'; break;
            case 4: h = 'h4'; break;
            case 5: h = 'h5'; break;
            case 6: h = 'h6'; break;
            default: h = 'h1';
        }
    }
    node.content.forEach(node => out += render(node, mode));
    return mode === 'html' ? `<${h}>${out}</${h}>\n` : `${out}\n`;
};

export default heading;
