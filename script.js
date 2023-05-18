var showSong = document.getElementById("songs");
var btn = document.getElementById("show-me");
const songsList = [
    "Time to Pretend",
    "O-o-oh Child",
    "Wish You Were Here",
    "Heroes",
    "I Put a Spell on You",
    "Call Me",
    "Paper Planes",
    "Jolene",
    "You Don't Own Me",
    "Fast Car",
    "Run the World (Girls)",
    "Superstition"
];
for (let i = 0; i < songsList.length; i++) {
    let divSong = document.createElement("div");
    let spanNum = document.createElement("span");
    spanNum.innerHTML = String(("#" + (i + 1)));
    let spanSong = document.createElement("span");
    spanSong.innerHTML = songsList[i];
    divSong.appendChild(spanNum);
    divSong.appendChild(spanSong);
    showSong.appendChild(divSong);

}
function showMe() {
    btn.style.display = "none";
    showSong.style.display = "flex";
}