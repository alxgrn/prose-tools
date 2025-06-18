import render from '../lib/render';
import { getImageIds } from '../lib/tools';
import { content } from './content';
import './style.css'

const out = document.querySelector<HTMLDivElement>('#app');
const data = JSON.parse(content);
const html = render(data, 'text');
out!.innerHTML = `<textarea>${html}</textarea>`;
console.dir(getImageIds(content));
