let play = document.getElementById("play");
let img = document.querySelector("img");
let music = document.querySelector("audio");
let artist = document.getElementById("artist");
let title = document.getElementById("title");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

const songs = [
    {
        name: "hero",
        path:"music/hero.mp3",
        artist: "Loyalist",
        cover:"image/cute.jpg"
    },
    {
        name: "song 2",
        path:"music/song 2.m4a",
        artist:"artist 1",
        cover:"image/mind.JPG",

        
    },
    {
        name: "song 3",
        path:"music/song 4.m4a",
        artist:"artist 1",
        cover:"image/ckay image.jfif",
    }
]

let isply = false;         // for play ot pause the song

//  For play function 
const playMusic = () => {
    isply = true;                                        // true = play song 
    music.play();                                       //fun to play a song 
    play.classList.replace("fa-play", "fa-pause");    // here we add  pause button class
    img.classList.add("anime");                       // herer we add anime class in img 

}

//  For pause function 
const pauseMusic = () => {
    isply = false;                                         // pause = pause song 
    music.pause();                                        //fun to pause a song 
    play.classList.replace("fa-pause", "fa-play");      // here we add  pause button class
    img.classList.remove("anime");                      // herer we add anime class in img 
}

play.addEventListener('click', () => {
    // if(isply)
    // {
    //   pasuseMusic();
    // }else
    // {
    //   playMusic();
    // }
    isply ? pauseMusic() : playMusic();
})