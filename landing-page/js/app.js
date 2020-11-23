/** Global Variables */
let sections = document.querySelectorAll('.sections');
let newUl = document.querySelector('#navbar__list');
let documentFrag = document.createDocumentFragment();

/** forEach loop to create the Dynamic Navbar */
sections.forEach((section) => {
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

/** getting the boundries for the active section */
sections.forEach((section)=>{
    var rect = section.getBoundingClientRect();
    lft=rect.left;
    tp=rect.top;
    wdth=rect.width;
    hght=rect.height;
})

if (tp=>0 && hght < window.innerHeight){
    sections.forEach((section) => {
            section.classList.remove('your-active-class');
        });
        section.classList.add('your-active-class');
}
   

/** adding an event listener when scroll to trigger the action*/
sections.forEach((section) =>{
    section.addEventListener('click', ()=>{
        let actvAnchor = document.querySelectorAll('a')
        let sectionNav = item.getAttribute('data-nav');
        if(activeLink.textContent == sectionNav){
            this.classList.remove('your-active-class');
            section.classList.add('your-active-class')}
        })
})