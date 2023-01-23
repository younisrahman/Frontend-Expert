// const secondLi = document.getElementById('second-li');
// const firstLi = document.querySelector('li');
const allLi = document.querySelectorAll('li');
// const bycCass = document.getElementsByClassName('list-item');
// const byTag = document.getElementsByTagName('ol');
// console.log(firstLi);
// console.log(secondLi);
// console.log(allLi);

allLi[0].textContent = 'Changed';
allLi[0].value = 10;
allLi[0].setAttribute('value', 11);
allLi[0].setAttribute('class', 'blue big');
allLi[0].classList.add('blue');
