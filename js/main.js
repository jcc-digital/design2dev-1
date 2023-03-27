//Drop-down Menu Links
document.addEventListener("click", e => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]")
  if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return
  
  let currentDropdown
  if (isDropdownButton) {
    currentDropdown = e.target.closest("[data-dropdown]")
    currentDropdown.classList.toggle("active")
  }
  
  document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
    if (dropdown === currentDropdown) return
    dropdown.classList.remove("active")
  })
})


//For Toggle: Get Toggle and show first element in the array
const toggleBtn = document.getElementsByClassName('toggle-btn')[0]
//Get navbar links
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

//Whenever the toggle is clicked run this function to appear and disapper on click
toggleBtn.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

let menu = document.querySelector('#menu')
let navbar = document.querySelector('.navbar');
let header2 = document.querySelector('.header-2');

function navToggle(){
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('nav-toggle');
}

window.addEventListener('scroll',function(){
  menu.classList.remove('fa-times');
  navbar.classList.remove('nav-toggle');
  if(window.scrollY > 60){
    header2.classList.add('sticky');
  }else {
    header2.classList.remove('sticky');
  }
});