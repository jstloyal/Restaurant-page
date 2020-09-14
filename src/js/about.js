export const about = (() => {
  const section = document.createElement('section');
  section.setAttribute('id', 'aboutContent');

  const aboutImages = document.createElement('div');
  aboutImages.setAttribute('id', 'aboutImg');
  const firstImg = document.createElement('img');
  firstImg.setAttribute('src', './images/recipe.jpg');
  firstImg.setAttribute('id', 'kitchen');
  firstImg.setAttribute('alt', 'making your dish');
  const secondImg = document.createElement('img');
  secondImg.setAttribute('id', 'meal');
  secondImg.setAttribute('src', 'images/Afang.jpg');
  secondImg.setAttribute('alt', 'afang soup');
  aboutImages.appendChild(firstImg);
  // aboutImages.appendChild(secondImg);

  const aboutText = document.createElement('div');
  aboutText.setAttribute('id', 'aboutText');
  const aboutHeader = document.createElement('div');
  aboutHeader.setAttribute('id', 'aboutHeader');
  const h2 = document.createElement('h2');
  h2.textContent = 'ABOUT US';
  aboutHeader.appendChild(h2);
  const firstPara = document.createElement('p');
  firstPara.innerHTML = 'When we open MamaPut in April 2019, our vision was to create an unassuming watering holes for locals and foreigners. In a town with endless options, we found it challenging to find a friendly location, good food, and non-gaming/non-smoking. We want to provide friends and neighbors alike with the original form of Afican delicacies. Our staunch belief in providing exceptional quality meals with a friendly service in a clean and welcoming settings has helped us earn the reputation among the locals as one of the best hidden gems in Lagos.';
  const secondPara = document.createElement('p');
  secondPara.innerHTML = 'MamaPut is a culmination of giving our best to the community through our food, service, and atmosphere. Tucked inside one of the premier location in Lagos, this collaboration project allows us another opportunity to create a memorable setting for you to catch up with friends and make new ones over tasty bites and a refreshing meal.';
  aboutText.appendChild(aboutHeader);
  aboutText.appendChild(firstPara);
  aboutText.appendChild(secondPara);

  section.appendChild(aboutText);
  section.appendChild(aboutImages);

  return section;
})();
