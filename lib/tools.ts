import type { TNode } from "./types";

/**
 * Отдает список всех идентификаторов изображений из документа
 * @param content сериализованный в строку контент в формате ProseMirror
 * @param field название поля идентификатора, по-умолчанию `fid`
 * @returns массив цифровых идентификаторов изображений в статье
 */
export const getImageIds = (content: string, field: string|undefined = 'fid'): number[] => {
    try {
        const ids: number[] = [];
        const doc = JSON.parse(content);
        if (typeof doc !== 'object') throw new Error('Content is not an object');
        if (doc.type !== 'doc') throw new Error('Content type does not have doc value');
        // console.dir(doc);
        // Рекурсивная функция обхода узлов     
        function descendants (node: TNode, prefix: string) {
            // console.log(`${prefix} ${node.type}`);
            if (node.type === 'image' && node.attrs && node.attrs[field]) {
                // fid в image может быть null|number|string|undefined
                const fid = parseInt(node.attrs[field] + '');
                if (!isNaN(fid)) ids.push(fid);
            }
            if (!Array.isArray(node.content)) return;
            node.content.forEach(node => descendants(node, `${prefix}-`));
        };
        descendants(doc as TNode, '-');
        // console.log(`Image ids: ${ids}`);
        return ids;
    } catch (error) {
        console.error(`getImageIds: ${error}`);
        return [];
    }
};
