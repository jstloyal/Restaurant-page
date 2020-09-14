import { navbar } from './js/navigation';
import { home } from './js/home';
import { about } from './js/about';
import { contact } from './js/contact';
import { footer } from './js/footer';
// console.log("Hello World")

const content = document.querySelector('#content');
content.appendChild(navbar);
content.appendChild(home);
content.appendChild(about);
content.appendChild(contact);
content.appendChild(footer);
