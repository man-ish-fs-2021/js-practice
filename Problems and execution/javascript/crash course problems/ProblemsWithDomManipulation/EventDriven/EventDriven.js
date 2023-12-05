const button = document.querySelector('button');

function onClick(event){
    console.log("clicked", event);
}
button.addEventListener('click', onClick)
// abort controller removes the event listener.
// dblclick -> double click
// mouse down -> when mouse is clicked down
// mouse up -> when mouse is released on a element

// window.addEventListener('keydown', (e) => {console.log(e.code)})
// keydown on key down
// keyup on key release

// scrolling
const scrollable = document.getElementById('scrollable');
const scrollable2 = document.getElementById('scrollable2');

scrollable.addEventListener('scroll', (e) => {
    // console.log(e.target.scrollTop);
});
// tells us how far down we have scrolled

scrollable.addEventListener('mouseenter', (e) => {
    // console.log("mouse enter", {x: e.pageX, y: e.pageY})
});
// tells us from where the mouse entered.
scrollable.addEventListener('mousemove', (e) => {
    // console.log("mouse move", {x: e.pageX, y: e.pageY})
});

button.addEventListener('dragstart', (e) => {
    // console.log("dragStart", e);
});

scrollable.addEventListener('drop', (e)=>{
    scrollable.prepend(button);
});

scrollable.addEventListener('dragover', (e) => {
    e.preventDefault();
});

scrollable2.addEventListener('drop', () => {
    scrollable2.append(button);
    scrollable2.scrollTo({
        behavior: 'smooth',
        top: button.offsetTop
    })
});
scrollable2.addEventListener('dragover', (e) => {
    e.preventDefault();
});



// Event delegation


