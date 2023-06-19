// SEE MORE BUTTON
document.addEventListener("DOMContentLoaded", function () {
  var link = document.querySelector(".offers a");
  var additionalDestinations = document.getElementById(
    "additional-destinations"
  );

  link.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior
    additionalDestinations.classList.toggle("show"); // Toggle the visibility of additional destination boxes

    // Change the text of the link based on the visibility of additional destination boxes
    if (additionalDestinations.classList.contains("show")) {
      link.innerHTML = 'See Less Offers <i class="bx bx-up-arrow-alt"></i>';
    } else {
      link.innerHTML = 'See All Offers <i class="bx bx-down-arrow-alt"></i>';
    }
  });
});

// BACK TO TOP BUTTON
// Function to check if the user has scrolled enough to show the button
function checkScroll() {
  var backButton = document.getElementById('back-to-top-btn');
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backButton.classList.add('show');
  } else {
    backButton.classList.remove('show');
  }
}

// Function to scroll to the top when the button is clicked
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Attach the event listeners
window.onscroll = function() {
  checkScroll();
};

document.getElementById('back-to-top-btn').onclick = function() {
  scrollToTop();
};
