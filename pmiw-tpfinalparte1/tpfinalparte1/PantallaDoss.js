function mostrarPantallaDos(){
  
 let tiempo = millis() - tiempoInicioPantalla2
 
 imageMode(CORNER);
 
  image(FondoPantalla2, 0, 0, 800, 450);
 
    // VENTANA DE DIALOGO
  fill(24, 36, 95);
  noStroke();

  textAlign(LEFT, TOP);
  
      //Narrador
  if (tiempo >= 0 && tiempo <= 3500){
  image(Narrador, 0, 330, 790, 120);
  textSize(20);
  text("Las calles matutinas avanzan a paso lento, pero en la mente de Nakamura las ideas giran a mil por hora. Entre escenas imaginarias", 40, 382);
  text("y escenarios catastróficos, intenta encontrar la fórmula perfecta para declarar sus intenciones sin perder la compostura.", 40, 405);
  }
  
  // FRASE 1
  if (tiempo >= 3500 && tiempo <= 7000) {
    image(FramesNakamura[9], 0, 0,448,448);
    image(secuenciaPantalla1[4], 0, 330, 790, 120);
    textSize(24);
    text("Nakamura", 80, 340);

    textSize(20);
    text("Tengo que mantener la calma...", 40, 382);
  }
   // FRASE 2
    if (tiempo >= 7000 && tiempo <= 10500) {
    
    image(FramesNakamura[3], 0, 0,448,448);
    image(secuenciaPantalla1[4], 0, 330, 790, 120);
    
    textSize(24);
    text("Nakamura", 80, 340);
    textSize(20);
    text("Solo tengo que encontrar el momento adecuado para hablar con Hirose.", 40, 382);
    text("«Hirose, ¿te gustaría salir conmigo este fin de semana?». Simple. Directo.", 40, 405);
  }
   // Taparce la cara
    if (tiempo >= 10500 && tiempo <= 14000) {
    
    image(FramesNakamura[4], 0, 0,448,448);
    image(secuenciaPantalla1[4], 0, 330, 790, 120);
    
    textSize(24);
    text("Nakamura", 80, 340);
    textSize(20);
    text("¿Y si me pregunta porque?", 40, 382);
  }
   // FRASE 3
    if (tiempo >= 14000 && tiempo <= 17500) {
    
    image(FramesNakamura[6], 0, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    
    textSize(24);
    text("Nakamura", 80, 340);
    textSize(20);
    text("¡Poque quiero pasar tiempo contigo,idiota!", 40, 382);
  }
     // FRASE 4
    if (tiempo >= 17500 && tiempo <= 21000) {
    
    image(FramesNakamura[4], 0, 0,448,448);
    image(secuenciaPantalla1[4], 0, 330, 790, 120);
    
    textSize(24);
    text("Nakamura", 80, 340);
    textSize(20);
    text("...No,no puedo decirle idiota.", 40, 382);
  }
    if (tiempo >= 21000){
      image(FramesNakamura[1], 0, 0,448,448);
    // BOTÓN IR A LA ESCUELA
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
