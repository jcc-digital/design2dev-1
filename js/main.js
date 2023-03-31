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


//For Sticky Nav on scroll
window.addEventListener("scroll", function() {
  const nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 0);
})


//For Toggle: Get Toggle and show first element in the array
const toggleBtn = document.getElementsByClassName('toggle-btn')[0]
//Get navbar
const navbar = document.getElementsByClassName('navbar')[0]

//Whenever the toggle is clicked run this function to appear and disapper on click
toggleBtn.addEventListener('click', () => {
  navbar.classList.toggle('active')
})