// Mamani Pamela y Azul Ojeda 
// Comision 3
// https://youtu.be/z7-vSKCtdxs (video de Azul)
// tpfinalparte2


let personaje;
let juego;

let musica; 

let escenarioSalida;
let escenarioPasillo;
let escenarioLlegada;

let spritesCorrer = [];
let spriteSaltar = [];

let imagenesColeccionables = [];

//cinematicas

let imgLogoVictoria;
let imgLogoDerota;

let imgPoseVictoria;
let imgPoseDerrota;

let imagenesFinales = [];

let pantalla = 0;

let posicionCreditos = 0;


function preload() {

  escenarioSalida = loadImage("data/escenario1.png");
  escenarioPasillo = loadImage("data/escenario2.png");
  escenarioLlegada = loadImage("data/escenario3.png");

  spritesCorrer[0] = loadImage("data/Cframe1.png"); /////////////////////////////////////
  spritesCorrer[1] = loadImage("data/Cframe2.png");
  spritesCorrer[2] = loadImage("data/Cframe3.png");
  spritesCorrer[3] = loadImage("data/Cframe4.png");

  spriteSaltar[0] = loadImage("data/Sframe1.png");
  spriteSaltar[1] = loadImage("data/Sframe2.png");
  spriteSaltar[2] = loadImage("data/Sframe3.png");

  imagenesColeccionables[0] = loadImage("data/objeto1.png");
  imagenesColeccionables[1] = loadImage("data/objeto2.png");
  imagenesColeccionables[2] = loadImage("data/objeto3.png");
  
  mochilas = loadImage("data/mochila.png");
  aviones = loadImage("data/aviondepapel.png");

  // PORTADA //
  
  musica = loadSound("data/musica.mp3");
  imgFondoMenu = loadImage("data/fondo.jpg");
  imgLogoMenu = loadImage("data/logo.png");
  // INSTRUCCIONES
  imgFondoInstrucciones = loadImage("data/fondo1.png");

  imgObjeto1 = loadImage("data/objeto1.png");
  imgObjeto2 = loadImage("data/objeto2.png");
  imgObjeto3 = loadImage("data/objeto3.png");
  // VICTORIA Y DERROTA
  imgFondoVictoria = loadImage("data/fondo2.jpg");
  imgFondoDerrota = loadImage("data/fondo3.jpg");

  imgLogoVictoria = loadImage("data/logoVictoria.png");
  imgLogoDerota = loadImage("data/logoDerrota.png");

  imgPoseVictoria = loadImage("data/Vpose.png");
  imgPoseDerrota = loadImage("data/Dpose.png");
  //PANTALLAS FINALES
  imagenesFinales = [imgLogoVictoria, imgLogoDerota,imgPoseVictoria,imgPoseDerrota];
  
}


function setup() {

  createCanvas(800, 400);

  personaje = new Nakamura();
  juego = new Juego();

}


function draw() {

  background(240);

  if (pantalla == 0) {
    mostrarPortadaMenu();
  }

  if (pantalla == 1) {
    mostrarInstrucciones();
  }

  if (pantalla == 2) {
    mostrarCreditos();
  }

  if (pantalla == 3) {

    juego.actualizar();
    juego.dibujarEscenario();
    juego.mostrar();

    if (juego.empezo && !juego.perdio && !juego.gano) {
      personaje.actualizar();
    }

    personaje.mostrar();

    if (juego.gano) {
      pantalla = 4;
    }

    if (juego.perdio) {
      pantalla = 5;
    }

  }

  if (pantalla == 4) {
    mostrarVictoria();
  }

  if (pantalla == 5) {
    mostrarDerrota();
  }

 }

function keyPressed() { /////////////////////////////////////////////////////////////

  // REINICIAR CON R
  if (pantalla == 3 || pantalla == 4 || pantalla == 5) {

    if (key === 'r' || key === 'R') {

      juego.reiniciar();
      pantalla = 3;
      return;

    }

  }

  // EMPEZAR Y SALTAR
  if (pantalla == 3) {

    if (keyCode === UP_ARROW || key === 'w' || key === 'W' || key === ' ') {

      if (!juego.empezo) {
        juego.empezo = true;
      }

      personaje.saltar();

    }

  }

}

