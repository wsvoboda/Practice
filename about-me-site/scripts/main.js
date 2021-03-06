let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/gabby.jpeg') {
      myImage.setAttribute('src','images/gabbyandme.jpeg');
    } else {
      myImage.setAttribute('src','images/gabby.jpeg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = `Welcome to the page, ${myName}!`;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome to the page, ' + storedName + '!';
}

myButton.onclick = function() {
  setUserName();
}
