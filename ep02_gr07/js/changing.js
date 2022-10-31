function showCookie() {
    window.onload = function() {
    window.location + '#loaded';
    if(!window.location.hash) {
        window.location = window.location + '#loaded';
        window.location.reload();
    }
    }
    document.getElementById("uname").value = getCookie("username");
    document.getElementById("psw").value = getCookie("userpsw");
    document.getElementById("username").value = getCookie("userpname");
    document.getElementById("surname").value = getCookie("usersurname");
    document.getElementById("email").value = getCookie("uemail");
    document.getElementById("birthday").value = getCookie("birthday");
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie2() {
    uname = document.getElementById("uname").value;
    psw = document.getElementById("psw").value;
    pname = document.getElementById("username").value;
    surname = document.getElementById("surname").value;
    useremail = document.getElementById("email").value;
    birthday = document.getElementById("birthday").value;

    setCookie("username", uname.value, 365);
    setCookie("userpsw", psw.value, 365);
    setCookie("userpname", pname.value, 365);
    setCookie("usersurname", surname.value, 365);
    setCookie("uemail", useremail.value, 365);
    setCookie("birthday", birthday.value, 365);

    showCookie();
}

if (localStorage.img) {
    $('#bannerImg').attr('src', localStorage.img);
}