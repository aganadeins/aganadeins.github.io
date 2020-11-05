let burgerBtn = document.getElementById ('burger-btn');
burgerBtn.onclick = function showMenu() {
    if (document.getElementById("burger-menu-inside").style.display == none) {
        document.getElementById("burger-menu-inside").style.display = block;
    }
    else {
        document.getElementById("burger-menu-inside").style.display = none;   
    }
};