function mostrarPantallaDos(){
  
 let tiempo = millis() - tiempoInicioPantalla2
 
 imageMode(CORNER);
 
  image(FondoPantalla2, 0, 0, 800, 450);
  
  if (tiempo >= 1000 ){
    image(Nakamura1, 0, 0, 800, 450);
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
    text("Tengo que mantener la calma...", 40, 382);
  }
   // FRASE 2
  else if (tiempo >= 3500 && tiempo <= 8500) {
    
    image(Nakamura2, 0, 0, 800, 450);
    image(secuenciaPantalla1[4], 0, 330, 790, 120);
    
    textSize(24);
    text("Nakamura", 80, 340);
    textSize(20);
    text("Solo tengo que encontrar el momento adecuado para hablar con Hirose.", 40, 382);
  }
  else if (tiempo >= 8500){
    image(Nakamura2, 0, 0, 800, 450);
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
}
