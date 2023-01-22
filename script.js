console.log("Welcome to Spotify");

//Intialize the variables
let songIndex = 0;
let audioElement = new Audio("music/5.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
//let masterSongName = documnent.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  {
    songName: "Lag ja gale - lata mangeshkar",
    filePath: "music/1.mp3",
    coverPath: "cover 11.jpg",
  },
  {
    songName: "Kun Faya Kun - javed ali",
    filePath: "music/2.mp3",
    coverPath: "cover12.jpg",
  },
  {
    songName: "Salam-E-Ishq - Prakash Mehra",
    filePath: "music/3.mp3",
    coverPath: "cover13.jpeg",
  },
  {
    songName: "Tere jaisa yaar kahan - Kishor Kumar",
    filePath: "music/4.mp3",
    coverPath: "cover14.jpg",
  },
  {
    songName: "Arziyan - Javed Ali",
    filePath: "music/5.mp3",
    coverPath: "cover1.jpg",
  },
  {
    songName: "Atak Gaya - Rupali moghe, Arijit Singh",
    filePath: "music/6.mp3",
    coverPath: "cover 15.jpg",
  },
  {
    songName: "Bulleya - Papon",
    filePath: "music/7.mp3",
    coverPath: "cover 19.jpg",
  },
  {
    songName: "Kaise mujhe tum mil gai - Shreya Goshal, benny Dayal",
    filePath: "music/8.mp3",
    coverPath: "cover16.jpg",
  },
  {
    songName: "Let me love you- DJ Snake",
    filePath: "music/9.mp3",
    coverPath: "cover 17.jpg",
  },
  {
    songName: "Shape of you- Ed Sheeran",
    filePath: "music/9.mp3",
    coverPath: "cover 17.jpg",
  },
];
songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

//let audioElement = new Audio('Arziyan.mp3');

//Handle play/pause click
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

//Listen to events
audioElement.addEventListener("timeupdate", () => {
  console.log("timeupdate");
  //update seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-circle-pause");
      element.classList.add("fa-circle-play");
    }
  );
};
Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-circle-play");
      e.target.classList.add("fa-circle-pause");
      audioElement.src = `music/${songIndex + 1}.mp3`;
      audioElement.currentTime = 0;
      audioElement.play();
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause");
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `music/${songIndex + 1}.mp3`;
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
  audioElement.src = `music/${songIndex + 1}.mp3`;

  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});
