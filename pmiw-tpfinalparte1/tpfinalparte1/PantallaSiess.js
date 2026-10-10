function mostrarPantallaSeis(){

  let tiempo = millis() - tiempoInicioPantalla6
  
  imageMode(CORNER);
 
  image(FondoPantalla4, 0, 0, 800, 450);
  
  // VENTANA DE DIALOGO
  fill(24, 36, 95);
  noStroke();

  textAlign(LEFT, TOP);
  
              //Narrador
  if (tiempo >= 0 && tiempo <= 3500){
  image(Narrador, 0, 330, 790, 120);
  textSize(20);
  text("Aula durante la última hora de clases. El profesor explica una actividad. ", 40, 382);
  text("Nakamura tiene una libreta abierta y escribe distintas maneras de invitar a Hirose a salir.", 40, 405);
  }
  
// Profesor FRASE 1
  if (tiempo >= 3500 && tiempo <= 7000) {
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Profesor", 80, 340);

    textSize(20);
    text("Recuerden entregar el trabajo antes de que suene la campana.", 40, 382);
  }
  // Nakamura FRASE 1
  if (tiempo >= 7000 && tiempo <= 10500) {
    image(FramesNakamura[2], 0, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Nakamura", 80, 340);

    textSize(20);
    text("Opción uno: invitarlo al parque.", 40, 382);
  }
    // Nakamura FRASE 2
  if (tiempo >= 10500 && tiempo <= 14000) {
    image(FramesNakamura[3], 0, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Nakamura", 80, 340);

    textSize(20);
    text("Opción dos: preguntarle si tiene planes para el fin de semana.", 40, 382);
  }  // Nakamura FRASE 2
  if (tiempo >= 14000 && tiempo <= 17500) {
    image(FramesNakamura[2], 0, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Nakamura", 80, 340);

    textSize(20);
    text("Opción tres: decirlo con naturalidad y no comportarme como un completo idiota.", 40, 382);
 }
 // Nakamura FRASE 3
  if (tiempo >= 17500 && tiempo <= 21000 {
    image(FramesNakamura[5], 0, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Nakamura", 80, 340);

    textSize(20);
    text("¿Naturalidad? ¿Cómo se escribe la naturalidad?", 40, 382);
 }
  // Takeuchi FRASE 1
  if (tiempo >= 21000 && tiempo <= 24500) {
    image(FramesNakamura[10], 0, 0,448,448);
    image(FramesTakeuchi[3], 400, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Takeuchi", 80, 340);

    textSize(20);
    text("Oye, Nakamura, ¿estás estudiando o escribiendo una novela?", 40, 382);
 }
   // Nakamura FRASE 4
  if (tiempo >= 24500 && tiempo <= 28000) {
    image(FramesNakamura[6], 0, 0,448,448);
    image(FramesTakeuchi[5], 400, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Nakamura", 80, 340);

    textSize(20);
    text("¡No mires!", 40, 382);
 }
   // Takeuchi FRASE 2
  if (tiempo >= 28000 && tiempo <= 31500) {
    image(FramesNakamura[10], 0, 0,448,448);
    image(FramesTakeuchi[4], 400, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Takeuchi", 80, 340);

    textSize(20);
    text("¡Está bien, está bien! No sabía que era un documento secreto.", 40, 382);
 }
 // Ryou FRASE 1
  if (tiempo >= 31500 && tiempo <= 35000) {
    image(FramesNakamura[10], 0, 0,448,448);
    image(FramesRyou[3], 400, 0,448,448)
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Ryou", 80, 340);

    textSize(20);
    text("Por la cantidad de tachones, parece una declaración de guerra.", 40, 382);
 }
    // Takeuchi FRASE 3
  if (tiempo >= 35000 && tiempo <= 38500) {
    image(FramesNakamura[10], 0, 0,448,448);
    image(FramesTakeuchi[3], 400, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Takeuchi", 80, 340);

    textSize(20);
    text("JA! ¡Eso explica la cara que tiene!", 40, 382);
 }
   // Nakamura FRASE 5
  if (tiempo >= 38500 && tiempo <= 42000) {
    image(FramesNakamura[6], 0, 0,448,448);
    image(FramesTakeuchi[5], 400, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Nakamura", 80, 340);

    textSize(20);
    text("¡Los dos podrían concentrarse en sus propios asuntos!", 40, 382);
 }
   // Hirose FRASE 1
  if (tiempo >= 42000 && tiempo <= 45500) {
    image(FramesNakamura[10], 0, 0,448,448);
    image(FramesHirose[2], 400, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Hirose", 80, 340);

    textSize(20);
    text("¿Qué pasa acá? Los escuché desde el otro lado del salón.", 40, 382);
 }
     // Takeuchi FRASE 4
  if (tiempo >= 45500 && tiempo <= 49000) {
    image(FramesNakamura[10], 0, 0,448,448);
    image(FramesTakeuchi[2], 400, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Takeuchi", 80, 340);

    textSize(20);
    text("Nakamura está preparando algo misterioso.", 40, 382);
 }   
 // Nakamura FRASE 6
  if (tiempo >= 49000 && tiempo <= 52500) {
    image(FramesNakamura[6], 0, 0,448,448);
    image(FramesTakeuchi[5], 400, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Nakamura", 80, 340);

    textSize(20);
    text("¡No estoy preparando nada!", 40, 382);
 }
   // Hirose FRASE 1
  if (tiempo >= 52500 && tiempo <= 56000) {
    image(FramesNakamura[10], 0, 0,448,448);
    image(FramesHirose[1], 400, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Hirose", 80, 340);

    textSize(20);
    text("¿Ah, sí? Ahora me dio curiosidad.", 40, 382);
 }
  // Nakamura FRASE 6
  if (tiempo >= 56000 && tiempo <= 59500) {
    image(FramesNakamura[6], 0, 0,448,448);
    image(FramesHirose[6], 400, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Nakamura", 80, 340);

    textSize(20);
    text("¡No es nada que te interese!", 40, 382);
 }
    // Hirose FRASE 1
  if (tiempo >= 59500 && tiempo <= 63000) {
    image(FramesNakamura[10], 0, 0,448,448);
    image(FramesHirose[3], 400, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Hirose", 80, 340);

    textSize(20);
    text("Bueno, bueno. No hace falta ponerse tan nervioso. Si necesitás ayuda con algo, podés preguntarme.", 40, 382);
 }
   // Nakamura FRASE 6
  if (tiempo >= 63000 && tiempo <= 66500) {
    image(FramesNakamura[4], 0, 0,448,448);
    image(secuenciaPantalla1[4], 0, 330, 790, 120);
    textSize(24);
    text("Nakamura", 80, 340);

    textSize(20);
    text("¡Me acaba de ofrecer ayuda y yo le contesté así!", 40, 382);
 }
   // Nakamura FRASE 6
  if (tiempo >= 66500 && tiempo <= 70000) {
    image(FramesNakamura[7], 0, 0,448,448);
    image(secuenciaPantalla1[4], 0, 330, 790, 120);
    textSize(24);
    text("Nakamura", 80, 340);

    textSize(20);
    text("Esta noche voy a ordenar mis ideas. Mañana... no. No puedo seguir pensando así.", 40, 382);
 }
 if (tiempo >= 70000){
       
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
