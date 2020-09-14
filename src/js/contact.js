export const contact = (() => {
  const content = document.createElement('div');
  content.setAttribute('id', 'contactContent');

  const contactInfo = document.createElement('div');
  contactInfo.setAttribute('id', 'contactInfo');
  const contactH2 = document.createElement('h2');
  contactH2.textContent = 'CONTACT';

  const itemOne = document.createElement('div');
  itemOne.classList.add('contactItem');
  const p1 = document.createElement('p');
  p1.innerHTML = `72 Fani Kayode Street<br> Ikeja GRA, Lagos.`;
  itemOne.appendChild(p1);

  const itemTwo = document.createElement('div');
  itemTwo.classList.add('contactItem');
  const p2 = document.createElement('p');
  p2.innerHTML = `<strong class='name'>Sun-Thurs:</strong> 9am-9pm <br><strong class='name'>Fri-Sun: </strong> 12pm-6pm `;
  itemTwo.appendChild(p2);

  const itemThree = document.createElement('div');
  itemThree.classList.add('contactItem');
  const p3 = document.createElement('p');
  p3.setAttribute('id', 'numberFont');
  p3.textContent = `333.545.232`;
  itemThree.appendChild(p3);

  const itemFour = document.createElement('div');
  itemFour.classList.add('contactItem');
  const p4 = document.createElement('h3');
  p4.textContent = 'MESSAGE US';
  itemFour.appendChild(p4);

  const item5 = document.createElement('div');
  item5.setAttribute('id', 'emailSender');
  const form = document.createElement('form');
  form.setAttribute('action', 'mailto:jstloyalty@gmail.com');
  form.setAttribute('autocomplete', 'off');
  form.setAttribute('method', 'post');
  form.setAttribute('enctype', 'text/plain');
  const input1 = document.createElement('input');
  input1.setAttribute('type', 'text');
  input1.setAttribute('id', 'name');
  input1.setAttribute('size', '25');
  input1.setAttribute('placeholder', 'Name');
  const input2 = document.createElement('input');
  input2.setAttribute('type', 'text');
  input2.setAttribute('id', 'name');
  input2.setAttribute('size', '25');
  input2.setAttribute('placeholder', 'Phone Number');
  const input3 = document.createElement('input');
  input3.setAttribute('type', 'text');
  input3.setAttribute('id', 'name');
  input3.setAttribute('size', '25');
  input3.setAttribute('placeholder', 'Email Address');
  const textarea = document.createElement('textarea');
  textarea.setAttribute('name', 'message');
  textarea.setAttribute('id', 'message');
  textarea.setAttribute('cols', '25');
  textarea.setAttribute('rows', '4');
  textarea.setAttribute('placeholder', 'Message');
  textarea.setAttribute('resize', 'none');
  const input4 = document.createElement('input');
  input4.setAttribute('type', 'submit');
  input4.setAttribute('value', 'Send message');
  input4.setAttribute('id', 'send');

  form.appendChild(input1);
  form.appendChild(input2);
  form.appendChild(input3);
  form.appendChild(textarea);
  form.appendChild(input4);

  item5.appendChild(form);

  contactInfo.appendChild(contactH2);
  contactInfo.appendChild(itemOne);
  contactInfo.appendChild(itemTwo);
  contactInfo.appendChild(itemThree);
  contactInfo.appendChild(itemFour);
  contactInfo.appendChild(item5);

  const contactMaps = document.createElement('div');
  contactMaps.setAttribute('id', 'contactMaps');
  const map = document.createElement('div');
  map.setAttribute('id', 'map');
  map.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.5760673018394!2d3.3514878147709815!3d6.575063595244777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b920dd121957b%3A0xca91e3d5938c14af!2sRemi%20Fani-Kayode%20Ave%2C%20Ikeja%20GRA%2C%20Lagos!5e0!3m2!1sen!2sng!4v1600072884661!5m2!1sen!2sng" width="800" height="600" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`;
  contactMaps.appendChild(map);

  content.appendChild(contactInfo);
  content.appendChild(contactMaps);

  return content;
})();
