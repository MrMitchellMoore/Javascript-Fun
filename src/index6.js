const userList = document.querySelector('.name-list li');
const usersList = document.querySelectorAll('.name-list li');
const text = document.querySelector('.title');
const changeColor = document.querySelector('.changeColor');
const listInput = document.querySelector('.list-input');
const addListBtn = document.querySelector('.addListBtn');

changeColor.addEventListener('click', function() {
  text.classList.toggle('change');
});

addListBtn.addEventListener('click', function() {
  // create a new li
  const newLi = document.createElement('li');
  const liContent = document.createTextNode(listInput.value);
  // add input value inside the new li
  newLi.appendChild(liContent);
  // attach li to the userList
  userList.appendChild(newLi);
});
let users = '';
for (users of usersList) {
  users.addEventListener('click', function() {
    if (this.style.color !== 'red') {
      this.style.color = 'red';
    } else {
      this.style.color = 'black';
    }
  });
}
