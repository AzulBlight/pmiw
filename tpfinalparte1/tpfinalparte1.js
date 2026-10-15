//Mamani Pamela y Azul Ojeda 
//Comision 3
// https://youtu.be/oYziLAh5mCw (video de Azul)
//
// tpfinalparte1

let musica;          // Archivo de audio principal del juego
let imgFondoMenu;    // Imagen de fondo para el menú principal
let imgLogoMenu;     // Logotipo del juego en el menú

// Arreglos para almacenar las secuencias de imágenes por pantalla
let secuenciaPantalla1 = [];
let secuenciaPantalla10 = [];
let secuenciaPantalla11 = [];
let secuenciaPantalla12 = [];
let secuenciaPantalla13 = []; 
let secuenciaPantalla14 = []; 
let secuenciaPantalla15 = []; 
let secuenciaPantalla16 = []; 
let secuenciaPantalla17 = []; 
let secuenciaPantalla18 = []; 
let secuenciaPantalla19 = [];

let FondoPantalla2, Nakamura1, Nakamura2;
let FondoPantalla3, Nakamura3, Nakamura4, Nakamura5;
let FondoPantalla4, Nakamura6;

// Vectores de fotogramas/sprites para los diferentes personajes (limpios)
let FramesNakamura = [];
let FramesHirose = [];
let FramesMatsumura = [];
let FramesRyou = [];
let FramesTakeuchi = [];

let Narrador, cajaPensamiento, cajaDialogo; // Cajas de texto y UI

let pantalla = 0;     // Controla la pantalla o escena actual del juego
let textoActual = 0;  // Controla el paso actual dentro de los diálogos

// Contadores de pasos para las primeras pantallas
let pantalla1 = 0; 
let pantalla2 = 0; 
let pantalla3 = 0; 
let pantalla4 = 0; 
let pantalla5 = 0; 
let pantalla6 = 0; 
let pantalla7 = 0; 
let pantalla8 = 0; 
let pantalla9 = 0; 

// Variables para el desplazamiento y control de los créditos
let tiempoInicioCreditos = 0;
let posicionCreditos = 0;

// Estructura de diálogos y eventos para la Pantalla 10
let dialogosPantalla10 = [
  { frame: 0, tipo: "Narrador", texto: "Nakamura, obsesionado con controlar todo, intenta evitar cualquier\nimprevisto en sus relaciones, pero su necesidad de control termina complicándolo todo." },
  { frame: 1, tipo: "Pensamiento", texto: "Ryou no sabe de qué habla. No necesito sus consejos." },
  { frame: 2, tipo: "Pensamiento", texto: "Si fallé antes fue por improvisar. Esta vez voy a calcular\nexactamente la hora, el lugar y las palabras." },
  { frame: 1, tipo: "Pensamiento", texto: "No puede salir mal si controlo todo." },
  { frame: 2, tipo: "Pensamiento", texto: "Primero, esperar a que Hirose guarde sus cosas. Segundo, evitar a\nTakeuchi y a Ryou. Tercero, invitarlo antes de que Matsumura aparezca." },
  { frame: 0, tipo: "Narrador", texto: "Takeuchi se acerca a su banco y se asoma por encima de su hombro." },
  { frame: 3, tipo: "Takeuchi", texto: "¿Otra vez con la libreta? ¿Estás preparando un examen secreto?" },
  { frame: 3, tipo: "Nakamura", texto: "¡Deja de meterte en mis asuntos!" },
  { frame: 3, tipo: "Takeuchi", texto: "Bueno, tranquilo. Solo quería saber si venías con nosotros después de clase." },
  { frame: 3, tipo: "Nakamura", texto: "No. Y no necesito que me ayudes." },
  { frame: 4, tipo: "Takeuchi", texto: "Ah... Está bien. Era una pregunta, nada más." },
  { frame: 0, tipo: "Narrador", texto: "Ryou, que escuchó la conversación, mira a Nakamura con seriedad." },
  { frame: 5, tipo: "Ryou", texto: "Podés estar nervioso sin descargarlo con los demás." },
  { frame: 5, tipo: "Nakamura", texto: "¡No estoy nervioso!" },
  { frame: 6, tipo: "Ryou", texto: "Claro. Entonces no te va a molestar que me vaya." },
  { frame: 0, tipo: "Narrador", texto: "Ryou y Takeuchi se marchan. Nakamura vuelve a mirar su libreta." },
  { frame: 7, tipo: "Nakamura", texto: "No me importa. Esta vez voy a hacerlo exactamente como lo planeé.", boton: "Ir al pasillo" }
];

// Estructura de diálogos y eventos para la Pantalla 11
let dialogosPantalla11 = [
  { frame: 0, tipo: "Narrador", texto: "Los planes rígidos se rompen con facilidad ante el más mínimo imprevisto.\nLa obsesión de Nakamura colisiona contra el caos de la rutina escolar." },
  { frame: 1, tipo: "Narrador", texto: "El pasillo habitual de la escuela se convierte en un escenario impredecible." },
  { frame: 2, tipo: "Matsumura", texto: "¡Abran paso! ¡Se me enfría el almuerzo...!" },
  { frame: 3, tipo: "Narrador", texto: "¡PAM! Matsumura choca contra Nakamura y ambos caen al suelo." },
  { frame: 4, tipo: "Matsumura", texto: "¡Mi pan!" },
  { frame: 4, tipo: "Nakamura", texto: "¡Mi libreta!" },
  { frame: 5, tipo: "Takeuchi", texto: "¿Están bien?! Matsumura, ¿cómo lográs chocar con alguien en un pasillo vacío?" },
  { frame: 6, tipo: "Matsumura", texto: "¡Fue una maniobra táctica!" },
  { frame: 6, tipo: "Takeuchi", texto: "Una maniobra táctica que casi te hace perder el almuerzo." },
  { frame: 7, tipo: "Narrador", texto: "Nakamura recoge sus hojas arrugadas. Está rojo de furia." },
  { frame: 8, tipo: "Nakamura", texto: "¡Apártense los dos! ¿Acaso no ven que estoy ocupado?" },
  { frame: 8, tipo: "Takeuchi", texto: "Oye, Nakamura, solo estaba intentando ayudarte..." },
  { frame: 8, tipo: "Nakamura", texto: "¡Siempre arruinan todo con sus estupideces!\n¡Nadie puede dejarme tranquilo ni un segundo!" },
  { frame: 9, tipo: "Narrador", texto: "Hirose, que escuchó los gritos, se da vuelta. Su sonrisa desaparece." },
  { frame: 9, tipo: "Hirose", texto: "Oye, Nakamura... No hay necesidad de tratar así a Takeuchi y a Matsumura." },
  { frame: 9, tipo: "Nakamura", texto: "¡No se metan!" },
  { frame: 10, tipo: "Narrador", texto: "Hirose da un paso hacia sus amigos y los ayuda a recoger los papeles." },
  { frame: 10, tipo: "Hirose", texto: "Solo estaban jugando. Entiendo que estés molesto,\npero no está bien que les hables así." },
  { frame: 10, tipo: "Nakamura", texto: "Hirose, yo..." },
  { frame: 11, tipo: "Narrador", texto: "Hirose lo mira con decepción y tristeza." },
  { frame: 11, tipo: "Hirose", texto: "No sé qué te está pasando últimamente, pero no quiero que sigamos discutiendo.", boton: "Continuar" }
];

// Estructura de diálogos y eventos para la Pantalla 12
let dialogosPantalla12 = [
  { frame: 0, tipo: "Narrador", texto: "Intentar forzar el destino cerrándole la puerta a los demás solo genera aislamiento.\nAl buscar la perfección absoluta, Nakamura ha quebrantado los lazos deseados." },
  { frame: 0, tipo: "Nakamura", texto: "Hirose..." },
  { frame: 0, tipo: "Narrador", texto: "Hirose se detiene un instante, sin darse vuelta." },
  { frame: 1, tipo: "Hirose", texto: "Necesito un poco de espacio, Nakamura. Hablaremos cuando estés más tranquilo." },
  { frame: 1, tipo: "Narrador", texto: "Hirose continúa caminando con sus amigos." },
  { frame: 2, tipo: "Pensamiento", texto: "Mi plan... Todo salió mal." },
  { frame: 2, tipo: "Narrador", texto: "Nakamura mira sus manos temblorosas y después la libreta rota." },
  { frame: 2, tipo: "Pensamiento", texto: "Quería que todo saliera perfecto. Quería evitar cualquier error...\ny terminé lastimando a los demás." },
  { frame: 2, tipo: "Pensamiento", texto: "Ni siquiera escuché lo que me estaban diciendo." },
  { frame: 3, tipo: "Narrador", texto: "La imagen empieza a distorsionarse. Los bordes del pasillo se fragmentan en píxeles." },
  { frame: 3, tipo: "Pensamiento", texto: "¿Otra vez...? ¿El día va a empezar de nuevo?" },
  { frame: 4, tipo: "Narrador", texto: "La pantalla se vuelve blanca." },
  { frame: 4, tipo: "Narrador", texto: "Intentó controlar cada detalle y terminó alejando a las personas\nque quería tener cerca. El ciclo continúa.", final: true }
];

// Estructura de diálogos y eventos para la Pantalla 13 (Ruta B)
let dialogosPantalla13 = [
  { frame: 0, tipo: "Nakamura", texto: "Ryou tenía razón en algo... No puedo seguir dudando tanto.\nSi quiero invitar a Hirose, tengo que dejar de darle tantas vueltas." },
  { frame: 1, tipo: "Takeuchi", texto: "¡Esa es la actitud! ¿Vas a hablar con él hoy?" },
  { frame: 2, tipo: "Nakamura", texto: "Sí. Pero esta vez quiero hacerlo bien." },
  { frame: 3, tipo: "Takeuchi", texto: "Bueno, no hace falta que sea perfecto. Hirose es bastante fácil de tratar.\nSolo háblale como siempre." },
  { frame: 3, tipo: "Matsumura", texto: "¡Incorrecto! ¡Una invitación necesita impacto, emoción y una estrategia memorable!" },
  { frame: 4, tipo: "Nakamura", texto: "¿Por qué siento que esto va a salir mal?" },
  { frame: 3, tipo: "Matsumura", texto: "¡Porque todavía no escuchaste mi propuesta!" },
  { frame: 4, tipo: "Takeuchi", texto: "Probablemente porque ya te conocemos." },
  { frame: 5, tipo: "Matsumura", texto: "¡Vamos a organizar una salida! ¡Comida, juegos y una competencia\npara demostrar quién es el mejor compañero de Hirose!" },
  { frame: 6, tipo: "Takeuchi", texto: "¿Una competencia? ¡I gano seguro!" },
  { frame: 5, tipo: "Nakamura", texto: "Esperen... Yo solo quería invitar a Hirose a pasar un rato conmigo." },
  { frame: 6, tipo: "Takeuchi", texto: "Entonces decírselo. Nosotros podemos ayudarte a romper el hielo." },
  { frame: 5, tipo: "Matsumura", texto: "¡Confía en nosotros, Nakamura! ¡Va a salir genial!" },
  { frame: 6, tipo: "Narrador", texto: "Takeuchi mira a Nakamura con una expresión prudente." },
  { frame: 6, tipo: "Takeuchi", texto: "Mi consejo sigue siendo que hables por vos mismo. Pero si necesitás apoyo,\npor lo menos intenta que Matsumura no organice un festival." },
  { frame: 5, tipo: "Matsumura", texto: "¡Escuché eso!", boton: "Buscar a Hirose" }
];

