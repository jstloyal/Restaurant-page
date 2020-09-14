export const navbar = (() => {
  const navigationMenu = document.createElement('nav');
  navigationMenu.setAttribute('id', 'mainNav');
  const ul = document.createElement('ul');
  const listOne = document.createElement('li');
  listOne.textContent = 'Home';
  listOne.setAttribute('id', 'homeList');
  listOne.setAttribute('class', 'active')
  const listTwo = document.createElement('li');
  listTwo.textContent = 'Menu';
  listTwo.setAttribute('id', 'menuList');
  const listThree = document.createElement('li');
  listThree.textContent = 'Contact';
  listThree.setAttribute('id', 'contactList');
  const listFour = document.createElement('li');
  listFour.textContent = 'About';
  listFour.setAttribute('id', 'aboutList');

  ul.appendChild(listOne);
  ul.appendChild(listTwo);
  ul.appendChild(listThree);
  ul.appendChild(listFour);
  navigationMenu.appendChild(ul);
  return navigationMenu;
})();
