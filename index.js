const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")
const icon = document.querySelector('.icon')

/* This is adding an event listener to the icon and hamburger. When the icon is clicked, it toggles the
open class. When the hamburger is clicked, it toggles the active class. */
icon.addEventListener('click', () => {
    icon.classList.toggle("open");
});

/* Setting the default background color to white and the default text color to black. */
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})

/* This is a forEach loop that is iterating over all the nav-links and adding an event listener to each
one. When the nav-link is clicked, the hamburger, nav-menu, and icon are all removed of their active
class. */
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
    icon.classList.remove("open")
}))

// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode'); 

const darkModeToggle = document.querySelector('.lightswitch');

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('dark__mode');
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');
  // 3. Set icon to a sun
  darkModeToggle.src = 'assets/sun.svg'
}

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('dark__mode');
  // 2. Update darkMode in localStorage 
  localStorage.setItem('darkMode', null);
  // 3. Revert moon icon
  darkModeToggle.src = 'assets/moon.svg'
}
 
// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  darkMode = localStorage.getItem('darkMode'); 
  
  // if it not current enabled, enable it
  if (darkMode !== 'enabled') {
    enableDarkMode();
  // if it has been enabled, turn it off  
  } else {  
    disableDarkMode(); 
  }
});

document.getElementById("btn-contact").addEventListener("click", function() {
    window.location.href = "https://github.com/viethungle0503";
});