/**
 * LOGICA DE DETALLE DE COMPETICION (competicion.js)
 * Carga información de torneos, tabla de posiciones, fixture y goleadores desde seeders.js.
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Cargar datos de la competición
  const competicion = obtenerCompeticion();
  if (!competicion) {
    console.error("No se encontró información de la competición.");
    return;
  }

  let fechaSeleccionada = "8";
  let textoBusquedaTabla = "";

  // 2. Inicializar eventos
  const selectorJornadas = document.getElementById("selectorJornadas");
  if (selectorJornadas) {
    selectorJornadas.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") {
        fechaSeleccionada = e.target.getAttribute("data-fecha");
        actualizarBotonesJornada();
        renderizarFixture();
      }
    });
  }

  const buscadorTabla = document.getElementById("buscadorTorneo");
  if (buscadorTabla) {
    buscadorTabla.addEventListener("input", (e) => {
      textoBusquedaTabla = e.target.value.trim().toLowerCase();
      renderizarTablaPosiciones();
    });
  }

  function actualizarBotonesJornada() {
    if (!selectorJornadas) return;
    const botones = selectorJornadas.querySelectorAll("button");
    botones.forEach((btn) => {
      const f = btn.getAttribute("data-fecha");
      if (f === fechaSeleccionada) {
        btn.className = "btn btn-dark active";
      } else {
        btn.className = "btn btn-outline-secondary";
      }
    });
  }

  // 3. Renderizar todos los bloques
  function renderizarTodo() {
    renderizarEncabezado();
    renderizarTablaPosiciones();
    renderizarReglas();
    renderizarFixture();
    renderizarGoleadores();
  }

  function renderizarEncabezado() {
    document.title = `${competicion.nombre} ${competicion.temporada} | RNFC`;

    const elTitulo = document.getElementById("tituloCompeticion");
    if (elTitulo)
      elTitulo.textContent = `${competicion.nombre} ${competicion.temporada}`;

    const elDesc = document.getElementById("descCompeticion");
    if (elDesc) elDesc.textContent = competicion.descripcion;

    const elOrganizador = document.getElementById("badgeOrganizador");
    if (elOrganizador) elOrganizador.textContent = competicion.organizador;

    const elChipFecha = document.getElementById("chipFechaActual");
    if (elChipFecha)
      elChipFecha.textContent = `Fecha ${competicion.fechaActual} de ${competicion.totalFechas}`;
  }

  function renderizarTablaPosiciones() {
    const tbody = document.getElementById("cuerpoTablaPosiciones");
    if (!tbody) return;
    tbody.innerHTML = "";

    const tablaFiltrada = competicion.tablaPosiciones.filter((item) => {
      if (textoBusquedaTabla === "") return true;
      return item.club.toLowerCase().includes(textoBusquedaTabla);
    });

    if (tablaFiltrada.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="11" class="text-center py-4 text-secondary">
            No se encontraron clubes que coincidan con "${textoBusquedaTabla}".
          </td>
        </tr>
      `;
      return;
    }

    tablaFiltrada.forEach((fila) => {
      let zonaClass = "";
      if (fila.pos <= 2) {
        zonaClass = "zone-libertadores";
      } else if (fila.pos === 3) {
        zonaClass = "zone-libertadores";
      } else if (fila.pos >= 4 && fila.pos <= 7) {
        zonaClass = "zone-sudamericana";
      } else if (fila.pos >= 15) {
        zonaClass = "zone-descenso";
      }

      // Generar puntos de racha reciente
      const dotsForma = fila.forma
        .map((res) => {
          let letra = "E";
          let clase = "draw";
          if (res === "W") {
            letra = "V";
            clase = "win";
          } else if (res === "L") {
            letra = "D";
            clase = "loss";
          }
          return `<span class="form-dot ${clase}" title="${letra === "V" ? "Victoria" : letra === "D" ? "Derrota" : "Empate"}">${letra}</span>`;
        })
        .join("");

      // Enlace a detalle de club si existe en los seeders
      const hrefClub = `club.html?id=${fila.clubId}`;

      const tr = document.createElement("tr");
      if (zonaClass) tr.className = zonaClass;

      tr.innerHTML = `
        <td class="text-center fw-bold text-secondary">${fila.pos}</td>
        <td>
          <a href="${hrefClub}" class="d-flex align-items-center gap-2 text-decoration-none text-dark fw-semibold">
            <img src="${fila.escudo}" alt="${fila.club}" style="width: 24px; height: 24px; object-fit: contain;">
            <span class="hover-underline">${fila.club}</span>
          </a>
        </td>
        <td class="text-center">${fila.pj}</td>
        <td class="text-center text-secondary">${fila.pg}</td>
        <td class="text-center text-secondary">${fila.pe}</td>
        <td class="text-center text-secondary">${fila.pp}</td>
        <td class="text-center text-secondary">${fila.gf}</td>
        <td class="text-center text-secondary">${fila.gc}</td>
        <td class="text-center ${fila.dif > 0 ? "text-success fw-semibold" : fila.dif < 0 ? "text-danger" : "text-secondary"}">
          ${fila.dif > 0 ? "+" + fila.dif : fila.dif}
        </td>
        <td class="text-center fw-bold fs-6 text-primary">${fila.pts}</td>
        <td class="text-center d-none d-md-table-cell text-nowrap">${dotsForma}</td>
      `;

      tbody.appendChild(tr);
    });
  }

  function renderizarReglas() {
    const contenedor = document.getElementById("contenedorReglas");
    if (!contenedor) return;
    contenedor.innerHTML = "";

    competicion.reglasClasificacion.forEach((regla) => {
      const col = document.createElement("div");
      col.className = "col-sm-6 col-md-3";
      col.innerHTML = `
        <div class="border rounded p-2 bg-light h-100 small">
          <span class="badge bg-dark mb-1">${regla.puesto}</span>
          <strong class="d-block ${regla.colorClass}">
            <i class="bi ${regla.icon} me-1"></i>${regla.clasifica}
          </strong>
        </div>
      `;
      contenedor.appendChild(col);
    });
  }

  function renderizarFixture() {
    const contenedor = document.getElementById("contenedorPartidos");
    if (!contenedor) return;
    contenedor.innerHTML = "";

    const partidos = competicion.fixtureFechas[fechaSeleccionada] || [];

    if (partidos.length === 0) {
      contenedor.innerHTML = `<div class="text-center text-secondary py-3">No hay partidos programados para esta fecha.</div>`;
      return;
    }

    partidos.forEach((p) => {
      const card = document.createElement("div");
      card.className = "card fixture-card mb-2 p-2 shadow-none border";

      const esJugado = p.estado === "Finalizado";
      const badgeEstadoClass = esJugado
        ? "bg-success-subtle text-success"
        : "bg-primary-subtle text-primary";

      card.innerHTML = `
        <div class="d-flex justify-content-between align-items-center mb-1">
          <small class="text-secondary" style="font-size: 0.75rem;"><i class="bi bi-clock me-1"></i>${p.fecha}</small>
          <span class="badge ${badgeEstadoClass} rounded-pill" style="font-size: 0.7rem;">${p.estado}</span>
        </div>

        <div class="d-flex align-items-center justify-content-between my-1">
          <span class="fw-semibold small flex-grow-1 text-truncate" style="max-width: 100px;">${p.local}</span>
          
          <div class="score-badge bg-light border rounded px-2 py-1 mx-2">
            ${esJugado ? `${p.golesLocal} - ${p.golesVisita}` : '<span class="text-secondary small">vs</span>'}
          </div>

          <span class="fw-semibold small flex-grow-1 text-end text-truncate" style="max-width: 100px;">${p.visita}</span>
        </div>

        <small class="text-muted d-block text-center" style="font-size: 0.72rem;"><i class="bi bi-geo-alt me-1"></i>${p.estadio}</small>
      `;

      contenedor.appendChild(card);
    });
  }

  function renderizarGoleadores() {
    const tbody = document.getElementById("cuerpoTablaGoleadores");
    if (!tbody) return;
    tbody.innerHTML = "";

    competicion.goleadores.forEach((g) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td class="text-center fw-bold text-secondary">${g.pos}</td>
        <td>
          <span class="fw-semibold d-block">${g.jugador}</span>
          <small class="text-secondary">${g.nacionalidad}</small>
        </td>
        <td class="text-secondary">${g.club}</td>
        <td class="text-center text-muted">${g.penales}</td>
        <td class="text-end pe-3 fw-bold fs-6 text-danger">${g.goles}</td>
      `;
      tbody.appendChild(tr);
    });
  }

  function mostrarNombreUsuario() {
    const nombreUsuario = document.getElementById("nombre-usuario");
    let sesion = null;

    try {
      sesion = JSON.parse(sessionStorage.getItem("rnfc_sesion"));
    } catch (error) {
      sesion = null;
    }

    if (sesion && sesion.nombre) {
      nombreUsuario.textContent = sesion.nombre;
      nombreUsuario.hidden = false;

      // Si el usuario tiene club (agentes), se envía su id en la URL
      if (sesion.clubId != null) {
        nombreUsuario.href = `jugadores.html?club=${sesion.clubId}`;
      }
    }
  }

  // Renderizar al cargar
  mostrarNombreUsuario();
  renderizarTodo();
});
