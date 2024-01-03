let password = document.getElementById("password");
let lock = document.getElementById("lock");
lock.onclick = function(){
    if(password.type == "password"){
        password.type = "text";
        lock.classList.remove("bxs-lock-alt");
        lock.classList.add("bxs-lock-open-alt");
    }
    else{
        password.type = "password";
        lock.classList.remove("bxs-lock-open-alt");
        lock.classList.add("bxs-lock-alt");
    }
}