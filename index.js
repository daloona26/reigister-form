signUp = document.getElementById("sign-up");
signIn = document.getElementById("sign-in");
signUpBtn = document.querySelector(".sign-up");
signInBtn = document.querySelector(".sign-in");
signInHead = document.querySelector('.sign-in-head')
signUpHead = document.querySelector('.sign-up-head')


signIn.addEventListener("click", (e) => {
  e.preventDefault();
  signInBtn.classList.add("active");
  signUpBtn.classList.remove("active");
  signInHead.style.display = 'block'
  signUpHead.style.display = 'none'
});

signUp.addEventListener("click", (e) => {
  e.preventDefault();
  signUpBtn.classList.add("active");
  signInBtn.classList.remove("active");
  signInHead.style.display = 'none'
  signUpHead.style.display = 'block'
});



