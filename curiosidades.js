const curiosidades = [
  "Yo adoro acurrucarme entre cobijas suaves (tengo una de osos pandas).",
  "Me gusta sentirme pequeñito cuando estoy en casa.",
  "Sonrío cuando uso pijamas suaves y cómodas.",
  "Me encanta dormir abrazando mis peluches Jax y Gelato.",
  "Disfruto escuchar canciones dulces antes de dormir (ejemplo de piano).",
  "Adoro tener un pañal puesto para dormir bien en la noche.",
  "Me siento en paz con luces cálidas y bajitas.",
  "Me encanta coleccionar cositas adorables y cositas de bebe.",
  "Amo tomar leche tibia (en especial si es de noche).",
  "Me gusta hablar con voz suave cuando estoy relajado.",
  "Me pongo feliz cuando me cuidan con cariño (una amiga me trato pequeño una vez y muy corta y me encanto).",
  "Adoro usar calcetines en días fríos (dan su calorcito en las patitas).",
  "Disfruto programar cosas simples para relajarme.",
  "Me gusta guardar mis peluches encima de mi cama (si alguien entra sera observado por los peluches del apocalipsis).",
  "Sueño con tener un cuarto lleno de ternura y cositas cute de bebe.",
  "Me encanta sentirme protegido en momentos tranquilos.",
  "Prefiero planes caseros con chocolatito caliente.",
  "Me agrada jugar videojuegos antes de descansar.",
  "Sonrío cuando me dicen palabras bonitas.",
  "Me encantaria decorar mi espacio con tonos tipo azul con estrellitas.",
  "Mi color favorito es el morado.",
  "Adoro llevar pañales cuando voy a un evento o a un parque de atracciones.",
  "Me siento mejor con abrazos largos y sinceros.",
  "Me encantan los oneseis (en especial los que tienen tematicas de animalitos).",
  "Prefiero la musica estilo Jazz, piano, boleros y alguito de Rock.",
  "Estoy empezando a hablar con la comunidad y me alegra haber conocido a una personita llamada Mari.",
  "Me gusta demostrar cariño con detalles pequeñitos.",
  "Valoro que me escuchen sin juzgarme.",
  "Agradezco cada gesto bonito que recibo.",
  "Cuido mucho a las personas que me entregan su confianza.",
  "Puedo actuar de forma infantil con personas que no saben que soy ABDL (hasta cierto punto, solo lo hago si tengo demasiada confianza).",
  "Yo me emociono con mensajes tiernos inesperados.",
  "Mi comida Favorita es el arroz con pollo.",
  "Soy muy fanatico de los videojuegos tipo arcade (enserio me encantan).",
  "Mi primer autoregalo que no se trato de un videojuego fue un peluche de kirby.",
  "Yo podría pasar horas explorando mundos de videojuegos si es que tengo tiempo.",
  "A mi cabeza le gusta crear personajes con historias únicas (ya ahi como 7 temporadas de 214 series diferentes con diferentes protagonistas).",
  "Disfruto los juegos cooperativos con buena comunicación (me encantaria que jugaras it takes two).",
  "Me gusta mejorar mi puntería partida tras partida sobre todo en valorant.",
  "Sueño con diseñar mi propio juego narrativo (de hecho ya tengo algunas ideas sobre ello).",
  "Estoy soltero (por si querias saber).",
  "Me gustan los dinosaurios.",
  "Las peliculas tipo animación, tiernas y estilos adorables son las que mas me agradan.",
  "Tengo un regalo guardado para una persona que voy a conocer este Domingo.",
  "Me encanta construir niveles desafiantes pero justos.",
  "No me gustan las peliculas de terror (me dan miedo y probablemente genere un accidente).",
  "Odio la guanabana (no la quiero ver ni en pintura).",
  "Siempre he querido ir a un escape room (jamas he ido y me parecen curiosos).",
  "Me encanta automatizar tareas pequeñas cuando puedo (soy algo perezoso asi que creo paginas que me hagan la vida mas facil).",
  "Yo aprendo programación creando cosas que sí uso (ejemplo esta pagina web que cree para ti)."
];

const grid = document.getElementById("factsGrid");

  curiosidades.forEach((texto, index) => {
    const card = document.createElement("article");
    card.className = "card fact";
    card.innerHTML = `
      <h3>Dato ${index + 1}</h3>
      <p>${texto}</p>
    `;
    grid.appendChild(card);
  });