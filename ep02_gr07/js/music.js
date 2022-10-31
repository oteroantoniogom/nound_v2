var player = document.getElementById("player")
var liked = document.getElementById("like-checkbox")
let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

let track_index = 0;
let isPlaying = false;
let updateTimer;

let curr_track = document.createElement("audio");

let track_list = [
  {
    name: "Mejor Mañana",
    artist: "Pablopa Todo",
    path: "./audio/mejormanana.mp3"
  },
  {
    name: "32Barras",
    artist: "Pepe astro",
    path: "./audio/32barrasdeterror.mp3"
  },
  {
    name: "Andrea",
    artist: "Bad Bunny",
    path: "./audio/andrea.mp3",
  },
  {
    name: "El patio",
    artist: "Delaossa",
    path: "./audio/elpatio.mp3",
  },
  {
    name: "Candy",
    artist: "Rosalía",
    path: "./audio/andrea.mp3",
  },
  {
    name: "Billie Jean",
    artist: "M.Jackson",
    path: "./audio/billiejean.mp3",
  },
  {
    name: "Bohemian Rhapsody",
    artist: "Queen",
    path: "./audio/billiejean.mp3",
  },
  {
    name: "Viva la vida",
    artist: "Coldplay",
    path: "./audio/vivalavida.mp3",
  },
  {
    name: "Here Comes The Sun",
    artist: "The Beatles",
    path: "./audio/thesun.mp3",
  },
  
  {
    name: "Sultans of Swing",
    artist: "Dire Straits",
    path: "./audio/sultansofswing.mp3",
  },
  {
    name: "Die Young",
    artist: "Timeflies",
    path: "./audio/dieyoung.mp3",
  },
  {
    name: "Secrets",
    artist: "One Republic",
    path: "./audio/secrets.mp3",
  },
  {
    name: "Gallina y Cocaína",
    artist: "John Pollón",
    path: "./audio/gallinaycocaina.mp3",
  },
  {
    name: "Fireflies",
    artist: "Owl city",
    path: "./audio/fireflies.mp3",
  },
  {
    name: "Unforgiven",
    artist: "Alborosie",
    path: "./audio/theunforgiven.mp3",
  }
];
function showPlayer(index){
    player.style.display = player.offsetParent === null ? 'flex' : 'none';
    loadTrack(index);liked.checked = false;
}
function loadTrack(track_index) {
  clearInterval(updateTimer);
  resetValues();

  curr_track.src = track_list[track_index].path;
  curr_track.load();

  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;

  updateTimer = setInterval(seekUpdate, 1000);

  curr_track.addEventListener("ended", nextTrack);
}

function resetValues() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}

function playpauseTrack() {
  if (!isPlaying) playTrack();
  else pauseTrack();
}

function playTrack(index) {
  curr_track.play();
  isPlaying = true;

  playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x">PAUSE</i>';
}

function pauseTrack() {
  curr_track.pause();
  isPlaying = false;

  playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x">PLAY</i>';
}
function seekTo() {
  var seekto = curr_track.duration * (seek_slider.value / 100);

  curr_track.currentTime = seekto;
}

function setVolume() {
  curr_track.volume = volume_slider.value / 100;
}

function seekUpdate() {
  let seekPosition = 0;

  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);
    seek_slider.value = seekPosition;

    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(
      curr_track.currentTime - currentMinutes * 60
    );
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(
      curr_track.duration - durationMinutes * 60
    );

    if (currentSeconds < 10) {
      currentSeconds = "0" + currentSeconds;
    }
    if (durationSeconds < 10) {
      durationSeconds = "0" + durationSeconds;
    }
    if (currentMinutes < 10) {
      currentMinutes = "0" + currentMinutes;
    }
    if (durationMinutes < 10) {
      durationMinutes = "0" + durationMinutes;
    }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}
