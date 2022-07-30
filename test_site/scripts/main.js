let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/图层 1 拷贝.png") {
    myImage.setAttribute("src", "images/beijing2.png");
  } else {
    myImage.setAttribute("src", "images/图层 1 拷贝.png");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt("请输入你的名字。");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = " My Honey  " + myName;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = " My Honey " + storedName;
}

myButton.onclick = function () {
  setUserName();
};
