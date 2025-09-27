document.addEventListener("DOMContentLoaded", () => {
  
});

let postBtn = document.getElementById("post");
postBtn.style.display = "none";
postBtn.onclick = () => {
  window.location.href = "/todo/post";
};



let deleteBtn = document.getElementById("delete");
deleteBtn.style.display = "none";
deleteBtn.onclick = () => {
  window.location.href = "/todo/delete";
};

let loginBtn = document.getElementById("login");
loginBtn.onclick = () => {
  window.location.href = "/loginPage";
};

let signupBtn = document.getElementById("signup");
signupBtn.onclick = () => {
  window.location.href = "/signupPage";
};

// Logout button functionality
let logoutBtn = document.getElementById("logout");
logoutBtn.style.display = "none";

logoutBtn.onclick = () => {
  localStorage.removeItem("isLogged");
  localStorage.removeItem("userId");
  alert("You have been logged out.");
  window.location.href = "/logout";
};

showButtons();
function showButtons() {
  let isLogged = localStorage.getItem("isLogged");
  if (isLogged) {
    loginBtn.style.display = "none";
    signupBtn.style.display = "none";
    postBtn.style.display = "block";
    deleteBtn.style.display = "block";
    logoutBtn.style.display = "block";
  } else {
    loginBtn.style.display = "block";
    signupBtn.style.display = "block";
    postBtn.style.display = "none";
    deleteBtn.style.display = "none";
    logoutBtn.style.display = "none";
  }
}
