//Mamani Pamela y Azul Ojeda (Parte de Azul)

//Comision 3

// Profe, mando hasta aca porque no llegamos con mi compañera con los tiempos a juntar las partes que ambas programamos, 
//agradeceria que no pueda corregir para var si hay algun error en esta parte.
//Gracias

let musica;

let imgFondoMenu;
let imgLogoMenu;


let secuenciaPantalla1 = [];
let FramesNakamura = [];
let FramesHirose = [];
let FramesMatsumura = [];
let FramesRyou = [];
let FramesTakeuchi = [];

let pantalla = 0;
let tiempoInicioPantalla1 = 0;
let tiempoInicioPantalla2 = 0;
let tiempoInicioPantalla3 = 0;
let tiempoInicioPantalla4 = 0;
let tiempoInicioPantalla5 = 0;
let tiempoInicioPantalla6 = 0;
let tiempoInicioPantalla7 = 0;
let tiempoInicioPantalla8 = 0;
let tiempoInicioPantalla9 = 0;

function preload() {
  
  musica = loadSound("data/musica.mp3");
  
  imgFondoMenu = loadImage("data/fondo.jpg");
  imgLogoMenu = loadImage("data/logo.png");

  secuenciaPantalla1[0] = loadImage("data/escenario1.png");
  secuenciaPantalla1[1] = loadImage("data/frame1.png");
  secuenciaPantalla1[2] = loadImage("data/frame2.png");
  secuenciaPantalla1[3] = loadImage("data/escritorio.png");

  // Ventana de pensamiento 
  secuenciaPantalla1[4] = loadImage("data/ventanaPensamiento.png");

  secuenciaPantalla1[5] = loadImage("data/frame3.png");
  secuenciaPantalla1[6] = loadImage("data/frame4.png");
  secuenciaPantalla1[7] = loadImage("data/frame5.png");
  secuenciaPantalla1[8] = loadImage("data/frame6.png");

  // Escenario 2
  secuenciaPantalla1[9] = loadImage("data/escenario2.png");

  // Frames en los que Nakamura habla
  secuenciaPantalla1[10] = loadImage("data/frame7.png");
  secuenciaPantalla1[11] = loadImage("data/frame8.png");

  // Ventana de diálogo 
  secuenciaPantalla1[12] = loadImage("data/ventanaDialogo.png");
  
  //Pantalla 2 (A)
  FondoPantalla2 = loadImage("data/escenario3.jpeg")
  Nakamura1 = loadImage("data/frame9.png")
 Nakamura2 = loadImage("data/frame10.png")
  
  //Pantalla 3 (A)
  FondoPantalla3 = loadImage("data/escenario4.jpeg")
  Nakamura3 = loadImage("data/frame11.png")
  Nakamura4 = loadImage("data/frame12.png")
  Nakamura5 = loadImage("data/frame13.png")
  
  //Pantalla 4 (A)
  FondoPantalla4 = loadImage("data/escenario5.jpeg")
  Nakamura6 = loadImage("data/frame14.png")
 
 //For nuevo
 
 FramesNakamura [1] = loadImage("data/NAKAMURA/NAKAMURA1.png");
 FramesNakamura [2] = loadImage("data/NAKAMURA/NAKAMURA2.png");
 FramesNakamura [3] = loadImage("data/NAKAMURA/NAKAMURA3.png");
 FramesNakamura [4] = loadImage("data/NAKAMURA/NAKAMURA4.png");
 FramesNakamura [5] = loadImage("data/NAKAMURA/NAKAMURA5.png");
 FramesNakamura [6] = loadImage("data/NAKAMURA/NAKAMURA6.png");
 FramesNakamura [7] = loadImage("data/NAKAMURA/NAKAMURA7.png");
 FramesNakamura [8] = loadImage("data/NAKAMURA/NAKAMURA8.png");
 FramesNakamura [9] = loadImage("data/NAKAMURA/NAKAMURA9.png");
 FramesNakamura [10] = loadImage("data/NAKAMURA/NAKAMURA10.png");
 
 FramesHirose [1] = loadImage("data/HIROSE/HIROSE1.png");
 FramesHirose [2] = loadImage("data/HIROSE/HIROSE2.png");
 FramesHirose [3] = loadImage("data/HIROSE/HIROSE3.png");
 FramesHirose [4] = loadImage("data/HIROSE/HIROSE4.png");
 FramesHirose [5] = loadImage("data/HIROSE/HIROSE5.png");
 FramesHirose [6] = loadImage("data/HIROSE/HIROSE6.png");
 
 FramesMatsumura [1] = loadImage("data/MATSUMURA/MATSUMURA1.png");
 FramesMatsumura [2] = loadImage("data/MATSUMURA/MATSUMURA2.png");
 FramesMatsumura [3] = loadImage("data/MATSUMURA/MATSUMURA3.png");
 FramesMatsumura [4] = loadImage("data/MATSUMURA/MATSUMURA4.png");
 
 FramesRyou [1] = loadImage("data/RYOU/RYOU1.png");
 FramesRyou [2] = loadImage("data/RYOU/RYOU2.png");
 FramesRyou [3] = loadImage("data/RYOU/RYOU3.png");
 FramesRyou [4] = loadImage("data/RYOU/RYOU4.png");
 
 FramesTakeuchi [1] = loadImage("data/TAKEUCHI/TAKEUCHI1.png");
 FramesTakeuchi [2] = loadImage("data/TAKEUCHI/TAKEUCHI2.png");
 FramesTakeuchi [3] = loadImage("data/TAKEUCHI/TAKEUCHI3.png");
 FramesTakeuchi [4] = loadImage("data/TAKEUCHI/TAKEUCHI4.png");
 FramesTakeuchi [5] = loadImage("data/TAKEUCHI/TAKEUCHI5.png");
 
 Narrador = loadImage("data/ventanaNarrador.png");
 
}