function mousePressed() {
  
  iniciarMusica();
  
  if (pantalla == 0) {
    if (mouseX > 200 && mouseX < 380 &&
        mouseY > 292 && mouseY < 348) {

      pantalla = 1;
    }
    else if (mouseX > 420 && mouseX < 600 &&
             mouseY > 292 && mouseY < 348) {
      pantalla = 2;
      posicionCreditos = 0;
    }
  }
  else if (pantalla == 1) {
    // VOLVER AL MENÚ
    if (mouseX > 150 && mouseX < 350 &&
        mouseY > 342 && mouseY < 388) {

      pantalla = 0;
    }
    // INICIAR JUEGO
    else if (mouseX > 450 && mouseX < 650 &&
             mouseY > 342 && mouseY < 388) {

      pantalla = 3;
    }
  }
  // CRÉDITOS
  else if (pantalla == 2) {
    if (mouseX > 310 && mouseX < 490 &&
        mouseY > 342 && mouseY < 388) {

      pantalla = 0;
    }
  }
  // VICTORIA Y DERROTA
else if (pantalla == 4 || pantalla == 5) {

  // REINTENTAR
  if (mouseX > 200 && mouseX < 380 &&
      mouseY > 342 && mouseY < 388) {

    juego.reiniciar();
    pantalla = 3;
  }

  // VOLVER AL MENÚ
  else if (mouseX > 450 && mouseX < 650 &&
           mouseY > 342 && mouseY < 388) {

    juego.reiniciar();
    pantalla = 0;
  }
 }
}

// Musica

function iniciarMusica() {
  if (!musica.isPlaying()) {
    musica.loop();
  }
}

////////////////////
// CLASE NAKAMURA //
////////////////////
class Nakamura {

  constructor() {

    this.x = 80;
    this.y = 310;

    this.ancho = 55;
    this.alto = 72;

    this.velocidad = 0;
    this.gravedad = 0.8;
    this.fuerzaSalto = -15;

    this.enSuelo = true;

    // Animacion de correr
    this.animacion = 0;
    this.contadorAnimacion = 0;

    // Animacion de salto
    this.animacionSalto = 0;
    this.contadorSalto = 0;

  }


  actualizar() {

    this.y += this.velocidad;
    this.velocidad += this.gravedad;

    // Suelo
    if (this.y >= 310) {

      this.y = 310;
      this.velocidad = 0;
      this.enSuelo = true;

      this.animacionSalto = 0;
      this.contadorSalto = 0;

    }

    // Animacion de correr
    if (this.enSuelo) {

      this.contadorAnimacion++;

      if (this.contadorAnimacion >= 6) {

        this.animacion++;

        if (this.animacion >= spritesCorrer.length) {
          this.animacion = 0;
        }

        this.contadorAnimacion = 0;

      }

    }

    // Animacion de salto
    else {

      this.contadorSalto++;

      if (this.contadorSalto >= 6) {

        this.animacionSalto++;

        if (this.animacionSalto >= spriteSaltar.length) {
          this.animacionSalto = spriteSaltar.length - 1;
        }

        this.contadorSalto = 0;

      }

    }

  }


  mostrar() {

    if (this.enSuelo) {

      image(
        spritesCorrer[this.animacion],
        this.x,
        this.y,
        this.ancho,
        this.alto );

    } else {

      image(
        spriteSaltar[this.animacionSalto],
        this.x,
        this.y,
        this.ancho,
        this.alto );

    }

  }


  saltar() {

    if (this.enSuelo) {

      this.velocidad = this.fuerzaSalto;
      this.enSuelo = false;

      this.animacionSalto = 0;
      this.contadorSalto = 0;

    }

  }

}

/////////////////////
// CLASE OBSTACULO //
/////////////////////

class Obstaculo {

  constructor() {

    this.x = 800;

    this.tipo = random(1) < 0.5 ? "mochila" : "avion";

    this.velocidad = 5;

    if (this.tipo === "mochila") {

      this.imagen = mochilas;
      
      this.y = 320;
      this.ancho = 45;
      this.alto = 45;

    } else {
      
      this.imagen = aviones;

      this.ancho = 45;
      this.alto = 25;

      this.y = random([285, 230]);

    }

  }


  actualizar() {

    this.x -= this.velocidad;

  }


