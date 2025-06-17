import type { TNode } from '../types';

const video = (node: TNode, mode: 'html'|'text'): string => {
    const allow = 'fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    const title = node.attrs?.title ? `${node.attrs.title}` : '';
    let src = node.attrs?.src ? node.attrs.src : '';
    if (Array.isArray(src)) src = src[0];

    return mode === 'html' ? `<iframe src="${src}" allow="${allow}" title="${title}"></iframe>` : '\n[VIDEO]\n';
};

export default video;
