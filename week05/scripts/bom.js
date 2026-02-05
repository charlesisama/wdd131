const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");


//Event Listener for Add chapter button

// button.addEventListener("click", () =>{
//     if (input.value.trim() != ""){

//         const li = document.createElement("li");
//         const deleteButton = document.createElement("button");

//         li.textContent = input.value;
//         deleteButton.textContent = "Remove Chapter❌";

//         li.append(deleteButton);
//         list.appendChild(li);

//         input.value = "";
//         input.focus();
        
//         //event listner for delete button
//         deleteButton.addEventListener("click", () => {
//         list.removeChild(li);
//         input.focus();
//         });
//     }
    // else{
    //     alert("Please Enter a chapter you wished to add");
    // }
// });

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener("click", () => {
    if (input.value != ""){
        displayList(input.value);
        chaptersArray.push(input.value);

        setChapterList();

        input.value = "";

         input.focus();

    }
    else{
        alert("Please Enter a chapter you wished to add");
    }
});


function displayList(item){

    const li = document.createElement("li");
    const deleteButton = document.createElement("button");

    li.textContent = item;
    deleteButton.textContent = "Remove Chapter❌";

    li.append(deleteButton);
    list.appendChild(li);


    deleteButton.addEventListener("click", () => {
        list.removeChild(li);
        delteChapter(item);
        input.focus();
    });

}

function setChapterList(){
    localStorage.setItem("bomChapters", JSON.stringify(chaptersArray));
}

function getChapterList(){
   return JSON.parse(localStorage.getItem("bomChapters"));
}

function delteChapter(chapter){
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}



