const button = document.querySelector('button');
button.addEventListener('click', changeBackground);

const changeBackground = () => {
  document.body.style.backgroundColor = 'tomato';
};
