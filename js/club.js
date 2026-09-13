/**
 * LOGICA DE DETALLE DE CLUB (club.js)
 * Carga información de club desde seeders.js y renderiza la plantilla y estadísticas.
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Obtener lista de clubes
  const clubes = obtenerClubes();
  if (!clubes || clubes.length === 0) {
    console.error("No se encontraron clubes en el sistema.");
    return;
  }

  // 2. Determinar club actual según parámetro URL (?id=...) o por defecto el primero
  const urlParams = new URLSearchParams(window.location.search);
  const clubIdParam = urlParams.get("id");
  let clubActual = clubIdParam ? obtenerClubPorId(Number(clubIdParam)) : clubes[0];

  let filtroPosicionActual = "TODOS";
  let textoBusquedaActual = "";

  // 3. Inicializar selector de clubes
  const selectClubes = document.getElementById("selectClubes");
  if (selectClubes) {
    selectClubes.innerHTML = "";
    clubes.forEach((club) => {
      const option = document.createElement("option");
      option.value = club.id;
      option.textContent = `${club.nombreCorto} (${club.ciudad})`;
      if (club.id === clubActual.id) {
        option.selected = true;
      }
      selectClubes.appendChild(option);
    });

    selectClubes.addEventListener("change", (e) => {
      const nuevoId = Number(e.target.value);
      clubActual = obtenerClubPorId(nuevoId);
      // Actualizar URL sin recargar
      const nuevaUrl = new URL(window.location);
      nuevaUrl.searchParams.set("id", nuevoId);
      window.history.pushState({}, "", nuevaUrl);
      
      // Reiniciar filtros y renderizar
      filtroPosicionActual = "TODOS";
      textoBusquedaActual = "";
      const buscadorInput = document.getElementById("buscadorJugador");
      if (buscadorInput) buscadorInput.value = "";
      actualizarBotonesFiltro();
      renderizarTodo();
    });
  }

  // 4. Configurar eventos de filtros de plantilla
  const contenedorFiltros = document.getElementById("filtrosPosicion");
  if (contenedorFiltros) {
    contenedorFiltros.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") {
        filtroPosicionActual = e.target.getAttribute("data-posicion");
        actualizarBotonesFiltro();
        renderizarPlantilla();
      }
    });
  }

  const buscadorJugador = document.getElementById("buscadorJugador");
  if (buscadorJugador) {
    buscadorJugador.addEventListener("input", (e) => {
      textoBusquedaActual = e.target.value.trim().toLowerCase();
      renderizarPlantilla();
    });
  }

  function actualizarBotonesFiltro() {
    if (!contenedorFiltros) return;
    const botones = contenedorFiltros.querySelectorAll("button");
    botones.forEach((btn) => {
      const pos = btn.getAttribute("data-posicion");
      if (pos === filtroPosicionActual) {
        btn.className = "btn btn-sm btn-dark active";
      } else {
        btn.className = "btn btn-sm btn-outline-secondary";
      }
    });
  }

  // 5. Funciones de Renderizado
  function renderizarTodo() {
    renderizarEncabezado();
    renderizarInformacionInstitucional();
    renderizarEstadio();
    renderizarUltimosPartidos();
    renderizarPlantilla();
  }

  function renderizarEncabezado() {
    document.title = `${clubActual.nombreCorto} | Ficha de Club RNFC`;

    const imgEscudo = document.getElementById("clubEscudo");
    if (imgEscudo) {
      imgEscudo.src = clubActual.escudo;
      imgEscudo.alt = `Escudo de ${clubActual.nombre}`;
    }

    const elemNombre = document.getElementById("clubNombre");
    if (elemNombre) elemNombre.textContent = clubActual.nombre;

    const elemApodo = document.getElementById("clubApodo");
    if (elemApodo) elemApodo.textContent = clubActual.apodo;

    const badgeFundacion = document.getElementById("clubFundacionBadge");
    if (badgeFundacion) badgeFundacion.textContent = `Fundado en ${clubActual.fundacion}`;

    const badgePosicion = document.getElementById("clubPosicionBadge");
    if (badgePosicion) badgePosicion.textContent = `#${clubActual.posicionActual} en Primera División`;

    const chipEstadio = document.getElementById("clubEstadioResumen");
    if (chipEstadio) chipEstadio.textContent = clubActual.estadio;

    const chipDt = document.getElementById("clubDtresumen");
    if (chipDt) chipDt.textContent = clubActual.entrenador;

    const chipTitulos = document.getElementById("clubTitulosResumen");
    if (chipTitulos) chipTitulos.textContent = `⭐ ${clubActual.titulosNacionales} Campeonatos`;
  }

  function renderizarInformacionInstitucional() {
    const elNombreOficial = document.getElementById("infoNombreOficial");
    if (elNombreOficial) elNombreOficial.textContent = clubActual.nombre;

    const elCiudad = document.getElementById("infoCiudad");
    if (elCiudad) elCiudad.textContent = `${clubActual.ciudad}, ${clubActual.region}`;

    const elPresidente = document.getElementById("infoPresidente");
    if (elPresidente) elPresidente.textContent = clubActual.presidente;

    const elColores = document.getElementById("infoColores");
    if (elColores) elColores.textContent = clubActual.colores;

    const elCopas = document.getElementById("infoCopasChile");
    if (elCopas) elCopas.textContent = `${clubActual.copasChile} títulos`;

    const elSitio = document.getElementById("infoSitioWeb");
    if (elSitio) {
      elSitio.href = clubActual.sitioWeb;
      elSitio.textContent = clubActual.sitioWeb.replace("https://", "");
    }

    const elHistoria = document.getElementById("clubHistoria");
    if (elHistoria) elHistoria.textContent = clubActual.resumenHistorico;
  }

  function renderizarEstadio() {
    const elEstadio = document.getElementById("estadioNombre");
    if (elEstadio) elEstadio.textContent = clubActual.estadio;

    const elUbicacion = document.getElementById("estadioUbicacion");
    if (elUbicacion) elUbicacion.textContent = `${clubActual.ciudad} - ${clubActual.region}`;

    const elCapacidad = document.getElementById("estadioCapacidad");
    if (elCapacidad) elCapacidad.textContent = `${clubActual.capacidadEstadio.toLocaleString("es-CL")} espectadores`;
  }

  function renderizarUltimosPartidos() {
    const contenedor = document.getElementById("listaUltimosPartidos");
    if (!contenedor) return;
    contenedor.innerHTML = "";

    if (!clubActual.ultimosPartidos || clubActual.ultimosPartidos.length === 0) {
      contenedor.innerHTML = `<div class="p-3 text-secondary text-center">Sin partidos recientes registrados.</div>`;
      return;
    }

    clubActual.ultimosPartidos.forEach((p) => {
      let badgeClass = "bg-secondary";
      if (p.estado === "Victoria") badgeClass = "bg-success";
      if (p.estado === "Derrota") badgeClass = "bg-danger";
      if (p.estado === "Empate") badgeClass = "bg-warning text-dark";

      const item = document.createElement("div");
      item.className = "list-group-item d-flex justify-content-between align-items-center py-2";
      item.innerHTML = `
        <div>
          <span class="fw-semibold">vs ${p.rival}</span>
          <small class="text-secondary d-block">Condición: ${p.condicion}</small>
        </div>
        <div class="text-end">
          <span class="badge ${badgeClass} mb-1">${p.resultado}</span>
          <small class="d-block text-secondary">${p.estado}</small>
        </div>
      `;
      contenedor.appendChild(item);
    });
  }

  function renderizarPlantilla() {
    const contenedor = document.getElementById("contenedorJugadores");
    const contador = document.getElementById("contadorJugadores");
    if (!contenedor) return;

    contenedor.innerHTML = "";

    let jugadoresFiltrados = clubActual.plantilla.filter((jugador) => {
      // Filtro por posición
      const coincidePosicion = filtroPosicionActual === "TODOS" || jugador.posicion === filtroPosicionActual;
      
      // Filtro por texto
      const coincideTexto = textoBusquedaActual === "" || 
        jugador.nombre.toLowerCase().includes(textoBusquedaActual) ||
        jugador.dorsal.toString().includes(textoBusquedaActual) ||
        jugador.nacionalidad.toLowerCase().includes(textoBusquedaActual);

      return coincidePosicion && coincideTexto;
    });

    if (contador) {
      contador.textContent = `Mostrando ${jugadoresFiltrados.length} de ${clubActual.plantilla.length} futbolistas registrados`;
    }

    if (jugadoresFiltrados.length === 0) {
      contenedor.innerHTML = `
        <div class="col-12 text-center py-4 text-secondary">
          <i class="bi bi-person-x fs-1 d-block mb-2"></i>
          <p class="mb-0">No se encontraron jugadores con los filtros seleccionados.</p>
        </div>
      `;
      return;
    }

    jugadoresFiltrados.forEach((j) => {
      let badgePosClass = "badge-pos-volante";
      if (j.posicion === "Portero") badgePosClass = "badge-pos-portero";
      if (j.posicion === "Defensa") badgePosClass = "badge-pos-defensa";
      if (j.posicion === "Delantero") badgePosClass = "badge-pos-delantero";

      const col = document.createElement("div");
      col.className = "col-md-6 col-xl-4";
      col.innerHTML = `
        <div class="card h-100 player-card border">
          <div class="card-body p-3">
            <div class="d-flex align-items-center justify-content-between mb-2">
              <span class="badge bg-dark fw-bold px-2 py-1">#${j.dorsal}</span>
              <span class="badge ${badgePosClass} px-2 py-1">${j.posicion}</span>
            </div>

            <div class="player-avatar-wrapper mb-2">
              <span>${j.dorsal}</span>
            </div>

            <h3 class="h6 fw-bold text-center mb-1 text-truncate" title="${j.nombre}">${j.nombre}</h3>
            <p class="text-center small text-secondary mb-2">${j.nacionalidad} · ${j.edad} años</p>

            <div class="border-top pt-2 mt-2 d-flex justify-content-around text-center small bg-light rounded py-1">
              <div>
                <span class="text-secondary d-block">Partidos</span>
                <strong>${j.partidos}</strong>
              </div>
              <div class="border-start border-end px-2">
                <span class="text-secondary d-block">Goles</span>
                <strong class="text-danger">${j.goles}</strong>
              </div>
              <div>
                <span class="text-secondary d-block">Rol</span>
                <span class="badge ${j.titular ? 'bg-success-subtle text-success' : 'bg-secondary-subtle text-secondary'}">${j.titular ? 'Titular' : 'Suplente'}</span>
              </div>
            </div>

          </div>
        </div>
      `;
      contenedor.appendChild(col);
    });
  }

  // Renderizar al inicio
  renderizarTodo();
});
