function pShowHide() {
    var x = document.getElementById("passwd");
    var z = document.getElementById("eyed");

    if (x.type === "password") {
        x.type = "text";
        z.classList.add("eyedchange");
    }
    else {
        x.type = "password";
        z.classList.remove("eyedchange");
    }
}

function cpShowHide() {
    var x = document.getElementById("cPasswd");
    var z = document.getElementById("eyeds");
    if (x.type === "password") {
        x.type = "text";
        z.classList.add("eyedchange");
    }
    else {
        x.type = "password";
        z.classList.remove("eyedchange");
    }
}