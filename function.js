const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

const menuToggle = toggleButton.addEventListener( 'click',()=>
{
    navbarLinks.classList.toggle('active')
}
);

// Get all navbar links
const sectionScroll = document.querySelectorAll(".navbar-links ul a");

// Add click event listener to each navbar link
sectionScroll.forEach(link => {
  link.addEventListener('click', e => {
    // Prevent default link behavior
    e.preventDefault();

    // Get the target section based on the link's href attribute
    const targetSection = document.querySelector(link.hash);

    // Scroll to the target section
    targetSection.scrollIntoView({ behavior: 'smooth' });

    // Close the navbar if it's open
    navbarLinks.classList.remove('active');
  });
});

