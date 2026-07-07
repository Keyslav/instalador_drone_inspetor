/* ============================================================
   Instalador DRONE_INSPETOR — interações do guia
   ============================================================ */

// ---- Botões de "Copiar" em cada bloco de código ----
document.querySelectorAll('.code').forEach((block) => {
  const btn = block.querySelector('.code__copy');
  const pre = block.querySelector('pre');
  if (!btn || !pre) return;
  btn.addEventListener('click', async () => {
    const text = pre.innerText;
    try {
      await navigator.clipboard.writeText(text);
    } catch (e) {
      // fallback para contextos sem clipboard API (ex.: file://)
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      ta.remove();
    }
    const original = btn.textContent;
    btn.textContent = 'Copiado ✓';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.textContent = original;
      btn.classList.remove('copied');
    }, 1500);
  });
});

// ---- Scroll-spy: destaca no menu a seção visível ----
const links = Array.from(document.querySelectorAll('.toc a'));
const sections = links
  .map((a) => document.querySelector(a.getAttribute('href')))
  .filter(Boolean);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        links.forEach((a) =>
          a.classList.toggle('active', a.getAttribute('href') === '#' + id)
        );
      }
    });
  },
  { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
);

sections.forEach((s) => observer.observe(s));
