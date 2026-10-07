// footer.js
document.addEventListener("DOMContentLoaded", function () {
  const footerContent = `
<footer class="w-100 text-light pt-5 pb-3 mt-5 senzala-footer">
  <div class="container">
    <div class="row g-4 pb-4 border-bottom border-secondary border-opacity-25">
      <div class="col-12 col-md-5">
        <h5 class="fw-bold text-white mb-3">
          <span class="footer-brand-accent">REPÚBLICA</span> SENZALA
        </h5>
        <p class="text-white-50 footer-copy">
          Fundada em 1982 em Ouro Preto. Desde então, formando grandes engenheiros e profissionais da Escola de Minas e Universidade Federal de Ouro Preto (UFOP), com tradição, união e amizade eterna.
        </p>
        <div class="d-flex gap-3 mt-3">
          <a href="https://wa.me/553186034916" target="_blank" class="text-white-50 fs-5 text-decoration-none" title="WhatsApp"><i class="bi bi-whatsapp"></i></a>
          <a href="https://www.instagram.com/rep.senzala/" target="_blank" class="text-white-50 fs-5 text-decoration-none" title="Instagram"><i class="bi bi-instagram"></i></a>
          <a href="mailto:senzalaop.em@gmail.com" class="text-white-50 fs-5 text-decoration-none" title="E-mail"><i class="bi bi-envelope-fill"></i></a>
          <a href="https://maps.app.goo.gl/ntCTVwsVfL8D65hd8" target="_blank" class="text-white-50 fs-5 text-decoration-none" title="Localização"><i class="bi bi-geo-alt-fill"></i></a>
        </div>
      </div>

      <div class="col-12 col-sm-6 col-md-4">
        <h5 class="fw-bold text-white mb-3 footer-heading">Contato & Localização</h5>
        <ul class="list-unstyled text-white-50 mb-0 footer-contact-list">
          <li>
            <i class="bi bi-geo-alt text-warning me-2"></i>
            Rua Treze, 3C (Ala 3 Casa C)
          </li>
          <li>
            <i class="bi bi-pin-map text-warning me-2"></i>
            Bauxita - Ouro Preto, MG
          </li>
          <li>
            <a href="https://wa.me/553186034916" target="_blank" class="text-white-50 text-decoration-none">
              <i class="bi bi-whatsapp text-warning me-2"></i> (31) 8603-4916
            </a>
          </li>
          <li>
            <a href="mailto:senzalaop.em@gmail.com" class="text-white-50 text-decoration-none">
              <i class="bi bi-envelope text-warning me-2"></i> senzalaop.em@gmail.com
            </a>
          </li>
          <li>
            <a href="tel:+553135515416" class="text-white-50 text-decoration-none">
              <i class="bi bi-telephone text-warning me-2"></i> (31) 3551-5416
            </a>
          </li>
        </ul>
      </div>

      <div class="col-12 col-sm-6 col-md-3">
        <h5 class="fw-bold text-white mb-3 footer-heading">Navegação</h5>
        <ul class="list-unstyled text-white-50 mb-0 footer-navigation-list">
          <li><a href="/index.html" class="text-white-50 text-decoration-none">Início</a></li>
          <li><a href="/senzala/nossa-historia/nossa-historia.html" class="text-white-50 text-decoration-none">Nossa História</a></li>
          <li><a href="/senzala/estrutura/estrutura.html" class="text-white-50 text-decoration-none">Estrutura da Casa</a></li>
          <li><a href="/escravos/moradores/moradores.html" class="text-white-50 text-decoration-none">Moradores</a></li>
          <li><a href="/escravos/ex-alunos/ex-alunos.html" class="text-white-50 text-decoration-none">Ex-Alunos</a></li>
          <li><a href="/festas/festas.html" class="text-white-50 text-decoration-none">Confraternizações</a></li>
          <li><a href="/blog/blog.html" class="text-white-50 text-decoration-none">Blog</a></li>
          <li><a href="/vagas/vagas.html" class="text-white-50 text-decoration-none">Vagas para Calouros</a></li>
        </ul>
      </div>
    </div>

    <div class="row pt-3 align-items-center text-center text-md-start">
      <div class="col-md-6 text-white-50 small mb-2 mb-md-0">
        © 2026 República Senzala • Desde 1982 • Escola de Minas / UFOP
      </div>
      <div class="col-md-6 text-md-end text-white-50 small">
        Ouro Preto, Minas Gerais
      </div>
    </div>
  </div>
</footer>
`;

  // Insere o footer em todos os elementos com a classe "footer-container"
  const footerContainers = document.querySelectorAll(".footer-container");
  footerContainers.forEach((container) => {
    container.innerHTML = footerContent;
  });
});