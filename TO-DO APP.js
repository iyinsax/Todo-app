const inputBox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");
function addtask(){
    if(inputBox.value === ''){
         alert("you must write something mr michael");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
}
listcontainer.addEventListener("click", function(e){
    
       if(e.target.tagName === "LI"){
        e.target.classlist.toggle("checked");
        saveData();
       } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
       }
}, false);
function saveData(){
    localStorage.setItem("data", listcontainer.innerHTML);
}
function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}5
showTask();