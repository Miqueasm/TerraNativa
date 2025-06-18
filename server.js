const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware para procesar datos de formularios
app.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos desde public/
app.use(express.static(path.join(__dirname, "public")));

// Ruta para recibir pedidos del formulario
app.post("/pedido", (req, res) => {
    const { nombre, telefono, producto } = req.body;
    
    if (nombre && telefono && producto) {
        console.log(`Pedido recibido de ${nombre}, Tel: ${telefono}, Producto: ${producto}`);
        res.send("¡Pedido recibido con éxito!");
    } else {
        res.status(400).send("Faltan datos en el formulario.");
    }
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});