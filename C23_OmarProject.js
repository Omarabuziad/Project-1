// functions for Playing the sounds
function playsound() {
  sound.play();
}
function pause_sound() {
  sound.pause();
}

function playsound1() {
  audiosel.play();
}

function countsound1() {
  audiocou.play();
}

function winn() {
  win5.play();
}

// define fixed variable to help me to make comparison between the elements
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

const titanNames = [
  "Armored Titan",
  "Attack Titan",
  "Beast Titan",
  "Cart Titan",
  "Colossus Titan",
  "Female Titan",
  "Jaw Titan",
  "War Hammer Titan",
];

let player1name;
let player2name;

// function for select the titan by each player
function playerselection() {
  if (select1 === true) {
    let x = event.target;
    for (i = 0; i < playerarr.length; i++) {
      if (x.id === playerarr[i]) {
        document.getElementById(
          "bg3dpl1"
        ).style.backgroundImage = `url('${playerarr[i]}.jpg')`;
        document.getElementById("bg3hpl1").innerText = titanNames[i];
        player1name = titanNames[i];
        document.getElementById(playerarr[i]).style.display = "none";
        document.getElementById("butpl1").style.display = "";
        player1 = playerarr[i];
        playsound1();
        document.getElementById("bg3dpl1").style.boxShadow =
          "10px 25px 25px 0 rgba(255, 251, 251, 0.952), 0 17px 50px 0 rgba(0,0,0,0.19)";
        setTimeout(() => {
          document.getElementById("bg3dpl1").style.boxShadow = "";
        }, 500);
        select1 = undefined;
      }
    }
  } else if (select1 === false) {
    let x = event.target;
    for (i = 0; i < playerarr.length; i++) {
      if (x.id === playerarr[i]) {
        document.getElementById(
          "bg3dpl2"
        ).style.backgroundImage = `url('${playerarr[i]}.jpg')`;
        document.getElementById("bg3hpl2").innerText = titanNames[i];
        player2name = titanNames[i];
        document.getElementById(playerarr[i]).style.display = "none";
        document.getElementById("butpl2").style.display = "";
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

// function to change the titan (for each player)
function changeplayer() {
  let x = event.target;
  if (x.id === "bg3dpl1") {
    document.getElementById("bg3dpl1").style.backgroundImage = "";
    document.getElementById(player1).style.display = "";
    player1 = "";
    document.getElementById("bg3hpl1").innerText = "";
    document.getElementById("butpl1").style.backgroundColor = " rgb(5, 5, 5)";
    document.getElementById("butpl1").style.color = " rgb(255, 255, 255)";

    select1 = true;
  } else if (x.id === "bg3dpl2") {
    document.getElementById("bg3dpl2").style.backgroundImage = "";
    document.getElementById(player2).style.display = "";
    player2 = "";
    document.getElementById("bg3hpl2").innerText = "";
    document.getElementById("butpl2").style.backgroundColor = " rgb(5, 5, 5)";
    document.getElementById("butpl2").style.color = " rgb(255, 255, 255)";
    select1 = false;
  }
}

// function to make sure to be ready
function ready1() {
  select1 = false;
  document.getElementById("butpl1").style.backgroundColor = "#ffffff";
  document.getElementById("butpl1").style.color = "rgb(0, 0, 0)";
}

function ready2() {
  select1 = undefined;
  document.getElementById("butpl2").style.backgroundColor = "#ffffff";
  document.getElementById("butpl2").style.color = "rgb(0, 0, 0)";
  document.getElementById("bg3dpl1").onclick = "";
  document.getElementById("bg3dpl2").onclick = "";
  document.getElementById("butpl2").onclick = "";

  document.getElementById("H3").style.display = "";

  setTimeout(() => {
    document.getElementById("H3").style.display = "none";
  }, 1000);
  setTimeout(() => {
    document.getElementById("H2").style.display = "";
  }, 1100);
  setTimeout(() => {
    document.getElementById("H2").style.display = "none";
  }, 2000);
  setTimeout(() => {
    document.getElementById("H1").style.display = "";
  }, 2100);
  setTimeout(() => {
    document.getElementById("H1").style.display = "none";
  }, 2800);
  setTimeout(() => {
    document.getElementById("start").style.display = "";
  }, 3000);
  setTimeout(() => {
    document.getElementById("start").style.display = "none";
  }, 4000);
  setTimeout(() => {
    document.getElementById("XO").style.display = "";
  }, 4000);
}

const winmoves = [
  ["x0", "x3", "x6"],
  ["x1", "x4", "x7"],
  ["x2", "x5", "x8"],
  ["x0", "x1", "x2"],
  ["x3", "x4", "x5"],
  ["x6", "x7", "x8"],
  ["x0", "x4", "x8"],
  ["x2", "x4", "x6"],
];

const player1moves = [];
const player2moves = [];
select2 = true;

function xo1() {
  let w = event.target;
  console.log(w.id);

  if (select2 === true) {
    document.getElementById(
      `${w.id}`
    ).style.backgroundImage = `url('${player1}.jpg')`;
    document.getElementById(`${w.id}`).onclick = "";

    player1moves.push(w.id);
    for (let t = 0; t < winmoves.length; t++) {
      let k = winmoves[t]
        .join("")
        .replaceAll("x", "")
        .split("")
        .sort(function (a, b) {
          return a - b;
        });
      let j = player1moves
        .join("")
        .replaceAll("x", "")
        .split("")
        .sort(function (a, b) {
          return a - b;
        })
        .join("");
        var l = t
      for (let i = 0; i < k.length; i++) {
        if (j.includes(k[i]) === true) {
          if (i === (k.length - 1)) {
            document.getElementById("pl1win").innerText = player1name + " Win";
            document.getElementById("pl1win").style.display = "";
            document.getElementById("playagain").style.display = "";
            document.querySelector("#bg3D1").style.backgroundColor = "rgba(0, 0, 0, 0.7)";
            document.getElementById("XO").style.backgroundColor = "rgba(0, 0, 0, 0.7)";
            for( let k = 0 ; k<winmoves[l].length ; k++){
             document.getElementById(winmoves[l][k]).style.transform = "scale(1.2)"}
            
            pause_sound();
            winn();
            
          }
        } else {
          if (player1moves.length === 5 ) {
            draw;
            document.getElementById("draw").innerText = "Draw";
            document.getElementById("draw").style.display = "";
            document.getElementById("playagain").style.display = "";
          }
          document.getElementById("pl1lig").style.backgroundColor =
            "rgb(0, 2, 37)";
          document.getElementById("pl2lig").style.backgroundColor =
            "rgb(251, 255, 0)";

          select2 = false;
          break;
        }
      }
    }
  } else if (select2 === false) {
    document.getElementById(
      `${w.id}`
    ).style.backgroundImage = `url('${player2}.jpg')`;
    document.getElementById(`${w.id}`).onclick = "";
    player2moves.push(w.id);

    for (let i = 0; i < winmoves.length; i++) {
      let n = winmoves[i]
        .join("")
        .replaceAll("x", "")
        .split("")
        .sort(function (a, b) {
          return a - b;
        });
      let m = player2moves
        .join("")
        .replaceAll("x", "")
        .split("")
        .sort(function (a, b) {
          return a - b;
        })
        .join("");
        var l = i
      for (let i = 0; i < n.length; i++) {
        if (m.includes(n[i]) === true) {
          if (i === n.length - 1) {
            document.getElementById("pl2win").innerText = player2name + " Win";
            document.getElementById("pl2win").style.display = "";
            document.getElementById("playagain").style.display = "";
            for( let k = 0 ; k<winmoves[l].length ; k++){
              document.getElementById(winmoves[l][k]).style.transform = "scale(1.2)"}
            pause_sound();
            winn();
          }
        } else {
          document.getElementById("pl2lig").style.backgroundColor =
            "rgb(0, 2, 37)";
          document.getElementById("pl1lig").style.backgroundColor =
            "rgb(251, 255, 0)";
          select2 = true;
          break;
        }
      }
    }
  } else {
    console.log("Draw");
  }
}