  mostrar() {

    image(
    this.imagen,
    this.x,
    this.y,
    this.ancho,
    this.alto );

  }

}

/////////////////////////
// CLASE COLECCIONABLE //
/////////////////////////

class Coleccionable {

  constructor(imagen, y) {

    this.imagen = imagen;

    this.x = 800;
    this.y = y;

    this.ancho = 45;
    this.alto = 45;

  }


  actualizar() {

    this.x -= 5;

  }


  mostrar() {

    image(
      this.imagen,
      this.x,
      this.y,
      this.ancho,
      this.alto );

  }

}

/////////////////
// CLASE JUEGO //
/////////////////

class Juego {

  constructor() {

    this.empezo = false;

    this.obstaculos = [];
    this.contador = 0;

    this.puntos = 0;
    this.perdio = false;
    this.gano = false;

    this.posicionFondo = 0;
    this.velocidadFondo = 5;

    // Meta
    this.metaActiva = false;
    this.xMeta = 800;

    // Coleccionables
    this.coleccionables = [];

    this.objetosAparecidos = [false, false, false];

    this.recolectados = 0;

  }


  actualizar() {

    if (!this.empezo || this.perdio || this.gano) {
      return;
    }

    // Mover el fondo
    this.posicionFondo -= this.velocidadFondo;


    // CREAR OBSTACULOS

    if (!this.metaActiva) {

      this.contador++;

      if (this.contador >= 100) {

        this.obstaculos.push(new Obstaculo());

        this.contador = 0;

      }

    }


    // ACTUALIZAR OBSTACULOS

    for (let i = 0; i < this.obstaculos.length; i++) {

      let obstaculo = this.obstaculos[i];

      obstaculo.actualizar();

// HITBOX DE NAKAMURA ///////////////////////////////////////////////////////
let margenX = 12;
let margenY = 15;

if (
  personaje.x + margenX + personaje.ancho - margenX * 2 > obstaculo.x + 5 &&
  personaje.x + margenX < obstaculo.x + obstaculo.ancho - 5 &&
  personaje.y + margenY + personaje.alto - margenY > obstaculo.y + 5 &&
  personaje.y + margenY < obstaculo.y + obstaculo.alto - 5
) {

  this.perdio = true;

}

      // Sumar puntos

      if (obstaculo.x + obstaculo.ancho < personaje.x) {

        this.puntos++;

        this.obstaculos.splice(i, 1);

        i--;

      }

    }


    // APARICION DE COLECCIONABLES

    if (this.puntos >= 5 && !this.objetosAparecidos[0]) {

      this.coleccionables.push(
        new Coleccionable(imagenesColeccionables[0], 230)
      );

      this.objetosAparecidos[0] = true;

    }


    if (this.puntos >= 10 && !this.objetosAparecidos[1]) {

      this.coleccionables.push(
        new Coleccionable(imagenesColeccionables[1], 190)
      );

      this.objetosAparecidos[1] = true;

    }


    if (this.puntos >= 15 && !this.objetosAparecidos[2]) {

      this.coleccionables.push(
        new Coleccionable(imagenesColeccionables[2], 220)
      );

      this.objetosAparecidos[2] = true;

    }


    // ACTUALIZAR COLECCIONABLES

    for (let i = 0; i < this.coleccionables.length; i++) {

      let objeto = this.coleccionables[i];

      objeto.actualizar();

      // Detectar si Nakamura recoge el objeto

      if (
        personaje.x + personaje.ancho > objeto.x &&
        personaje.x < objeto.x + objeto.ancho &&
        personaje.y + personaje.alto > objeto.y &&
        personaje.y < objeto.y + objeto.alto
      ) {

        this.recolectados++;

        this.coleccionables.splice(i, 1);

        i--;

        continue;

      }

      // Eliminar si sale de la pantalla

      if (objeto.x + objeto.ancho < 0) {

        this.coleccionables.splice(i, 1);

        i--;

      }

    }


    // ACTIVAR META A LOS 20 PUNTOS

    if (this.puntos >= 20 && !this.metaActiva) {

      this.metaActiva = true;

      this.xMeta = 800;

      this.obstaculos = [];

    }


    // MOVER META

    if (this.metaActiva) {

      this.xMeta -= this.velocidadFondo;

      if (this.xMeta <= 0) {

        this.xMeta = 0;

        if (this.recolectados === 3) {
          this.gano = true;
        } else {
          this.perdio = true;
        }

      }

    }

  }


