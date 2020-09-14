export const menu = (() => {
  const content = document.createElement('div');
  content.setAttribute('id', 'menu-content');

  //menu
  const myMenu = document.createElement('div');
  myMenu.setAttribute('id', 'menu');
  const ulMenu = document.createElement('ul');
  const menuItem1 = document.createElement('li');
  menuItem1.setAttribute('id', 'swallow');
  menuItem1.textContent = 'SWALLOW & AFANG';
  menuItem1.addEventListener('click', function(){render('swallow')});
  const menuItem2 = document.createElement('li');
  menuItem2.setAttribute('id', 'rice');
  menuItem2.textContent = 'RICE';
  menuItem2.addEventListener('click', function(){render('rice')});
  const menuItem3 = document.createElement('li');
  menuItem3.textContent = 'SALADS';
  menuItem3.setAttribute('id', 'salads');
  menuItem3.addEventListener('click', function(){render('salads')})
  const menuItem4 = document.createElement('li');
  menuItem4.textContent = 'DESSERTS';
  menuItem4.setAttribute('id', 'desserts');
  menuItem4.addEventListener('click', function(){render('desserts')})

  ulMenu.appendChild(menuItem1);
  ulMenu.appendChild(menuItem2);
  ulMenu.appendChild(menuItem3);
  ulMenu.appendChild(menuItem4);

  menu.appendChild(ulMenu);
  if(type === 'swallow'){
      //
      menuItem1.classList.add('activeTab');

      //menu items
      const menuItems = document.createElement('div');
      menuItems.setAttribute('id', 'menu-items');
      // item 1
      const item1 = document.createElement('div');
      item1.classList.add('menu-item');
      const itemHeader1 = document.createElement('div');
      itemHeader1.classList.add('menu-item-header');

      const name1 = document.createElement('h2');
      name1.classList.add('name');
      name1.textContent = 'CRAFT BURGER';
      const price1 = document.createElement('span');
      price1.classList.add('price');
      price1.textContent = '9$';

      itemHeader1.appendChild(name1);
      itemHeader1.appendChild(price1);
      //img
      const imgDiv1 = document.createElement('div');
      imgDiv1.classList.add('img-div');
      const img1 = document.createElement('img');
      img1.setAttribute('src', './images/swallow/burger1.jpg');
      imgDiv1.appendChild(img1);

      const itemDescription1 = document.createElement('div');
      itemDescription1.classList.add('menu-item-description');
      const p1 = document.createElement('p');
      p1.textContent = 'Lettuce, Tomato, Pickles, American, Caramelized Onion, Fry Sauce';
      itemDescription1.appendChild(p1);
      itemDescription1.appendChild(imgDiv1);

      item1.appendChild(itemHeader1);
      item1.appendChild(itemDescription1);
      // item 2
      const item2 = document.createElement('div');
      item2.classList.add('menu-item');
      const itemHeader2 = document.createElement('div');
      itemHeader2.classList.add('menu-item-header');

      const name2 = document.createElement('h2');
      name2.classList.add('name');
      name2.textContent = 'FRIED CHICKEN SANDWICH';
      const price2 = document.createElement('span');
      price2.classList.add('price');
      price2.textContent = '10$';

      itemHeader2.appendChild(name2);
      itemHeader2.appendChild(price2);
      //img
      const img2 = document.createElement('img');
      img2.setAttribute('src', './images/burgers/burger2.jpg');

      const itemDescription2 = document.createElement('div');
      itemDescription2.classList.add('menu-item-description');
      const p2 = document.createElement('p');
      p2.innerHTML = 'Lettuce, Tomato, Pickles, Kewpie Mayo <br> Choose from: Nashville Hot Spice Blend, Honey Garlic BBQ, or Buffalo';
      itemDescription2.appendChild(p2);
      itemDescription2.appendChild(img2);

      item2.appendChild(itemHeader2);
      item2.appendChild(itemDescription2);
      //item 3
      const item3 = document.createElement('div');
      item3.classList.add('menu-item');
      const itemHeader3 = document.createElement('div');
      itemHeader3.classList.add('menu-item-header');

      const name3 = document.createElement('h2');
      name3.classList.add('name');
      name3.textContent = 'PORK BELLY BURGER';
      const price3 = document.createElement('span');
      price3.classList.add('price');
      price3.textContent = '11$';

      itemHeader3.appendChild(name3);
      itemHeader3.appendChild(price3);
      //img
      const img3 = document.createElement('img');
      img3.setAttribute('src', './images/burgers/burger3.jpg');

      const itemDescription3 = document.createElement('div');
      itemDescription3.classList.add('menu-item-description');
      const p3 = document.createElement('p');
      p3.textContent = 'Hoisin Glazed Pork Belly and Burger Patty, Gochujang Aioli, Fried Shallots, Cabbage, Cilantro';
      itemDescription3.appendChild(p3);
      itemDescription3.appendChild(img3);


      item3.appendChild(itemHeader3);
      item3.appendChild(itemDescription3);
      //item 4

      const item4 = document.createElement('div');
      item4.classList.add('menu-item');
      const itemHeader4 = document.createElement('div');
      itemHeader4.classList.add('menu-item-header');

      const name4 = document.createElement('h2');
      name4.classList.add('name');
      name4.textContent = 'VEGAN CRAFT BURGER';
      const price4 = document.createElement('span');
      price4.classList.add('price');
      price4.textContent = '11$';

      itemHeader4.appendChild(name4);
      itemHeader4.appendChild(price4);
      //img
      const img4 = document.createElement('img');
      img4.setAttribute('src', './images/burgers/burger4.jpg');


      const itemDescription4 = document.createElement('div');
      itemDescription4.classList.add('menu-item-description');
      const p4 = document.createElement('p');
      p4.textContent = 'Lettuce, Tomatoes, Pickle, Cheddar, Fry Sauce';
      itemDescription4.appendChild(p4);
      itemDescription4.appendChild(img4);

      item4.appendChild(itemHeader4);
      item4.appendChild(itemDescription4);
      //item5 BEER BATTERED FISH PO'BOY
      const item5 = document.createElement('div');
      item5.classList.add('menu-item');
      const itemHeader5 = document.createElement('div');
      itemHeader5.classList.add('menu-item-header');

      const name5 = document.createElement('h2');
      name5.classList.add('name');
      name5.textContent = `BEER BATTERED FISH PO'BOY`;
      const price5 = document.createElement('span');
      price5.classList.add('price');
      price5.textContent = '10$';

      itemHeader5.appendChild(name5);
      itemHeader5.appendChild(price5);
      //img
      const img5 = document.createElement('img');
      img5.setAttribute('src', './images/burgers/burger5.jpg');


      const itemDescription5 = document.createElement('div');
      itemDescription5.classList.add('menu-item-description');
      const p5 = document.createElement('p');
      p5.textContent = 'Beer Battered Cod, Lettuce, Tomato, Cajun Remoulade, Pickles';
      itemDescription5.appendChild(p5);
      itemDescription5.appendChild(img5);

      item5.appendChild(itemHeader5);
      item5.appendChild(itemDescription5);
      //item 6 BBQ CHICKEN BANH MI
      const item6 = document.createElement('div');
      item6.classList.add('menu-item');
      const itemHeader6 = document.createElement('div');
      itemHeader6.classList.add('menu-item-header');

      const name6 = document.createElement('h2');
      name6.classList.add('name');
      name6.textContent = `BBQ CHICKEN BANH MI`;
      const price6 = document.createElement('span');
      price6.classList.add('price');
      price6.textContent = '9$';

      itemHeader6.appendChild(name6);
      itemHeader6.appendChild(price6);
      //img
      const img6 = document.createElement('img');
      img6.setAttribute('src', './images/burgers/burger6.jpg');


      const itemDescription6 = document.createElement('div');
      itemDescription6.classList.add('menu-item-description');
      const p6 = document.createElement('p');
      p6.textContent = 'Ginger Garlic Marinated Chicken Thigh, Cucumber, Pickled Daikon, Pickled Carrots, Cilantro, Fresh Jalapeno, Kewpie Mayo';
      itemDescription6.appendChild(p6);
      itemDescription6.appendChild(img6);

      item6.appendChild(itemHeader6);
      item6.appendChild(itemDescription6);
      const item7 = document.createElement('div');
      item7.classList.add('menu-item');
      const itemHeader7 = document.createElement('div');
      itemHeader7.classList.add('menu-item-header');

      const name7 = document.createElement('h2');
      name7.classList.add('name');
      name7.textContent = `BBQ STEAK BANH MI`;
      const price7 = document.createElement('span');
      price7.classList.add('price');
      price7.textContent = '10$';

      itemHeader7.appendChild(name7);
      itemHeader7.appendChild(price7);
      const img7 = document.createElement('img');
      img7.setAttribute('src', './images/burgers/burger7.jpg');


      const itemDescription7 = document.createElement('div');
      itemDescription7.classList.add('menu-item-description');
      const p7 = document.createElement('p');
      p7.textContent = 'Shallot Peppered Sirloin, Cucumber, Pickled Daikon, Pickled Carrots, Cilantro, Fresh Jalapeno, Kewpie Mayo';
      itemDescription7.appendChild(p7);
      itemDescription7.appendChild(img7);

      item7.appendChild(itemHeader7);
      item7.appendChild(itemDescription7);

      const item8 = document.createElement('div');
      item8.classList.add('menu-item');
      const itemHeader8 = document.createElement('div');
      itemHeader8.classList.add('menu-item-header');

      const name8 = document.createElement('h2');
      name8.classList.add('name');
      name8.textContent = `PORK BELLY BANH MI`;
      const price8 = document.createElement('span');
      price8.classList.add('price');
      price8.textContent = '11$';

      itemHeader8.appendChild(name8);
      itemHeader8.appendChild(price8);
      const img8 = document.createElement('img');
      img8.setAttribute('src', './images/burgers/burger8.jpg');


      const itemDescription8 = document.createElement('div');
      itemDescription8.classList.add('menu-item-description');
      const p8 = document.createElement('p');
      p8.textContent = 'Hoisin Sambal Glazed Belly, Cucumber, Pickled Daikon, Pickled Carrots, Cilantro, Fresh Jalapeno, Kewpie Mayo';
      itemDescription8.appendChild(p8);
      itemDescription8.appendChild(img8);

      item8.appendChild(itemHeader8);
      item8.appendChild(itemDescription8);

      menuItems.appendChild(item1);
      menuItems.appendChild(item2);
      menuItems.appendChild(item3);
      menuItems.appendChild(item4);
      menuItems.appendChild(item5);
      menuItems.appendChild(item6);
      menuItems.appendChild(item7);
      menuItems.appendChild(item8);
  }

  content.appendChild(myMenu);
  content.appendChild(menuItems);

  return content;
})();
