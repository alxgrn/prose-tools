import type { TNode } from '../types';

const text = (node: TNode, mode: 'html'|'text'): string => {
    if (!node.text) return '';

    const inline = (marks: any, text: string): string => {
        if (!Array.isArray(node.marks)) return text;
        if (!marks.length) return text;
        if (mode === 'text') return text;

        const type = marks[0].type;
        const href = marks[0].attrs?.href;

        switch (type) {
            case 'em':
                return `<em>${inline(marks.slice(1), text)}</em>`;
            case 'code':
                return `<code>${inline(marks.slice(1), text)}</code>`;
            case 'strong':
                return `<strong>${inline(marks.slice(1), text)}</strong>`;
            case 'underline':
                return `<u>${inline(marks.slice(1), text)}</u>`;
            case 'strikethrough':
                return `<s>${inline(marks.slice(1), text)}</s>`;
            case 'link':
                return href ? `<a target="_blank" href="${href}">${inline(marks.slice(1), text)}</a>` : inline(marks.slice(1), text);
            default:
                return inline(marks.slice(1), text);
        }
    };

    return inline(node.marks, node.text);
};

export default text;
