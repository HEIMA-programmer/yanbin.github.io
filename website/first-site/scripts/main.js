let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/01-test.png") {
    myImage.setAttribute("src", "images/R.jpg");
  } else {
    myImage.setAttribute("src", "images/01-test.png");
  }
};

document.querySelector("h1").addEventListener("click", function () {
  alert("别戳我!");
});
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  let myName = prompt("请输入你的名字。");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "Welcome! " + myName;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Welcome! " + storedName;
}
myButton.onclick = function () {
  setUserName();
};