// Estructura de diálogos y eventos para la Pantalla 14
let dialogosPantalla14 = [
  { frame: 0, tipo: "Narrador", texto: "Lo que comenzó como un tímido intento de acercamiento se transforma rápidamente\nen un torbellino de intervenciones entusiastas." },
  { frame: 0, tipo: "Narrador", texto: "La intención individual sucumbe ante la arrolladora energía del grupo." },
  { frame: 1, tipo: "Nakamura", texto: "Oye, Hirose... Quería preguntarte si estabas libre este fin de semana para..." },
  { frame: 2, tipo: "Narrador", texto: "Hirose levanta la mirada y sonríe." },
  { frame: 1, tipo: "Hirose", texto: "¿Para qué? Ahora me dejaste con la intriga." },
  { frame: 3, tipo: "Nakamura", texto: "Yo... quería..." },
  { frame: 4, tipo: "Matsumura", texto: "¡¡PARA SALIR A COMER Y FESTEJAR QUE TERMINAMOS LA SEMANA!!" },
  { frame: 4, tipo: "Narrador", texto: "Nakamura se queda paralizado." },
  { frame: 5, tipo: "Nakamura", texto: "¡Matsumura, te voy a...!" },
  { frame: 4, tipo: "Hirose", texto: "¿Una salida? ¡Suena divertido! ¿Quiénes irían?" },
  { frame: 5, tipo: "Matsumura", texto: "¡Todos! ¡Y yo me encargo de elegir el lugar! ¡Tengo un plan infalible!" },
  { frame: 6, tipo: "Ryou", texto: "Eso es exactamente lo que me preocupa." },
  { frame: 7, tipo: "Takeuchi", texto: "¡Matsumura, no seas desubicado! Nakamura estaba hablando." },
  { frame: 6, tipo: "Matsumura", texto: "¡Solo estaba ayudando!" },
  { frame: 6, tipo: "Hirose", texto: "Bueno, si todos pueden, podríamos ir al parque y después comer algo.\nHace bastante que no salimos juntos." },
  { frame: 7, tipo: "Narrador", texto: "Hirose mira a Nakamura con entusiasmo." },
  { frame: 6, tipo: "Hirose", texto: "¿Qué decís, Nakamura? ¿Te gustaría venir?" },
  { frame: 7, tipo: "Nakamura", texto: "No es el plan que quería... pero tampoco tengo que arruinarlo por eso." },
  { frame: 6, tipo: "Nakamura", texto: "Sí. Me gustaría." },
  { frame: 7, tipo: "Takeuchi", texto: "¡Perfecto! ¡Entonces queda decidido!" },
  { frame: 6, tipo: "Ryou", texto: "Qué curioso. Por una vez, el caos terminó en una propuesta concreta." },
  { frame: 6, tipo: "Matsumura", texto: "¡Lo dije! ¡Mi estrategia fue un éxito!" },
  { frame: 7, tipo: "Nakamura", texto: "No sé si llamaría estrategia a eso..." },
  { frame: 6, tipo: "Hirose", texto: "¡Jajaja! Entonces nos vemos el sábado. Y Nakamura..." },
  { frame: 7, tipo: "Nakamura", texto: "¿Sí?" },
  { frame: 6, tipo: "Hirose", texto: "Me alegra que te hayas animado a proponer algo." },
  { frame: 7, tipo: "Narrador", texto: "Nakamura se sonroja, pero esta vez no aparta la mirada.", boton: "Ir al salida" }
];

// Estructura de diálogos y eventos para la Pantalla 15
let dialogosPantalla15 = [
  { frame: 0, tipo: "Narrador", texto: "La tarde transcurre entrelazada con risas, desacuerdos ruidosos y el calor de la amistad." },
  { frame: 0, tipo: "Narrador", texto: "Aunque no era la cita privada que imaginó, \nNakamura descubre que los momentos valiosos\na menudo nacen de la imperfección compartida." },
  { frame: 0, tipo: "Takeuchi", texto: "¡Eso no cuenta! ¡Matsumura hizo trampa!" },
  { frame: 0, tipo: "Matsumura", texto: "¡Se llama talento natural!" },
  { frame: 0, tipo: "Ryou", texto: "Si tu talento natural consiste en cambiar las reglas cuando vas perdiendo,\ntenemos definiciones distintas de talento." },
  { frame: 1, tipo: "Hirose", texto: "¡Jajaja! ¡Ustedes nunca cambian!" },
  { frame: 0, tipo: "Hirose", texto: "Gracias por venir, Nakamura. Me alegra que hayas aceptado.\nPensé que ibas a quedarte en casa estudiando." },
  { frame: 1, tipo: "Nakamura", texto: "Bueno... al principio tenía otra idea." },
  { frame: 0, tipo: "Hirose", texto: "¿Ah, sí? ¿Qué idea?" },
  { frame: 1, tipo: "Narrador", texto: "Nakamura se pone colorado. Mira a Hirose, pero decide no inventar una excusa." },
  { frame: 2, tipo: "Nakamura", texto: "Quería pasar más tiempo con vos." },
  { frame: 3, tipo: "Narrador", texto: "Hirose se queda sorprendido por un momento y después sonríe con calidez." },
  { frame: 3, tipo: "Hirose", texto: "¿En serio? ¡Entonces tenemos que hacer más cosas juntos!" },
  { frame: 2, tipo: "Nakamura", texto: "¿No te molesta que te lo diga así?" },
  { frame: 1, tipo: "Hirose", texto: "¡Claro que no! Me gusta pasar tiempo con vos, Nakamura." },
  { frame: 4, tipo: "Narrador", texto: "Matsumura escucha la conversación desde lejos y abre mucho los ojos.\nRyou le tapa la boca antes de que haga un comentario." },
  { frame: 4, tipo: "Matsumura", texto: "¡Mmmph!" },
  { frame: 4, tipo: "Ryou", texto: "Déjalo terminar una conversación sin convertirla en un espectáculo." },
  { frame: 5, tipo: "Matsumura", texto: "¡Traje más! ¡Y esta vez no choqué con nadie!" },
  { frame: 6, tipo: "Ryou", texto: "Una hazaña que merece reconocimiento." },
  { frame: 5, tipo: "Narrador", texto: "Nakamura se ríe. La imagen se ilumina y aparecen pequeños destellos pixelados." },
  { frame: 6, tipo: "Pensamiento", texto: "No era exactamente la cita que había imaginado... pero estoy contento de estar acá." },
  { frame: 5, tipo: "Narrador", texto: "A veces, las cosas no salen como uno las imagina. Pero aprender a confiar\nen los demás puede abrir una oportunidad inesperada.", finalRutaB: true }
];

// Estructura de diálogos y eventos para la Pantalla 16 (Opción C)
let dialogosPantalla16 = [
  { frame: 6, tipo: "Narrador", texto: "Despojándose de guiones preconcebidos y trucos de control, \nNakamura comprende que la verdadera valentía radica en la vulnerabilidad." },
  { frame: 7, tipo: "Narrador", texto: "El bullicio del aula se disipa mientras toma la decisión de hablar con el corazón." },
  { frame: 6, tipo: "Nakamura", texto: "Sin listas, sin estrategias y sin dejar que otros hablen por mí." },
  { frame: 7, tipo: "Nakamura", texto: "Solo tengo que ser sincero." },
  { frame: 6, tipo: "Narrador", texto: "Takeuchi nota que Nakamura lo mira y le hace un gesto de ánimo." },
  { frame: 7, tipo: "Takeuchi", texto: "Dale, Nakamura. Tranquilo. No hace falta que prepares un discurso." },
  { frame: 6, tipo: "Matsumura", texto: "¡Pero si quieres, puedo darte uno! ¡Tengo una versión dramática, \nuna romántica y una con fuegos artificiales imaginarios!" },
  { frame: 7, tipo: "Nakamura", texto: "No, gracias. Especialmente la última." },
  { frame: 6, tipo: "Matsumura", texto: "¡No sabes lo que te pierdes!" },
  { frame: 0, tipo: "Narrador", texto: "Ryou se cerca a Matsumura y lo toma suavemente del hombro para apartarlo." },
  { frame: 0, tipo: "Takeuchi", texto: "Vamos. Démosle un minuto." },
  { frame: 6, tipo: "Ryou", texto: "¡Suerte, Nakamura!" },
  { frame: 7, tipo: "Narrador", texto: "Los tres se alejan. Ryou mira a Nakamura una última vez." },
  { frame: 0, tipo: "Takeuchi", texto: "Y acordate: no hace falta que salga perfecto." },
  { frame: 0, tipo: "Nakamura", texto: "Es ahora.", boton: "Hablar con Hirose" }
];

// Estructura de diálogos y eventos para la Pantalla 17
let dialogosPantalla17 = [
  { frame: 0, tipo: "Narrador", texto: "Bañados por los cálidos destellos del atardecer, \nel tiempo parece detenerse." },
  { frame: 1, tipo: "Narrador", texto: "Las palabras fluyen sin artificios ni máscaras, \nrevelando la honestidad más pura entre dos personas." },
  { frame: 0, tipo: "Hirose", texto: "¿Nakamura? ¿Todavía estás acá?" },
  { frame: 1, tipo: "Nakamura", texto: "Sí... Quería hablar con vos un momento." },
  { frame: 2, tipo: "Hirose", texto: "¡Claro! ¿Pasó algo?" },
  { frame: 1, tipo: "Nakamura", texto: "No pasó nada malo. Es solo que... \nquería preguntarte si tenés tiempo este fin de semana." },
  { frame: 2, tipo: "Hirose", texto: "Creo que sí. ¿Por qué?" },
  { frame: 1, tipo: "Nakamura", texto: "Me gustaría invitarte al parque. \nPodríamos llevar algo para comer, hacer un picnic y pasar un rato juntos." },
  { frame: 2, tipo: "Narrador", texto: "Nakamura se sonroja, pero continúa hablando." },
  { frame: 1, tipo: "Nakamura", texto: "Quiero conocerte mejor y... me gusta estar con vos. \nPor eso quería invitarte." },
  { frame: 2, tipo: "Nakamura", texto: "Si no quieres, está bien. No tenés que aceptar por compromiso. \nSolo quería preguntártelo." },
  { frame: 1, tipo: "Hirose", texto: "¡Vaya! No esperaba que me invitaras así." },
  { frame: 2, tipo: "Nakamura", texto: "¿Eso significa que...?" },
  { frame: 1, tipo: "Hirose", texto: "¡Que me encantaría! La verdad es que también tenía ganas de pasar más tiempo con vos." },
  { frame: 3, tipo: "Narrador", texto: "Nakamura parpadea, sorprendido." },
  { frame: 4, tipo: "Nakamura", texto: "¿En serio?" },
  { frame: 3, tipo: "Hirose", texto: "¿Por qué te sorprende tanto? ¿Pensabas que iba a decir que no?" },
  { frame: 4, tipo: "Nakamura", texto: "¡No! Bueno... quizá. Un poco. Bastante." },
  { frame: 2, tipo: "Narrador", texto: "Hirose se ríe con ganas." },
  { frame: 4, tipo: "Hirose", texto: "¡Jajaja! Sos muy gracioso, Nakamura." },
  { frame: 2, tipo: "Nakamura", texto: "¡No sé si eso es bueno o malo!" },
  { frame: 4, tipo: "Hirose", texto: "Entonces, ¿quedamos para el sábado? Después me mandás la hora y el lugar." },
  { frame: 2, tipo: "Nakamura", texto: "Sí. El sábado. ¡Perfecto!" },
  { frame: 4, tipo: "Hirose", texto: "Me alegra que me lo hayas preguntado. Nos vemos, Nakamura." },
  { frame: 2, tipo: "Nakamura", texto: "¡Nos vemos, Hirose!" },
  { frame: 5, tipo: "Narrador", texto: "Hirose sale del aula saludándolo con una sonrisa." },
  { frame: 6, tipo: "Narrador", texto: "Nakamura se queda unos segundos \nquieto y después se cubre la cara con ambas manos." },
  { frame: 7, tipo: "Nakamura", texto: "¡Aceptó! ¡Dijo que sí!", boton: "Ir al sábado" }
];

