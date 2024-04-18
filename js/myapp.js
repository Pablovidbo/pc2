const $usuario = $("#usuario");
const $password = $("#password");

const credenciales = {
    "Alumno": {
        usuario: "Alumno",
        pass: "123456",
        pagina: "dashboard_alumno.html"
    },
    "Profesor": {
        usuario: "Profesor",
        pass: "123456",
        pagina: "dashboard_profe.html"
    }
};

$("#login").on("click", function(){
    const valueUsuario = $usuario.val();
    const valuePassword = $password.val();
    const usuario = credenciales[valueUsuario];
    
    if (usuario) {
        if (valuePassword === usuario.pass) {
            localStorage.setItem("isLoggedIn", true);
            window.location.href = usuario.pagina;
        } else {
            mostrarError("Contraseña incorrecta");
        }
    } else {
        mostrarError("Usuario incorrecto");
    }
});

function mostrarError(mensaje) {
    Swal.fire({
        title: "ERROR",
        text: mensaje,
        icon: "error"
    });
}