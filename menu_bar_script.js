$(document).ready(function(){
    addMenuBar();
    let displayMenu = true;
    $("#menu-burger").click(function(){
        right = displayMenu ? "0" : "-100%";
        displayMenu = !displayMenu;
        $(".menu").css("right",right);
    });
});

function addMenuBar(){
    document.getElementById("menu-bar").innerHTML = `
        <h2 class = "logo">Meltwich</h2>
        <button id = "menu-burger"></button>
        <label for = "menu-burger" class = "show-menu-button">
            <i class="fa fa-bars" aria-hidden="true"></i>
        </label>

        <!-- the menu items -->
        <ul class = "menu">
            <a href = "index.html">Home</a>
            <a href = "menu.html">Menu</a>
            <a href = "../under_construction.html">About</a>
            <a href = "../under_construction.html">Contact</a>
            <label for = "menu-burger" class = "hide-menu-button">
                <i class="fa fa-times" aria-hidden="true"></i>
            </label>
        </ul>`;
}