// Estructura de diálogos y eventos para la Pantalla 18
let dialogosPantalla18 = [
  { frame: 0, tipo: "Narrador", texto: "A orillas del agua y bajo un cielo teñido de dorado, \nel ciclo finalmente se rompe." },
  { frame: 0, tipo: "Narrador", texto: "Sin la presión de alcanzar la perfección, dos almas se conectan\n en un espacio auténtico construido a base de sinceridad." },
  { frame: 0, tipo: "Hirose", texto: "¡Está buenísimo! ¿Vos preparaste todo esto, Nakamura?" },
  { frame: 1, tipo: "Nakamura", texto: "Sí. Estuve pensando qué podíamos traer... \npero esta vez no hice una lista de veinte páginas." },
  { frame: 0, tipo: "Hirose", texto: "¿Veinte páginas? ¡Jajaja! ¿Qué ibas a hacer, \norganizar una excursión escolar?" },
  { frame: 1, tipo: "Nakamura", texto: "¡No te burles! Solo quería que saliera bien." },
  { frame: 0, tipo: "Hirose", texto: "No me estoy burlando. Me parece lindo que te hayas esforzado." },
  { frame: 3, tipo: "Narrador", texto: "Nakamura mira hacia el lago, sonrojado." },
  { frame: 1, tipo: "Nakamura", texto: "La verdad es que estaba muy nervioso cuando te invité." },
  { frame: 2, tipo: "Hirose", texto: "¿Por qué? Podías haberme preguntado antes." },
  { frame: 3, tipo: "Nakamura", texto: "Porque me importas mucho y no quería arruinarlo." },
  { frame: 2, tipo: "Hirose", texto: "Nakamura, no tenés que hacer todo perfecto conmigo. \nSi querés invitarme a algún lado, pregúntame. \nNo hace falta que te preocupes tanto." },
  { frame: 3, tipo: "Nakamura", texto: "Voy a intentar acordarme." },
  { frame: 2, tipo: "Hirose", texto: "¡Bien! Porque quiero que volvamos a hacer algo juntos." },
  { frame: 4, tipo: "Narrador", texto: "Nakamura lo mira sorprendido." },
  { frame: 3, tipo: "Nakamura", texto: "¿De verdad?" },
  { frame: 5, tipo: "Hirose", texto: "¡Claro! La estoy pasando genial. Me alegra que me hayas invitado." },
  { frame: 0, tipo: "Nakamura", texto: "Yo también, Hirose. Valió la pena animarme." },
  { frame: 6, tipo: "Narrador", texto: "Hirose le ofrece uno de los bocadillos que trajo. \nNakamura lo acepta. Ambos siguen conversando…" },
  { frame: 5, tipo: "Narrador", texto: "Nakamura dejó de buscar las palabras perfectas y se animó a decir lo que sentía. \nEsta vez, el día no volvió a empezar.", boton: "Continuar" }
];

// Estructura de diálogos y eventos para la Pantalla 19
let dialogosPantalla19 = [
  { frame: 0, tipo: "Narrador", texto: "Las agujas del tiempo finalmente descansan." },
  { frame: 0, tipo: "Narrador", texto: "Cada tropiezo, cada duda y cada intento fallido quedan atrás no como errores, \nsino como los peldaños necesarios para aprender a avanzar." },
  { frame: 0, tipo: "Narrador", texto: "No siempre podemos controlar lo que pasa a nuestro alrededor." },
  { frame: 0, tipo: "Narrador", texto: "A veces nos equivocamos, \nnos ponemos nerviosos o las cosas no salen como esperábamos." },
  { frame: 0, tipo: "Narrador", texto: "Pero siempre podemos elegir cómo actuar,\n escuchar a los demás y animarnos a dar el primer paso." },
  { frame: 0, tipo: "Nakamura", texto: "Supongo que una oportunidad no significa que todo vaya a salir perfecto..." },
  { frame: 1, tipo: "Nakamura", texto: "Significa que puedo animarme a intentarlo.", finalPantalla19: true }
];

// Carga previa de recursos multimedia (imágenes y audios) limpia
function preload() {
  musica = loadSound("data/musica.mp3");
  
  imgFondoMenu = loadImage("data/fondo.jpg");
  imgLogoMenu = loadImage("data/logo.png");

  secuenciaPantalla1[0] = loadImage("data/escenario1.png");
  secuenciaPantalla1[1] = loadImage("data/frame1.png");
  secuenciaPantalla1[2] = loadImage("data/frame2.png");
  secuenciaPantalla1[3] = loadImage("data/escritorio.png");
  secuenciaPantalla1[4] = loadImage("data/ventanaPensamiento.png");
  secuenciaPantalla1[5] = loadImage("data/frame3.png");
  secuenciaPantalla1[6] = loadImage("data/frame4.png");
  secuenciaPantalla1[7] = loadImage("data/frame5.png");
  secuenciaPantalla1[8] = loadImage("data/frame6.png");
  secuenciaPantalla1[9] = loadImage("data/escenario2.png");
  secuenciaPantalla1[10] = loadImage("data/frame7.png");
  secuenciaPantalla1[11] = loadImage("data/frame8.png");
  secuenciaPantalla1[12] = loadImage("data/ventanaDialogo.png");
  secuenciaPantalla1[13] = loadImage("data/ventanaNarrador.png");

  for (let i = 0; i < 8; i++) {
    secuenciaPantalla10[i] = loadImage("data/PANTALLA10/p10frame" + (i + 1) + ".png");
  }
  for (let i = 0; i < 12; i++) {
    secuenciaPantalla11[i] = loadImage("data/PANTALLA11/p11frame" + (i + 1) + ".png");
  }
  for (let i = 0; i < 5; i++) {
    secuenciaPantalla12[i] = loadImage("data/PANTALLA12/p12frame" + (i + 1) + ".png");
  }
  for (let i = 0; i < 7; i++) {
    secuenciaPantalla13[i] = loadImage("data/PANTALLA13/p13frame" + (i + 1) + ".png");
  }
  for (let i = 0; i < 8; i++) {
    secuenciaPantalla14[i] = loadImage("data/p14frame" + (i + 1) + ".png");
  }
  for (let i = 0; i < 7; i++) {
    secuenciaPantalla15[i] = loadImage("data/PANTALLA15/p15frame" + (i + 1) + ".png");
  }
  
  secuenciaPantalla16[0] = loadImage("data/p16frame1.png");
  secuenciaPantalla16[6] = loadImage("data/p14frame7.png");
  secuenciaPantalla16[7] = loadImage("data/p14frame8.png");

  for (let i = 0; i < 8; i++) {
    secuenciaPantalla17[i] = loadImage("data/PANTALLA17/p17frame" + (i + 1) + ".png");
  }

  for (let i = 0; i < 7; i++) {
    secuenciaPantalla18[i] = loadImage("data/PANTALLA18/p18frame" + (i + 1) + ".png");
  }

  secuenciaPantalla19[0] = loadImage("data/PANTALLA19/p19frame1.png");
  secuenciaPantalla19[1] = loadImage("data/PANTALLA19/p19frame2.png");
  secuenciaPantalla19[2] = loadImage("data/PANTALLA19/p19frame3.png");

  FondoPantalla2 = loadImage("data/escenario3.jpeg");
  Nakamura1 = loadImage("data/frame9.png");
  Nakamura2 = loadImage("data/frame10.png");
  
  FondoPantalla3 = loadImage("data/escenario4.jpeg");
  Nakamura3 = loadImage("data/frame11.png");
  Nakamura4 = loadImage("data/frame12.png");
  Nakamura5 = loadImage("data/frame13.png");
  
  FondoPantalla4 = loadImage("data/escenario5.jpeg");
  Nakamura6 = loadImage("data/frame14.png");

  FramesNakamura[1] = loadImage("data/NAKAMURA/NAKAMURA1.png");
  FramesNakamura[2] = loadImage("data/NAKAMURA/NAKAMURA2.png");
  FramesNakamura[3] = loadImage("data/NAKAMURA/NAKAMURA3.png");
  FramesNakamura[4] = loadImage("data/NAKAMURA/NAKAMURA4.png");
  FramesNakamura[5] = loadImage("data/NAKAMURA/NAKAMURA5.png");
  FramesNakamura[6] = loadImage("data/NAKAMURA/NAKAMURA6.png");
  FramesNakamura[7] = loadImage("data/NAKAMURA/NAKAMURA7.png");
  FramesNakamura[8] = loadImage("data/NAKAMURA/NAKAMURA8.png");
  FramesNakamura[9] = loadImage("data/NAKAMURA/NAKAMURA9.png");
  FramesNakamura[10] = loadImage("data/NAKAMURA/NAKAMURA10.png");
  
  FramesHirose[1] = loadImage("data/HIROSE/HIROSE1.png");
  FramesHirose[2] = loadImage("data/HIROSE/HIROSE2.png");
  FramesHirose[3] = loadImage("data/HIROSE/HIROSE3.png");
  FramesHirose[5] = loadImage("data/HIROSE/HIROSE5.png");
  FramesHirose[6] = loadImage("data/HIROSE/HIROSE6.png");
  
  FramesMatsumura[1] = loadImage("data/MATSUMURA/MATSUMURA1.png");
  FramesMatsumura[3] = loadImage("data/MATSUMURA/MATSUMURA3.png");
  FramesMatsumura[4] = loadImage("data/MATSUMURA/MATSUMURA4.png");
  
  FramesRyou[1] = loadImage("data/RYOU/RYOU1.png");
  FramesRyou[2] = loadImage("data/RYOU/RYOU2.png");
  FramesRyou[3] = loadImage("data/RYOU/RYOU3.png");
  FramesRyou[4] = loadImage("data/RYOU/RYOU4.png");
  
  FramesTakeuchi[1] = loadImage("data/TAKEUCHI/TAKEUCHI1.png");
  FramesTakeuchi[2] = loadImage("data/TAKEUCHI/TAKEUCHI2.png");
  FramesTakeuchi[3] = loadImage("data/TAKEUCHI/TAKEUCHI3.png");
  FramesTakeuchi[4] = loadImage("data/TAKEUCHI/TAKEUCHI4.png");
  FramesTakeuchi[5] = loadImage("data/TAKEUCHI/TAKEUCHI5.png");
  
  Narrador = loadImage("data/ventanaNarrador.png");
}

// Configuración inicial del lienzo de dibujo
function setup() {
  createCanvas(800, 450);
}

// Bucle principal que enruta y renderiza la pantalla activa
function draw() {
  if (pantalla == 0) {
    mostrarPortadaMenu();
  } else if (pantalla == 1) {
    mostrarPantallaUno();   
  } else if (pantalla == 2) {
    mostrarPantallaDos();
  } else if (pantalla == 3) {
    mostrarPantallaTres();
  } else if (pantalla == 4) {
    mostrarPantallaCuatro();
  } else if (pantalla == 5) {
    mostrarPantallaCinco();
  } else if (pantalla == 6) {
    mostrarPantallaSeis();
  } else if (pantalla == 7) {
    mostrarPantallaSiete();
  } else if (pantalla == 8) {
    mostrarPantallaOcho();
  } else if (pantalla == 9) {
    mostrarPantallaNueve();
  } else if (pantalla == 10) {
    ejecutarEscena(dialogosPantalla10, secuenciaPantalla10);
  } else if (pantalla == 11) {
    ejecutarEscena(dialogosPantalla11, secuenciaPantalla11);
  } else if (pantalla == 12) {
    ejecutarEscena(dialogosPantalla12, secuenciaPantalla12);
  } else if (pantalla == 13) {
    ejecutarEscena(dialogosPantalla13, secuenciaPantalla13);
  } else if (pantalla == 14) {
    ejecutarEscena(dialogosPantalla14, secuenciaPantalla14);
  } else if (pantalla == 15) {
    ejecutarEscena(dialogosPantalla15, secuenciaPantalla15);
  } else if (pantalla == 16) {
    ejecutarEscena(dialogosPantalla16, secuenciaPantalla16);
  } else if (pantalla == 17) {
    ejecutarEscena(dialogosPantalla17, secuenciaPantalla17);
  } else if (pantalla == 18) {
    ejecutarEscena(dialogosPantalla18, secuenciaPantalla18);
  } else if (pantalla == 19) {
    mostrarPantallaDiecinueve();
  } else if (pantalla == 20) {
    mostrarCreditos();
  }
}

