/**
 * Рендер публикации в формате prose
 */
import doc from './doc';
import list from './list';
import list_item from './list_item';
import image from './image';
import video from './video';
import text from './text';
import code_block from './code_block';
import paragraph from './paragraph';
import blockquote from './blockquote';
import hard_break from './hard_break';
import horizontal_rule from './horizontal_rule';
import carousel from './carousel';
import heading from './heading';
import table from './table';
import table_row from './table_row';
import table_cell from './table_cell';
import type { TNode } from '../types';

const render = (node: TNode, mode: 'html'|'text'): string => {
    switch (node.type) {
        case 'doc':
            return doc(node, mode);
        case 'list_item':
            return list_item(node, mode);
        case 'bullet_list':
        case 'ordered_list':
            return list(node, mode);
        case 'image':
            return image(node, mode);
        case 'video':
            return video(node, mode);
        case 'text':
            return text(node, mode);
        case 'table':
            return table(node, mode);
        case 'table_row':
            return table_row(node, mode);
        case 'table_cell':
        case 'table_header':
            return table_cell(node, mode);
        case 'heading':
            return heading(node, mode);
        case 'code_block':
            return code_block(node, mode);
        case 'paragraph':
            return paragraph(node, mode);
        case 'blockquote':
            return blockquote(node, mode);
        case 'carousel':
            return carousel(node, mode);
        case 'horizontal_rule':
            return horizontal_rule(mode);
        case 'hard_break':
            return hard_break(mode);
        default:
            return `\n[${node.type}]\n`;
    }
};

export default render;
