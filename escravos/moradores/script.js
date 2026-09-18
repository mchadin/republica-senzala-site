function criarCards() {
  const container = document.getElementById("cards-container");
  if (!container) return;

  container.innerHTML = "";

  moradores.forEach((aluno) => {
    const cardHTML = `
      <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card h-100">
          <div class="d-flex align-items-center justify-content-center bg-dark text-white resident-placeholder">
            <div class="text-center">
              <i class="bi bi-person-circle fs-1 text-gold"></i>
              <div class="fw-bold mt-2 text-gold fs-5"><strong>${aluno.apelido}</strong></div>
            </div>
          </div>
          <div class="card-body d-flex flex-column text-center">
            <h6 class="card-title fw-bold text-dark mb-1">${aluno.nome}</h6>
            <p class="card-text text-secondary small mb-1">${aluno.curso}</p>
            ${
              aluno.cidade
                ? `<p class="card-text text-muted small mb-3"><i class="bi bi-geo-alt"></i> ${aluno.cidade} - ${aluno.estado}</p>`
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
      </div>
    `;
    container.innerHTML += cardHTML;
  });
}

window.onload = criarCards;

