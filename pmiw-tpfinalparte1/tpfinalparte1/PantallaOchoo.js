function mostrarPantallaOcho(){

  let tiempo = millis() - tiempoInicioPantalla8
  
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
  text("El estridente sonido de la alarma rompe el sueño de Nakamura. Todo parece indicar que", 40, 382);
  text("inicia una nueva jornada, pero los rastros en la habitación insinúan que algo en la urdimbre del tiempo se ha roto.", 40, 405);
  }
  
  // Nakamura FRASE 1
  if (tiempo >= 3500 && tiempo <= 7000) {
    image(FramesNakamura[6], 0, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Nakamura", 80, 340);

    textSize(20);
    text("¡Ya voy, ya voy...!", 40, 382);
 }
   // Nakamura FRASE 2
  if (tiempo >= 7000 && tiempo <= 10500) {
    image(FramesNakamura[8], 0, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Nakamura", 80, 340);

    textSize(20);
    text("¿Eh...?", 40, 382);
 }
   // Nakamura FRASE 3
  if (tiempo >= 10500 && tiempo <= 14000) {
    image(FramesNakamura[1], 0, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Nakamura", 80, 340);

    textSize(20);
    text("Esas notas... Yo las rompí anoche.", 40, 382);
 }
   // Nakamura FRASE 4
  if (tiempo >= 14000 && tiempo <= 17500) {
    image(FramesNakamura[8], 0, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Nakamura", 80, 340);

    textSize(20);
    text("¿Por qué el despertador sonó a la misma hora? ¿Y por qué siento que ya viví esta mañana?", 40, 382);
 }
   // Nakamura FRASE 5
  if (tiempo >= 17500 && tiempo <= 21000) {
    image(FramesNakamura[9], 0, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Nakamura", 80, 340);

    textSize(20);
    text("No puede ser...", 40, 382);
 }
   // Nakamura FRASE 6
  if (tiempo >= 21000 && tiempo <= 24500) {
    image(FramesNakamura[8], 0, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Nakamura", 80, 340);

    textSize(20);
    text("¿Estoy soñando? ¿O... el día volvió a empezar?", 40, 382);
 }
 if (tiempo >= 24500){
       
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