function setup() {
  createCanvas(800, 450);
  
}

function draw() {
  if (pantalla == 0) {
    mostrarPortadaMenu();
  } else if (pantalla == 1){
    mostrarPantallaUno();
  } else if (pantalla == 2){
    mostrarPantallaDos();
  }else if (pantalla ==3){
    mostrarPantallaTres();
  }else if (pantalla ==4){
    mostrarPantallaCuatro();
  }else if (pantalla ==5){
    mostrarPantallaCinco();
  }else if (pantalla ==6){
    mostrarPantallaSeis();
  }else if (pantalla ==7){
    mostrarPantallaSiete();
  }else if (pantalla ==8){
    mostrarPantallaOcho();
  }else if (pantalla ==9){
    mostrarPantallaNueve();
  }
}

function mostrarPortadaMenu() {
  imageMode(CORNER);
  image(imgFondoMenu, 0, 0, 800, 450);

  let latido = 1 + sin(frameCount * 0.05) * 0.05;

  imageMode(CENTER);

  let logoAncho = imgLogoMenu.width * 0.75 * latido;
  let logoAlto = imgLogoMenu.height * 0.75 * latido;

  image(imgLogoMenu, 400, 200, logoAncho, logoAlto);

  let anchoBoton = 180 * latido;
  let altoBoton = 55 * latido;

  rectMode(CENTER);

  stroke(255);
  strokeWeight(2);

  fill(220, 50, 100);
  rect(290, 350, anchoBoton, altoBoton, 10);

  rect(510, 350, anchoBoton, altoBoton, 10);

  fill(255);
  noStroke();

  textSize(22 * latido);
  textAlign(CENTER, CENTER);

  text("INICIO", 290, 350);
  text("CRÉDITOS", 510, 350);
}

