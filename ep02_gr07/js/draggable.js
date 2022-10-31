function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

function playList() {
    var x = document.getElementsByClassName("list");
    var y = document.getElementById("showList");
    y.innerHTML = "";
    for ( var i = 0; i < x.length; i++) {
        y.innerHTML += x[i].getAttribute("data-path") + "<br>";
    }
}

function newPlaylist() {
    var newlist = document.getElementById("newlist");
    newlist.style.display = "flex";
}

function closeList() {
    var newlist = document.getElementById("newlist");
    newlist.style.display = "none";
}

function addPlaylist(){
    var list = document.getElementById("playlist-list");
    var input = document.getElementById("nombre");
    var songs = document.getElementById("showList-container");
    var songs_clone = songs.cloneNode(true);
    list.appendChild(songs_clone);
}

function eraseSong(index){
    var playlist = document.getElementById("showList");
    var x = document.getElementById("erase"+ index)
    playlist.removeChild(x.parentElement)
}