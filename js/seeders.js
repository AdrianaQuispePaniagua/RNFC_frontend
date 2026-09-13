/**
 * SEEDERS DE DATOS FICTICIOS - REGISTRO NACIONAL DE FÚTBOL CHILENO (RNFC)
 * Datos basados en clubes y competiciones del fútbol chileno.
 */

const KEY_CLUBS = "rnfc_clubs";
const KEY_COMPETICIONES = "rnfc_competiciones";

/* ==========================================================
   1. SEED DE CLUBES CHILENOS
   ========================================================== */
const SEED_CLUBS = [
  {
    id: 1,
    slug: "colo-colo",
    nombre: "Club Social y Deportivo Colo-Colo",
    nombreCorto: "Colo-Colo",
    apodo: "El Cacique / Los Albos",
    fundacion: 1925,
    ciudad: "Santiago (Macul)",
    region: "Región Metropolitana",
    estadio: "Estadio Monumental David Arellano",
    capacidadEstadio: 47000,
    entrenador: "Jorge Almirón",
    presidente: "Aníbal Mosa",
    titulosNacionales: 33,
    copasChile: 14,
    posicionActual: 1,
    escudo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Escudo_Colo_Colo.svg/200px-Escudo_Colo_Colo.svg.png",
    colores: "Blanco y Negro",
    sitioWeb: "https://colocolo.cl",
    resumenHistorico: "Fundado el 19 de abril de 1925 por un grupo de futbolistas liderados por David Arellano. Es el club más laureado del fútbol profesional chileno y el único del país en ganar la Copa Libertadores de América (1991).",
    plantilla: [
      { id: 101, dorsal: 1, nombre: "Brayan Cortés", posicion: "Portero", edad: 29, nacionalidad: "Chile", partidos: 18, goles: 0, titular: true },
      { id: 102, dorsal: 12, nombre: "Fernando de Paul", posicion: "Portero", edad: 33, nacionalidad: "Chile", partidos: 4, goles: 0, titular: false },
      { id: 103, dorsal: 4, nombre: "Alan Saldivia", posicion: "Defensa", edad: 22, nacionalidad: "Uruguay", partidos: 19, goles: 1, titular: true },
      { id: 104, dorsal: 15, nombre: "Emiliano Amor", posicion: "Defensa", edad: 29, nacionalidad: "Argentina", partidos: 16, goles: 0, titular: true },
      { id: 105, dorsal: 16, nombre: "Óscar Opazo", posicion: "Defensa", edad: 33, nacionalidad: "Chile", partidos: 17, goles: 1, titular: true },
      { id: 106, dorsal: 21, nombre: "Erick Wiemberg", posicion: "Defensa", edad: 29, nacionalidad: "Chile", partidos: 18, goles: 2, titular: true },
      { id: 107, dorsal: 23, nombre: "Arturo Vidal", posicion: "Mediocampista", edad: 37, nacionalidad: "Chile", partidos: 16, goles: 6, titular: true },
      { id: 108, dorsal: 8, nombre: "Esteban Pavez", posicion: "Mediocampista", edad: 34, nacionalidad: "Chile", partidos: 20, goles: 1, titular: true },
      { id: 109, dorsal: 5, nombre: "Leonardo Gil", posicion: "Mediocampista", edad: 33, nacionalidad: "Chile", partidos: 18, goles: 3, titular: true },
      { id: 110, dorsal: 10, nombre: "Carlos Palacios", posicion: "Mediocampista", edad: 24, nacionalidad: "Chile", partidos: 19, goles: 7, titular: true },
      { id: 111, dorsal: 7, nombre: "Carlos Palacios Jr", posicion: "Mediocampista", edad: 21, nacionalidad: "Chile", partidos: 9, goles: 1, titular: false },
      { id: 112, dorsal: 9, nombre: "Javier Correa", posicion: "Delantero", edad: 31, nacionalidad: "Argentina", partidos: 12, goles: 8, titular: true },
      { id: 113, dorsal: 11, nombre: "Marcos Bolados", posicion: "Delantero", edad: 28, nacionalidad: "Chile", partidos: 17, goles: 4, titular: true },
      { id: 114, dorsal: 20, nombre: "Alexander Oroz", posicion: "Delantero", edad: 22, nacionalidad: "Chile", partidos: 10, goles: 2, titular: false },
      { id: 115, dorsal: 29, nombre: "Guillermo Paiva", posicion: "Delantero", edad: 27, nacionalidad: "Paraguay", partidos: 15, goles: 5, titular: false }
    ],
    ultimosPartidos: [
      { rival: "U. de Chile", condicion: "Local", resultado: "2 - 1", estado: "Victoria" },
      { rival: "Huachipato", condicion: "Visita", resultado: "1 - 0", estado: "Victoria" },
      { rival: "Coquimbo U.", condicion: "Local", resultado: "2 - 0", estado: "Victoria" },
      { rival: "Cobresal", condicion: "Visita", resultado: "2 - 2", estado: "Empate" },
      { rival: "U. Católica", condicion: "Local", resultado: "1 - 0", estado: "Victoria" }
    ]
  },
  {
    id: 2,
    slug: "universidad-de-chile",
    nombre: "Club Universidad de Chile",
    nombreCorto: "U. de Chile",
    apodo: "El Romántico Viajero / Los Azules",
    fundacion: 1927,
    ciudad: "Santiago (Ñuñoa)",
    region: "Región Metropolitana",
    estadio: "Estadio Nacional Julio Martínez Prádanos",
    capacidadEstadio: 48665,
    entrenador: "Gustavo Álvarez",
    presidente: "Michael Clark",
    titulosNacionales: 18,
    copasChile: 5,
    posicionActual: 2,
    escudo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Escudo_de_la_Universidad_de_Chile.svg/200px-Escudo_de_la_Universidad_de_Chile.svg.png",
    colores: "Azul y Rojo",
    sitioWeb: "https://udechile.cl",
    resumenHistorico: "Fundado el 24 de mayo de 1927. Uno de los clubes más populares y tradicionales del país, ganador de la Copa Sudamericana de manera invicta en 2011.",
    plantilla: [
      { id: 201, dorsal: 1, nombre: "Gabriel Castellón", posicion: "Portero", edad: 30, nacionalidad: "Chile", partidos: 20, goles: 0, titular: true },
      { id: 202, dorsal: 12, nombre: "Cristopher Toselli", posicion: "Portero", edad: 36, nacionalidad: "Chile", partidos: 2, goles: 0, titular: false },
      { id: 203, dorsal: 2, nombre: "Franco Calderón", posicion: "Defensa", edad: 26, nacionalidad: "Argentina", partidos: 19, goles: 2, titular: true },
      { id: 204, dorsal: 22, nombre: "Matías Zaldivia", posicion: "Defensa", edad: 33, nacionalidad: "Chile", partidos: 18, goles: 3, titular: true },
      { id: 205, dorsal: 17, nombre: "Fabián Hormazábal", posicion: "Defensa", edad: 28, nacionalidad: "Chile", partidos: 19, goles: 2, titular: true },
      { id: 206, dorsal: 14, nombre: "Marcelo Morales", posicion: "Defensa", edad: 21, nacionalidad: "Chile", partidos: 17, goles: 1, titular: true },
      { id: 207, dorsal: 21, nombre: "Marcelo Díaz", posicion: "Mediocampista", edad: 37, nacionalidad: "Chile", partidos: 19, goles: 1, titular: true },
      { id: 208, dorsal: 20, nombre: "Federico Mateos", posicion: "Mediocampista", edad: 31, nacionalidad: "Argentina", partidos: 15, goles: 2, titular: true },
      { id: 209, dorsal: 10, nombre: "Lucas Assadi", posicion: "Mediocampista", edad: 20, nacionalidad: "Chile", partidos: 16, goles: 4, titular: true },
      { id: 210, dorsal: 8, nombre: "Israel Poblete", posicion: "Mediocampista", edad: 29, nacionalidad: "Chile", partidos: 18, goles: 3, titular: true },
      { id: 211, dorsal: 9, nombre: "Leandro Fernández", posicion: "Delantero", edad: 33, nacionalidad: "Argentina", partidos: 19, goles: 9, titular: true },
      { id: 212, dorsal: 11, nombre: "Nicolás Guerra", posicion: "Delantero", edad: 25, nacionalidad: "Chile", partidos: 14, goles: 4, titular: false },
      { id: 213, dorsal: 18, nombre: "Luciano Pons", posicion: "Delantero", edad: 34, nacionalidad: "Argentina", partidos: 15, goles: 4, titular: true },
      { id: 214, dorsal: 7, nombre: "Maximiliano Guerrero", posicion: "Delantero", edad: 24, nacionalidad: "Chile", partidos: 18, goles: 5, titular: true }
    ],
    ultimosPartidos: [
      { rival: "Palestino", condicion: "Local", resultado: "1 - 0", estado: "Victoria" },
      { rival: "Colo-Colo", condicion: "Visita", resultado: "1 - 2", estado: "Derrota" },
      { rival: "Coquimbo U.", condicion: "Visita", resultado: "1 - 0", estado: "Victoria" },
      { rival: "U. Española", condicion: "Local", resultado: "2 - 0", estado: "Victoria" },
      { rival: "Cobreloa", condicion: "Visita", resultado: "3 - 1", estado: "Victoria" }
    ]
  },
  {
    id: 3,
    slug: "universidad-catolica",
    nombre: "Club Deportivo Universidad Católica",
    nombreCorto: "U. Católica",
    apodo: "Los Cruzados / La Franja",
    fundacion: 1937,
    ciudad: "Santiago (Las Condes)",
    region: "Región Metropolitana",
    estadio: "Estadio San Carlos de Apoquindo (Claro Arena)",
    capacidadEstadio: 20000,
    entrenador: "Tiago Nunes",
    presidente: "Juan Tagle",
    titulosNacionales: 16,
    copasChile: 4,
    posicionActual: 3,
    escudo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Escudo_de_Universidad_Cat%C3%B3lica.svg/200px-Escudo_de_Universidad_Cat%C3%B3lica.svg.png",
    colores: "Blanco y Azul Cruzado",
    sitioWeb: "https://cruzados.cl",
    resumenHistorico: "Fundado el 21 de abril de 1937. Destacado por su modelo formativo y por lograr el histórico tetracampeonato en torneos largos anuales (2018-2021).",
    plantilla: [
      { id: 301, dorsal: 1, nombre: "Sebastián Pérez", posicion: "Portero", edad: 33, nacionalidad: "Chile", partidos: 15, goles: 0, titular: true },
      { id: 302, dorsal: 13, nombre: "Thomas Gillier", posicion: "Portero", edad: 20, nacionalidad: "Chile", partidos: 8, goles: 0, titular: false },
      { id: 303, dorsal: 5, nombre: "Daniel González", posicion: "Defensa", edad: 22, nacionalidad: "Chile", partidos: 16, goles: 1, titular: true },
      { id: 304, dorsal: 2, nombre: "Branco Ampuero", posicion: "Defensa", edad: 31, nacionalidad: "Chile", partidos: 17, goles: 1, titular: true },
      { id: 305, dorsal: 19, nombre: "Eugenio Mena", posicion: "Defensa", edad: 35, nacionalidad: "Chile", partidos: 18, goles: 0, titular: true },
      { id: 306, dorsal: 24, nombre: "Guillermo Soto", posicion: "Defensa", edad: 30, nacionalidad: "Chile", partidos: 14, goles: 0, titular: true },
      { id: 307, dorsal: 8, nombre: "Fernando Zuqui", posicion: "Mediocampista", edad: 32, nacionalidad: "Argentina", partidos: 12, goles: 2, titular: true },
      { id: 308, dorsal: 10, nombre: "César Pinares", posicion: "Mediocampista", edad: 33, nacionalidad: "Chile", partidos: 15, goles: 3, titular: true },
      { id: 309, dorsal: 22, nombre: "Jader Gentil", posicion: "Mediocampista", edad: 21, nacionalidad: "Brasil", partidos: 10, goles: 2, titular: false },
      { id: 310, dorsal: 18, nombre: "Alexander Aravena", posicion: "Delantero", edad: 21, nacionalidad: "Chile", partidos: 16, goles: 6, titular: true },
      { id: 311, dorsal: 9, nombre: "Fernando Zampedri", posicion: "Delantero", edad: 36, nacionalidad: "Argentina", partidos: 20, goles: 13, titular: true },
      { id: 312, dorsal: 11, nombre: "Clemente Montes", posicion: "Delantero", edad: 23, nacionalidad: "Chile", partidos: 15, goles: 3, titular: false },
      { id: 313, dorsal: 14, nombre: "Gonzalo Tapia", posicion: "Delantero", edad: 22, nacionalidad: "Chile", partidos: 19, goles: 7, titular: true }
    ],
    ultimosPartidos: [
      { rival: "Cobresal", condicion: "Local", resultado: "2 - 0", estado: "Victoria" },
      { rival: "Deportes Iquique", condicion: "Visita", resultado: "3 - 2", estado: "Victoria" },
      { rival: "Colo-Colo", condicion: "Visita", resultado: "0 - 1", estado: "Derrota" },
      { rival: "Huachipato", condicion: "Local", resultado: "4 - 0", estado: "Victoria" },
      { rival: "Audax Italiano", condicion: "Visita", resultado: "1 - 2", estado: "Derrota" }
    ]
  },
  {
    id: 4,
    slug: "cobreloa",
    nombre: "Club de Deportes Cobreloa",
    nombreCorto: "Cobreloa",
    apodo: "Los Zorros del Desierto / Naranjas",
    fundacion: 1977,
    ciudad: "Calama",
    region: "Región de Antofagasta",
    estadio: "Estadio Zorros del Desierto",
    capacidadEstadio: 12102,
    entrenador: "Dalcio Giovagnoli",
    presidente: "Marcelo Pérez",
    titulosNacionales: 8,
    copasChile: 1,
    posicionActual: 10,
    escudo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Escudo_Cobreloa.png/200px-Escudo_Cobreloa.png",
    colores: "Naranja y Cobre",
    sitioWeb: "https://cobreloa.cl",
    resumenHistorico: "Fundado el 7 de enero de 1977 en Calama. Es el equipo de provincia con más títulos de Primera División y dos veces finalista de la Copa Libertadores.",
    plantilla: [
      { id: 401, dorsal: 1, nombre: "Nicolás Avellaneda", posicion: "Portero", edad: 31, nacionalidad: "Argentina", partidos: 19, goles: 0, titular: true },
      { id: 402, dorsal: 3, nombre: "Rodolfo González", posicion: "Defensa", edad: 35, nacionalidad: "Chile", partidos: 17, goles: 1, titular: true },
      { id: 403, dorsal: 4, nombre: "Bastián Tapia", posicion: "Defensa", edad: 22, nacionalidad: "Chile", partidos: 16, goles: 0, titular: true },
      { id: 404, dorsal: 6, nombre: "Luis García", posicion: "Mediocampista", edad: 28, nacionalidad: "Chile", partidos: 18, goles: 2, titular: true },
      { id: 405, dorsal: 10, nombre: "Juan Leiva", posicion: "Mediocampista", edad: 30, nacionalidad: "Chile", partidos: 16, goles: 3, titular: true },
      { id: 406, dorsal: 9, nombre: "Cristian Insaurralde", posicion: "Delantero", edad: 33, nacionalidad: "Argentina", partidos: 18, goles: 6, titular: true },
      { id: 407, dorsal: 11, nombre: "Nahuel Donadell", posicion: "Delantero", edad: 33, nacionalidad: "Chile", partidos: 14, goles: 3, titular: true }
    ],
    ultimosPartidos: [
      { rival: "Coquimbo U.", condicion: "Local", resultado: "1 - 0", estado: "Victoria" },
      { rival: "U. de Chile", condicion: "Local", resultado: "1 - 3", estado: "Derrota" },
      { rival: "Everton", condicion: "Visita", resultado: "0 - 2", estado: "Derrota" },
      { rival: "Audax Italiano", condicion: "Local", resultado: "2 - 1", estado: "Victoria" },
      { rival: "Ñublense", condicion: "Visita", resultado: "0 - 1", estado: "Derrota" }
    ]
  }
];

