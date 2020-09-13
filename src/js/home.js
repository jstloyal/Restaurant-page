export const home = (() => {
  const homePage = document.createElement('div');
  homePage.setAttribute('id', 'mySlogan');
  const myMotto = document.createElement('h1');
  myMotto.setAttribute('id', 'myMotto');
  myMotto.textContent = 'HEALTHY HOME-MADE MEAL FOR YOU';
  const info = document.createElement('div');
  info.setAttribute('id', 'homeInfo');
  const paragraph = document.createElement('p');
  paragraph.textContent = 'Every meal starts with locally sourced ingredients. Real taste of African dish is guaranteed!';

  homePage.appendChild(myMotto);
  info.appendChild(paragraph);
  homePage.appendChild(info);
  return homePage;
})();
