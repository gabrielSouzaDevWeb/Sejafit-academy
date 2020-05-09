function toggleMenu() {
    console.log("sapoha tá funcionando");
   /* var menuMobileBtn = document.querySelector("#menu-btn");
    menuMobileBtn.addEventListener("click" , function() {
        var displayValue= window.getComputedStyle(document.querySelector("#menu-mobile"), null).getPropertyValue("display");
        console.log(displayValue);
        alert("funcionando sapoha");
        if (displayValue == "none"){
            document.querySelector("#menu-mobile").style.display = "block";
            console.log("none");

        } else if(displayValue =="block") {
            document.querySelector("#menu-mobile").style.display = "none";
            console.log("block");
        }
    });*/
}
window.onload= toggleMenu;