/* ==========================================================
   2. SEED DE COMPETICIÓN (Campeonato Nacional)
   ========================================================== */
const SEED_COMPETICIONES = {
  id: 1,
  nombre: "Campeonato Nacional Primera División",
  patrocinador: "Itaú",
  temporada: "2026",
  organizador: "ANFP / Federación de Fútbol de Chile",
  fechaActual: 8,
  totalFechas: 30,
  logoTorneo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Campeonato_Ita%C3%BA_logo.png/250px-Campeonato_Ita%C3%BA_logo.png",
  descripcion: "Máxima categoría del fútbol profesional chileno. El campeón y subcampeón clasifican directamente a la fase de grupos de la Copa Libertadores, mientras que los puestos del 4° al 7° acceden a la Copa Sudamericana.",
  reglasClasificacion: [
    { puesto: "1° - 2°", clasifica: "Fase de Grupos Copa Libertadores", colorClass: "text-success", icon: "bi-trophy-fill" },
    { puesto: "3°", clasifica: "Fase Previa Copa Libertadores", colorClass: "text-primary", icon: "bi-star-fill" },
    { puesto: "4° - 7°", clasifica: "Copa Sudamericana", colorClass: "text-info", icon: "bi-globe" },
    { puesto: "15° - 16°", clasifica: "Descenso directo a Primera B", colorClass: "text-danger", icon: "bi-arrow-down-circle-fill" }
  ],
  tablaPosiciones: [
    { pos: 1, clubId: 1, club: "Colo-Colo", pj: 8, pg: 6, pe: 1, pp: 1, gf: 17, gc: 6, dif: 11, pts: 19, forma: ["W", "W", "W", "D", "W"], escudo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Escudo_Colo_Colo.svg/80px-Escudo_Colo_Colo.svg.png" },
    { pos: 2, clubId: 2, club: "U. de Chile", pj: 8, pg: 5, pe: 2, pp: 1, gf: 15, gc: 7, dif: 8, pts: 17, forma: ["W", "L", "W", "W", "W"], escudo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Escudo_de_la_Universidad_de_Chile.svg/80px-Escudo_de_la_Universidad_de_Chile.svg.png" },
    { pos: 3, clubId: 3, club: "U. Católica", pj: 8, pg: 5, pe: 1, pp: 2, gf: 14, gc: 9, dif: 5, pts: 16, forma: ["W", "W", "L", "W", "L"], escudo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Escudo_de_Universidad_Cat%C3%B3lica.svg/80px-Escudo_de_Universidad_Cat%C3%B3lica.svg.png" },
    { pos: 4, clubId: 5, club: "Coquimbo Unido", pj: 8, pg: 4, pe: 2, pp: 2, gf: 11, gc: 7, dif: 4, pts: 14, forma: ["D", "W", "L", "W", "D"], escudo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Escudo_Coquimbo_Unido.png/80px-Escudo_Coquimbo_Unido.png" },
    { pos: 5, clubId: 6, club: "Deportes Iquique", pj: 8, pg: 4, pe: 1, pp: 3, gf: 13, gc: 11, dif: 2, pts: 13, forma: ["W", "L", "W", "L", "W"], escudo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Escudo_Club_Deportes_Iquique.png/80px-Escudo_Club_Deportes_Iquique.png" },
    { pos: 6, clubId: 7, club: "Unión Española", pj: 8, pg: 3, pe: 3, pp: 2, gf: 12, gc: 10, dif: 2, pts: 12, forma: ["D", "W", "L", "D", "W"], escudo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Escudo_Union_Espa%C3%B1ola.png/80px-Escudo_Union_Espa%C3%B1ola.png" },
    { pos: 7, clubId: 8, club: "Palestino", pj: 8, pg: 3, pe: 2, pp: 3, gf: 10, gc: 9, dif: 1, pts: 11, forma: ["L", "W", "D", "L", "W"], escudo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Escudo_del_Club_Deportivo_Palestino.svg/80px-Escudo_del_Club_Deportivo_Palestino.svg.png" },
    { pos: 8, clubId: 9, club: "Everton", pj: 8, pg: 3, pe: 2, pp: 3, gf: 9, gc: 9, dif: 0, pts: 11, forma: ["W", "D", "L", "W", "L"], escudo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Escudo_Everton_de_Vi%C3%B1a_del_Mar.svg/80px-Escudo_Everton_de_Vi%C3%B1a_del_Mar.svg.png" },
    { pos: 9, clubId: 10, club: "Ñublense", pj: 8, pg: 3, pe: 1, pp: 4, gf: 8, gc: 10, dif: -2, pts: 10, forma: ["L", "L", "W", "W", "D"], escudo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Escudo_Nublense.png/80px-Escudo_Nublense.png" },
    { pos: 10, clubId: 4, club: "Cobreloa", pj: 8, pg: 3, pe: 0, pp: 5, gf: 8, gc: 14, dif: -6, pts: 9, forma: ["W", "L", "L", "W", "L"], escudo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Escudo_Cobreloa.png/80px-Escudo_Cobreloa.png" },
    { pos: 11, clubId: 11, club: "O'Higgins", pj: 8, pg: 2, pe: 3, pp: 3, gf: 7, gc: 10, dif: -3, pts: 9, forma: ["D", "D", "L", "W", "L"], escudo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Escudo_OHiggins.png/80px-Escudo_OHiggins.png" },
    { pos: 12, clubId: 12, club: "Huachipato", pj: 8, pg: 2, pe: 2, pp: 4, gf: 7, gc: 11, dif: -4, pts: 8, forma: ["L", "D", "L", "L", "W"], escudo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Escudo_Huachipato.svg/80px-Escudo_Huachipato.svg.png" },
    { pos: 13, clubId: 13, club: "Cobresal", pj: 8, pg: 2, pe: 2, pp: 4, gf: 9, gc: 14, dif: -5, pts: 8, forma: ["L", "D", "W", "L", "L"], escudo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Escudo_Cobresal.png/80px-Escudo_Cobresal.png" },
    { pos: 14, clubId: 14, club: "Audax Italiano", pj: 8, pg: 2, pe: 1, pp: 5, gf: 8, gc: 12, dif: -4, pts: 7, forma: ["W", "L", "L", "L", "D"], escudo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Escudo_Audax_Italiano.png/80px-Escudo_Audax_Italiano.png" },
    { pos: 15, clubId: 15, club: "Deportes Copiapó", pj: 8, pg: 1, pe: 2, pp: 5, gf: 6, gc: 13, dif: -7, pts: 5, forma: ["L", "D", "L", "L", "D"], escudo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Escudo_Deportes_Copiapo.png/80px-Escudo_Deportes_Copiapo.png" },
    { pos: 16, clubId: 16, club: "Unión La Calera", pj: 8, pg: 1, pe: 1, pp: 6, gf: 5, gc: 13, dif: -8, pts: 4, forma: ["L", "L", "D", "L", "L"], escudo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Escudo_Union_La_Calera.png/80px-Escudo_Union_La_Calera.png" }
  ],
  fixtureFechas: {
    "7": [
      { id: 701, local: "Colo-Colo", visita: "Cobresal", golesLocal: 2, golesVisita: 2, estado: "Finalizado", fecha: "Sábado 29 Agosto", estadio: "Estadio Monumental" },
      { id: 702, local: "U. de Chile", visita: "U. Española", golesLocal: 2, golesVisita: 0, estado: "Finalizado", fecha: "Sábado 29 Agosto", estadio: "Estadio Nacional" },
      { id: 703, local: "U. Católica", visita: "Huachipato", golesLocal: 4, golesVisita: 0, estado: "Finalizado", fecha: "Domingo 30 Agosto", estadio: "Estadio Santa Laura" },
      { id: 704, local: "Cobreloa", visita: "Audax Italiano", golesLocal: 2, golesVisita: 1, estado: "Finalizado", fecha: "Domingo 30 Agosto", estadio: "Zorros del Desierto" }
    ],
    "8": [
      { id: 801, local: "Colo-Colo", visita: "U. Católica", golesLocal: 1, golesVisita: 0, estado: "Finalizado", fecha: "Viernes 4 Septiembre", estadio: "Estadio Monumental" },
      { id: 802, local: "U. de Chile", visita: "Palestino", golesLocal: 1, golesVisita: 0, estado: "Finalizado", fecha: "Sábado 5 Septiembre", estadio: "Estadio Nacional" },
      { id: 803, local: "Coquimbo Unido", visita: "Everton", golesLocal: 1, golesVisita: 1, estado: "Finalizado", fecha: "Sábado 5 Septiembre", estadio: "Francisco Sánchez Rumoroso" },
      { id: 804, local: "Cobreloa", visita: "Coquimbo U.", golesLocal: 1, golesVisita: 0, estado: "Finalizado", fecha: "Domingo 6 Septiembre", estadio: "Zorros del Desierto" }
    ],
    "9": [
      { id: 901, local: "Huachipato", visita: "Colo-Colo", golesLocal: null, golesVisita: null, estado: "Por Jugar", fecha: "Sábado 19 Septiembre - 15:00 hrs", estadio: "Estadio Huachipato CAP" },
      { id: 902, local: "Deportes Iquique", visita: "U. de Chile", golesLocal: null, golesVisita: null, estado: "Por Jugar", fecha: "Sábado 19 Septiembre - 17:30 hrs", estadio: "Tierra de Campeones" },
      { id: 903, local: "U. Católica", visita: "Deportes Copiapó", golesLocal: null, golesVisita: null, estado: "Por Jugar", fecha: "Domingo 20 Septiembre - 12:00 hrs", estadio: "Estadio Santa Laura" },
      { id: 904, local: "Cobresal", visita: "Cobreloa", golesLocal: null, golesVisita: null, estado: "Por Jugar", fecha: "Domingo 20 Septiembre - 15:00 hrs", estadio: "El Cobre de El Salvador" }
    ]
  },
  goleadores: [
    { pos: 1, jugador: "Fernando Zampedri", club: "U. Católica", goles: 13, partidos: 20, penales: 3, nacionalidad: "Argentina" },
    { pos: 2, jugador: "Leandro Fernández", club: "U. de Chile", goles: 9, partidos: 19, penales: 2, nacionalidad: "Argentina" },
    { pos: 3, jugador: "Javier Correa", club: "Colo-Colo", goles: 8, partidos: 12, penales: 1, nacionalidad: "Argentina" },
    { pos: 4, jugador: "Carlos Palacios", club: "Colo-Colo", goles: 7, partidos: 19, penales: 2, nacionalidad: "Chile" },
    { pos: 5, jugador: "Gonzalo Tapia", club: "U. Católica", goles: 7, partidos: 19, penales: 0, nacionalidad: "Chile" },
    { pos: 6, jugador: "Cristian Insaurralde", club: "Cobreloa", goles: 6, partidos: 18, penales: 1, nacionalidad: "Argentina" },
    { pos: 7, jugador: "Arturo Vidal", club: "Colo-Colo", goles: 6, partidos: 16, penales: 2, nacionalidad: "Chile" }
  ]
};

/* ==========================================================
   3. HELPERS DE LOCALSTORAGE
   ========================================================== */

function obtenerClubes() {
  const data = localStorage.getItem(KEY_CLUBS);
  if (data) {
    try {
      return JSON.parse(data);
    } catch (e) {
      console.warn("Error al parsear clubes de localStorage, usando seeders.", e);
    }
  }
  localStorage.setItem(KEY_CLUBS, JSON.stringify(SEED_CLUBS));
  return SEED_CLUBS;
}

function obtenerClubPorId(id) {
  const clubes = obtenerClubes();
  return clubes.find(c => c.id === Number(id)) || clubes[0];
}

function obtenerCompeticion() {
  const data = localStorage.getItem(KEY_COMPETICIONES);
  if (data) {
    try {
      return JSON.parse(data);
    } catch (e) {
      console.warn("Error al parsear competicion de localStorage, usando seeders.", e);
    }
  }
  localStorage.setItem(KEY_COMPETICIONES, JSON.stringify(SEED_COMPETICIONES));
  return SEED_COMPETICIONES;
}
