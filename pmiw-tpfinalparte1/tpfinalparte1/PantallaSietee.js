function mostrarPantallaSiete(){

  let tiempo = millis() - tiempoInicioPantalla7
  
  imageMode(CORNER);
 
  image(secuenciaPantalla1[0], 0, 0, 800, 450);
  
  // VENTANA DE DIALOGO
  fill(24, 36, 95);
  noStroke();

  textAlign(LEFT, TOP);
  
   //Narrador
  if (tiempo >= 0 && tiempo <= 3500){
  image(Narrador, 0, 330, 790, 120);
  textSize(20);
  text("La noche envuelve la habitación en un silencio sepulcral. Agotado mentalmente", 40, 382);
  text("y sobrepasado por la frustración de no haber actuado, Nakamura llega a su límite.", 40, 405);
  }

// Nakamura FRASE 1
  if (tiempo >= 3500 && tiempo <= 7000) {
    image(FramesNakamura[9], 0, 0,448,448);
    image(secuenciaPantalla1[4], 0, 330, 790, 120);
    textSize(24);
    text("Nakamura", 80, 340);

    textSize(20);
    text("«Oye, Hirose, quería preguntarte si...».", 40, 382);
 }
 // Nakamura FRASE 2
  if (tiempo >= 7000 && tiempo <= 10500) {
    image(FramesNakamura[5], 0, 0,448,448);
    image(secuenciaPantalla1[4], 0, 330, 790, 120);
    textSize(24);
    text("Nakamura", 80, 340);

    textSize(20);
    text("No. Demasiado raro.", 40, 382);
 }
 // Nakamura FRASE 3
  if (tiempo >= 10500 && tiempo <= 14000) {
    image(FramesNakamura[3], 0, 0,448,448);
    image(secuenciaPantalla1[4], 0, 330, 790, 120);
    textSize(24);
    text("Nakamura", 80, 340);

    textSize(20);
    text("«¿Tenés planes para el fin de semana?».", 40, 382);
 }
 // Nakamura FRASE 4
  if (tiempo >= 14000 && tiempo <= 17500) {
    image(FramesNakamura[6], 0, 0,448,448);
    image(secuenciaPantalla1[4], 0, 330, 790, 120);
    textSize(24);
    text("Nakamura", 80, 340);

    textSize(20);
    text("¡Pero si ni siquiera pude terminar una frase esta mañana!", 40, 382);
 }
 // Nakamura FRASE 5
  if (tiempo >= 17500 && tiempo <= 21000) {
    image(FramesNakamura[7], 0, 0,448,448);
    image(secuenciaPantalla1[4], 0, 330, 790, 120);
    textSize(24);
    text("Nakamura", 80, 340);

    textSize(20);
    text("Lo preparé todo... y aun así no pude hacerlo.", 40, 382);
 }
 // Nakamura FRASE 6
  if (tiempo >= 21000 && tiempo <= 24500) {
    image(FramesNakamura[6], 0, 0,448,448);
    image(secuenciaPantalla1[4], 0, 330, 790, 120);
    textSize(24);
    text("Nakamura", 80, 340);

    textSize(20);
    text("¡Basta! ¡No necesito una lista para hablar con una persona!", 40, 382);
 }
 // Nakamura FRASE 7
  if (tiempo >= 24500 && tiempo <= 28000) {
    image(FramesNakamura[4], 0, 0,448,448);
    image(secuenciaPantalla1[4], 0, 330, 790, 120);
    textSize(24);
    text("Nakamura", 80, 340);

    textSize(20);
    text("Pero todavía quiero invitarte, Hirose.", 40, 382);
 }
 // Nakamura FRASE 8
  if (tiempo >= 28000 && tiempo <= 31500) {
    image(FramesNakamura[7], 0, 0,448,448);
    image(secuenciaPantalla1[4], 0, 330, 790, 120);
    textSize(24);
    text("Nakamura", 80, 340);

    textSize(20);
    text("Mañana voy a intentarlo de otra manera...", 40, 382);
 }
 if (tiempo >= 31500){
       
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
