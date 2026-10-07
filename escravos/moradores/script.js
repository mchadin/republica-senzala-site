function criarCards() {
  const container = document.getElementById("cards-container");
  if (!container) return;

  container.innerHTML = "";

  moradores.forEach((aluno) => {
    const cardHTML = `
      <div class="col-6 col-md-4 col-lg-3">
        <div class="alumni-card p-3 h-100 d-flex flex-column text-center">
          <div class="mb-3">
            <img
              src="/escravos/moradores/fotos/${aluno.foto}"
              class="rounded-circle shadow-sm alumni-photo"
              alt="${aluno.apelido}"
              loading="lazy"
              onerror="this.classList.add('hidden-on-error')"
            />
          </div>
          <div class="alumni-badge py-1 px-3 rounded-pill mb-2">
            ${aluno.apelido}
          </div>
          <h6 class="fw-bold text-dark mb-1 small">${aluno.nome}</h6>
          <p class="text-secondary small mb-1 alumni-detail">${aluno.curso}</p>
          ${
            aluno.cidade
              ? `<p class="text-muted small mb-1 alumni-detail"><i class="bi bi-geo-alt-fill text-gold me-1"></i>${aluno.cidade} - ${aluno.estado}</p>`
              : ""
          }
          <div class="mt-auto pt-2">
            <ul class="list-unstyled d-flex justify-content-center gap-3 mb-0">
              ${
                aluno.email
                  ? `<li><a href="mailto:${aluno.email}" class="text-secondary fs-5" title="E-mail"><i class="bi bi-envelope-fill"></i></a></li>`
                  : ""
              }
              ${
                aluno.instagram
                  ? `<li><a href="https://instagram.com/${aluno.instagram}" target="_blank" class="text-secondary fs-5" title="Instagram"><i class="bi bi-instagram"></i></a></li>`
                  : ""
              }
            </ul>
          </div>
        </div>
      </div>
    `;
    container.innerHTML += cardHTML;
  });
}

window.onload = criarCards;
