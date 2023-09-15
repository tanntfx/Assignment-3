
// HIDE PERSONAL INFO
document.querySelector(".submit").addEventListener("click", function () {
  const email = document.querySelector(".emailInput").value;
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // check email
  if (email === "" || !regex.test(email)) {
    infoText.textContent = "Yêu cầu nhập Email và đúng định dạng.";
  } else {
    infoText.textContent = "";
    emailFormContainer.classList.add("hide");
    infoContainer.classList.remove("hide");
  }
});

// HIDE JOB INFO

let buttons = document.querySelectorAll(".view-button");
let content = document.querySelectorAll(".content");
  //  show job info 
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    content[i].classList.toggle("show");

    
    if (content[i].classList.contains("show")) {
      buttons[i].textContent = "🔼View less";
    } else {
      buttons[i].textContent = "🔽View more";
    }
  });
}
