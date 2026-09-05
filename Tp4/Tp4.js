
//Azul Camila Ojeda
//Comision 3
//Video de referencia: Pokémon Emerald Intro https://youtu.be/tnvwWrt7Rw0
// Algunos Sprites lo hice yo otros los saque de esta pagina: https://www.spriters-resource.com/game_boy_advance/pokemonemerald/


let pasto;
let iniciar = false
let contador = 0;
let Aura = [];
let Mac = [];
let Tor = [];
let Grou = [];
let GrouB = [];
let Kyo = [];
let KyoB = [];
let Ray = [];
let FondoRay = [];
let LogoE = [];
let LogoP = [];
let audio;

function preload() {
  
//Audio

 audio = loadSound("data/PokemonEmeraldOpening.mp3");

//Fondo1

 pasto = loadImage("data/Fondo1/Pasto1.png");
 arboles1 = loadImage("data/Fondo1/arboles1.png");
 arboles2 = loadImage("data/Fondo1/arboles2.png");
 montanas = loadImage("data/Fondo1/montanas.png");
 cielo = loadImage("data/Fondo1/Cielo1.jpg");
//Aura

for (let i = 0; i < 4; i++){
 Aura[i] = loadImage("data/Aura/Aura_000" + i + ".png");
}

//Macnectric
for (let i = 0; i < 4; i++){
 Mac[i] = loadImage("data/Macnectric/manectric_000" + i + ".png");
}

//Torchic
for (let i = 0; i < 6; i++){
 Tor[i] = loadImage("data/Torchic/tor_000" + i + ".png");
}

//Poekaball
 Pok = loadImage("data/pokeball.png");
//Groudon
 
 FondoG = loadImage("data/Groudon/Magma.png");
 
for (let i = 0; i < 5; i++){
 Grou[i] = loadImage("data/Groudon/GroudonA_000" + i + ".png");
}
 
for (let i = 0; i < 5; i++){
 GrouB[i] = loadImage("data/Groudon/GroudonB_000" + i + ".png");
}
 
//Kyogre
 FondoK = loadImage("data/Kyogre/Agua.jpg");
 
for (let i = 0; i < 5; i++){
 Kyo[i] = loadImage("data/Kyogre/Kyogre_000" + i + ".png");
}

for (let i = 0; i < 5; i++){
 KyoB[i] = loadImage("data/Kyogre/KyogreB_000" + i + ".png");
}

//Rayquaza Intro
 
 CieloC = loadImage("data/Rayquaza/CieloRay.png");
 CieloG = loadImage("data/Rayquaza/CieloGris.png");
 CieloB = loadImage("data/Rayquaza/CieloBlanco.png");
 Sol = loadImage("data/Rayquaza/Sol.png");
 NubeD = loadImage("data/Rayquaza/nubederecha.png");
 NubeI = loadImage("data/Rayquaza/nubeisquierda.png");
 Blast = loadImage("data/Rayquaza/Blast.png");
 
//Rayquaza
 
for (let i = 0; i < 5; i++){
 Ray[i] = loadImage("data/Rayquaza/Rayquaza_000" + i + ".png");
}
 
for (let i = 0; i < 6; i++){
 FondoRay[i] = loadImage("data/Start/Raycuaza_000" + i + ".jpg");
}
 
//Logos
 
 LogoE = loadImage("data/Logo/LogoE.png");
 
 Press = loadImage("data/Start/PressEnter.png");
 
for (let i = 0; i < 6; i++){
 LogoP[i] = loadImage("data/Logo/LogoP_000" + i + ".png");
}

 
 }

function setup() {
createCanvas(800,600);
}


function draw() {
background(250);
//image(Ray,0,0,800,600);
      
      if (iniciar == true) {
  contador++;
  
    //ESCENAS
   Escenario1();
   Pokeball();
   GyK();
   RayquazaIntro();
   RayquazaRayos();
   LogoFinal();
   


  } else {
    // Botón
     fill(255);
    rectMode(CENTER);
    rect(width / 2, height / 2, 200, 70);
    textAlign(CENTER, CENTER);
    textSize(30);
    fill(0);
    text("INICIAR", width / 2, height / 2);
  }
 }


function mousePressed() {
  
  if (
    mouseX > width / 2 - 100 &&
    mouseX < width / 2 + 100 &&
    mouseY > height / 2 - 35 &&
    mouseY < height / 2 + 35
  ) {iniciar = true;
    contador = 0;
     
   if (!audio.isPlaying()) {
      audio.play()
  }
 }
}

function keyPressed() {
if (keyCode === ENTER){
 iniciar = false;
 contador = 0;
 
 xNubeI = -360;
 xNubeD = 800;
 yLogo = 300;
 
 xM = 0;
 xA1 = 0;
 xA2 = 0;
 xP = 0;
 if(audio.isPlaying()){
 audio.stop();
  }
 }
}
