const panels = document.querySelectorAll('.panel')
console.log(panels[4]);

panels.forEach(panel=>{
    panel.addEventListener('click',()=>{
        removeActiveClasses()
        panel.classList.add('active')
    })
})
function removeActiveClasses(){
    panels.forEach(panel=>{
        panel.classList.remove('active')
    })
}



// const pictures = document.querySelectorAll(".pic");

// pictures.forEach(element => {
//     element.addEventListener("click", () => {
//         remove();
//         element.setAttribute("class", "active")
//     })
// });

// function remove() {
//     pictures.forEach(element => {
//         element.setAttribute("class", "pic")
//     });
// }

// it is important to use different fucntions in javaScript. By this way we use one
// function in another function. it gives our codes flexibility.orders of lines 
// are crucial for working of the script 