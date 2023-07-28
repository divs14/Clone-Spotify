console.log("Welcome to Spotify Clone!");
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let vari=Array.from(document.getElementsByClassName("songItemPlay"));
let songItems = Array.from(document.getElementsByClassName("songItem"));
let masterSongName = document.getElementById("masterSongName");

let songs = [
  {
    songName: "The Score - Legend",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpeg",
  },
  {
    songName: "One Direction - Night Changes",
    filePath: "songs/2.mp3",
    coverPath: "covers/2.jpeg",
  },
  {
    songName: "One Direction -  Live while we're young",
    filePath: "songs/3.mp3",
    coverPath: "covers/3.jpeg",
  },
  {
    songName: "One Direction - Little things",
    filePath: "songs/4.mp3",
    coverPath: "covers/4.jpeg",
  },
  {
    songName: "One Direction - Magic",
    filePath: "songs/5.mp3",
    coverPath: "covers/5.jpeg",
  },
  {
    songName: "The Score- Unstoppable",
    filePath: "songs/6.mp3",
    coverPath: "covers/6.jpeg",
  },
  {
    songName: "One Direction - Nobody cares",
    filePath: "songs/7.mp3",
    coverPath: "covers/7.jpeg",
  },
  {
    songName: "One Direction - One Thing",
    filePath: "songs/8.mp3",
    coverPath: "covers/8.jpeg",
  },
  {
    songName: "One Direction - What makes you Beautiful",
    filePath: "songs/9.mp3",
    coverPath: "covers/9.jpeg",
  }
];

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});


masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});

audioElement.addEventListener("timeupdate", () => {

  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    myProgressBar.value * (audioElement.duration / 100);
});
vari.forEach((element)=>{
    element.addEventListener('click', (e)=>{
        // makeAllPlays();
        songIndex=parseInt(e.target.id);
        audioElement.src=`songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;
    })
});

(document.getElementById("next")).addEventListener('click', () => {
    if (songIndex >= 9) {
      songIndex = 0;
    } else {
      songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
  });
  
  document.getElementById("previous").addEventListener("click", () => {
    if (songIndex <= 0) {
      songIndex = 0;
    } else {
      songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
  });