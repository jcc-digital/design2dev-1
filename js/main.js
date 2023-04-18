//Deskop: Drop-down Menu Links
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


//Deskop & Mobile: For Sticky Nav on scroll
window.addEventListener("scroll", function() {
  const nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 0);
})


//Hamburger Menu
//Get toggle button and mobile nav element
const toggleBtn = document.querySelector('.toggle-btn');
const mobileNav = document.querySelector('#mobile-navbar');

// add click event listener to toggle button
toggleBtn.addEventListener('click', () => {
    // toggle active class on button
    toggleBtn.classList.toggle('active');
    
    // toggle display of mobile nav element
    if (mobileNav.style.display === 'block') {
      mobileNav.style.display = 'none';
    } else {
      mobileNav.style.display = 'block';
    }
  });
