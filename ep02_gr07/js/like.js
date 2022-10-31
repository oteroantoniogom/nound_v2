function like(index) {
    var like = document.getElementsByClassName("liked");

    for (var i = 0; i < like.length; i++) {
        like[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = document.getElementById("song"+index);
        if (content.style.display === "block") {
            content.style.display = "none";
        }  else {
            content.style.display = "block";
        }
    });
    }
}
