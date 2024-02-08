let createAccountBtn = document.querySelector(".Add");
let popRegistration = document.querySelector(".pop-registration");
let saveBtn = document.querySelector("#save");
let cancelBtn = document.querySelector(".cancel");

let fullName = document.querySelector("#fullName");
let description = document.querySelector("#description");


// is userLogin

let login = localStorage.getItem("login");

createAccountBtn.addEventListener("click", () => {
  popRegistration.classList.remove("d-none");
});

cancelBtn.addEventListener("click", () => {
    popRegistration.classList.add("d-none");
  });

saveBtn.addEventListener("click", () => {
  let newUser = {
    fullName: fullName.value,
    description:description.value,
  };

  // local storage --> save
  let userList = localStorage.getItem("users"); // null;

  userList = userList === null ? [] : JSON.parse(userList);

  let isUserExist = userList.find((value) => {
    return value.email === newUser.email;
  });

    userList.push(newUser);
    localStorage.setItem("users", JSON.stringify(userList));
    alert("Saved!!!");
    popRegistration.classList.add("d-none");

});

let blogs = localStorage.getItem("blogs");
let blogList = document.querySelector("#blog-list");
blogs = JSON.parse(blogs);

let list = blogs.map((value) => {
  return `
    <section class="blog-area-view">
    <section class="blog-area-view-text">
      <h2 class="title">${value.fullName}</h2>
      <li class="desc">${value.description}</li>
      <p class="delete"> <button>Delete</button></p>
    </section>
  </section>
    `;
});
blogList.innerHTML = list.join("");
console.log(blogs);