  mostrar() {

    // Mostrar obstaculos

    for (let i = 0; i < this.obstaculos.length; i++) {
      this.obstaculos[i].mostrar();
    }


    // Mostrar coleccionables

    for (let i = 0; i < this.coleccionables.length; i++) {
      this.coleccionables[i].mostrar();
    }


    // Mostrar puntaje

    fill(40);
    textSize(20);

    text("Puntos: " + this.puntos, 650, 40);

    text("Objetos: " + this.recolectados + "/3", 60, 40);


    // GAME OVER

    if (this.perdio) {

      textAlign(CENTER);

      textSize(35);
      text("GAME OVER", 400, 170);

      textSize(18);
      text("Presiona R para volver a jugar", 400, 210);

      textAlign(LEFT);

    }


    // VICTORIA

    if (this.gano) {

      textAlign(CENTER);

      textSize(35);
      text("¡GANASTE!", 400, 170);

      textSize(18);
      text("Presiona R para volver a jugar", 400, 210);

      textAlign(LEFT);

    }

  }


  dibujarEscenario() {

  imageMode(CORNER);

  // SALIDA
  if (this.posicionFondo > -800) {

    image(
      escenarioSalida,
      this.posicionFondo,
      0,
      800,
      400 );

  }

  // PASILLO REPETIDO
  let desplazamiento = this.posicionFondo + 800;

  while (desplazamiento < 800) {
    if (desplazamiento + 800 > 0) {
      image(
        escenarioPasillo,
        desplazamiento,
        0,
        800,
        400 );
    }

    desplazamiento += 800;
  }

  // META
  if (this.metaActiva) {

    image(
      escenarioLlegada,
      this.xMeta,
      0,
      800,
      400 );

  }

}


  reiniciar() {

    personaje = new Nakamura();

    this.empezo = false;

    this.obstaculos = [];
    this.contador = 0;

    this.puntos = 0;
    this.perdio = false;
    this.gano = false;

    this.posicionFondo = 0;

    // Reiniciar meta

    this.metaActiva = false;
    this.xMeta = 800;

    // Reiniciar coleccionables

    this.coleccionables = [];

    this.objetosAparecidos = [false, false, false];

    this.recolectados = 0;

  }

}

/////////////
//Pantallas//
/////////////

