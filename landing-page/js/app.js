/** Global Variables */
let sections = document.querySelectorAll('.sections');
let newUl = document.querySelector('#navbar__list');
let documentFrag = document.createDocumentFragment();
const menuBars =document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const navBar = document.querySelector('.navbar__menu')


/*function myFunction() {
    if (navBar.style.display === "block") {
        navBar.style.display = "none";
    } else {
        navBar.style.display = "block";
    }
}*/

function toggleNav() {
    menuBars.classList.toggle('change1');
    navBar.classList.toggle('change');
    if (navBar.classList.contains('change')) {
        navBar.classList.add('change')
    } else {
        navBar.classList.remove('change')
    }
}

menuBars.addEventListener('click', toggleNav)

/** forEach loop to create the Dynamic Navbar */
sections.forEach((section) => {
    function generator(){
    if (n=0, n>=sections.length, n++) {
            console.log(n);
            }}
    let dataNew = section.getAttribute("data-nav");
    let newList = document.createElement('li');
    newList.addEventListener('click', () => {
        section.scrollIntoView({ behavior: 'smooth', block: 'center' })
    });
    let newLnk = document.createElement('a');
    let txNd = document.createTextNode(dataNew);
    //newLnk.classList.add(dataNew);
    newLnk.appendChild(txNd);
    newList.appendChild(newLnk);
    documentFrag.appendChild(newList);
    
})
newUl.appendChild(documentFrag)

/** getting the boundries for the active section and change the active section */

window.addEventListener('scroll', () => {
    sections.forEach((section)=>{
         let rect = section.getBoundingClientRect();
         if (rect.top>=0 && rect.top <= 150) {
              sections.forEach ((remover) => {
                 remover.classList.remove('active');
        });
             section.classList.add('active');
    }
    })
})

menuBars.addEventListener('click', () => {
    
})