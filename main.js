
const currentPage = window.location.pathname.split("/").pop();


const protectedPages = [
  "index.html",
  "login.html",
  "signup.html",
  "terms.html"
];


if (
  protectedPages.includes(currentPage) &&
  !localStorage.getItem("xyra_age_confirmed")
) {
  window.location.href = "gender.html";
}


function confirmGenderAccess() {
  const ageCheckbox = document.getElementById("ageConfirm");

  if (!ageCheckbox) {
    alert("Age confirmation checkbox not found.");
    return;
  }

  if (!ageCheckbox.checked) {
    alert("Please confirm that you are 18 years or older.");
    return;
  }

  localStorage.setItem("xyra_age_confirmed", "true");


  window.location.href = "index.html";
}

if (currentPage === "login.html") {
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Login successful");

      
      window.location.href = "https://www.google.com";
    });
  });
}

if (currentPage === "signup.html") {
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Signup successful");

    
      window.location.href = "https://www.google.com";
    });
  });
}


function resetAgeGate() {
  localStorage.removeItem("xyra_age_confirmed");
  window.location.href = "gender.html";
}


