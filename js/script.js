console.log("Script loaded");

const backButtons = document.querySelectorAll('.back-button');

backButtons.forEach(button => {
  console.log(button);
  button.addEventListener('click', function() {
    console.log("clicked button");
    window.location.href = '../index.html';
  });
});