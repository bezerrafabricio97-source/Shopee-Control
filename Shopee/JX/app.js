/* NAVEGAÇÃO: mostra uma página por vez, conforme o endereço (#dashboard, #estoque, #financeiro) */

const paginas = { dashboard: "Dashboard", estoque: "Estoque", financeiro: "Financeiro" };

function mostrarPagina() {
  const nome = location.hash.slice(1);
  const atual = nome in paginas ? nome : "dashboard";

  document.querySelectorAll(".pagina").forEach(secao => {
    secao.hidden = secao.id !== "pagina-" + atual;
  });

  document.querySelectorAll(".menu a").forEach(link => {
    const ativo = link.dataset.pagina === atual;
    link.classList.toggle("ativo", ativo);
    if (ativo) link.setAttribute("aria-current", "page"); else link.removeAttribute("aria-current");
  });

  document.getElementById("titulo").textContent = paginas[atual];
  document.title = paginas[atual] + " · Shopee Control";
  window.scrollTo(0, 0);
}

window.addEventListener("hashchange", mostrarPagina);
mostrarPagina();
