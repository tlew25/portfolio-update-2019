// MONTH & TIME
var y = new Date();
var d = y;
var m = d;

var months = 
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

document.getElementById("time").innerHTML = 
months[m.getMonth()] + '/' + d.getDate() + '/' + y.getFullYear();

///////////////////////////////////////////////////////////////////////////

//FIREBASE JS FOR CLIENT STORAGE
var config = {
  apiKey: "AIzaSyAUrgeA3yp3DEXUUwUvEbyK4m6EcLMKvtI",
  authDomain: "contactform2393.firebaseapp.com",
  databaseURL: "https://contactform2393.firebaseio.com",
  projectId: "contactform2393",
  storageBucket: "contactform2393.appspot.com",
  messagingSenderId: "230097572926"
};
firebase.initializeApp(config);

var messagesRef = firebase.database().ref("comments");

// Listen for form submit
document.getElementById("contactForm").addEventListener("submit", submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  // Get values
  var name = getInputVal("name");
  var email = getInputVal("email");
  var phone = getInputVal("phone");
  var comments = getInputVal("comments");

  // Save message
  saveMessage(name, email, phone, comments);

  // Show alert
  document.querySelector(".alert").style.display = "block";

  // Hide alert after 3 seconds
  setTimeout(function() {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  // Clear form
  document.getElementById("contactForm").reset();
}

// Function to get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, phone, comments) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    phone: phone,
    comments: comments
  });
}
///////////////////////////////////////////////////////////////////////////

// BACKGROUND JS TRANSTIONS

// document.getElementById('img-main').addEventListener('click', changeColor);

// function changeColor(){
// document.body.style.backgroundImage = 'linear-gradient(to left, green , yellow)';
//  return changeColor();
// };


// function welcome(){
//   // Show alert
//    var w = document.querySelector(".jumbotron");

//   // Hide alert after 3 seconds
//   setTimeout(function() {
//     w.style.display = "block";
//     w.style.opacity = "0";
//   }, 2000);
// };
// welcome();



// var years = [12, 35, 85, 24, 27];

// function calcArr(arr, fn){

// var arrHolder = [];

// for(var i = 0; i < arr.length; i++){

//   arrHolder.push(fn(arr[i]));
//   }
//  return arrHolder;
// };

// function calcAge(el){
// const x = 2019 - el;
// return document.getElementById('agePrint').innerHTML = x;

// };



// var fullAge = calcArr(years, calcAge);

// console.log(fullAge);


// function math(sub, div){
// let numArrOne = [15 + 30 + 78 + 25];
// let numArrTwo = [55 + 78 + 90 + 100];

// const sum = numArrOne * numArrTwo / div - sub;

// return document.getElementById('sum').innerHTML = sum;
// };
// math(350, 3);

