const listParent = document.getElementById("ordered-list");
const fragment = document.createDocumentFragment();
let count = 0;
const listItems = listParent.children;
function clickLi() {
  const liElement = document.createElement("li");
  const newText = document.createTextNode(`NewListItem ${count}`);
  if (count % 2 === 0){
    liElement.classList.add('big')
  } else{
    liElement.classList.add('blue')
  }
  liElement.appendChild(newText);
  fragment.append(liElement);
  listParent.append(fragment);
  count += 1;
}

function deleteLi(){
    const toRemove = Array.from(listItems).pop()
    toRemove.remove()
}

const scrollableElement = document.getElementsByClassName('scrollable')[0];
console.log("client height",scrollableElement.clientHeight);
// clientheight is the height of the visible area of an element plus it's padding
console.log("offset height",scrollableElement.offsetHeight);
// this includes the client height plus the border height, and the scrollbar height.
console.log("scroll height",scrollableElement.scrollHeight);
// this includes the total scroll height, plus the padding.
console.log("scroll height",scrollableElement.offsetTop);
// distance from the outer border to inner position parent border.

function scrollTheDiv (){
    const allPs = scrollableElement.querySelectorAll('p');
    const lastElement = allPs[Array.from(allPs).length - 1];
    lastElement.scrollIntoView()
}
function scrollTheDivTop (){
    const allPs = scrollableElement.querySelectorAll('p');
    const firstElement = allPs[0];
    scrollableElement.scrollTo({
        top: firstElement.offsetTop,
        behavior: 'smooth'
    })
}


// scrolling
window.addEventListener('loa')