if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    // Animación de aparición
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll(".producto").forEach((producto) => {
      observer.observe(producto);
    });

    // Envío de formulario a WhatsApp
    const form = document.getElementById("pedido-form");

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const nombre = document.getElementById("nombre").value.trim();
      const telefono = document.getElementById("telefono").value.trim();
      const producto = document.getElementById("producto").value;

      if (!nombre || !telefono || producto === "" || producto.includes("Selecciona")) {
        alert("Por favor, completá todos los campos antes de enviar.");
        return;
      }

      const mensaje = `Hola! Soy ${nombre}. Me gustaría pedir: ${producto}. Mi número es ${telefono}.`;
      const url = `https://wa.me/595972632298?text=${encodeURIComponent(mensaje)}`;

      window.open(url, "_blank");
    });

    // Limpiar campos del formulario
    document.getElementById("limpiar").addEventListener("click", () => {
      form.reset();
    });
  });
} else {
  console.log("Este script debe ejecutarse en un navegador.");
}