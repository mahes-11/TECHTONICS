const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());




// Example chat button click event
chatButton.addEventListener("click", () => {
  window.location.href = "chat\chat.html"; // Update this with the actual URL of your chat page
});