// Dibuja los pasos y elementos de la Pantalla 1
function mostrarPantallaUno() {
  imageMode(CORNER);
  if (pantalla1 == 0) {
    image(secuenciaPantalla1[0], 0, 0, 800, 450);
    image(secuenciaPantalla1[13], 0, 330, 790, 120);
    fill(0); noStroke(); textAlign(LEFT, TOP); textSize(20);
    text("El sol apenas ilumina la habitación de Nakamura.", 40, 377);
  } else if (pantalla1 == 1) {
    let parpadeo = floor(frameCount / 40) % 2; 
    if (parpadeo == 0) {
      image(secuenciaPantalla1[9], 0, 0, 800, 450);
      image(secuenciaPantalla1[1], 0, 0, 800, 450);
    } else {
      image(secuenciaPantalla1[2], 0, 0, 800, 450);
    }
    image(secuenciaPantalla1[13], 0, 330, 790, 120);
    fill(0); noStroke(); textAlign(LEFT, TOP); textSize(20);
    text("Frente al espejo, repasando mentalmente una y otra vez sus borradores,\nNakamura intenta armarse del valor que le faltó durante semanas.", 40, 367);
  } else if (pantalla1 == 2) {
    let parpadeo = floor(frameCount / 40) % 2; 
    if (parpadeo == 0) {
      image(secuenciaPantalla1[9], 0, 0, 800, 450);
      image(secuenciaPantalla1[1], 0, 0, 800, 450);
    } else {
      image(secuenciaPantalla1[2], 0, 0, 800, 450);
    }
    image(secuenciaPantalla1[13], 0, 330, 790, 120);
    fill(0); noStroke(); textAlign(LEFT, TOP); textSize(20);
    text("Hoy no es un día cualquiera: se ha prometido a sí mismo dar el primer paso.", 40, 377);
  } else if (pantalla1 == 3) {
    image(secuenciaPantalla1[3], 0, 0, 800, 450);
    image(secuenciaPantalla1[4], 0, 330, 790, 120);
    fill(24, 36, 95); noStroke(); textAlign(LEFT, TOP); textSize(24);
    text("Nakamura", 80, 340); textSize(20);
    text("Hoy se lo voy a decir...", 40, 375);
  } else if (pantalla1 == 4) {
    image(secuenciaPantalla1[3], 0, 0, 800, 450);
    image(secuenciaPantalla1[4], 0, 330, 790, 120);
    fill(24, 36, 95); noStroke(); textAlign(LEFT, TOP); textSize(24);
    text("Nakamura", 80, 340); textSize(20);
    text("Voy a invitar a Hirose a salir. \nQuiero que podamos pasar más tiempo juntos y conocernos mejor.", 40, 370);
  } else if (pantalla1 == 5) {
    image(secuenciaPantalla1[3], 0, 0, 800, 450);
    image(secuenciaPantalla1[4], 0, 330, 790, 120);
    fill(24, 36, 95); noStroke(); textAlign(LEFT, TOP); textSize(24);
    text("Nakamura", 80, 340); textSize(20);
    text("Esta es mi oportunidad. Solo tengo que actuar con normalidad.", 40, 375);
  } else if (pantalla1 == 6) {
    image(secuenciaPantalla1[9], 0, 0, 800, 450);
    let mueca = floor(frameCount / 35) % 2;
    if (mueca == 0) image(secuenciaPantalla1[5], 0, 0, 800, 450);
    else image(secuenciaPantalla1[6], 0, 0, 800, 450);
    image(secuenciaPantalla1[13], 0, 330, 790, 120);
    fill(0); noStroke(); textAlign(LEFT, TOP); textSize(20);
    text("Se mira al espejo, intenta sonreír y termina\nponiendo una expresión demasiado seria.", 40, 367);
  } else if (pantalla1 == 7) {
    image(secuenciaPantalla1[9], 0, 0, 800, 450);
    let mueca = floor(frameCount / 35) % 2;
    if (mueca == 0) image(secuenciaPantalla1[7], 0, 0, 800, 450);
    else image(secuenciaPantalla1[8], 0, 0, 800, 450);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(24, 36, 95); noStroke(); textAlign(LEFT, TOP); textSize(24);
    text("Nakamura", 80, 340); textSize(20);
    text("¿Por qué parezco un delincuente a punto de cometer un crimen?", 40, 375);
  } else if (pantalla1 >= 8) {
    image(secuenciaPantalla1[9], 0, 0, 800, 450);
    let muecaFinal = floor(frameCount / 35) % 2;
    if (muecaFinal == 0) image(secuenciaPantalla1[10], 0, 0, 800, 450);
    else image(secuenciaPantalla1[11], 0, 0, 800, 450);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(24, 36, 95); noStroke(); textAlign(LEFT, TOP); textSize(24);
    text("Nakamura", 80, 340); textSize(20);
    text("¡No importa! ¡Hoy va a salir bien!", 40, 375);
    rectMode(CENTER); stroke(255); strokeWeight(2); fill(220, 50, 100);
    rect(650, 285, 200, 45, 10);
    fill(255); noStroke(); textSize(18); textAlign(CENTER, CENTER);
    text("Salir de casa", 650, 285);
  }
}

