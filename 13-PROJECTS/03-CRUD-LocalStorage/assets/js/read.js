let users = localStorage.getItem("userinfo")
? JSON.parse(localStorage.getItem("userinfo")) : []; 

let result = document.getElementById("result");

function printUser(){
    result.innerHTML += `
    <img src=${users.profile}>
    <p><b>USER ID : </b> <span>${users.id}</span></p>
    <p><b>NAME : </b> <span>${users.name}</span></p>
    <p><b>EMAIL : </b> <span>${users.email}</span></p>
    <p><a href="update.html" onclick="editUser()">EDIT</a> <a a href="#" onclick="deleteUser(${users.id})">DELETE</a> </p>
    `;
}
printUser();

if(users.id == null){
    result.style.display = "none";
}

function deleteUser(id){
  if(confirm("Are you sure you want to delete user ")){
    if(id === users.id){
       localStorage.removeItem("userinfo");
       alert("user deleted successfully");
       result.style.display = "none";
   }
  
  }else{
    alert("Delete operation cancelled");
  }
}

function updateUser(){

}