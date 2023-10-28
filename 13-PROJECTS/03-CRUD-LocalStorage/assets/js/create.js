let userForm = document.getElementById("userForm");
let userName = document.getElementById("name");
let userEmail = document.getElementById("email");
let userProfile = document.getElementById("url");
let userGender = document.getElementsByName("gender");
let selGender = "";

let users = localStorage.getItem("userinfo")
  ? JSON.parse(localStorage.getItem("userinfo"))
  : [];

let genRanID = () => {
  let randId = Math.floor(Math.random() * 1000);
  return randId;
};

userForm.addEventListener("submit", function (event) {
  event.preventDefault();

  for (let i = 0; i < userGender.length; i++) {
    if (userGender[i].checked) {
      selGender = userGender[i].value;
    }
  }

  let data = {
    id: genRanID(),
    name: userName.value,
    email: userEmail.value,
    profile: userProfile.value,
    gender: selGender,
  };
  console.log("new user = ", data);
  createUser(data);
});

function createUser(user) {
  if (user.email === users.email) {
    alert("user email aldready registered");
  } else {
    localStorage.setItem("userinfo", JSON.stringify(user));
    alert("new user created successfully");
  }
}