function mostrarPantallaUno() {
  let tiempo = millis() - tiempoInicioPantalla1;

  imageMode(CORNER);

  // ESCENARIO INICIAL
  if (tiempo < 2000) {
    image(secuenciaPantalla1[0], 0, 0, 800, 450);
  }

  // PARPADEO
  else if (tiempo < 5600) {
    let tiempoParpadeo = tiempo - 2000;
    let parpadeo = floor(tiempoParpadeo / 300);

    if (parpadeo % 2 == 0) {
      // ESCENARIO 2 + FRAME 1
      image(secuenciaPantalla1[9], 0, 0, 800, 450);
      image(secuenciaPantalla1[1], 0, 0, 800, 450);
    }
    else {
      // FRAME 2
      image(secuenciaPantalla1[2], 0, 0, 800, 450);
    }
  }

  // ESCRITORIO  MAS  DIÁLOGO
  else if (tiempo < 14600) {
    image(secuenciaPantalla1[3], 0, 0, 800, 450);
    mostrarDialogo();
  }

  // MUECAS Y DIÁLOGO
  else {
    let tiempoMuecas = tiempo - 14600;
    let frameMueca = floor(tiempoMuecas / 600);

    // ESCENARIO 2 COMO FONDO
    image(secuenciaPantalla1[9], 0, 0, 800, 450);

    // FRAME 3 Y 4
    if (frameMueca < 4) {
      if (frameMueca % 2 == 0) {
        image(secuenciaPantalla1[5], 0, 0, 800, 450);
      }
      else {
        image(secuenciaPantalla1[6], 0, 0, 800, 450);
      }
    }

    // FRAME 5 Y 6
    else if (frameMueca < 8) {
      if (frameMueca % 2 == 0) {
        image(secuenciaPantalla1[7], 0, 0, 800, 450);
      }
      else {
        image(secuenciaPantalla1[8], 0, 0, 800, 450);
      }
    }

    // FRAME 7 Y 8: SE REPITEN HASTA PRESIONAR EL BOTÓN
    else {
      if (frameMueca % 2 == 0) {
        image(secuenciaPantalla1[10], 0, 0, 800, 450);
      }
      else {
        image(secuenciaPantalla1[11], 0, 0, 800, 450);
      }

      mostrarDialogoNuevo();

      // BOTÓN SALIR DE CASA
      rectMode(CENTER);

      stroke(255);
      strokeWeight(2);

      fill(220, 50, 100);
      rect(650, 285, 200, 45, 10);

      fill(255);
      noStroke();

      textSize(18);
      textAlign(CENTER, CENTER);
      text("Salir de casa", 650, 285);
    }
  }
}

function mostrarDialogo() {
  let tiempoDialogo = millis() - tiempoInicioPantalla1 - 5600;

  // VENTANA DE PENSAMIENTO
  image(secuenciaPantalla1[4], 0, 330, 790, 120);

  fill(24, 36, 95);
  noStroke();

  textAlign(LEFT, TOP);

  // FRASE 1
  if (tiempoDialogo < 2000) {
    textSize(24);
    text("Nakamura", 80, 340);

    textSize(20);
    text("Hoy se lo voy a decir...", 40, 385);
  }

  // FRASE 2
  else if (tiempoDialogo < 6000) {
    textSize(24);
    text("Nakamura", 80, 340);

    textSize(20);
    text("Voy a invitar a Hirose a salir", 40, 382);
    text("Quiero que podamos pasar más tiempo", 40, 402);
    text("juntos y conocernos mejor.", 40, 422);
  }

  // FRASE 3
  else if (tiempoDialogo < 9000) {
    textSize(24);
    text("Nakamura", 80, 340);

    textSize(20);
    text("Esta es mi oportunidad", 40, 382);
    text("Solo tengo que actuar con normalidad.", 40, 402);
  }
}

