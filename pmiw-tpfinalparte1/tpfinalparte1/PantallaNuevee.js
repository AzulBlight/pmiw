function mostrarPantallaNueve(){

  let tiempo = millis() - tiempoInicioPantalla9
  
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
  text("El déjà vu deja de ser una sospecha para convertirse en una descarada realidad. Las palabras, los gestos y", 40, 382);
  text("los encuentros se repiten milimétricamente ante la mirada atónita de Nakamura, el único consciente de esta anomalía.", 40, 405);
  }
  
  // Takeuchi FRASE 1
  if (tiempo >= 0 && tiempo <= 3500) {
    image(FramesNakamura[10], 0, 0,448,448);
    image(FramesTakeuchi[3], 400, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Takeuchi", 80, 340);

    textSize(20);
    text("¡Hirose! ¡Ahí estás! ¡Te estuvimos buscando por todos lados!", 40, 382);
 }
   // Nakamura FRASE 1
  if (tiempo >= 0 && tiempo <= 3500) {
    image(FramesNakamura[8], 0, 0,448,448);
    image(FramesTakeuchi[5], 400, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Nakamura", 80, 340);

    textSize(20);
    text("No...", 40, 382);
 }
    // Ryou FRASE 1
  if (tiempo >= 0 && tiempo <= 3500) {
    image(FramesNakamura[10], 0, 0,448,448);
    image(FramesRyou[3], 400, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Ryou", 80, 340);

    textSize(20);
    text("En realidad, Takeuchi te buscó en dos lugares y después decidió que ya había recorrido toda la escuela.", 40, 382);
 }
   // Takeuchi FRASE 2
  if (tiempo >= 0 && tiempo <= 3500) {
    image(FramesNakamura[10], 0, 0,448,448);
    image(FramesTakeuchi[4], 400, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Takeuchi", 80, 340);

    textSize(20);
    text("¡Oye! ¡No arruines mi reputación!", 40, 382);
 }
    // Nakamura FRASE 2
  if (tiempo >= 0 && tiempo <= 3500) {
    image(FramesNakamura[8], 0, 0,448,448);
    image(FramesTakeuchi[5], 400, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Nakamura", 80, 340);

    textSize(20);
    text("Es igual... Todo está pasando exactamente igual.", 40, 382);
 }
     // Hirose FRASE 1
  if (tiempo >= 0 && tiempo <= 3500) {
    image(FramesNakamura[10], 0, 0,448,448);
    image(FramesHirose[1], 400, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Hirose", 80, 340);

    textSize(20);
    text("Ah, Nakamura, ¿qué me ibas a decir?", 40, 382);
 }
     // Nakamura FRASE 3
  if (tiempo >= 0 && tiempo <= 3500) {
    image(FramesNakamura[1], 0, 0,448,448);
    image(FramesHirose[6], 400, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Nakamura", 80, 340);

    textSize(20);
    text("Ayer... me preguntaste lo mismo.", 40, 382);
 }
      // Hirose FRASE 2
  if (tiempo >= 0 && tiempo <= 3500) {
    image(FramesNakamura[10], 0, 0,448,448);
    image(FramesHirose[2], 400, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Hirose", 80, 340);

    textSize(20);
    text("¿Ayer? Pero si recién llegamos.", 40, 382);
 }
      // Nakamura FRASE 4
  if (tiempo >= 0 && tiempo <= 3500) {
    image(FramesNakamura[8], 0, 0,448,448);
    image(FramesHirose[6], 400, 0,448,448);
    image(secuenciaPantalla1[4], 0, 330, 790, 120);
    textSize(24);
    text("Nakamura", 80, 340);

    textSize(20);
    text("No estoy soñando... ¡El día se está repitiendo!", 40, 382);
 }
       // Matsumura FRASE 1
  if (tiempo >= 0 && tiempo <= 3500) {
    image(FramesNakamura[10], 0, 0,448,448);
    image(FramesMatsumura [1], 400, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Matsumura", 80, 340);

    textSize(20);
    text("¡Hirose! ¡Mira este truco! ¡Lo practiqué durante toda la mañana!", 40, 382);
 }
       // Hirose FRASE 3
  if (tiempo >= 0 && tiempo <= 3500) {
    image(FramesNakamura[10], 0, 0,448,448);
    image(FramesHirose[3], 400, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Hirose", 80, 340);

    textSize(20);
    text("¡Ko! ¡Cuidado! ¿Estás bien?", 40, 382);
 }
        // Matsumura FRASE 2
  if (tiempo >= 0 && tiempo <= 3500) {
    image(FramesNakamura[10], 0, 0,448,448);
    image(FramesMatsumura [3], 400, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Matsumura", 80, 340);

    textSize(20);
    text("¡Perfectamente! ¡Lo tenía todo calculated!", 40, 382);
 }
        // Ryou FRASE ?
  if (tiempo >= 0 && tiempo <= 3500) {
    image(FramesNakamura[10], 0, 0,448,448);
    image(FramesRyou[2], 400, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Ryou", 80, 340);

    textSize(20);
    text("Evidentemente.", 40, 382);
 }
       // Nakamura FRASE 5
  if (tiempo >= 0 && tiempo <= 3500) {
    image(FramesNakamura[8], 0, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Nakamura", 80, 340);

    textSize(20);
    text("Si el día vuelve a empezar... todavía puedo decidir cómo actuar.", 40, 382);
 }
        // Nakamura FRASE 5
  if (tiempo >= 0 && tiempo <= 3500) {
    image(FramesNakamura[5], 0, 0,448,448);
    image(secuenciaPantalla1[4], 0, 330, 790, 120);
    textSize(24);
    text("Nakamura", 80, 340);

    textSize(20);
    text("Esta vez no quiero que el miedo decida por mí.", 40, 382);
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
