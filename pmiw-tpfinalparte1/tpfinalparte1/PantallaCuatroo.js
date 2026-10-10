function mostrarPantallaCuatro(){

  let tiempo = millis() - tiempoInicioPantalla4
  
  imageMode(CORNER);
 
  image(FondoPantalla4, 0, 0, 800, 450);
  
  // VENTANA DE DIALOGO
  fill(24, 36, 95);
  noStroke();

  textAlign(LEFT, TOP);
  
          //Narrador
  if (tiempo >= 0 && tiempo <= 1000){
  image(Narrador, 0, 330, 790, 120);
  textSize(20);
  text("on el pulso acelerado, Nakamura decide que es el momento ideal. Pero en un pasillo", 40, 382);
  text("escolar concurrido, mantener un momento de intimidad es una tarea prácticamente imposible.", 40, 405);
  }
  
    // Nakamura FRASE 1
  if (tiempo >= 1000 && tiempo <= 3500) {
    image(FramesNakamura[2], 0, 0,448,448);
    image(FramesHirose[6], 400, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Nakamura", 80, 340);

    textSize(20);
    text("Oye, Hirose...", 40, 382);
  }
  // Hirose FRASE 1
  if (tiempo >= 3500 && tiempo <= 6500) {
    image(FramesNakamura[10], 0, 0,448,448);
    image(FramesHirose[1], 400, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Hirose", 80, 340);

    textSize(20);
    text("¿Eh? ¡Nakamura! ¡Buen día!", 40, 382);
  }
  // Hirose FRASE 2
  if (tiempo >= 6500 && tiempo <= 9500) {
    image(FramesNakamura[10], 0, 0,448,448);
    image(FramesHirose[2], 400, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Hirose", 80, 340);

    textSize(20);
    text("¿Qué pasa? Tenés una cara rarísima. ¿Te sentís bien?", 40, 382);
  }
  // Nakamura FRASE 2 (pensamiento)
  if (tiempo >= 9500 && tiempo <= 12500) {
    image(FramesNakamura[5], 0, 0,448,448);
    image(FramesHirose[6], 400, 0,448,448);
    image(secuenciaPantalla1[4], 0, 330, 790, 120);
    textSize(24);
    text("Nakamura", 80, 340);

    textSize(20);
    text("¡No me preguntes cómo estoy! ¡Pregúntame si quiero salir con vos!", 40, 382);
  }
    // Nakamura FRASE 2 
  if (tiempo >= 12500 && tiempo <= 15500) {
    image(FramesNakamura[2], 0, 0,448,448);
    image(FramesHirose[6], 400, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Nakamura", 80, 340);

    textSize(20);
    text("Yo quería decirte algo...", 40, 382);
  }
    // Takeuchi FRASE 1 
  if (tiempo >= 15500 && tiempo <= 18500) {
    image(FramesNakamura[10], 0, 0,448,448);
    image(FramesTakeuchi[3], 400, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Takeuchi", 80, 340);

    textSize(20);
    text("¡Hirose! ¡Ahí estás! ¡Te estuvimos buscando por todos lados!", 40, 382);
  }
  // Ryou FRASE 1 
  if (tiempo >= 18500 && tiempo <= 20500) {
    image(FramesNakamura[10], 0, 0,448,448);
    image(FramesRyou[3], 400, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Takeuchi", 80, 340);

    textSize(20);
    text("En realidad, Takeuchi te buscó en dos lugares y después decidió que ya había recorrido toda la escuela.", 40, 382);
  }
  // Takeuchi FRASE 2
  if (tiempo >= 20500 && tiempo <= 23500) {
    image(FramesNakamura[10], 0, 0,448,448);
    image(FramesTakeuchi[4], 400, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Takeuchi", 80, 340);

    textSize(20);
    text("¡Oye! ¡No arruines mi reputación!", 40, 382);
  }
    // Hirose FRASE 3
  if (tiempo >= 23500 && tiempo <= 26500) {
    image(FramesNakamura[10], 0, 0,448,448);
    image(FramesHirose[5], 400, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Hirose", 80, 340);

    textSize(20);
    text("¡Jajaja! ¿Qué necesitan?", 40, 382);
  }
      // Ryou FRASE 3
  if (tiempo >= 26500 && tiempo <= 29500) {
    image(FramesNakamura[10], 0, 0,448,448);
    image(FramesRyou[1], 400, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Ryou", 80, 340);

    textSize(20);
    text("Yo vine a asegurarme de que no lo arrastrara a alguna tontería.", 40, 382);
  }
      // Hirose FRASE 4
  if (tiempo >= 29500 && tiempo <= 32500) {
    image(FramesNakamura[10], 0, 0,448,448);
    image(FramesHirose[1], 400, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Hirose", 80, 340);

    textSize(20);
    text("Ah, Nakamura, ¿qué me ibas a decir?", 40, 382);
  }    
  // Nakamura FRASE 3 
  if (tiempo >= 32500 && tiempo <= 35500) {
    image(FramesNakamura[4], 0, 0,448,448);
    image(FramesHirose[6], 400, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Nakamura", 80, 340);

    textSize(20);
    text("Ah... no, no es nada. Olvídalo, no era importante.", 40, 382);
  }
        // Hirose FRASE 5
  if (tiempo >= 35500 && tiempo <= 38500) {
    image(FramesNakamura[10], 0, 0,448,448);
    image(FramesHirose[2], 400, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Hirose", 80, 340);

    textSize(20);
    text("¿Seguro? Parecía que querías contarme algo.", 40, 382);
  }
    // Nakamura FRASE 4
  if (tiempo >= 38500 && tiempo <= 41500) {
    image(FramesNakamura[4], 0, 0,448,448);
    image(FramesHirose[6], 400, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Nakamura", 80, 340);

    textSize(20);
    text("¡Sí! Digo... no. ¡Está todo bien!", 40, 382);
  }
    // Hirose FRASE 6
  if (tiempo >= 41500 && tiempo <= 44500) {
    image(FramesNakamura[10], 0, 0,448,448);
    image(FramesHirose[3], 400, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Hirose", 80, 340);

    textSize(20);
    text("Bueno, como vos digas. Nos vemos en el salón, Nakamura.", 40, 382);
  }
      // Nakamura FRASE 5
  if (tiempo >= 44500 && tiempo <= 47500) {
    image(FramesNakamura[7], 0, 0,448,448);
    image(secuenciaPantalla1[4], 0, 330, 790, 120);
    textSize(24);
    text("Nakamura", 80, 340);

    textSize(20);
    text("Otra vez. Ni siquiera pude terminar una frase.", 40, 382);
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
