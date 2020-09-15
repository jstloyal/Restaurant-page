const menu = () => {
  const content = document.createElement('div');
  content.setAttribute('id', 'menuContent');

  const myMenu = document.createElement('div');
  myMenu.setAttribute('id', 'menu');
  const ulMenu = document.createElement('ul');
  const menuItem1 = document.createElement('li');
  menuItem1.setAttribute('id', 'swallow');
  menuItem1.textContent = 'GARRI & AFANG - N1,000';
  const menuItem2 = document.createElement('li');
  menuItem2.setAttribute('id', 'rice');
  menuItem2.textContent = 'JOLLOF-RICE - N7,00';
  const menuItem3 = document.createElement('li');
  menuItem3.textContent = 'AMALA GBEGIRI & AWEDU - N1,500';
  menuItem3.setAttribute('id', 'salads');
  const menuItem4 = document.createElement('li');
  menuItem4.textContent = 'SUYA - N1,000';
  menuItem4.setAttribute('id', 'desserts');
  const menuItem5 = document.createElement('li');
  menuItem5.textContent = 'EDIKAIKONG & FUFU - N1,000';
  menuItem5.setAttribute('id', 'desserts');

  ulMenu.appendChild(menuItem1);
  ulMenu.appendChild(menuItem2);
  ulMenu.appendChild(menuItem3);
  ulMenu.appendChild(menuItem4);
  ulMenu.appendChild(menuItem5);

  myMenu.appendChild(ulMenu);

  content.appendChild(myMenu);

  return content;
};

export default menu();