// Dibuja los pasos y elementos de la Pantalla 2
function mostrarPantallaDos() {
  imageMode(CORNER);
  image(FondoPantalla2, 0, 0, 800, 450);
  fill(24, 36, 95); noStroke(); textAlign(LEFT, TOP);
  if (pantalla2 == 0) {
    image(Narrador, 0, 330, 790, 120);
    fill(0); textSize(20);
    text("Las calles matutinas avanzan a paso lento, \npero en la mente de Nakamura las ideas giran a mil por hora.", 40, 377);
  } else if (pantalla2 == 1) {
    image(Narrador, 0, 330, 790, 120);
    fill(0); textSize(20);
    text("Entre escenas imaginarias y escenarios catastróficos, \nintenta encontrar la fórmula perfecta para \ndeclarar sus intenciones sin perder la compostura.", 40, 367);
  } else if (pantalla2 == 2) {
    image(FramesNakamura[9], 0, 0, 448, 448);
    image(secuenciaPantalla1[4], 0, 330, 790, 120);
    fill(24, 36, 95); textSize(24); text("Nakamura", 80, 340);
    textSize(20); text("Tengo que mantener la calma...", 40, 375);
  } else if (pantalla2 == 3) {
    image(FramesNakamura[3], 0, 0, 448, 448);
    image(secuenciaPantalla1[4], 0, 330, 790, 120);
    fill(24, 36, 95); textSize(24); text("Nakamura", 80, 340);
    textSize(20); text("Solo tengo que encontrar el momento adecuado para hablar con Hirose.", 40, 375);
  } else if (pantalla2 == 4) {
    image(FramesNakamura[3], 0, 0, 448, 448);
    image(secuenciaPantalla1[4], 0, 330, 790, 120);
    fill(24, 36, 95); textSize(24); text("Nakamura", 80, 340);
    textSize(20); text("Hirose, ¿te gustaría salir conmigo este fin de semana?.\nSimple. Directo. Sin complicaciones.", 40, 370);
  } else if (pantalla2 == 5) {
    image(FramesNakamura[4], 0, 0, 448, 448);
    image(secuenciaPantalla1[4], 0, 330, 790, 120);
    fill(24, 36, 95); textSize(24); text("Nakamura", 80, 340);
    textSize(20); text("¿¡Y si me pregunta por qué!?", 40, 375);
  } else if (pantalla2 == 6) {
    image(FramesNakamura[6], 0, 0, 448, 448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(24, 36, 95); textSize(24); text("Nakamura", 80, 340);
    textSize(20); text("¡Porque quiero pasar tiempo contigo, idiota!\n...No, no puedo decirle idiota.", 40, 370);
  } else if (pantalla2 >= 7) {
    image(FramesNakamura[1], 0, 0, 448, 448);
    image(Narrador, 0, 330, 790, 120);
    fill(0); textSize(20);
    text("Nakamura sigue caminando, cada vez más nervioso.", 40, 377);
    rectMode(CENTER); stroke(255); strokeWeight(2); fill(220, 50, 100);
    rect(650, 285, 200, 45, 10);
    fill(255); noStroke(); textSize(18); textAlign(CENTER, CENTER);
    text("Continuar", 650, 285);
  }
}

// Dibuja los pasos y elementos de la Pantalla 3
function mostrarPantallaTres() {
  imageMode(CORNER);
  image(FondoPantalla3, 0, 0, 800, 450);
  fill(24, 36, 95); noStroke(); textAlign(LEFT, TOP);
  if (pantalla3 == 0) {
    image(Narrador, 0, 330, 790, 120);
    fill(0); textSize(20);
    text("El murmurlo de los estudiantes llena la entrada del instituto.", 40, 377);
  } else if (pantalla3 == 1) {
    image(Narrador, 0, 330, 790, 120);
    fill(0); textSize(20);
    text("Nakamura escanea a la multitud entre la brisa de la mañana, \nbuscando únicamente la sonrisa de la persona que ocupa todos sus pensamientos.", 40, 367);
  } else if (pantalla3 == 2) {
    image(FramesNakamura[3], 0, 0, 448, 448);
    image(secuenciaPantalla1[4], 0, 330, 790, 120);
    fill(24, 36, 95); textSize(24); text("Nakamura", 80, 340);
    textSize(20); text("Todavía hay tiempo antes de que suene la campana...\nHirose ya debería estar por aquí.", 40, 370);
  } else if (pantalla3 == 3) {
    image(Narrador, 0, 330, 790, 120);
    fill(0); textSize(20);
    text("Nakamura ve a Hirose a lo lejos, hablando con otros estudiantes.\nSe queda mirándolo con una sonrisa involuntaria.", 40, 367);
  } else if (pantalla3 == 4) {
    image(FramesNakamura[2], 0, 0, 448, 448);
    image(secuenciaPantalla1[4], 0, 330, 790, 120);
    fill(24, 36, 95); textSize(24); text("Nakamura", 80, 340);
    textSize(20); text("Ahí está...", 40, 375);
  } else if (pantalla3 == 5) {
    image(FramesNakamura[5], 0, 0, 448, 448);
    image(secuenciaPantalla1[4], 0, 330, 790, 120);
    fill(24, 36, 95); textSize(24); text("Nakamura", 80, 340);
    textSize(20); text("Concentrate. Hoy vas a hablar con él.", 40, 375);
  } else if (pantalla3 == 6) {
    image(FramesNakamura[6], 0, 0, 448, 448);
    image(secuenciaPantalla1[4], 0, 330, 790, 120);
    fill(24, 36, 95); textSize(24); text("Nakamura", 80, 340);
    textSize(18); text("...Solo espero que no aparezca ese pesado de Matsumura.\nSiempre busca cualquier excusa ridícula para llamar su atención.", 40, 370);
  } else if (pantalla3 >= 7) {
    image(FramesNakamura[1], 0, 0, 448, 448);
    rectMode(CENTER); stroke(255); strokeWeight(2); fill(220, 50, 100);
    rect(650, 285, 200, 45, 10);
    fill(255); noStroke(); textSize(18); textAlign(CENTER, CENTER);
    text("Continuar", 650, 285);
  }
}

// Dibuja los pasos y elementos de la Pantalla 4
function mostrarPantallaCuatro() {
  imageMode(CORNER);
  image(FondoPantalla4, 0, 0, 800, 450);
  fill(24, 36, 95); noStroke(); textAlign(LEFT, TOP);
  if (pantalla4 == 0) {
    image(Narrador, 0, 330, 790, 120); fill(0); textSize(20);
    text("Con el pulso acelerado, Nakamura decide que es el momento ideal.", 40, 377);
  } else if (pantalla4 == 1) {
    image(Narrador, 0, 330, 790, 120); fill(0); textSize(20);
    text("Pero en un pasillo escolar concurrido, mantener un momento de intimidad\nes una tarea prácticamente imposible.", 40, 367);
  } else if (pantalla4 == 2) {
    image(FramesNakamura[2], 0, 0, 448, 448); image(FramesHirose[6], 400, 0, 448, 448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(24, 36, 95); textSize(24); text("Nakamura", 80, 340); textSize(20); text("Oye, Hirose...", 40, 375);
  } else if (pantalla4 == 3) {
    image(FramesNakamura[10], 0, 0, 448, 448); image(FramesHirose[1], 400, 0, 448, 448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(242, 131, 27); textSize(24); text("Hirose", 80, 340); textSize(20); text("¿Eh? ¡Nakamura! ¡Buen día!", 40, 375);
  } else if (pantalla4 == 4) {
    image(Narrador, 0, 330, 790, 120); fill(0); textSize(20);
    text("Hirose sonríe y se gira hacia él, interesado.", 40, 377);
  } else if (pantalla4 == 5) {
    image(FramesNakamura[10], 0, 0, 448, 448); image(FramesHirose[2], 400, 0, 448, 448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(242, 131, 27); textSize(24); text("Hirose", 80, 340); textSize(20); text("¿Qué pasa? Tenés una cara rarísima. ¿Te sentís bien?", 40, 375);
  } else if (pantalla4 == 6) {
    image(FramesNakamura[2], 0, 0, 448, 448); image(FramesHirose[6], 400, 0, 448, 448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(24, 36, 95); textSize(24); text("Nakamura", 80, 340); textSize(20); text("¡S-sí! Estoy perfectamente bien.", 40, 375);
  } else if (pantalla4 == 7) {
    image(FramesNakamura[5], 0, 0, 448, 448); image(FramesHirose[6], 400, 0, 448, 448);
    image(secuenciaPantalla1[4], 0, 330, 790, 120);
    fill(24, 36, 95); textSize(24); text("Nakamura", 80, 340); textSize(20); text("¡No me preguntes cómo estoy! ¡Pregúntame si quiero salir con vos!", 40, 375);
  } else if (pantalla4 == 8) {
    image(FramesNakamura[2], 0, 0, 448, 448); image(FramesHirose[6], 400, 0, 448, 448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(24, 36, 95); textSize(24); text("Nakamura", 80, 340); textSize(20); text("Yo quería decirte algo...", 40, 375);
  } else if (pantalla4 == 9) {
    image(Narrador, 0, 330, 790, 120); fill(0); textSize(20);
    text("Justo cuando Nakamura va a continuar, \nTakeuchi aparece por un lado y Ryou por el otro.", 40, 367);
  } else if (pantalla4 == 10) {
    image(FramesNakamura[10], 0, 0, 448, 448); image(FramesTakeuchi[3], 400, 0, 448, 448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(49, 100, 13); textSize(24); text("Takeuchi", 80, 340); textSize(20); text("¡Hirose! ¡Ahí estás! ¡Te estuvimos buscando por todos lados!", 40, 375);
  } else if (pantalla4 == 11) {
    image(FramesNakamura[10], 0, 0, 448, 448); image(FramesRyou[3], 400, 0, 448, 448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(32, 141, 152); textSize(24); text("Ryou", 80, 340); textSize(20); text("En realidad, Takeuchi te buscó en dos lugares y después \ndecidió que ya había recorrido toda la escuela.", 40, 367);
  } else if (pantalla4 == 12) {
    image(FramesNakamura[10], 0, 0, 448, 448); image(FramesTakeuchi[4], 400, 0, 448, 448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(49, 100, 13); textSize(24); text("Takeuchi", 80, 340); textSize(20); text("¡Oye! ¡No arruines mi reputación!", 40, 375);
  } else if (pantalla4 == 13) {
    image(FramesNakamura[10], 0, 0, 448, 448); image(FramesHirose[5], 400, 0, 448, 448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(242, 131, 27); textSize(24); text("Hirose", 80, 340); textSize(20); text("¡Jajaja! ¿Qué necesitan?", 40, 375);
  } else if (pantalla4 == 14) {
    image(FramesNakamura[10], 0, 0, 448, 448); image(FramesTakeuchi[3], 400, 0, 448, 448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(49, 100, 13); textSize(24); text("Takeuchi", 80, 340); textSize(20); text("¡Nada urgente! Bueno, sí, quería preguntarte algo de la clase.", 40, 375);
  } else if (pantalla4 == 15) {
    image(FramesNakamura[10], 0, 0, 448, 448); image(FramesRyou[1], 400, 0, 448, 448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(32, 141, 152); textSize(24); text("Ryou", 80, 340); textSize(20); text("Yo vine a asegurarme de que no lo arrastrara a alguna tontería.", 40, 375);
  } else if (pantalla4 == 16) {
    image(FramesNakamura[10], 0, 0, 448, 448); image(FramesHirose[1], 400, 0, 448, 448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(242, 131, 27); textSize(24); text("Hirose", 80, 340); textSize(20); text("Ah, Nakamura, ¿qué me ibas a decir?", 40, 375);
  } else if (pantalla4 == 17) {
    image(Narrador, 0, 330, 790, 120); fill(0); textSize(20);
    text("Nakamura mira a Hirose, \nluego a Takeuchi y finalmente a Ryou. \nSe le enrojecen las mejillas.", 40, 367);
  } else if (pantalla4 == 18) {
    image(FramesNakamura[4], 0, 0, 448, 448); image(FramesHirose[6], 400, 0, 448, 448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(24, 36, 95); textSize(24); text("Nakamura", 80, 340); textSize(20); text("Ah... no, no es nada. Olvídalo, no era importante.", 40, 375);
  } else if (pantalla4 == 19) {
    image(FramesNakamura[10], 0, 0, 448, 448); image(FramesHirose[2], 400, 0, 448, 448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(242, 131, 27); textSize(24); text("Hirose", 80, 340); textSize(20); text("¿Seguro? Parecía que querías contarme algo.", 40, 375);
  } else if (pantalla4 == 20) {
    image(FramesNakamura[4], 0, 0, 448, 448); image(FramesHirose[6], 400, 0, 448, 448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(24, 36, 95); textSize(24); text("Nakamura", 80, 340); textSize(20); text("¡Sí! Digo... no. ¡Está todo bien!", 40, 375);
  } else if (pantalla4 == 21) {
    image(FramesNakamura[10], 0, 0, 448, 448); image(FramesHirose[3], 400, 0, 448, 448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(242, 131, 27); textSize(24); text("Hirose", 80, 340); textSize(20); text("Bueno, como vos digas. Nos vemos en el salón, Nakamura.", 40, 375);
  } else if (pantalla4 == 22) {
    image(Narrador, 0, 330, 790, 120); fill(0); textSize(20);
    text("Hirose se marcha con Takeuchi, que continúa hablando animadamente.\nRyou se queda un instante mirando a Nakamura antes de seguirlos.", 40, 367);
  } else if (pantalla4 == 23) {
    image(FramesNakamura[7], 0, 0, 448, 448); image(secuenciaPantalla1[4], 0, 330, 790, 120);
    fill(24, 36, 95); textSize(24); text("Nakamura", 80, 340); textSize(20); text("Otra vez. Ni siquiera pude terminar una frase.", 40, 375);
  } else if (pantalla4 >= 24) {
    image(FramesNakamura[1], 0, 0, 448, 448);
    rectMode(CENTER); stroke(255); strokeWeight(2); fill(220, 50, 100);
    rect(650, 285, 200, 45, 10);
    fill(255); noStroke(); textSize(18); textAlign(CENTER, CENTER);
    text("Continuar", 650, 285);
  }
}

// Dibuja los pasos y elementos de la Pantalla 5
function mostrarPantallaCinco() {
  imageMode(CORNER);
  image(FondoPantalla4, 0, 0, 800, 450);
  fill(24, 36, 95); noStroke(); textAlign(LEFT, TOP);
  if (pantalla5 == 0) {
    image(Narrador, 0, 330, 790, 120); fill(0); textSize(20);
    text("La frustración amenaza con apoderarse de Nakamura.", 40, 377);
  } else if (pantalla5 == 1) {
    image(Narrador, 0, 330, 790, 120); fill(0); textSize(20);
    text("Sin embargo, \nla mirada atenta de Ryou ha captado más de lo que Nakamura\nhabría deseado transparentar.", 40, 367);
  } else if (pantalla5 == 2) {
    image(FramesNakamura[7], 0, 0, 448, 448); image(FramesRyou[4], 400, 0, 448, 448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(24, 36, 95); textSize(24); text("Nakamura", 80, 340); textSize(20); text("Soy un idiota... ¿Por qué me cuesta tanto hablarle normalmente?", 40, 375);
  } else if (pantalla5 == 3) {
    image(FramesNakamura[10], 0, 0, 448, 448); image(FramesRyou[3], 400, 0, 448, 448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(32, 141, 152); textSize(24); text("Ryou", 80, 340); textSize(20); text("Sabés, Nakamura... disimulás bastante mal.", 40, 375);
  } else if (pantalla5 == 4) {
    image(FramesNakamura[5], 0, 0, 448, 448); image(FramesRyou[4], 400, 0, 448, 448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(24, 36, 95); textSize(24); text("Nakamura", 80, 340); textSize(20); text("¿¡Eh!? ¿De qué hablas, Ryou?", 40, 375);
  } else if (pantalla5 == 5) {
    image(FramesNakamura[10], 0, 0, 448, 448); image(FramesRyou[3], 400, 0, 448, 448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(32, 141, 152); textSize(24); text("Ryou", 80, 340); textSize(20); text("De nada. Solo es curioso que te pongas tan nervioso cada vez que Hirose te habla.", 40, 370);
  } else if (pantalla5 == 6) {
    image(Narrador, 0, 330, 790, 120); fill(0); textSize(20);
    text("Nakamura se pone colorado de golpe.", 40, 377);
  } else if (pantalla5 == 7) {
    image(FramesNakamura[6], 0, 0, 448, 448); image(FramesRyou[4], 400, 0, 448, 448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(24, 36, 95); textSize(24); text("Nakamura", 80, 340); textSize(20); text("¡No estoy nervioso!", 40, 375);
  } else if (pantalla5 == 8) {
    image(FramesNakamura[10], 0, 0, 448, 448); image(FramesRyou[3], 400, 0, 448, 448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(32, 141, 152); textSize(24); text("Ryou", 80, 340); textSize(20); text("Claro. Y yo soy el director de la escuela.", 40, 375);
  } else if (pantalla5 == 9) {
    image(Narrador, 0, 330, 790, 120); fill(0); textSize(20);
    text("Nakamura aparta la mirada, avergonzado.", 40, 377);
  } else if (pantalla5 == 10) {
    image(FramesNakamura[10], 0, 0, 448, 448); image(FramesRyou[3], 400, 0, 448, 448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(32, 141, 152); textSize(24); text("Ryou", 80, 340); textSize(20); text("Escucha, si vas a dudar tanto cada vez que te acercas, \nalguien más te va a ganar de mano.", 40, 367);
  } else if (pantalla5 == 11) {
    image(FramesNakamura[4], 0, 0, 448, 448); image(FramesRyou[4], 400, 0, 448, 448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(24, 36, 95); textSize(24); text("Nakamura", 80, 340); textSize(20); text("¿Alguien más...?", 40, 375);
  } else if (pantalla5 == 12) {
    image(FramesNakamura[10], 0, 0, 448, 448); image(FramesRyou[2], 400, 0, 448, 448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(32, 141, 152); textSize(24); text("Ryou", 80, 340); textSize(20); text("No dije ningún nombre. No hace falta que te pongas así.", 40, 375);
  } else if (pantalla5 == 13) {
    image(FramesNakamura[10], 0, 0, 448, 448); image(FramesRyou[3], 400, 0, 448, 448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(32, 141, 152); textSize(24); text("Ryou", 80, 340); textSize(18); text("No tenés que preparar una frase perfecta. \nSi querés decirle algo, decíselo.\nY si te sale mal, por lo menos lo intentaste.", 40, 370);
  } else if (pantalla5 == 14) {
    image(FramesNakamura[9], 0, 0, 448, 448); image(FramesRyou[4], 400, 0, 448, 448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(24, 36, 95); textSize(24); text("Nakamura", 80, 340); textSize(20); text("¿Y si arruino todo?", 40, 375);
  } else if (pantalla5 == 15) {
    image(FramesNakamura[10], 0, 0, 448, 448); image(FramesRyou[3], 400, 0, 448, 448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(32, 141, 152); textSize(24); text("Ryou", 80, 340); textSize(20); text("Entonces vas a tener un problema real en vez de veinte problemas imaginarios.", 40, 370);
  } else if (pantalla5 == 16) {
    image(Narrador, 0, 330, 790, 120); fill(0); textSize(20);
    text("Nakamura lo mira sorprendido. Ryou se da vuelta para irse.", 40, 377);
  } else if (pantalla5 == 17) {
    image(FramesNakamura[10], 0, 0, 448, 448); image(FramesRyou[1], 400, 0, 448, 448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(32, 141, 152); textSize(24); text("Ryou", 80, 340); textSize(20); text("Cambiá esa cara y vamos a clase. Me estás dando vergüenza ajena.", 40, 375);
  } else if (pantalla5 == 18) {
    image(FramesNakamura[6], 0, 0, 448, 448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(24, 36, 95); textSize(24); text("Nakamura", 80, 340); textSize(20); text("¡¿Por qué todos tienen que decirme eso hoy?!", 40, 375);
  } else if (pantalla5 >= 19) {
    image(FramesNakamura[1], 0, 0, 448, 448);
    rectMode(CENTER); stroke(255); strokeWeight(2); fill(220, 50, 100);
    rect(650, 285, 200, 45, 10);
    fill(255); noStroke(); textSize(18); textAlign(CENTER, CENTER);
    text("Continuar", 650, 285);
  }
}

// Dibuja los pasos y elementos de la Pantalla 6
function mostrarPantallaSeis() {
  imageMode(CORNER);
  image(FondoPantalla4, 0, 0, 800, 450);
  fill(24, 36, 95); noStroke(); textAlign(LEFT, TOP);
  if (pantalla6 == 0) {
    image(Narrador, 0, 330, 790, 120); fill(0); textSize(20);
    text("Aula durante la última hora de clases. \nEl profesor explica una actividad.", 40, 372);
  } else if (pantalla6 == 1) {
    image(Narrador, 0, 330, 790, 120); fill(0); textSize(20);
    text("Nakamura tiene una libreta abierta y escribe \ndistintas maneras de invitar a Hirose a salir.", 40, 362);
  } else if (pantalla6 == 2) {
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(120, 120, 120); textSize(24); text("Profesor", 80, 340); textSize(20);
    text("Recuerden entregar el trabajo antes de que suene la campana.", 40, 375);
  } else if (pantalla6 == 3) {
    image(FramesNakamura[2], 0, 0, 448, 448); image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(24, 36, 95); textSize(24); text("Nakamura", 80, 340); textSize(20); text("Oye, Hirose, quería preguntarte si...", 40, 375);
  } else if (pantalla6 == 4) {
    image(FramesNakamura[3], 0, 0, 448, 448); image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(24, 36, 95); textSize(24); text("Nakamura", 80, 340); textSize(20); text("No. Demasiado raro.", 40, 375);
  } else if (pantalla6 == 5) {
    image(FramesNakamura[2], 0, 0, 448, 448); image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(24, 36, 95); textSize(24); text("Nakamura", 80, 340); textSize(20); text("¿Tenés planes para el fin de semana?", 40, 370);
  } else if (pantalla6 == 6) {
    image(FramesNakamura[5], 0, 0, 448, 448); image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(24, 36, 95); textSize(24); text("Nakamura", 80, 340); textSize(20); text("¡Pero si ni siquiera pude terminar una frase esta mañana!", 40, 375);
  } else if (pantalla6 == 7) {
    image(Narrador, 0, 330, 790, 120); fill(0); textSize(20);
    text("Desde otro banco, Takeuchi se asoma y mira la libreta.", 40, 377);
  } else if (pantalla6 == 8) {
    image(FramesNakamura[10], 0, 0, 448, 448); image(FramesTakeuchi[3], 400, 0, 448, 448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(49, 100, 13); textSize(24); text("Takeuchi", 80, 340); textSize(20); text("Oye, Nakamura, ¿estás estudiando o escribiendo una novela?", 40, 375);
  } else if (pantalla6 == 9) {
    image(FramesNakamura[6], 0, 0, 448, 448); image(FramesTakeuchi[5], 400, 0, 448, 448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(24, 36, 95); textSize(24); text("Nakamura", 80, 340); textSize(20); text("¡No mires!", 40, 375);
  } else if (pantalla6 == 10) {
    image(FramesNakamura[10], 0, 0, 448, 448); image(FramesTakeuchi[4], 400, 0, 448, 448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(49, 100, 13); textSize(24); text("Takeuchi", 80, 340); textSize(20); text("¡Está bien, está bien! No sabía que era un documento secreto.", 40, 375);
  } else if (pantalla6 == 11) {
    image(FramesNakamura[10], 0, 0, 448, 448); image(FramesRyou[3], 400, 0, 448, 448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(32, 141, 152); textSize(24); text("Ryou", 80, 340); textSize(20); text("Por la cantidad de tachones, parece una declaración de guerra.", 40, 375);
  } else if (pantalla6 == 12) {
    image(FramesNakamura[10], 0, 0, 448, 448); image(FramesTakeuchi[3], 400, 0, 448, 448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(49, 100, 13); textSize(24); text("Takeuchi", 80, 340); textSize(20); text("JA! ¡Eso explica la cara que tiene!", 40, 375);
  } else if (pantalla6 == 13) {
    image(FramesNakamura[6], 0, 0, 448, 448); image(FramesTakeuchi[5], 400, 0, 448, 448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(24, 36, 95); textSize(24); text("Nakamura", 80, 340); textSize(20); text("¡Los dos podrían concentrarse en sus propios asuntos!", 40, 375);
  } else if (pantalla6 == 14) {
    image(Narrador, 0, 330, 790, 120); fill(0); textSize(20);
    text("Hirose se acerca a los bancos.", 40, 377);
  } else if (pantalla6 == 15) {
    image(FramesNakamura[10], 0, 0, 448, 448); image(FramesHirose[2], 400, 0, 448, 448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(242, 131, 27); textSize(24); text("Hirose", 80, 340); textSize(20); text("¿Qué pasa acá? Los escuché desde el otro lado del salón.", 40, 375);
  } else if (pantalla6 == 16) {
    image(FramesNakamura[10], 0, 0, 448, 448); image(FramesTakeuchi[2], 400, 0, 448, 448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(49, 100, 13); textSize(24); text("Takeuchi", 80, 340); textSize(20); text("Nakamura está preparando algo misterioso.", 40, 375);
  } else if (pantalla6 == 17) {
    image(FramesNakamura[6], 0, 0, 448, 448); image(FramesTakeuchi[5], 400, 0, 448, 448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(24, 36, 95); textSize(24); text("Nakamura", 80, 340); textSize(20); text("¡No estoy preparando nada!", 40, 375);
  } else if (pantalla6 == 18) {
    image(FramesNakamura[10], 0, 0, 448, 448); image(FramesHirose[1], 400, 0, 448, 448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(242, 131, 27); textSize(24); text("Hirose", 80, 340); textSize(20); text("¿Ah, sí? Ahora me dio curiosidad.", 40, 375);
  } else if (pantalla6 == 19) {
    image(Narrador, 0, 330, 790, 120); fill(0); textSize(20);
    text("Hirose se inclina un poco para intentar ver la libreta.\nNakamura la esconde detrás de la espalda.", 40, 367);
  } else if (pantalla6 == 20) {
    image(FramesNakamura[6], 0, 0, 448, 448); image(FramesHirose[6], 400, 0, 448, 448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(24, 36, 95); textSize(24); text("Nakamura", 80, 340); textSize(20); text("¡No es nada que te interese!", 40, 375);
  } else if (pantalla6 == 21) {
    image(FramesNakamura[10], 0, 0, 448, 448); image(FramesHirose[3], 400, 0, 448, 448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(242, 131, 27); textSize(24); text("Hirose", 80, 340); textSize(18); text("Bueno, bueno. No hace falta ponerse tan nervioso. \nSi necesitás ayuda con algo, podés preguntarme.", 40, 370);
  } else if (pantalla6 == 22) {
    image(FramesNakamura[4], 0, 0, 448, 448); image(secuenciaPantalla1[4], 0, 330, 790, 120);
    fill(24, 36, 95); textSize(24); text("Nakamura", 80, 340); textSize(20); text("¡Me acaba de ofrecer ayuda y yo le contesté así!", 40, 375);
  } else if (pantalla6 == 23) {
    image(Narrador, 0, 330, 790, 120); fill(0); textSize(20);
    text("Hirose se despide de los demás y sale del aula.", 40, 377);
  } else if (pantalla6 == 24) {
    image(FramesNakamura[7], 0, 0, 448, 448); image(secuenciaPantalla1[4], 0, 330, 790, 120);
    fill(24, 36, 95); textSize(24); text("Nakamura", 80, 340); textSize(18); text("Esta noche voy a ordenar mis ideas. Mañana... no. \nNo puedo seguir pensando así.", 40, 370);
  } else if (pantalla6 >= 25) {
    image(FramesNakamura[1], 0, 0, 448, 448);
    rectMode(CENTER); stroke(255); strokeWeight(2); fill(220, 50, 100);
    rect(650, 285, 200, 45, 10);
    fill(255); noStroke(); textSize(18); textAlign(CENTER, CENTER);
    text("Continuar", 650, 285);
  }
}

// Dibuja los pasos y elementos de la Pantalla 7
function mostrarPantallaSiete() {
  imageMode(CORNER);
  image(FondoPantalla4, 0, 0, 800, 450);
  fill(24, 36, 95); noStroke(); textAlign(LEFT, TOP);
  if (pantalla7 == 0) {
    image(Narrador, 0, 330, 790, 120); fill(0); textSize(20);
    text("La noche envuelve la habitación en un silencio sepulcral.", 40, 377);
  } else if (pantalla7 == 1) {
    image(Narrador, 0, 330, 790, 120); fill(0); textSize(20);
    text("Agotado mentalmente y sobrepasado por la frustración de no haber actuado, \nNakamura llega a su límite.", 40, 367);
  } else if (pantalla7 == 2) {
    image(FramesNakamura[2], 0, 0, 448, 448); image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(24, 36, 95); textSize(24); text("Nakamura", 80, 340); textSize(20); text("Oye, Hirose, quería preguntarte si...", 40, 375);
  } else if (pantalla7 == 3) {
    image(FramesNakamura[5], 0, 0, 448, 448); image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(24, 36, 95); textSize(24); text("Nakamura", 80, 340); textSize(20); text("No. Demasiado raro.", 40, 375);
  } else if (pantalla7 == 4) {
    image(FramesNakamura[2], 0, 0, 448, 448); image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(24, 36, 95); textSize(24); text("Nakamura", 80, 340); textSize(20); text("¿Tenés planes para el fin de semana?", 40, 375);
  } else if (pantalla7 == 5) {
    image(FramesNakamura[6], 0, 0, 448, 448); image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(24, 36, 95); textSize(24); text("Nakamura", 80, 340); textSize(20); text("¡Pero si ni siquiera pude terminar una frase esta mañana!", 40, 375);
  } else if (pantalla7 == 6) {
    image(Narrador, 0, 330, 790, 120); fill(0); textSize(20);
    text("Nakamura aprieta la hoja entre las manos. \nTiene los ojos brillosos de frustración.", 40, 367);
  } else if (pantalla7 == 7) {
    image(FramesNakamura[7], 0, 0, 448, 448); image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(24, 36, 95); textSize(24); text("Nakamura", 80, 340); textSize(20); text("Lo preparé todo... y aun así no pude hacerlo.", 40, 375);
  } else if (pantalla7 == 8) {
    image(FramesNakamura[6], 0, 0, 448, 448); image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(24, 36, 95); textSize(24); text("Nakamura", 80, 340); textSize(20); text("¡Basta! ¡No necesito una lista para hablar con una persona!", 40, 375);
  } else if (pantalla7 == 9) {
    image(Narrador, 0, 330, 790, 120); fill(0); textSize(20);
    text("Se queda en silencio, respirando agitadamente. \nMira los pedazos de papel sobre el escritorio.", 40, 367);
  } else if (pantalla7 == 10) {
    image(FramesNakamura[2], 0, 0, 448, 448); image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(24, 36, 95); textSize(24); text("Nakamura", 80, 340); textSize(20); text("Pero todavía quiero invitarte, Hirose.", 40, 375);
  } else if (pantalla7 == 11) {
    image(Narrador, 0, 330, 790, 120); fill(0); textSize(20);
    text("Nakamura junta algunos pedazos, \npero deja el resto sobre el escritorio. \nSe cambia y se mete en la cama.", 40, 367);
  } else if (pantalla7 == 12) {
    image(FramesNakamura[1], 0, 0, 448, 448); image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(24, 36, 95); textSize(24); text("Nakamura", 80, 340); textSize(20); text("Mañana voy a intentarlo de otra manera...", 40, 375);
  } else if (pantalla7 == 13) {
    image(Narrador, 0, 330, 790, 120); fill(0); textSize(20);
    text("Un nuevo día está por comenzar...", 40, 377);
  } else if (pantalla7 >= 14) {
    image(FramesNakamura[1], 0, 0, 448, 448);
    rectMode(CENTER); stroke(255); strokeWeight(2); fill(220, 50, 100);
    rect(650, 285, 200, 45, 10);
    fill(255); noStroke(); textSize(18); textAlign(CENTER, CENTER);
    text("Continuar", 650, 285);
  }
}

// Dibuja los pasos y elementos de la Pantalla 8
function mostrarPantallaOcho() {
  imageMode(CORNER);
  image(secuenciaPantalla1[0], 0, 0, 800, 450);
  fill(24, 36, 95); noStroke(); textAlign(LEFT, TOP);

  if (pantalla8 == 0) {
    image(Narrador, 0, 330, 790, 120); textSize(20);
    text("La alarma despierta a Nakamura ,\npero algo extraño en la habitacion sugiere que el tiempo se a alterado. ", 40, 385);
  } else if (pantalla8 == 1) {
    image(FramesNakamura[6], 0, 0, 448, 448); image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24); text("Nakamura", 80, 340); textSize(20); text("¡Ya voy, ya voy...!", 40, 375);
  } else if (pantalla8 == 2) {
    image(FramesNakamura[8], 0, 0, 448, 448); image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24); text("Nakamura", 80, 340); textSize(20); text("¿Eh...?", 40, 375);
  } else if (pantalla8 == 3) {
    image(FramesNakamura[1], 0, 0, 448, 448); image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24); text("Nakamura", 80, 340); textSize(20); text("Esas notas... Yo las rompí anoche.", 40, 375);
  } else if (pantalla8 == 4) {
    image(FramesNakamura[8], 0, 0, 448, 448); image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24); text("Nakamura", 80, 340); textSize(18); text("¿Por qué el despertador sonó a la misma hora?\n¿Y por qué siento que ya viví esta mañana?", 40, 370);
  } else if (pantalla8 == 5) {
    image(FramesNakamura[9], 0, 0, 448, 448); image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24); text("Nakamura", 80, 340); textSize(20); text("No puede ser...", 40, 375);
  } else if (pantalla8 >= 6) {
    image(FramesNakamura[8], 0, 0, 448, 448); image(secuenciaPantalla1[12], 0, 330, 790, 120);
    textSize(24); text("Nakamura", 80, 340); textSize(20); text("¿Estoy soñando? ¿O... el día volvió a empezar?", 40, 375);
    rectMode(CENTER); stroke(255); strokeWeight(2); fill(220, 50, 100);
    rect(650, 285, 200, 45, 10);
    fill(255); noStroke(); textSize(18); textAlign(CENTER, CENTER);
    text("Continuar", 650, 285);
  }
}

// Dibuja los pasos y elementos de la Pantalla 9 (Inicio del bucle temporal)
function mostrarPantallaNueve() {
  imageMode(CORNER);
  image(FondoPantalla2, 0, 0, 800, 450);
  fill(24, 36, 95); noStroke(); textAlign(LEFT, TOP);

  if (pantalla9 == 0) {
    image(Narrador, 0, 330, 790, 120); fill(0); textSize(18);
    text("El deja vu se convierte en una realidad: \nlas palabras y los encuentos se repiten y Nakamura esel unico consiente del bucle temporal .", 40, 375);
  } else if (pantalla9 == 1) {
    image(FramesNakamura[10], 0, 0, 448, 448); image(FramesTakeuchi[3], 400, 0, 448, 448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(49, 100, 13); textSize(24); text("Takeuchi", 80, 340); textSize(20); text("¡Hirose! ¡Ahí estás! ¡Te estuvimos buscando por todos lados!", 40, 375);
  } else if (pantalla9 == 2) {
    image(FramesNakamura[8], 0, 0, 448, 448); image(FramesTakeuchi[5], 400, 0, 448, 448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(24, 36, 95); textSize(24); text("Nakamura", 80, 340); textSize(20); text("No...", 40, 375);
  } else if (pantalla9 == 3) {
    image(FramesNakamura[10], 0, 0, 448, 448); image(FramesRyou[3], 400, 0, 448, 448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(32, 141, 152); textSize(24); text("Ryou", 80, 340); textSize(18); text("En realidad, Takeuchi te buscó en dos lugares y después\ndecidió que ya había recorrido toda la escuela.", 40, 370);
  } else if (pantalla9 == 4) {
    image(FramesNakamura[10], 0, 0, 448, 448); image(FramesTakeuchi[4], 400, 0, 448, 448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(49, 100, 13); textSize(24); text("Takeuchi", 80, 340); textSize(20); text("¡Oye! ¡No arruines mi reputación!", 40, 375);
  } else if (pantalla9 == 5) {
    image(FramesNakamura[8], 0, 0, 448, 448); image(FramesTakeuchi[5], 400, 0, 448, 448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(24, 36, 95); textSize(24); text("Nakamura", 80, 340); textSize(20); text("Es igual... Todo está pasando exactamente igual.", 40, 375);
  } else if (pantalla9 == 6) {
    image(FramesNakamura[10], 0, 0, 448, 448); image(FramesHirose[1], 400, 0, 448, 448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(242, 131, 27); textSize(24); text("Hirose", 80, 340); textSize(20); text("Ah, Nakamura, ¿qué me ibas a decir?", 40, 375);
  } else if (pantalla9 == 7) {
    image(FramesNakamura[1], 0, 0, 448, 448); image(FramesHirose[6], 400, 0, 448, 448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(24, 36, 95); textSize(24); text("Nakamura", 80, 340); textSize(20); text("Ayer... me preguntaste lo mismo.", 40, 375);
  } else if (pantalla9 == 8) {
    image(FramesNakamura[10], 0, 0, 448, 448); image(FramesHirose[2], 400, 0, 448, 448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(242, 131, 27); textSize(24); text("Hirose", 80, 340); textSize(20); text("¿Ayer? Pero si recién llegamos.", 40, 375);
  } else if (pantalla9 == 9) {
    image(FramesNakamura[8], 0, 0, 448, 448); image(FramesHirose[6], 400, 0, 448, 448);
    image(secuenciaPantalla1[4], 0, 330, 790, 120);
    fill(24, 36, 95); textSize(24); text("Nakamura", 80, 340); textSize(20); text("No estoy soñando... ¡El día se está repitiendo!", 40, 375);
  } else if (pantalla9 == 10) {
    image(FramesNakamura[10], 0, 0, 448, 448); image(FramesMatsumura[1], 400, 0, 448, 448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(152, 16, 3); textSize(24); text("Matsumura", 80, 340); textSize(18); text("¡Hirose! ¡Mira este truco! ¡Lo practiqué durante toda la mañana!", 40, 370);
  } else if (pantalla9 == 11) {
    image(FramesNakamura[10], 0, 0, 448, 448); image(FramesHirose[3], 400, 0, 448, 448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(242, 131, 27); textSize(24); text("Hirose", 80, 340); textSize(20); text("¡Ko! ¡Cuidado! ¿Estás bien?", 40, 375);
  } else if (pantalla9 == 12) {
    image(FramesNakamura[10], 0, 0, 448, 448); image(FramesMatsumura[3], 400, 0, 448, 448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(152, 16, 3); textSize(24); text("Matsumura", 80, 340); textSize(20); text("¡Perfectamente! ¡Lo tenía todo calculado!", 40, 375);
  } else if (pantalla9 == 13) {
    image(FramesNakamura[10], 0, 0, 448, 448); image(FramesRyou[2], 400, 0, 448, 448);
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(32, 141, 152); textSize(24); text("Ryou", 80, 340); textSize(20); text("Evidentemente.", 40, 375);
  } else if (pantalla9 == 14) {
    image(FramesNakamura[8], 0, 0, 448, 448); image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(24, 36, 95); textSize(24); text("Nakamura", 80, 340); textSize(18); text("Si el día vuelve a empezar... todavía puedo decidir cómo actuar.", 40, 370);
  } else if (pantalla9 >= 15) {
    image(FramesNakamura[5], 0, 0, 448, 448); image(secuenciaPantalla1[4], 0, 330, 790, 120);
    fill(24, 36, 95); textSize(24); text("Nakamura", 80, 340); textSize(20); text("Esta vez no quiero que el miedo decida por mí.", 40, 375);

    rectMode(CENTER); stroke(255); strokeWeight(2);
    
    // Botón de opción para la Ruta A
    fill(220, 50, 100); rect(650, 200, 180, 40, 10); 
    fill(255); noStroke(); textSize(16); textAlign(CENTER, CENTER);
    text("Opción A", 650, 200);
    
    // Botón de opción para la Ruta B
    stroke(255); strokeWeight(2); fill(220, 50, 100); rect(650, 260, 180, 40, 10);
    fill(255); noStroke(); textSize(16); textAlign(CENTER, CENTER);
    text("Opción B", 650, 260);
    
    // Botón de opción para la Ruta C
    stroke(255); strokeWeight(2); fill(220, 50, 100); rect(650, 320, 180, 40, 10);
    fill(255); noStroke(); textSize(16); textAlign(CENTER, CENTER);
    text("Opción C", 650, 320);
  }
}

// Controla y renderiza la Pantalla final 19
function mostrarPantallaDiecinueve() {
  let dialogoActual = dialogosPantalla19[textoActual];
  imageMode(CORNER);
  
  if (secuenciaPantalla19[0]) {
    image(secuenciaPantalla19[0], 0, 0, 800, 450);
  }
  
  if (textoActual == 5 && secuenciaPantalla19[1]) {
    image(secuenciaPantalla19[1], 0, 0, 800, 450);
  } else if (textoActual >= 6 && secuenciaPantalla19[2]) {
    image(secuenciaPantalla19[2], 0, 0, 800, 450);
  }

  noStroke(); textAlign(LEFT, TOP);
  if (dialogoActual.tipo === "Narrador") {
    image(Narrador, 0, 330, 790, 120); fill(0); textSize(20); text(dialogoActual.texto, 40, 367);
  } else {
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    fill(24, 36, 95); textSize(24); text(dialogoActual.tipo, 80, 340); textSize(20); text(dialogoActual.texto, 40, 375);
  }

  if (dialogoActual.finalPantalla19) {
    rectMode(CENTER); stroke(255); strokeWeight(2); fill(220, 50, 100);
    rect(250, 285, 220, 45, 10); rect(550, 285, 220, 45, 10);
    fill(255); noStroke(); textSize(16); textAlign(CENTER, CENTER);
    text("Ver créditos", 250, 285); text("Volver al inicio", 550, 285);
  }
}

// Motor genérico para ejecutar escenas con arreglos de diálogos
function ejecutarEscena(listaPasos, arregloFrames) {
  let dialogoActual = listaPasos[textoActual];
  imageMode(CORNER);
  if (arregloFrames[dialogoActual.frame]) {
    image(arregloFrames[dialogoActual.frame], 0, 0, 800, 450);
  }
  noStroke(); textAlign(LEFT, TOP);
  if (dialogoActual.tipo === "Narrador") {
    image(Narrador, 0, 330, 790, 120); fill(0); textSize(20); text(dialogoActual.texto, 40, 367);
  } else if (dialogoActual.tipo === "Pensamiento") {
    image(secuenciaPantalla1[4], 0, 330, 790, 120); fill(24, 36, 95); textSize(24); text("Nakamura", 80, 340); textSize(20); text(dialogoActual.texto, 40, 375);
  } else {
    image(secuenciaPantalla1[12], 0, 330, 790, 120);
    if (dialogoActual.tipo === "Nakamura") fill(24, 36, 95);
    else if (dialogoActual.tipo === "Takeuchi") fill(49, 100, 13);
    else if (dialogoActual.tipo === "Ryou") fill(32, 141, 152);
    else if (dialogoActual.tipo === "Matsumura") fill(152, 16, 3);
    else if (dialogoActual.tipo === "Hirose") fill(242, 131, 27);
    textSize(24); text(dialogoActual.tipo, 80, 340); textSize(20); text(dialogoActual.texto, 40, 375);
  }
  if (dialogoActual.boton) {
    rectMode(CENTER); stroke(255); strokeWeight(2); fill(220, 50, 100);
    rect(650, 285, 200, 45, 10);
    fill(255); noStroke(); textSize(18); textAlign(CENTER, CENTER); text(dialogoActual.boton, 650, 285);
  }
  if (dialogoActual.final) {
    rectMode(CENTER); stroke(255); strokeWeight(2); fill(220, 50, 100);
    rect(250, 285, 220, 45, 10); rect(550, 285, 200, 45, 10);
    fill(255); noStroke(); textSize(18); textAlign(CENTER, CENTER);
    text("Volver al inicio", 250, 285); text("Créditos", 550, 285);
  }
  if (dialogoActual.finalRutaB) {
    rectMode(CENTER); stroke(255); strokeWeight(2); fill(220, 50, 100);
    rect(250, 285, 220, 45, 10); rect(550, 285, 200, 45, 10);
    fill(255); noStroke(); textSize(16); textAlign(CENTER, CENTER);
    text("Volver al inicio", 250, 285); text("Ver créditos", 550, 285);
  }
}

// Dibuja el menú principal con efecto de latido en el logo y botones
function mostrarPortadaMenu() {
  imageMode(CORNER);
  image(imgFondoMenu, 0, 0, 800, 450);
  let latido = 1 + sin(frameCount * 0.05) * 0.05;
  imageMode(CENTER);
  image(imgLogoMenu, 400, 200, imgLogoMenu.width * 0.75 * latido, imgLogoMenu.height * 0.75 * latido);
  rectMode(CENTER); stroke(255); strokeWeight(2); fill(220, 50, 100);
  rect(290, 350, 180 * latido, 55 * latido, 10);
  rect(510, 350, 180 * latido, 55 * latido, 10);
  fill(255); noStroke(); textSize(22 * latido); textAlign(CENTER, CENTER);
  text("INICIO", 290, 350); text("CRÉDITOS", 510, 350);
}

// Pantalla de créditos con desplazamiento vertical automático (scroll)
function mostrarCreditos() {
  background(0);

  // Incrementa la posición para mover el texto hacia arriba
  posicionCreditos += 0.6;

  fill(255);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(22);

  // Título de créditos
  textSize(30);
  text("CRÉDITOS", 400, 450 - posicionCreditos);

  // Sección de desarrollo
  textSize(22);
  text("Desarrollo", 400, 520 - posicionCreditos);
  textSize(18);
  text("Mamani Pamela y Azul Ojeda", 400, 560 - posicionCreditos);

  // Sección de guion
  textSize(22);
  text("Historia y Adaptacion", 400, 640 - posicionCreditos);
  textSize(18);
  text("Syundei (Mamani Pamela)", 400, 680 - posicionCreditos);

  // Sección de arte
  textSize(22);
  text("Arte y personajes", 400, 760 - posicionCreditos);
  textSize(18);
  text("Mamani Pamela y Azul Ojeda", 400, 800 - posicionCreditos);

  // Sección de música
  textSize(22);
  text("Música", 400, 880 - posicionCreditos);
  textSize(18);
  text("One Piece - Nami's Theme", 400, 920 - posicionCreditos);

  // Mensaje final de los créditos
  textSize(24);
  text("¡Gracias por jugar!", 400, 1050 - posicionCreditos);

  // Botón fijo para regresar al menú
  rectMode(CENTER); 
  stroke(255); 
  strokeWeight(2); 
  fill(220, 50, 100);
  rect(400, 400, 160, 35, 10);
  fill(255); 
  noStroke(); 
  textSize(16); 
  textAlign(CENTER, CENTER);
  text("Volver", 400, 400);
}

// Controla las interacciones de clic del mouse según la pantalla actual
function mousePressed() {
  if (pantalla == 0) {
    if (mouseX > 200 && mouseX < 380 && mouseY > 320 && mouseY < 380) {
      pantalla = 1; pantalla1 = 0; musica.loop();
    } else if (mouseX > 420 && mouseX < 600 && mouseY > 320 && mouseY < 380) {
      posicionCreditos = 0; // Reinicia el scroll de créditos
      pantalla = 20; // Cambia a la pantalla de créditos
    }
  } else if (pantalla == 20) {
    // Detecta clic en el botón "Volver" desde los créditos
    if (mouseX > 320 && mouseX < 480 && mouseY > 382 && mouseY < 418) {
      posicionCreditos = 0; 
      pantalla = 0;
    }
  } else if (pantalla == 1) {
    if (pantalla1 >= 8 && mouseX > 550 && mouseX < 750 && mouseY > 262 && mouseY < 308) {
      pantalla = 2; pantalla2 = 0; return;
    }
    pantalla1++;
  } else if (pantalla == 2) {
    if (pantalla2 >= 7 && mouseX > 550 && mouseX < 750 && mouseY > 262 && mouseY < 308) {
      pantalla = 3; pantalla3 = 0; return;
    }
    pantalla2++;
  } else if (pantalla == 3) {
    if (pantalla3 >= 7 && mouseX > 550 && mouseX < 750 && mouseY > 262 && mouseY < 308) {
      pantalla = 4; pantalla4 = 0; return;
    }
    pantalla3++;
  } else if (pantalla == 4) {
    if (pantalla4 >= 24 && mouseX > 550 && mouseX < 750 && mouseY > 262 && mouseY < 308) {
      pantalla = 5; pantalla5 = 0; return;
    }
    pantalla4++;
  } else if (pantalla == 5) {
    if (pantalla5 >= 19 && mouseX > 550 && mouseX < 750 && mouseY > 262 && mouseY < 308) {
      pantalla = 6; pantalla6 = 0; return;
    }
    pantalla5++;
  } else if (pantalla == 6) {
    if (pantalla6 >= 25 && mouseX > 550 && mouseX < 750 && mouseY > 262 && mouseY < 308) {
      pantalla = 7; pantalla7 = 0; return;
    }
    pantalla6++;
  } else if (pantalla == 7) {
    if (pantalla7 >= 14 && mouseX > 550 && mouseX < 750 && mouseY > 262 && mouseY < 308) {
      pantalla = 8; pantalla8 = 0; return;
    }
    pantalla7++;
  } else if (pantalla == 8) {
    if (pantalla8 >= 6 && mouseX > 550 && mouseX < 750 && mouseY > 262 && mouseY < 308) {
      pantalla = 9; pantalla9 = 0; return;
    }
    pantalla8++;
  } else if (pantalla == 9) {
    if (pantalla9 >= 15) {
      if (mouseX > 560 && mouseX < 740) {
        if (mouseY > 180 && mouseY < 220) {
          pantalla = 10; textoActual = 0; // Selecciona Opción A
        } else if (mouseY > 240 && mouseY < 280) {
          pantalla = 13; textoActual = 0; // Selecciona Opción B
        } else if (mouseY > 300 && mouseY < 340) {
          pantalla = 16; textoActual = 0; // Selecciona Opción C
        }
      }
      return;
    }
    pantalla9++;
  } else if (pantalla >= 10 && pantalla <= 18) {
    let listaActual;
    if (pantalla == 10) listaActual = dialogosPantalla10;
    else if (pantalla == 11) listaActual = dialogosPantalla11;
    else if (pantalla == 12) listaActual = dialogosPantalla12;
    else if (pantalla == 13) listaActual = dialogosPantalla13;
    else if (pantalla == 14) listaActual = dialogosPantalla14;
    else if (pantalla == 15) listaActual = dialogosPantalla15;
    else if (pantalla == 16) listaActual = dialogosPantalla16;
    else if (pantalla == 17) listaActual = dialogosPantalla17;
    else if (pantalla == 18) listaActual = dialogosPantalla18;

    let dialogoActual = listaActual[textoActual];

    if (dialogoActual.boton && mouseX > 550 && mouseX < 750 && mouseY > 262 && mouseY < 308) {
      if (pantalla == 10) { pantalla = 11; textoActual = 0; }
      else if (pantalla == 11) { pantalla = 12; textoActual = 0; }
      else if (pantalla == 13) { pantalla = 14; textoActual = 0; }
      else if (pantalla == 14) { pantalla = 15; textoActual = 0; }
      else if (pantalla == 16) { pantalla = 17; textoActual = 0; }
      else if (pantalla == 17) { pantalla = 18; textoActual = 0; }
      else if (pantalla == 18) { pantalla = 19; textoActual = 0; }
      return;
    }

    if (dialogoActual.final) {
      if (mouseX > 140 && mouseX < 360 && mouseY > 262 && mouseY < 308) {
        pantalla = 0; textoActual = 0;
      } else if (mouseX > 450 && mouseX < 650 && mouseY > 262 && mouseY < 308) {
        posicionCreditos = 0;
        pantalla = 20;
      }
      return;
    }

    if (dialogoActual.finalRutaB) {
      if (mouseX > 140 && mouseX < 360 && mouseY > 262 && mouseY < 308) {
        pantalla = 0; textoActual = 0;
      } else if (mouseX > 440 && mouseX < 660 && mouseY > 262 && mouseY < 308) {
        posicionCreditos = 0;
        pantalla = 20;
      }
      return;
    }

    textoActual++;
    if (textoActual >= listaActual.length) {
      textoActual = listaActual.length - 1;
    }
  } else if (pantalla == 19) {
    let dialogoActual = dialogosPantalla19[textoActual];

    if (dialogoActual.finalPantalla19) {
      if (mouseX > 140 && mouseX < 360 && mouseY > 262 && mouseY < 308) {
        posicionCreditos = 0;
        pantalla = 20; textoActual = 0; 
      } else if (mouseX > 440 && mouseX < 660 && mouseY > 262 && mouseY < 308) {
        pantalla = 1; pantalla1 = 0; textoActual = 0; // Reinicia el juego
      }
      return;
    }

    textoActual++;
    if (textoActual >= dialogosPantalla19.length) {
      textoActual = dialogosPantalla19.length - 1;
    }
  }
}
