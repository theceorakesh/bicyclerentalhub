const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

function openPopup() {
  document.getElementById('reservationPopup').style.display = 'flex';
}

function closePopup() {
  document.getElementById('reservationPopup').style.display = 'none';
}


document.getElementById('reservationForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Capture form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const date = document.getElementById('date').value;

  // EmailJS send function
  emailjs.send("service_jp6j9fq", "template_8e374bt", {
      name: name,
      email: email,
      phone: phone,
      date: date
  })
  .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      alert("Reservation submitted successfully!");
      closePopup(); // Close the popup after submission
  }, function(error) {
      console.log('FAILED...', error);
      alert("There was an error submitting your reservation. Please try again.");
  });
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__links", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".steps__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".service__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".service__content .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".service__content .section__header", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".service__list li", {
  ...scrollRevealOption,
  delay: 1500,
  interval: 500,
});

ScrollReveal().reveal(".experience__card", {
  duration: 1000,
  interval: 500,
});

ScrollReveal().reveal(".download__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".download__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".download__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".download__links", {
  ...scrollRevealOption,
  delay: 1500,
});
