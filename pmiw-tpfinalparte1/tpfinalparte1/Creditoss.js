let tiempoInicioCreditos = 0;
let posicionCreditos = 0;

function mostrarCreditos() {

  // FONDO
  background(0);

  // VELOCIDAD DE LOS CRÉDITOS
  posicionCreditos += 0.5;

  // TEXTO
  fill(255);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(22);

  // TÍTULO
  textSize(30);
  text("CRÉDITOS", 400, 450 - posicionCreditos);

  // INTEGRANTES
  textSize(22);
  text("Desarrollo", 400, 520 - posicionCreditos);
  textSize(18);
  text("Mamani Pamela y Azul Ojeda", 400, 560 - posicionCreditos);

  textSize(22);
  text("Historia y Adaptacion", 400, 640 - posicionCreditos);
  textSize(18);
  text("Syundei (Mamani Pamela)", 400, 680 - posicionCreditos);

  textSize(22);
  text("Arte y personajes", 400, 760 - posicionCreditos);
  textSize(18);
  text("Mamani Pamela y Azul Ojeda", 400, 800 - posicionCreditos);

  textSize(22);
  text("Música", 400, 880 - posicionCreditos);
  textSize(18);
  text("One Piece - Nami's Theme", 400, 920 - posicionCreditos);

  // MENSAJE FINAL
  textSize(24);
  text("¡Gracias por jugar!", 400, 1050 - posicionCreditos);
}
