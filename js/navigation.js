window.onload = function(){
    const buttons = document.querySelectorAll(".actoritem");
    buttons.forEach(button=>{
        button.addEventListener("click",()=>{

            window.localStorage.setItem("actor_id",button.id)

            document.getElementById("framemain").src = "nested/actor.html"

        })
    });
}