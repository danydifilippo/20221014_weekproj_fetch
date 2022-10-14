
async function showApi() {
    let musiclink = await fetch ('https://striveschool-api.herokuapp.com/api/deezer/search?q=maneskin');
    let responseText = await musiclink.json();
    console.log(responseText);
    let music = responseText.data;
    console.log(music);
    
    for (let i=0; i<music.length; i++){
        let showcard = document.getElementById('cards')
        let scheda = document.createElement('div');
        scheda.classList.add('card')
        scheda.innerHTML += `<img src="${music[i].album.cover}" class="card-img-top" alt="cover album Maneskin">
        <div class="card-body"><h5 class="card-title">${music[i].album.title}</h5>
        <audio controls style="width: 500px;"><source src="${music[i].preview}" type="audio/ogg"></audio>
        <a href="${music[i].artist.link}" class="btn btn-primary">Go to link</a>`
        showcard.appendChild(scheda);
    }
    

    const songList = document.getElementById('songlist');
    const searchBar = document.getElementById('searchBar');
    console.log(searchBar);
    searchBar.addEventListener('keyup',(e) =>{
        e = searchBar.value;
        const filteredSongs = music.filter( song =>{
        return song.album.title.includes(searchString)
    });
    console.log(filteredSongs)
    })

}


showApi()

let sound = new Audio("./assets/Coraline-cover.mp3");

function avvia(){
    sound.play();
}
function pausa()
{
    sound.pause();
}


