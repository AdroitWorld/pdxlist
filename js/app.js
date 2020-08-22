console.log("js file attaches");
showNotes();

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {

    let addTxt = document.getElementById("addTxt");


    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    } else {

        notesObj = JSON.parse(notes);

    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));

    addTxt.value = "";
    showNotes();


});

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {

        notesObj = JSON.parse(notes);

    }



    let allNotes = document.getElementById("notes");
    let html = "";
    notesObj.forEach(function (element, index) {

        html += `

    <div class="notecard mx-2 my-2" style="width: 18rem;">

    <div class="card-body">
        <h5 class="card-title">Note ${index + 1}</h5>
        <p class="card-text"> ${element}</p>
        <button id="${index}" onclick="deleteNode(this.id)"  class="btn btn-primary">Delete a Note</button>
    </div>
     </div>
    
    
            `


    });

    if (notes != null) {
        allNotes.innerHTML = html;
    } else {
        allNotes.innerHTML = `
                Add some Notes Buddy!!!
        `;
    }
}


function deleteNode(index) {

    console.log("i am deleting", index);

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {

        notesObj = JSON.parse(notes);

    }

    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();


}


let search = document.getElementById("searchbox");

search.addEventListener("input" , function(){

   let inputval = search.value;
// console.log(inputval);
    let noteCards = document.getElementsByClassName("notecard");

    Array.from(noteCards).forEach(function(element){

        let cardtxt = element.getElementsByTagName("p")[0].innerText;

        console.log(cardtxt);

        if( cardtxt.includes(inputval)){
            element.style.display = "block";
        }else{
            element.style.display = "none";
        }


    });



});














