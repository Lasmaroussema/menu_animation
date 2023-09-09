
let action = "show";

document.querySelector(".circle").onclick = function ()
{
    switch (action) {
    
        case "show":
            {
                document.querySelector(".circle").style.transform = "translate(-50%,-50%) rotate(360deg) ";
                document.querySelectorAll("li").forEach((e) => {
                    e.style.transform = "translate(-233px)  rotate(calc(45deg* var(--i))) ";
                })
                action = "hide";
                return;
            }

        case "hide":
            {
                document.querySelector(".circle").style.transform = "translate(-50%,-50%) rotate(-360deg) ";
                document.querySelectorAll("li").forEach((e) => {
                    e.style.transform = "translate(0px)  rotate(calc(0deg* var(--i))) ";
                   
                })
                action = "show";
                return;
            }
    }
}
