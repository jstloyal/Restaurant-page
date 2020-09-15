const footer = () => {
  const footer = document.createElement('footer');
  const myFooter = document.createElement('div');
  myFooter.textContent = 'Copyright | MamaPut | 2020';

  footer.appendChild(myFooter);
  return footer;
};

export default footer();
