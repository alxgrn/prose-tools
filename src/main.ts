import render from '../lib/render';
import { content } from './content';
import './style.css'

const out = document.querySelector<HTMLDivElement>('#app');
const data = JSON.parse(content);
const html = render(data, 'html');
out!.innerHTML = html;
console.log(html);