
const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionButtonInput = document.querySelector('input.description');
const descriptionButtonP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');




listDiv.addEventListener('mouseover', (event) => {
  if (event.target.tagName == 'LI') {
    event.target.textContent = event.target.textContent.toUpperCase();
    }
    });
  
listDiv.addEventListener('mouseout', (event) => {
   if (event.target.tagName == 'LI') {
    event.target.textContent = event.target.textContent.toLowerCase();
   }
    });



toggleList.addEventListener('click', () => {
   if (listDiv.style.display == 'none') {
  toggleList.textContent = 'Hide List';
  listDiv.style.display = 'block';
} else {
   toggleList.textContent = 'Show List';
   listDiv.style.display = 'none';}                     
});

descriptionButton.addEventListener('click', () => {
  descriptionButtonP.innerHTML = descriptionButtonInput.value + ':';
  descriptionButtonInput.value = '';
});

addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  ul.appendChild(li);
  addItemInput.value = '';
});

removeItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.querySelector('li:last-child');
  ul.removeChild(li);
});