// PORTADA
function mostrarPortadaMenu() {
  
  imageMode(CORNER);
  image(imgFondoMenu, 0, 0, 800, 400);

  let latido = 1 + sin(frameCount * 0.05) * 0.05;

  imageMode(CENTER);

  let logoAncho = imgLogoMenu.width * 0.75 * latido;
  let logoAlto = imgLogoMenu.height * 0.75 * latido;

  image(imgLogoMenu, 400, 165, logoAncho, logoAlto);

  let anchoBoton = 180 * latido;
  let altoBoton = 55 * latido;

  rectMode(CENTER);

  stroke(255);
  strokeWeight(2);

  fill(220, 50, 100);
  rect(290, 320, anchoBoton, altoBoton, 10);
  rect(510, 320, anchoBoton, altoBoton, 10);

  fill(255);
  noStroke();

  textSize(22 * latido);
  textAlign(CENTER, CENTER);

  text("INICIO", 290, 320);
  text("CRÉDITOS", 510, 320);
}
function mostrarInstrucciones() {
  
  imageMode(CORNER);
  image(imgFondoInstrucciones, 0, 0, 800, 400);

  fill(0);
  textAlign(CENTER, CENTER);

  textSize(30);
  text("¿CÓMO JUGAR?", 400, 35);

  textSize(20);
  text("UNA CARRERA CONTRA EL TIEMPO", 400, 72);

  textSize(18);
  text("CONTROLES", 400, 115);

  textSize(18);
  text("↑", 300, 150);
  text("SALTAR", 300, 177);

  textSize(18);
  text("→", 500, 150);
  text("AVANZAR", 500, 177);

  textSize(18);
  text("OBJETIVO", 400, 215);

  textSize(18);
  text("Recolectá los tres objetos y llegá a la meta.", 400, 240);

  imageMode(CENTER);

  image(imgObjeto1, 300, 280, 50, 50);
  image(imgObjeto2, 400, 280, 50, 50);
  image(imgObjeto3, 500, 280, 50, 50);

  fill(0);
  textSize(18);
  text("TIEMPO LÍMITE: 2 MINUTOS", 400, 320);

  dibujarBotonesInstrucciones();
}
function dibujarBotonesInstrucciones() {
  
  rectMode(CENTER);
  stroke(255);
  strokeWeight(2);

  fill(220, 50, 100);
  rect(250, 365, 200, 45, 10);

  fill(50, 150, 100);
  rect(550, 365, 200, 45, 10);

  fill(255);
  noStroke();

  textAlign(CENTER, CENTER);
  textSize(16);

  text("VOLVER AL MENÚ", 250, 365);
  text("¡A JUGAR!", 550, 365);
}
function mostrarCreditos() {
  
  background(0);

  if (posicionCreditos < 850) {
    posicionCreditos += 0.5;
  }
  fill(255);
  noStroke();
  textAlign(CENTER, CENTER);

  textSize(30);
  text("CRÉDITOS", 400, 450 - posicionCreditos);

  textSize(22);
  text("Desarrollo", 400, 520 - posicionCreditos);

  textSize(18);
  text("Mamani Pamela y Azul Ojeda", 400, 560 - posicionCreditos);

  textSize(22);
  text("Historia y Adaptación", 400, 640 - posicionCreditos);

  textSize(18);
  text("Syundei (Mamani Pamela)", 400, 680 - posicionCreditos);

  textSize(22);
  text("Arte y personajes", 400, 760 - posicionCreditos);

  textSize(18);
  text("Mamani Pamela y Azul Ojeda", 400, 800 - posicionCreditos);

  textSize(22);
  text("Música", 400, 880 - posicionCreditos);

  textSize(18);
  text("One Piece - Nami's Theme", 400, 920 - posicionCreditos);

  textSize(24);
  text("¡Gracias por jugar!", 400, 1050 - posicionCreditos);

  dibujarBotonVolver();
}
function dibujarBotonVolver() {
  
  rectMode(CENTER);

  fill(220, 50, 100);
  stroke(255);
  strokeWeight(2);

  rect(400, 365, 180, 45, 10);

  fill(255);
  noStroke();

  textSize(16);
  textAlign(CENTER, CENTER);

  text("VOLVER AL MENÚ", 400, 365);
}
// PANTALLA DE VICTORIA
function mostrarVictoria() {
  
  imageMode(CORNER);
  image(imgFondoVictoria, 0, 0, 800, 400);

  let latido = 1 + sin(frameCount * 0.05) * 0.05;

  imageMode(CENTER);

  // LOGO DE VICTORIA
  image(imagenesFinales[0], 400, 100,
    imagenesFinales[0].width * 0.55 * latido,
    imagenesFinales[0].height * 0.55 * latido);

  // POSE DE NAKAMURA
  image(imagenesFinales[2], 400, 220,
    imagenesFinales[2].width * 0.3,
    imagenesFinales[2].height * 0.3);

  dibujarBotonesFinales();
}
// PANTALLA DE DERROTA
function mostrarDerrota() {
  
  imageMode(CORNER);
  image(imgFondoDerrota, 0, 0, 800, 400);

  let latido = 1 + sin(frameCount * 0.05) * 0.05;

  imageMode(CENTER);
  // LOGO DE DERROTA
  image(imagenesFinales[1], 400, 100,
    imagenesFinales[1].width * 0.55 * latido,
    imagenesFinales[1].height * 0.55 * latido);
  // POSE DE NAKAMURA
  image(imagenesFinales[3], 400, 220,
    imagenesFinales[3].width * 0.3,
    imagenesFinales[3].height * 0.3);

  dibujarBotonesFinales();
}
// BOTONES DE VICTORIA Y DERROTA
function dibujarBotonesFinales() {
  
  rectMode(CENTER);

  stroke(255);
  strokeWeight(2);

  fill(220, 50, 100);
  rect(290, 365, 180, 45, 10);

  fill(50, 150, 100);
  rect(550, 365, 200, 45, 10);

  fill(255);
  noStroke();

  textAlign(CENTER, CENTER);
  textSize(16);

  text("REINTENTAR", 290, 365);
  text("VOLVER AL MENÚ", 550, 365);
}
