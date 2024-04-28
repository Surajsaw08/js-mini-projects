
var arr = [
  { name: "Arjan Vailly Ne..", img: "img/animal.jpg", duration: "4.04", url: "./song/Arjan Vailly Ne.mp3" },
  { name: "jale 2..", img: "img/jale.jpg", duration: "3.54", url: "./song/jale 2.mp3" },
  { name: "pehele bhi mai..", img: "img/animal.jpg", duration: "3.44", url: "./song/Pehle Bhi Main.mp3" },
  { name: "Ram siya ram..", img: "img/ram.jpg", duration: "4.34", url: "./song/Ram Siya Ram.mp3" },
  { name: "Arjan Vailly Ne..", img: "img/animal.jpg", duration: "4.04", url: "./song/Arjan Vailly Ne.mp3" },
  { name: "jale 2..", img: "img/jale.jpg", duration: "3.54", url: "./song/jale 2.mp3" },
  { name: "pehele bhi mai..", img: "img/animal.jpg", duration: "3.44", url: "./song/Pehle Bhi Main.mp3" },
  { name: "Ram siya ram..", img: "img/ram.jpg", duration: "4.34", url: "./song/Ram Siya Ram.mp3" },
];

var audio = new Audio();
var selectedSongIndex = 0;
var playButton = document.querySelector("#play");
var backwardButton = document.querySelector(".backward");
var forwardButton = document.querySelector(".forward");

// Function to initialize the song list
function initializeSongList() {
  var songListHTML = '';

  arr.forEach((song, index) => {
    songListHTML += `
      <div class="song-card" data-index="${index}">
        <div class="part1">
          <img src="${song.img}" alt="">
          <h2>${song.name}</h2>
        </div>
        <h6>${song.duration}</h6>
      </div>
    `;
  });

  document.getElementById('all-songs').innerHTML = songListHTML;
}

// Play the selected song
function playSong(index) {
  selectedSongIndex = index;

  // Change background image
  document.querySelector("#left").style.backgroundImage = `url('${arr[selectedSongIndex].img}')`;

  // Load and play audio
  audio.src = arr[selectedSongIndex].url;
  audio.play();

  // Change play button icon to pause
  playButton.innerHTML = `<i class="ri-pause-fill"></i>`;
}

// Event listener for song selection
document.getElementById('all-songs').addEventListener('click', (event) => {
  const songCard = event.target.closest('.song-card');
  if (songCard) {
    const index = parseInt(songCard.getAttribute('data-index'));
    playSong(index);
  }
});

// Event listener for play/pause button
playButton.addEventListener('click', () => {
  if (audio.paused) {
    playSong(selectedSongIndex);
  } else {
    audio.pause();
    playButton.innerHTML = `<i class="ri-play-fill"></i>`;
  }
});

// Event listener for backward button
backwardButton.addEventListener('click', () => {
  if (selectedSongIndex > 0) {
    selectedSongIndex--;
    playSong(selectedSongIndex);
  }
  else{
    selectedSongIndex =arr.length-1;
    playSong(selectedSongIndex);
  }
});

// Event listener for forward button
forwardButton.addEventListener('click', () => {
  if (selectedSongIndex < arr.length - 1) {
    selectedSongIndex++;
    playSong(selectedSongIndex);
  }

  else {
    // If at the last song, loop to the first song
    selectedSongIndex = 0;
    playSong(selectedSongIndex);
  }
});

// Initialize the song list
initializeSongList();
