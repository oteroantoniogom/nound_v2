var uname = document.getElementById("uname");
var psw = document.getElementById("psw");
console.log(uname);


function setCookie(uname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = uname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(uname) {
  let name = uname + "=";
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
  let user = getCookie("");
  if (user == "") {
    alert("El nombre de usuario " + user + " ya está registrado");
  } else {
    if (user != "" && user != null) {
      setCookie("username", uname, 30);
    }
  }
}
