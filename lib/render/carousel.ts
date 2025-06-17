import type { TNode } from '../types';
import image from './image';

const carousel = (node: TNode, mode: 'html'|'text'): string => {
    if (!Array.isArray(node.content)) return '';
    let out = '';
    node.content.forEach(node => out += image(node, mode));
    return out;
};

export default carousel;
