import { navbar } from './js/navigation';
import { home } from './js/home';
import { about } from './js/about';
import { menu } from './js/menu';
import { contact } from './js/contact';
import { footer } from './js/footer';

const content = document.querySelector('#content');
content.appendChild(navbar);
content.appendChild(home);
content.appendChild(footer);

const nav = document.getElementById('mainNav');

nav.addEventListener('click', (e) => {
  let tab = e.target.textContent

  if (tab === "Menu") {
    content.innerHTML = ""
    content.appendChild(navbar);
    content.appendChild(menu);
    content.appendChild(footer);

  } else if (tab === "Contact") {
    content.innerHTML = ""
    content.appendChild(navbar);
    content.appendChild(contact);
    content.appendChild(footer);

  } else if (tab === "About") {
    content.innerHTML = ""
    content.appendChild(navbar);
    content.appendChild(about);
    content.appendChild(footer);

  } else if (tab === "Home") {
    content.innerHTML = ""
    content.appendChild(navbar);
    content.appendChild(home);
    content.appendChild(footer);
  }
})
