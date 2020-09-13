import {navbar} from './js/navigation';
import {home} from './js/home';
import {footer} from './js/footer';
// console.log("Hello World")

const content = document.querySelector('#content');
content.appendChild(navbar);
content.appendChild(home);
content.appendChild(footer);
