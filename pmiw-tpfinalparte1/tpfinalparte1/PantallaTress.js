function mostrarPantallaTres(){
let tiempo = millis() - tiempoInicioPantalla3
 
 imageMode(CORNER);
 
  image(FondoPantalla3, 0, 0, 800, 450);
  
  // VENTANA DE DIALOGO
  fill(24, 36, 95);
  noStroke();
  textAlign(LEFT, TOP);
  
        //Narrador
  if (tiempo >= 0 && tiempo <= 1000){
  image(Narrador, 0, 330, 790, 120);
  textSize(20);
  text("El murmullo de los estudiantes llena la entrada del instituto. Nakamura escanea a la", 40, 382);
  text("multitud entre la brisa de la mañana, buscando únicamente la sonrisa de la persona que ocupa todos sus pensamientos.", 40, 405);
  }
  
   // FRASE 1
  if (tiempo >= 1000 && tiempo <= 3500) {
    image(FramesNakamura[3], 0, 0,448,448);
    image(secuenciaPantalla1[4], 0, 330, 790, 120);
    textSize(24);
    text("Nakamura", 80, 340);

    textSize(20);
    text("Todavía hay tiempo antes de que suene la campana...", 40, 382);
    text("Hirose ya debería estar por aquí.", 40, 405);
  } 
    // Frase 2
   if (tiempo >= 3500 && tiempo <= 5500) {
    
    image(FramesNakamura[2], 0, 0,448,448);
    image(secuenciaPantalla1[4], 0, 330, 790, 120);
    
    textSize(24);
    text("Nakamura", 80, 340);
    textSize(20);
    text("Ahi esta...", 40, 382);
    
   
  } if (tiempo >= 5500 && tiempo <= 7500) {
    
    image(FramesNakamura[5], 0, 0,448,448);
    image(secuenciaPantalla1[4], 0, 330, 790, 120);
    
    textSize(24);
    text("Nakamura", 80, 340);
    textSize(20);
    text("Concéntrate. Hoy vas a hablar con él", 40, 382);
    
   
  }// FRASE 3
   if (tiempo >= 7500 && tiempo <= 13500) {
    
    image(FramesNakamura[6], 0, 0,448,448);
    image(secuenciaPantalla1[4], 0, 330, 790, 120);
    
    textSize(24);
    text("Nakamura", 80, 340);
    textSize(20);
    text("Solo espero que no esté cerca ese pesado de Matsumura.", 40, 382);
    text("Siempre busca cualquier excusa ridícula para llamar su atención...", 40, 405);
  }
     if (tiempo >= 0){
       
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
      text("Continuar", 650, 285);
  }
 }
