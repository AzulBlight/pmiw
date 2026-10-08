// secuenciaPantalla1[5] (feliz)
//FondoPantalla3 = loadImage("data/escenario4.jpeg")
//  Nakamura3 = loadImage("data/frame11.png")
//  Nakamura4 = loadImage("data/frame12.png")
function mostrarPantallaTres(){
let tiempo = millis() - tiempoInicioPantalla3
 
 imageMode(CORNER);
 
  image(FondoPantalla3, 0, 0, 800, 450);
  if (tiempo >= 1000){
  image(secuenciaPantalla1[5], 0, 0, 800, 450);
  
  // VENTANA DE DIALOGO
  fill(24, 36, 95);
  noStroke();
  textAlign(LEFT, TOP);
  
   // FRASE 1
  if (tiempo >= 1000 && tiempo <= 3500) {
    image(secuenciaPantalla1[4], 0, 330, 790, 120);
    textSize(24);
    text("Nakamura", 80, 340);

    textSize(20);
    text("Todavía hay tiempo antes de que suene la campana...", 40, 382);
    text("Hirose ya debería estar por aquí.", 40, 405);
  } 
    // Frase 2
  else if (tiempo >= 3500 && tiempo <= 5500) {
    
    image(Nakamura5, 0, 0, 800, 450);
    image(secuenciaPantalla1[4], 0, 330, 790, 120);
    
    textSize(24);
    text("Nakamura", 80, 340);
    textSize(20);
    text("Ahi esta...", 40, 382);
    
   
  }else if (tiempo >= 5500 && tiempo <= 7500) {
    
    image(Nakamura2, 0, 0, 800, 450);
    image(secuenciaPantalla1[4], 0, 330, 790, 120);
    
    textSize(24);
    text("Nakamura", 80, 340);
    textSize(20);
    text("Concéntrate. Hoy vas a hablar con él", 40, 382);
    
   
  }// FRASE 3
  else if (tiempo >= 7500 && tiempo <= 13500) {
    
    image(Nakamura4, 0, 0, 800, 450);
    image(secuenciaPantalla1[4], 0, 330, 790, 120);
    
    textSize(24);
    text("Nakamura", 80, 340);
    textSize(20);
    text("Solo espero que no esté cerca ese pesado de Matsumura.", 40, 382);
    text("Siempre busca cualquier excusa ridícula para llamar su atención...", 40, 405);
  }
     else if (tiempo >= 13500){
      // BOTÓN Entrar a la escuela
      rectMode(CENTER);

      stroke(255);
      strokeWeight(2);

      fill(220, 50, 100);
      rect(650, 285, 200, 45, 10);

      fill(255);
      noStroke();

      textSize(18);
      textAlign(CENTER, CENTER);
      text("Entrar a la escuela", 650, 285);
  }
 }
}
