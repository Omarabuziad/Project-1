// Home Page
function playsound() {
  sound.play();
}
function pause_sound() {
  sound.pause();
}

function playsound1() {
  audiosel.play();
}

let player1;
let player2;
let select1 = true;
const playerarr = [
  "p1s1",
  "p1s2",
  "p1s3",
  "p1s4",
  "p1s5",
  "p1s6",
  "p1s7",
  "p1s8",
];

function playerselection() {
  if (select1 === true) {
    let x = event.target;
    for (i = 0; i < playerarr.length; i++) {
      if (x.id === playerarr[i]) {
        document.getElementById(
          "bg3dpl1"
        ).style.backgroundImage = `url('${playerarr[i]}.jpg')`;
        document.getElementById(playerarr[i]).style.display = "none";
        player1 = playerarr[i];
        playsound1();
        document.getElementById("bg3dpl1").style.boxShadow =
          "10px 25px 25px 0 rgba(255, 251, 251, 0.952), 0 17px 50px 0 rgba(0,0,0,0.19)";
        setTimeout(() => {
          document.getElementById("bg3dpl1").style.boxShadow = "";
        }, 500);
        select1 = false;
      }
    }
  } else if (select1 === false) {
    let x = event.target;
    for (i = 0; i < playerarr.length; i++) {
      if (x.id === playerarr[i]) {
        document.getElementById(
          "bg3dpl2"
        ).style.backgroundImage = `url('${playerarr[i]}.jpg')`;
        document.getElementById(playerarr[i]).style.display = "none";
        player2 = playerarr[i];
        playsound1();
        document.getElementById("bg3dpl2").style.boxShadow =
          "10px 25px 25px 0 rgba(255, 251, 251, 0.952), 0 17px 50px 0 rgba(0,0,0,0.19)";
        setTimeout(() => {
          document.getElementById("bg3dpl2").style.boxShadow = "";
        }, 500);
        select1 = undefined;
      }
    }
  }
}




