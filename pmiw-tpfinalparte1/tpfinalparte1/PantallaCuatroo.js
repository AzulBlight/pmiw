function mostrarPantallaCuatro(){

  let tiempo = millis() - tiempoInicioPantalla4
  
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
  text("on el pulso acelerado, Nakamura decide que es el momento ideal. Pero en un pasillo", 40, 382);
  text("escolar concurrido, mantener un momento de intimidad es una tarea prácticamente imposible.", 40, 405);
  }
  
    // Nakamura FRASE 1
  if (tiempo >= 3500 && tiempo <= 7000) {
    image(FramesNakamura[2], 0, 0,448,448);
    image(FramesHirose[6], 400, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Nakamura", 80, 340);

    textSize(20);
    text("Oye, Hirose...", 40, 382);
  }
  // Hirose FRASE 1
  if (tiempo >= 7000 && tiempo <= 10500) {
    image(FramesNakamura[10], 0, 0,448,448);
    image(FramesHirose[1], 400, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Hirose", 80, 340);

    textSize(20);
    text("¿Eh? ¡Nakamura! ¡Buen día!", 40, 382);
  }
  // Hirose FRASE 2
  if (tiempo >= 10500 && tiempo <= 14000) {
    image(FramesNakamura[10], 0, 0,448,448);
    image(FramesHirose[2], 400, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Hirose", 80, 340);

    textSize(20);
    text("¿Qué pasa? Tenés una cara rarísima. ¿Te sentís bien?", 40, 382);
  }
  // Nakamura FRASE 2 (pensamiento)
  if (tiempo >= 14000 && tiempo <= 17500) {
    image(FramesNakamura[5], 0, 0,448,448);
    image(FramesHirose[6], 400, 0,448,448);
    image(secuenciaPantalla1[4], 0, 330, 790, 120);
    textSize(24);
    text("Nakamura", 80, 340);

    textSize(20);
    text("¡No me preguntes cómo estoy! ¡Pregúntame si quiero salir con vos!", 40, 382);
  }
    // Nakamura FRASE 2 
  if (tiempo >= 17500 && tiempo <= 21000) {
    image(FramesNakamura[2], 0, 0,448,448);
    image(FramesHirose[6], 400, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Nakamura", 80, 340);

    textSize(20);
    text("Yo quería decirte algo...", 40, 382);
  }
    // Takeuchi FRASE 1 
  if (tiempo >= 21000 && tiempo <= 24500) {
    image(FramesNakamura[10], 0, 0,448,448);
    image(FramesTakeuchi[3], 400, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Takeuchi", 80, 340);

    textSize(20);
    text("¡Hirose! ¡Ahí estás! ¡Te estuvimos buscando por todos lados!", 40, 382);
  }
  // Ryou FRASE 1 
  if (tiempo >= 24500 && tiempo <= 28000) {
    image(FramesNakamura[10], 0, 0,448,448);
    image(FramesRyou[3], 400, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Takeuchi", 80, 340);

    textSize(20);
    text("En realidad, Takeuchi te buscó en dos lugares y después decidió que ya había recorrido toda la escuela.", 40, 382);
  }
  // Takeuchi FRASE 2
  if (tiempo >= 28000 && tiempo <= 31500) {
    image(FramesNakamura[10], 0, 0,448,448);
    image(FramesTakeuchi[4], 400, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Takeuchi", 80, 340);

    textSize(20);
    text("¡Oye! ¡No arruines mi reputación!", 40, 382);
  }
    // Hirose FRASE 3
  if (tiempo >= 31500 && tiempo <= 35000) {
    image(FramesNakamura[10], 0, 0,448,448);
    image(FramesHirose[5], 400, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Hirose", 80, 340);

    textSize(20);
    text("¡Jajaja! ¿Qué necesitan?", 40, 382);
  }
      // Ryou FRASE 3
  if (tiempo >= 35000 && tiempo <= 38500) {
    image(FramesNakamura[10], 0, 0,448,448);
    image(FramesRyou[1], 400, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Ryou", 80, 340);

    textSize(20);
    text("Yo vine a asegurarme de que no lo arrastrara a alguna tontería.", 40, 382);
  }
      // Hirose FRASE 4
  if (tiempo >= 38500 && tiempo <= 42000) {
    image(FramesNakamura[10], 0, 0,448,448);
    image(FramesHirose[1], 400, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Hirose", 80, 340);

    textSize(20);
    text("Ah, Nakamura, ¿qué me ibas a decir?", 40, 382);
  }    
  // Nakamura FRASE 3 
  if (tiempo >= 42000 && tiempo <= 45500) {
    image(FramesNakamura[4], 0, 0,448,448);
    image(FramesHirose[6], 400, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Nakamura", 80, 340);

    textSize(20);
    text("Ah... no, no es nada. Olvídalo, no era importante.", 40, 382);
  }
        // Hirose FRASE 5
  if (tiempo >= 45500 && tiempo <= 49000) {
    image(FramesNakamura[10], 0, 0,448,448);
    image(FramesHirose[2], 400, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Hirose", 80, 340);

    textSize(20);
    text("¿Seguro? Parecía que querías contarme algo.", 40, 382);
  }
    // Nakamura FRASE 4
  if (tiempo >= 49000 && tiempo <= 52500) {
    image(FramesNakamura[4], 0, 0,448,448);
    image(FramesHirose[6], 400, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Nakamura", 80, 340);

    textSize(20);
    text("¡Sí! Digo... no. ¡Está todo bien!", 40, 382);
  }
    // Hirose FRASE 6
  if (tiempo >= 52500 && tiempo <= 56000) {
    image(FramesNakamura[10], 0, 0,448,448);
    image(FramesHirose[3], 400, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Hirose", 80, 340);

    textSize(20);
    text("Bueno, como vos digas. Nos vemos en el salón, Nakamura.", 40, 382);
  }
      // Nakamura FRASE 5
  if (tiempo >= 56000 && tiempo <= 59500) {
    image(FramesNakamura[7], 0, 0,448,448);
    image(secuenciaPantalla1[4], 0, 330, 790, 120);
    textSize(24);
    text("Nakamura", 80, 340);

    textSize(20);
    text("Otra vez. Ni siquiera pude terminar una frase.", 40, 382);
  }
  if (tiempo >= 59500){
       
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
