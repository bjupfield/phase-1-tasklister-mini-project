document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("form").addEventListener("submit", addTask)
});
function addTask(event){
  event.preventDefault()
  if(document.getElementById("new-task-description").value != ""){
    const li =  document.createElement("li");
    li.textContent = document.getElementById("new-task-description").value
    const btn = document.createElement("button")
    btn.textContent = "x"
    btn.addEventListener("click", delet)
    li.appendChild(btn);
    document.querySelector("ul").appendChild(li)
    document.querySelector("form").reset()
  }
  else{
    alert("No Input")
  }
}
function delet(event){
  event.target.parentNode.remove();
}