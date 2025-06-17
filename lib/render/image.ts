import type { TNode } from '../types';

const image = (node: TNode, mode: 'html'|'text'): string => {
    const fid = node.attrs?.fid ? `${node.attrs?.fid}` : '';
    const src = node.attrs?.src ? `${node.attrs?.src}` : '';
    const alt = node.attrs?.alt ? `${node.attrs?.alt}` : '';
    const title = node.attrs?.title ? `${node.attrs?.title}` : '';
    return mode === 'html' ? `\n<img src="${src}" fid="${fid}" alt="${alt}" title="${title}"/>\n` : `\n[IMAGE]\n`;
};

export default image;
