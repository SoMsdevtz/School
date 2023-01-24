// Make the navigation bar fixed on top when the user scrolls
window.onscroll = function() {
  var navbar = document.getElementById("navbarNav");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navbar.classList.add("fixed-top");
  } else {
    navbar.classList.remove("fixed-top");
  }
};

// Add smooth transition for the carousel images
$('.carousel').carousel({
  interval: 2000,
  pause: "hover",
  wrap: true,
  keyboard: true
});
// Get all navigation links
var navLinks = document.querySelectorAll('.nav-link');

// Loop through each link and add a click event listener
navLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    // Prevent default link behavior
    event.preventDefault();
    
    // Get the target element's id
    var targetId = this.getAttribute('href');
    var targetElement = document.querySelector(targetId);
    
    // Calculate the position of the target element
    var targetPosition = targetElement.getBoundingClientRect().top;
    
    // Scroll to the target element
    window.scrollBy({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});
// Get all carousel images
var carouselImages = document.querySelectorAll('.carousel-item img');

// Loop through each image and add a click event listener
carouselImages.forEach(function(image) {
  image.addEventListener('click', function() {
    // Create a lightbox element
    var lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');
    
    // Create a close button
    var closeButton = document.createElement('span');
    closeButton.classList.add('lightbox-close');
    closeButton.innerHTML = '&times;';
    
    // Create a lightbox image
    var lightboxImage = document.createElement('img');
    lightboxImage.src = this.src;
    lightboxImage.alt = this.alt;
    
    // Add elements to the lightbox
    lightbox.appendChild(closeButton);
    lightbox.appendChild(lightboxImage);
    document.body.appendChild(lightbox);
    
    // Add a click event listener to the close button
    closeButton.addEventListener('click', function() {
      lightbox.remove();
    });
  });
});
