import {navbar} from './js/navigation';
import {home} from './js/home';
// console.log("Hello World")

const content = document.querySelector('#content');
content.appendChild(navbar);
content.appendChild(home);