function mostrarDialogoNuevo() {
  let tiempoDialogo = millis() - tiempoInicioPantalla1 - 19400;

  // / VENTANA DE DIALOGO
  image(secuenciaPantalla1[12], 0, 330, 790, 120);

  fill(24, 36, 95);
  noStroke();

  textAlign(LEFT, TOP);

  // FRASE 1
  if (tiempoDialogo < 2400) {
    textSize(24);
    text("Nakamura", 80, 340);

    textSize(20);
    text("¿Por qué parezco un delincuente a punto", 40, 382);
    text("de cometer un crimen?", 40, 405);
  }

  // FRASE 2
  else if (tiempoDialogo < 4800) {
    textSize(24);
    text("Nakamura", 80, 340);

    textSize(20);
    text("¡No importa! ¡Hoy va a salir bien!", 40, 390);
  }
}

function mousePressed() {
 
  // BOTÓN INICIO DEL MENÚ
  if (pantalla == 0 &&
      mouseX > 200 &&
      mouseX < 380 &&
      mouseY > 320 &&
      mouseY < 380) {

    pantalla = 1;
    tiempoInicioPantalla1 = millis();
    musica.loop();
  }

  // BOTÓN SALIR DE CASA
  if (pantalla == 1) {
    let tiempo = millis() - tiempoInicioPantalla1;

    if (tiempo >= 19400 &&
        mouseX > 550 &&
        mouseX < 750 &&
        mouseY > 262 &&
        mouseY < 308) {
      pantalla = 2;
      tiempoInicioPantalla2 = millis();
    }
  }
  
   if (pantalla == 2) {
    let tiempo = millis() - tiempoInicioPantalla2;

    if (tiempo >= 16500 &&
        mouseX > 550 &&
        mouseX < 750 &&
        mouseY > 262 &&
        mouseY < 308) {
      pantalla = 3;
      tiempoInicioPantalla3 = millis();
    }
  }
  if (pantalla == 3) {
    let tiempo = millis() - tiempoInicioPantalla3;

    if (tiempo >= 13500 &&
        mouseX > 550 &&
        mouseX < 750 &&
        mouseY > 262 &&
        mouseY < 308) {
      pantalla = 4;
      tiempoInicioPantalla4 = millis();
    }
  }
  if (pantalla == 4) {
    let tiempo = millis() - tiempoInicioPantalla4;

    if (tiempo >= 13500 &&
        mouseX > 550 &&
        mouseX < 750 &&
        mouseY > 262 &&
        mouseY < 308) {
      pantalla = 5;
      tiempoInicioPantalla5 = millis();
    }
  }
    if (pantalla == 5) {
    let tiempo = millis() - tiempoInicioPantalla5;

    if (tiempo >= 13500 &&
        mouseX > 550 &&
        mouseX < 750 &&
        mouseY > 262 &&
        mouseY < 308) {
      pantalla = 6;
      tiempoInicioPantalla6 = millis();
    }  
    if (pantalla == 6) {
    let tiempo = millis() - tiempoInicioPantalla6;

    if (tiempo >= 13500 &&
        mouseX > 550 &&
        mouseX < 750 &&
        mouseY > 262 &&
        mouseY < 308) {
      pantalla = 7;
      tiempoInicioPantalla7 = millis();
    }
  }
    if (pantalla == 7) {
    let tiempo = millis() - tiempoInicioPantalla7;

    if (tiempo >= 13500 &&
        mouseX > 550 &&
        mouseX < 750 &&
        mouseY > 262 &&
        mouseY < 308) {
      pantalla = 8;
      tiempoInicioPantalla8 = millis();
    }
  }
    if (pantalla == 8) {
    let tiempo = millis() - tiempoInicioPantalla8;

    if (tiempo >= 13500 &&
        mouseX > 550 &&
        mouseX < 750 &&
        mouseY > 262 &&
        mouseY < 308) {
      pantalla = 9;
      tiempoInicioPantalla9 = millis();
    }
  }
  }
}
