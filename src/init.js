// Declaring Element

const username = document.getElementById("username");
const registForm = document.getElementById("registForm");
const logoutForm = document.getElementById("logout");
const player = new Player();
const startSection = document.getElementById("start");
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const rewardImg = document.getElementById("imgReward");

let defaultOption = ["❤️", "💟", "💗"];
box1.textContent = defaultOption[0];
box2.textContent = defaultOption[1];
box3.textContent = defaultOption[2];

function dice() {
  let gacha = [];
  for (let i = 0; i < defaultOption.length; i++) {
    const roll = defaultOption[~~(Math.random() * defaultOption.length)];

    gacha.push(roll);
  }
  return gacha;
}

function reward() {
  fetch(`https://zoo-animal-api.herokuapp.com/animals/rand
`)
    .then((x) => x.json())
    .then((result) => {
      let text = document.createElement("h1");
      text.textContent = result.name;
      let img = new Image(200, 200);
      img.src = result.image_link;
      rewardImg.appendChild(img);
      rewardImg.appendChild(text);
    });
}

function winner() {
  // const win1 = ["❤️", "❤️", "❤️"];
  // const win2 = ["💗", "💗", "💗"];
  // const win3 = ["💟", "💟", "💟"];

  if (
    box1.textContent == box2.textContent &&
    box1.textContent == box3.textContent
  ) {
    reward();
    location.href = "#reward";
    //https://zoo-animal-api.herokuapp.com/animals/rand
  } else {
    console.log("LOSSER");
  }
}

function start() {
  // Selama
  const rolling = setInterval(function name() {
    // console.log(`Acak gambar....`, result);
    // console.log(dice());
    const result = dice();

    box1.textContent = result[0];
    box2.textContent = result[1];
    box3.textContent = result[2];

    dice();
  }, 200); //200

  // Ketika
  setTimeout(function () {
    clearInterval(rolling);
    winner();
  }, 3000); //3000
}

onload = function () {
  const token = sessionStorage.getItem("token");

  if (token && token != null) {
    registForm.style.display = "none";
    logoutForm.style.display = "block";
  } else {
    registForm.style.display = "block";
    logoutForm.style.display = "none";
  }
};

function register() {
  player.username = username.value;

  player.register;
}

function logout() {
  player.logout;
}
