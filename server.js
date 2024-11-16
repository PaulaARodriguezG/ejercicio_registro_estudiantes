/* 
Caso de Estudio: Sistema de Registro de Estudiantes
Objetivo del Caso de Estudio:
Desarrollar una aplicación básica en Node.js y Express para un sistema de registro de estudiantes. 
La aplicación mostrará un formulario en HTML donde los estudiantes podrán ingresar su información, 
y luego el servidor responderá con una página de confirmación que muestre los datos ingresados.

Requisitos del Sistema
Formulario de Registro: Crear un formulario en HTML con los siguientes campos:
Nombre completo
Edad
Correo electrónico
Curso (lista desplegable con opciones como "JavaScript", "Node.js", "HTML y CSS")
Servidor Web en Node.js y Express: Crear un servidor web usando Express que:

Sirva el formulario HTML en la ruta principal (/).
Procese los datos del formulario enviados a la ruta /registro mediante POST.
Muestre una página de confirmación que incluya los datos que el estudiante ha ingresado.
Validación Básica: Asegurarse de que todos los campos del formulario sean obligatorios en el 
formulario HTML y validar que se envíen correctamente al servidor.
*/
const express = require("express");
const path = require("path"); 

const app= express(); 
const PORT= 3000;

//configuracion para procesar datos del formulario
app.use(express.urlencoded({extended : true})); 

// ruta principal para mostrar el formulario html
app.get("/",(req,res)=>{  
    res.sendFile(path.join(__dirname, "formulario.html")) 
});

//ruta para procesar el formulario enviado
app.post("/submit", (req,res)=>{
    const {nombre,edad,email,curso}= req.body;
    res.end(`<h1> Registro completado</h1>
              <p><strong>Nombre:<strong> ${nombre}</p>
              <p><strong>Edad:<strong> ${edad}</p>
              <p><strong>Email:<strong> ${email}</p>
              <p><strong>Curso:<strong> ${curso}</p>
              <a href="http://localhost:${PORT}"> Volver al formulario</a>
              `)
});

//iniciar el servidor
app.listen(PORT,()=>{
    console.log(`servidor funcionando en http://localhost:${PORT}`);
});