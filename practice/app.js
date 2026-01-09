// var num1 = +prompt("enter num");
// var num2 = +prompt("enter num");
// var opt = prompt("enter opterator (+, -, *, /):")



// if (opt === "+") {
//     alert("Result:" + (num1 + num2));

// }else if(opt === "-"){
//      alert("Result:" + (num1 - num2));
// }else if(opt === "*"){
//      alert("Result:" + (num1 * num2));
// }else if(opt === "/"){
//      alert("Result:" + (num1 / num2));
// }else{
//     alert("plz enetr the opt");
// }


// var obt = {
//     name : "Ameer",
//     email : "amavia112",
//     age : 20, 
//     isloggedIn : true,

// }
//  if (obt.age < 18) {
//     alert("Underage user");
// }
// else if (obt.isLoggedIn === true) {
//     alert("Welcome back, " + obt.name);
// }
// else {
//     alert("Please login first");
// }


// var obj = {
//     productName : "mobile",
//     price : 200,
//     inStock : false,
// }

// var nameE1 =document.getElementById("productname");
// var priceE1 =document.getElementById("price");
// var stockE1 =document.getElementById("stock");

// name.innerText = obj.productName;
// price.innerText = "price:" + obj.price;


// if (obj.inStock === false) {
//    stockE1.innerText = "out of stock";
//     stockE1.style.color = "red";
// }else{
//     stockE1.innerText = "In stock";
//     stockE1.style.color = "green";
// }



// var student = {
//     username: "Ameer Mavia",
//     age: 20,
//     student: ["Math", "English", "Science"]
// }

// var name1 = document.getElementById("name");
// var age1 = document.getElementById("age");
// var ul = document.getElementById("subjectlist");

// name1.innerText = student.name;
// age1.innerText = "Age: " + student.age;

// var subjects = student.student;

// if(subjects.length === 0){
//     var li = document.createElement("li");
//     li.innerText = "No Subjects";
//     ul.appendChild(li);
// } else {
//     for (let i = 0; i < subjects.length; i++) {
//         var li  = document.createElement("li");
//         li.innerText = subjects[i];
//         ul.appendChild(li);
//     }
// }

var student = {
    name: "Ameer",
    age: 20,
    subjects: ["Math", "sci", "eng", "sindhi"],
};

var name1 = document.getElementById("studentName");
var age1 = document.getElementById("age");
var subjectsList1 = document.getElementById("subjectslist");

// Name & Age
name1.innerText = student.name;
age1.innerText = "Age: " + student.age;

// Check if subjects array is empty
if (student.subjects.length === 0) {
    var li = document.createElement("li");
    li.innerText = "No Subjects";
    li.style.color = "red";
    subjectsList1.appendChild(li);
} else {
    // Subjects exist → loop
    for (let i = 0; i < student.subjects.length; i++) {
        var li = document.createElement("li");
        li.innerText = student.subjects[i];
        li.style.color = "green";
        subjectsList1.appendChild(li);
    }
}



// // Online status check
// if (profile.online === true) {
//     online1.innerText = "Online";
//     online1.style.color = "green";
// } else {
//     online1.innerText = "Offline";
//     online1.style.color = "red";
// }
