uname = document.getElementById("uname");
psw = document.getElementById("psw");
pname = document.getElementById("username");
surname = document.getElementById("surname");
useremail = document.getElementById("email");
birthday = document.getElementById("birthday");
let loggedin = false;

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
  
  if (window.location.pathname == "/ep02_gr07/register.html") {
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

      window.open("./logged.html") && window.close();
    }
  }

  else if (window.location.pathname == "/ep02_gr07/login.html") {
    let useruname = getCookie("username");
    let userpsw = getCookie("userpsw");
    if ((useruname == uname.value) && (userpsw == psw.value)) {
      window.open("./logged.html") && window.close();
    }
    else {
      alert("El nombre de usuario o la contraseña son incorrectos");
    }
  }
}

if(localStorage.img) { 
    $('#bannerImg').attr('src', localStorage.img);
    }
    function readURL(input) {
      if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
        localStorage.setItem('img', e.target.result);
          $('#bannerImg').attr('src', reader.result);
        }
        reader.readAsDataURL(input.files[0]);
      }
    }

    $(".file-upload").change(function() {
      readURL(this);
    });

    $(".upload-button").on('click', function() {
      $(".file-upload").click();
    });

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