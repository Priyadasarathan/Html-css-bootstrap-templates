export let name = 'priya';
export let age = 21;
let message = () => {
    let name1 = 'Akil';
    let agee = 25;
    return name1 + ' is ' + agee + ' years old. ';
}
export default message;




// var popupoverlay=document.querySelector(".popup-overlay");
// var popupbox=document.querySelector(".popup-box");
// var addpopupbutton=document.getElementById("add-popup-button");

// addpopupbutton.addEventListener("click", function(){
//     popupoverlay.style.display="block"
//     popupbox.style.display="block"
// });

// //selecting cancel button
// var cancelpopup = document.getElementById("cancel-popup");
// cancelpopup.addEventListener("click", function(event){
//     event.preventDefault()
//     popupoverlay.style.display="none";
//     popupbox.style.display="none";
// });


// //selecting container,booktitle, book author, book description
// var container = document.querySelector(".container");
// var addbook = document.getElementById("add-book");
// var booktitleinput = document.getElementById("book-title");
// var bookauthorinput = document.getElementById("author");
// var bookdescriptioninput = document.getElementById("book-description");

// addbook.addEventListener("click", function(event){
//     event.preventDefault()
//     var div = document.createElement("div")
//     div.setAttribute("class","book-container")
//     div.innerHTML=`<h2>${booktitleinput.value}</h2>
//     <h5>${bookauthorinput.value}</h5>
//     <p>${bookdescriptioninput.value}</p>
//     <button onclick="deletebook(event)">Delete</button>`
//     container.append(div);
//     popupoverlay.style.display="none";
//     popupbox.style.display="none";

// });

// function deletebook(event){
//     event.target.parentElement.remove()
// }