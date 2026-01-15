const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");


//Event Listener for Add chapter button

button.addEventListener("click", () =>{
    if (input.value.trim() != ""){

        const li = document.createElement("li");
        const deleteButton = document.createElement("button");

        li.textContent = input.value;
        deleteButton.textContent = "Remove Chapter❌";

        li.append(deleteButton);
        list.appendChild(li);

        input.value = "";
        input.focus();
        
        //event listner for delete button
        deleteButton.addEventListener("click", () => {
        list.removeChild(li);
        input.focus();
        });
    }
    else{
        alert("Please Enter a chapter you wished to add");
    }
});






