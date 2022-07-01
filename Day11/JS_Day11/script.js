// const h1 = document.querySelector("h1");
// const img = document.querySelector("img");

// h1.addEventListener("copy", function () {
//   console.log("copied");
// });

// h1.addEventListener("mouseover", function () {
//   console.log("Thả ra");
// });

// h1.addEventListener("mouseleave", function () {
//   console.log("Típ đi");
// });

// h1.addEventListener("focus", function () {
//   console.log("aduuuuuu");
// });

// img.addEventListener("click", function () {
//   alert("Nhấp phát nữa đi anh");
// });



const uname = document.getElementById("uname");
const pass = document.getElementById("password");
const form = document.getElementById("login-form");

uname.addEventListener("input", function () {
    console.log(this.value);
});


pass.addEventListener("change", function (e) {
    console.log(e.target.value);
});


form.addEventListener("submit", function (e) {
    e.preventDefault();
    const userInfo = {
        username: uname.value,
        password: pass.value
    }
})


const link = document.getElementById("link");
link.addEventListener("click", function (e) { 
    e.preventDefault();
})
