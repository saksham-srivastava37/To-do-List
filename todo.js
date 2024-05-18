const inputBox = document.getElementById("input-text");

const listContainer = document.getElementById("list-container");

const input = document.getElementById("input-text");
input.addEventListener("keypress", function(event){
    if (event.key === "Enter"){
        document.getElementById("add").click();
    }
});


function addTask(){
    if(inputBox.value === ''){
        alert("You must write something !!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value = "";
    save();
}

function clearAll(){
    listContainer.remove();
 //    localStorage.clear();
 }
 save();



listContainer.addEventListener("click",function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        save()
    }

    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        save()
    }
} , false);



function save(){
  localStorage.setItem("data", listContainer.innerHTML );
}

function displaySaved(){
   listContainer.innerHTML = localStorage.getItem("data");
}

displaySaved();



