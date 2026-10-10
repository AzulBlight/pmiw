function mostrarPantallaCinco(){

  let tiempo = millis() - tiempoInicioPantalla5
  
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
  text("La frustración amenaza con apoderarse de Nakamura. Sin embargo,", 40, 382);
  text("la mirada atenta de Ryou ha captado más de lo que Nakamura habría deseado transparentar.", 40, 405);
  }
  
   // Nakamura FRASE 1
  if (tiempo >= 3500 && tiempo <= 7000) {
    image(FramesNakamura[7], 0, 0,448,448);
    image(FramesRyou[4], 400, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Nakamura", 80, 340);

    textSize(20);
    text("Soy un idiota... ¿Por qué me cuesta tanto hablarle normalmente?", 40, 382);
  }
     // Ryou FRASE 1
  if (tiempo >= 7000 && tiempo <= 10500) {
    image(FramesNakamura[10], 0, 0,448,448);
    image(FramesRyou[3], 400, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Ryou", 80, 340);

    textSize(20);
    text("Sabés, Nakamura... disimulás bastante mal.", 40, 382);
  }
     // Nakamura FRASE 2
  if (tiempo >= 10500 && tiempo <= 14000) {
    image(FramesNakamura[5], 0, 0,448,448);
    image(FramesRyou[4], 400, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Nakamura", 80, 340);

    textSize(20);
    text("¿¡Eh!? ¿De qué hablas, Ryou?", 40, 382);
  }
       // Ryou FRASE 2
  if (tiempo >= 14000 && tiempo <= 17500) {
    image(FramesNakamura[10], 0, 0,448,448);
    image(FramesRyou[3], 400, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Ryou", 80, 340);

    textSize(20);
    text("De nada. Solo es curioso que te pongas tan nervioso cada vez que Hirose te habla.", 40, 382);
  }
       // Nakamura FRASE 2
  if (tiempo >= 17500 && tiempo <= 21000) {
    image(FramesNakamura[6], 0, 0,448,448);
    image(FramesRyou[4], 400, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Nakamura", 80, 340);

    textSize(20);
    text("¡No estoy nervioso!", 40, 382);
  }
         // Ryou FRASE 3
  if (tiempo >= 21000 && tiempo <= 24500) {
    image(FramesNakamura[10], 0, 0,448,448);
    image(FramesRyou[3], 400, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Ryou", 80, 340);

    textSize(20);
    text("Claro. Y yo soy el director de la escuela.", 40, 382);
  }
         // Ryou FRASE 4
  if (tiempo >= 24500 && tiempo <= 28500) {
    image(FramesNakamura[10], 0, 0,448,448);
    image(FramesRyou[3], 400, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Ryou", 80, 340);

    textSize(20);
    text("Escucha, si vas a dudar tanto cada vez que te acercas, alguien más te va a ganar de mano.", 40, 382);
  }
         // Nakamura FRASE 3
  if (tiempo >= 28500 && tiempo <= 31500) {
    image(FramesNakamura[4], 0, 0,448,448);
    image(FramesRyou[4], 400, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Nakamura", 80, 340);

    textSize(20);
    text("¿Alguien más...?", 40, 382);
  }         
  // Ryou FRASE 5
  if (tiempo >= 31500 && tiempo <= 35000) {
    image(FramesNakamura[10], 0, 0,448,448);
    image(FramesRyou[2], 400, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Ryou", 80, 340);

    textSize(20);
    text("No dije ningún nombre. No hace falta que te pongas así.", 40, 382);
  }
    // Ryou FRASE 6
  if (tiempo >= 35000 && tiempo <= 38500) {
    image(FramesNakamura[10], 0, 0,448,448);
    image(FramesRyou[3], 400, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Ryou", 80, 340);

    textSize(20);
    text("No tenés que preparar una frase perfecta. Si querés decirle algo, decíselo. Y si te sale mal, por lo menos lo intentaste.", 40, 382);
  }
           // Nakamura FRASE 4
  if (tiempo >= 38500 && tiempo <= 42000) {
    image(FramesNakamura[9], 0, 0,448,448);
    image(FramesRyou[4], 400, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Nakamura", 80, 340);

    textSize(20);
    text("¿Y si arruino todo?", 40, 382);
  }      
  // Ryou FRASE 6
  if (tiempo >= 42000 && tiempo <= 45500) {
    image(FramesNakamura[10], 0, 0,448,448);
    image(FramesRyou[3], 400, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Ryou", 80, 340);

    textSize(20);
    text("Entonces vas a tener un problema real en vez de veinte problemas imaginarios.", 40, 382);
  }
  // Ryou FRASE 7
  if (tiempo >= 45500 && tiempo <= 49000) {
    image(FramesNakamura[10], 0, 0,448,448);
    image(FramesRyou[1], 400, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Ryou", 80, 340);

    textSize(20);
    text("Cambiá esa cara y vamos a clase. Me estás dando vergüenza ajena.", 40, 382);
  }
  // Nakamura FRASE 4
  if (tiempo >= 49000 && tiempo <= 52500) {
    image(FramesNakamura[6], 0, 0,448,448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24);
    text("Nakamura", 80, 340);

    textSize(20);
    text("¡¿Por qué todos tienen que decirme eso hoy?!", 40, 382);
  }  
  if (tiempo >= 52500){
       
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
