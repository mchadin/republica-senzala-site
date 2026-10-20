function renderHomenageados(lista) {
  const container = document.getElementById("cards-container");
  if (!container) return;

  container.innerHTML = "";

  if (lista.length === 0) {
    container.innerHTML = `
      <div class="col-12 text-center py-5 text-muted">
        <i class="bi bi-search fs-1"></i>
        <p class="mt-2">Nenhum homenageado encontrado com esse termo.</p>
      </div>
    `;
    return;
  }

  lista.forEach((aluno) => {
    const cardHTML = `
      <div class="col-6 col-md-4 col-lg-3">
        <div class="alumni-card${aluno.memoriam ? ' alumni-memoriam' : ''} p-3 h-100 d-flex flex-column text-center"${aluno.memoriam ? ' title="In memoriam"' : ''}>
          <div class="mb-3">
            <img
              src="/escravos/homenageados/fotos/${aluno.codigo}.jpg"
                class="rounded shadow-sm alumni-photo"
              alt="${aluno.apelido}"
              loading="lazy"
              onerror="this.classList.add('hidden-on-error')"
            />
          </div>
          <div class="alumni-badge py-1 px-3 rounded-pill mb-2">
            ${aluno.apelido}
          </div>
          <h6 class="fw-bold text-dark mb-1 small">${aluno.nome}</h6>
          ${aluno.cidade ? `<p class="text-muted small mb-1 alumni-detail"><i class="bi bi-geo-alt-fill text-gold me-1"></i>${aluno.cidade}</p>` : ''}
          ${aluno.curso ? `<p class="text-secondary small mb-1 alumni-detail">${aluno.curso}</p>` : ''}
          ${aluno.formatura ? `
          <div class="mt-auto pt-2">
            <span class="badge bg-light text-dark border">${aluno.formatura}</span>
          </div>` : ''}
        </div>
      </div>
    `;
    container.innerHTML += cardHTML;
  });
}

window.onload = function () {
  renderHomenageados(homenageados);
};


