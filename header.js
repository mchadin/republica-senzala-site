// header.js
document.addEventListener("DOMContentLoaded", function () {
  const headerContent = `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm senzala-navbar">
  <div class="container">
    <a class="navbar-brand d-flex align-items-center fw-bold" href="/index.html">
      <img src="/imagens/logoPreto.png" alt="República Senzala" height="38" class="me-2">
      <span>REPÚBLICA <span class="navbar-brand-accent">SENZALA</span></span>
    </a>
    
    <button class="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSenzala" aria-controls="navbarSenzala" aria-expanded="false" aria-label="Alternar navegação">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSenzala">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-3">
        <li class="nav-item">
          <a class="nav-link text-white fw-semibold" href="/index.html">INÍCIO</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-white fw-semibold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            A SENZALA
          </a>
          <ul class="dropdown-menu shadow border-0">
            <li><a class="dropdown-item" href="/senzala/nossa-historia/nossa-historia.html">Nossa História</a></li>
            <li><a class="dropdown-item" href="/senzala/estrutura/estrutura.html">Estrutura da Casa</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-white fw-semibold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            ESCRAVOS
          </a>
          <ul class="dropdown-menu shadow border-0">
            <li><a class="dropdown-item" href="/escravos/moradores/moradores.html">Moradores</a></li>
            <li><a class="dropdown-item" href="/escravos/ex-alunos/ex-alunos.html">Ex-Alunos</a></li>
            <li><a class="dropdown-item" href="/escravos/homenageados/homenageados.html">Homenageados</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white fw-semibold" href="/festas/festas.html">CONFRATERNIZAÇÕES</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white fw-semibold" href="/blog/blog.html">BLOG</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white fw-semibold" href="/vagas/vagas.html">VAGAS</a>
        </li>
      </ul>
      <div class="d-flex align-items-center">
        <a href="https://wa.me/553186034916?text=Ol%C3%A1%21+Gostaria+de+informa%C3%A7%C3%B5es+sobre+a+Rep%C3%BAblica+Senzala" target="_blank" class="btn btn-warning fw-bold px-3 shadow-sm text-dark senzala-contact-button">
          <i class="bi bi-whatsapp me-1"></i> Fale Conosco
        </a>
      </div>
    </div>
  </div>
</nav>
    `;

  // Insere o header em todos os elementos com a classe "header-container"
  const headerContainers = document.querySelectorAll(".header-container");
  headerContainers.forEach((container) => {
    container.innerHTML = headerContent;
  });
});
