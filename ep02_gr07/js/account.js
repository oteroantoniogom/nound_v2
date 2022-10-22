uname = document.getElementById("uname");
psw = document.getElementById("psw");
pname = document.getElementById("username");
surname = document.getElementById("surname");
useremail = document.getElementById("email");
birthday = document.getElementById("birthday");

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

function checkCookie() {
  let useruname = getCookie("username");
  let useruemail = getCookie("uemail");

  if ((useruname == uname.value) || (useruemail == useremail.value)) {
    alert("El nombre de usuario o el correo ya existen.");
  }
  
  else {  
    setCookie("username", uname.value, 365);
    setCookie("userpsw", psw.value, 365);
    setCookie("userpname", pname.value, 365);
    setCookie("usersurname", surname.value, 365);
    setCookie("uemail", useremail.value, 365);
    setCookie("birthday", birthday.value, 365);
    /*
    list = [useruname, userpsw, userpname, usersurname, useremail, userbirthday];
    listStrings = ["username", "userpsw", "userpname", "usersurname", "email", "birthday"];
    */
    /*for (i=0; i<list.length; i++) {*/


  }
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

/*var x = 0;
var pfp = document.getElementsByClassName("pfp-menu");
var login = document.getElementsByClassName("login-signup");

function myFunction() {
  document.getElementsByClassName("pfp-menu").style.display ="none";
}


if (x == 1) {
  pfp.style.display ="none";
}  else {
  login.style.display = "none";
}*/