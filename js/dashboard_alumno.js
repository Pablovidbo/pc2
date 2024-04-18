const alumno = [
    {
        "id": "Alumno",
        "Alumno": "Pablo Vidal Borja",
        "Ciclo": "V",
        "Turno": "Noche"
    }
];

const $perAlumno = $("#perAlumno");
alumno.forEach((alum) => {
    const link = "formulario.html?idAlumno="+alum.id;
    const template = `
        <li class="collection-item avatar" data-id="${alum.id}">
            <span class="title">${alum.Alumno}</span>
            <p>
               Ciclo ${alum.Ciclo}        
            </p>
            <p>
               Turno ${alum.Turno}
            </p>
            <a href="${link}" class="waves-effect waves-light btn btnIcon">
                <i class="material-icons">grade</i>
                Ir al formulario
            </a>
        </li>
    `;
    $perAlumno.append(template);
});

document.addEventListener("DOMContentLoaded", function() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
        alert("inicie sesión para acceder a la pagina.");
        location.href = "index.html";
    }

    document.getElementById('logout').addEventListener('click', function() {
        localStorage.removeItem('isLoggedIn');
        window.close();
    });
});
