
window.onload = function(){
    const buttons = document.querySelectorAll(".actoritem");
    buttons.forEach(button=>{
        button.addEventListener("click",()=>{
            alert(button.id)
        })
    });
}