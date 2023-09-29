function iniciarApp() {
  NavegacionFija(), crearGaleria(), scrollNav();
}
function NavegacionFija() {
  const e = document.querySelector(".header"),
    t = document.querySelector(".sobre-nosotros"),
    n = document.querySelector("body");
  window.addEventListener("scroll", function () {
    console.log(t.getBoundingClientRect()),
      t.getBoundingClientRect().bottom < 0
        ? (e.classList.add("fijo"), n.classList.add("body-scroll"))
        : (e.classList.remove("fijo"), n.classList.remove("body-scroll"));
  });
}
function scrollNav() {
  document.querySelectorAll(".navegacion-principal a").forEach((e) => {
    e.addEventListener("click", function (e) {
      e.preventDefault();
      const t = e.target.attributes.href.value;
      document.querySelector(t).scrollIntoView({ behavior: "smooth" });
    });
  });
}
function crearGaleria() {
  const e = document.querySelector(".galeria-autos");
  for (let t = 1; t <= 10; t++) {
    const n = document.createElement("picture");
    (n.innerHTML = `\n        <source srcset="build/img/pequeña/${t}.avif" type="imagen/avif">\n        <source srcset="build/img/pequeña/${t}.webp" type="imagen/webp">\n         <img loading="lazy" width="200" height="300" src="build/img/pequeña/${t}.png" alt="imagen galeria">\n        `),
      (n.onclick = function () {
        mostrarImagen(t);
      }),
      e.appendChild(n);
  }
}
function mostrarImagen(e) {
  const t = document.createElement("picture");
  t.innerHTML = `\n    <source srcset="build/img/grande/${e} (1).avif" type="imagen/avif">\n    <source srcset="build/img/grande/${e} (1).webp" type="imagen/webp">\n    <img loading="lazy" width="200" height="300" src="build/img/grande/${e} (1).png" alt="imagen galeria">\n    `;
  const n = document.createElement("DIV");
  n.appendChild(t),
    n.classList.add("overlay"),
    (n.onclick = function () {
      document.querySelector("body").classList.remove("fijar-body"), n.remove();
    });
  const o = document.createElement("DIV");
  if (1 !== e) {
    const t = document.createElement("P");
    (t.textContent = "<"),
      t.classList.add("btn-lado"),
      (t.onclick = function () {
        document.querySelector("body").classList.remove("fijar-body"),
          n.remove(),
          mostrarImagen(e - 1);
      }),
      o.appendChild(t);
  }
  const c = document.createElement("P");
  if (
    (o.classList.add("prueba2"),
    (c.textContent = "X"),
    c.classList.add("btn-cerrar"),
    (c.onclick = function () {
      const e = document.querySelector("body");
      e.appendChild(n), e.classList.add("fijar-body");
    }),
    o.appendChild(c),
    10 !== e)
  ) {
    const t = document.createElement("P");
    (t.textContent = ">"),
      t.classList.add("btn-lado"),
      (t.onclick = function () {
        document.querySelector("body").classList.remove("fijar-body"),
          n.remove(),
          mostrarImagen(e + 1);
      }),
      o.appendChild(t);
  }
  n.appendChild(o);
  const a = document.querySelector("body");
  a.appendChild(n), a.classList.add("fijar-body");
}
AOS.init(),
  document.addEventListener("DOMContentLoaded", function () {
    iniciarApp();
  });

//# sourceMappingURL=app.js.map
