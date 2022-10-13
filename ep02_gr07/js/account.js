uname = document.getElementById("uname");
psw = document.getElementById("psw");
pname = document.getElementById("name");
surname = document.getElementById("surname");
email = document.getElementById("email");
birthday = document.getElementById("birthday");
checkbox = document.getElementById("checkbox");

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
  let userpsw = getCookie("userpsw");
  let userpname = getCookie("userpname");
  let usersurname = getCookie("usersurname");
  let useremail = getCookie("email");
  let userbirthday = getCookie("birthday");
  let usercheckbox = getCookie("checkbox");

  if (userpsw == uname.value) {
    alert("El nombre de usuario " + useruname + "ya existe.");
  }
  if (userpname == uname.value) {
    alert("El nombre de usuario " + useruname + "ya existe.");
  }
  if (usersurname == uname.value) {
    alert("El nombre de usuario " + useruname + "ya existe.");
  }
  if (useremail == uname.value) {
    alert("El nombre de usuario " + useruname + "ya existe.");
  }
  if (userbirthday == uname.value) {
    alert("El nombre de usuario " + useruname + "ya existe.");
  }
  if (usercheckbox == uname.value) {
    alert("El nombre de usuario " + useruname + "ya existe.");
  } else {
    useruname = uname.value;
    if (useruname != "" && useruname != null) {
      setCookie("username", useruname, 365);
    }
  }
}

function cancelRegister() {
  document.getElementById("formRegister").reset();
}
