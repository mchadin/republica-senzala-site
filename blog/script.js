// blog/script.js - Renderizador e Controlador Dinâmico do Blog da República Senzala

let currentPage = 1;
const postsPerPage = 9;
let activeCategory = "Todos";
let activeSearch = "";

function getFilteredPosts() {
  if (typeof blogPosts === "undefined") return [];

  return blogPosts.filter((post) => {
    const matchCategory =
      activeCategory === "Todos" ||
      (post.categoria && post.categoria.toLowerCase() === activeCategory.toLowerCase());

    const matchSearch =
      !activeSearch ||
      (post.titulo && post.titulo.toLowerCase().includes(activeSearch)) ||
      (post.resumo && post.resumo.toLowerCase().includes(activeSearch)) ||
      (post.categoria && post.categoria.toLowerCase().includes(activeSearch));

    return matchCategory && matchSearch;
  });
}

function renderPosts() {
  const container = document.getElementById("posts-container");
  const paginationContainer = document.getElementById("pagination-container");
  const counterSpan = document.getElementById("posts-count");

  if (!container) return;

  const filtered = getFilteredPosts();
  const totalPosts = filtered.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage) || 1;

  if (currentPage > totalPages) currentPage = 1;

  if (counterSpan) {
    counterSpan.textContent = `${totalPosts} ${totalPosts === 1 ? 'matéria encontrada' : 'matérias encontradas'}`;
  }

  container.innerHTML = "";

  if (totalPosts === 0) {
    container.innerHTML = `
      <div class="col-12 text-center py-5">
        <i class="bi bi-search fs-1 text-muted"></i>
        <h4 class="fw-bold mt-3 text-dark">Nenhuma matéria encontrada</h4>
        <p class="text-secondary">Tente alterar os termos de busca ou selecionar outra categoria.</p>
        <button class="btn btn-outline-dark btn-sm mt-2 fw-semibold" onclick="resetFilters()">Limpar Filtros</button>
      </div>
    `;
    if (paginationContainer) paginationContainer.innerHTML = "";
    return;
  }

  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = Math.min(startIndex + postsPerPage, totalPosts);
  const currentPosts = filtered.slice(startIndex, endIndex);

  currentPosts.forEach((post) => {
    const coverImage = post.imagem || "/imagens/PHOTO-2023-10-15-02-36-51_3.jpg";
    const postUrl = `/blog/post.html?id=${post.id}`;

    const cardHTML = `
      <div class="col-12 col-md-6 col-lg-4">
        <article class="blog-card h-100 d-flex flex-column overflow-hidden">
          <a href="${postUrl}" class="d-block overflow-hidden position-relative blog-card-image-link">
            <img
              src="${coverImage}"
              class="w-100 h-100 object-fit-cover transition-transform"
              alt="${post.titulo}"
              loading="lazy"
              onerror="this.src='/imagens/PHOTO-2023-10-15-02-36-51_3.jpg'"
            />
            <span class="badge bg-gold text-dark position-absolute top-0 start-0 m-3 px-3 py-2 text-uppercase fw-bold shadow-sm">
              ${post.categoria}
            </span>
          </a>
          
          <div class="p-4 d-flex flex-column flex-grow-1">
            <div class="d-flex align-items-center justify-content-between mb-2">
              <small class="text-muted"><i class="bi bi-calendar3 text-gold me-1"></i>${post.data}</small>
              ${post.galeria && post.galeria.length > 1 ? `<small class="text-muted"><i class="bi bi-images me-1"></i>${post.galeria.length} fotos</small>` : ''}
            </div>

            <h5 class="fw-bold mb-3 blog-card-title">
              <a href="${postUrl}" class="text-decoration-none text-dark hover-gold">
                ${post.titulo}
              </a>
            </h5>

            <p class="text-secondary small mb-4 flex-grow-1 blog-card-summary">
              ${post.resumo}
            </p>

            <div class="mt-auto pt-3 border-top d-flex align-items-center justify-content-between">
              <a href="${postUrl}" class="btn btn-sm btn-gold fw-bold px-3">
                Ler Matéria <i class="bi bi-arrow-right ms-1"></i>
              </a>
            </div>
          </div>
        </article>
      </div>
    `;
    container.innerHTML += cardHTML;
  });

  renderPagination(totalPages);
}

function renderPagination(totalPages) {
  const container = document.getElementById("pagination-container");
  if (!container) return;

  if (totalPages <= 1) {
    container.innerHTML = "";
    return;
  }

  let html = `<ul class="pagination justify-content-center gap-1 my-4">`;

  // Botão Anterior
  html += `
    <li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
      <button class="page-link shadow-none" onclick="goToPage(${currentPage - 1})" aria-label="Anterior">
        <i class="bi bi-chevron-left"></i>
      </button>
    </li>
  `;

  // Números das Páginas
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= currentPage - 2 && i <= currentPage + 2)) {
      html += `
        <li class="page-item ${i === currentPage ? 'active' : ''}">
          <button class="page-link shadow-none ${i === currentPage ? 'bg-gold border-gold text-dark fw-bold' : 'text-dark'}" onclick="goToPage(${i})">${i}</button>
        </li>
      `;
    } else if (i === currentPage - 3 || i === currentPage + 3) {
      html += `<li class="page-item disabled"><span class="page-link border-0">...</span></li>`;
    }
  }

  // Botão Próximo
  html += `
    <li class="page-item ${currentPage === totalPages ? 'disabled' : ''}">
      <button class="page-link shadow-none" onclick="goToPage(${currentPage + 1})" aria-label="Próximo">
        <i class="bi bi-chevron-right"></i>
      </button>
    </li>
  `;

  html += `</ul>`;
  container.innerHTML = html;
}

function goToPage(page) {
  currentPage = page;
  renderPosts();
  window.scrollTo({ top: document.getElementById("blog-header").offsetTop - 80, behavior: "smooth" });
}

function filterCategory(cat) {
  // Se clicar no botão que já está ativo, desseleciona e volta para "Todos"
  if (activeCategory === cat && cat !== "Todos") {
    activeCategory = "Todos";
  } else {
    activeCategory = cat;
  }
  currentPage = 1;

  document.querySelectorAll(".category-pill").forEach((pill) => {
    if (pill.getAttribute("data-category") === activeCategory) {
      pill.classList.remove("btn-outline-dark");
      pill.classList.add("btn-gold");
    } else {
      pill.classList.remove("btn-gold");
      pill.classList.add("btn-outline-dark");
    }
  });

  renderPosts();
}

function handleSearchInput(e) {
  activeSearch = e.target.value.toLowerCase().trim();
  currentPage = 1;
  renderPosts();
}

function resetFilters() {
  activeCategory = "Todos";
  activeSearch = "";
  currentPage = 1;

  const searchInput = document.getElementById("search-input");
  if (searchInput) searchInput.value = "";

  filterCategory("Todos");
}

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", handleSearchInput);
  }

  document.querySelectorAll(".category-pill").forEach((pill) => {
    pill.addEventListener("click", function () {
      const cat = this.getAttribute("data-category");
      filterCategory(cat);
    });
  });

  // Ler parâmetro de categoria da URL (ex: ?categoria=12 de Outubro)
  const urlParams = new URLSearchParams(window.location.search);
  const initialCategory = urlParams.get("categoria");
  if (initialCategory) {
    filterCategory(initialCategory);
  } else {
    renderPosts();
  }
});
