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
allLi[0].classList.remove('blue');
allLi[0].classList.add('blue');
allLi[0].classList.toggle('big');

const p = document.createElement('p');
p.textContent = 'Hello World';
document.body.appendChild(p);
document.body.appendChild(p, 'hello');
document.body.append(p, 'hello');
document.body.prepend(p, 'hello');

document.body.innerHTML += '<p>HTML Test String</p>'; //not use super buggy

for (let i = 0; i < 3; i++) {
  const parent = document.querySelector('ol');
  const li = document.createElement('li');
  li.textContent = `List item with i=${i}`;
  parent.append(li);
}

const parent = document.querySelector('ol');
const fragment = document.createDocumentFragment();
for (let i = 0; i < 3; i++) {
  const li = document.createElement('li');
  li.textContent = `List item with i=${i}`;
  fragment.append(li);
}
parent.append(fragment);

allLi[0].classList.add('big');
console.log(window.getComputedStyle(allLi[0]).fontSize);

const scrollable = document.getElementById('scrollable');

console.log(scrollable.clientHeight);
console.log(scrollable.offsetHeight);
console.log(scrollable.scrollHeight);
console.log(scrollable.offsetTop);
console.log(scrollable.querySelectorAll('p')[5].offsetTop);
scrollable.querySelectorAll('p')[5].scrollIntoView();

scrollable.scrollTo({
  top: scrollable.querySelectorAll('p')[0].offsetTop,
  behavior: 'smooth',
});
