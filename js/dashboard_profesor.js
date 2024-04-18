const cursos = [
    {
        "id": "P01",
        "nombre": "Base de datos I",
        "ciclo": "III",
        "descripcion": [
            {
                "Turno": "Mañana",
                "Créditos": 3,
                "Hora": "9:00 am - 11:00 am",
            },
            {
                "Turno": "Tarde",
                "Créditos": 4,
                "Hora": "3:20 pm - 6:00 pm",
            },
            {
                "Turno": "Noche",
                "Créditos": 4,
                "Hora": "8:00 pm - 10:30 pm",
            }
        ]
    },
    {
        "id": "P02",
        "nombre": "Programacion",
        "ciclo": "II",
        "descripcion": [
            {
                "Turno": "Mañana",
                "Créditos": 5,
                "Hora": "7:30 am - 11:00 am",
            },
            {
                "Turno": "Tarde - PB203",
                "Créditos": 5,
                "Hora": "2:15 pm - 4:00 pm",
            },
            {
                "Turno": "Noche  - PB203",
                "Créditos": 4,
                "Hora": "8:00 pm - 10:30 pm",
            }
        ]
    },
    {
        "id": "P03",
        "nombre": "Desarrollo de software",
        "ciclo": "VI",
        "descripcion": [
            {
                "Turno": "Mañana",
                "Créditos": 5,
                "Hora": "9:00 am - 11:00 am",
            },
            {
                "Turno": "Tarde - Noche",
                "Créditos": 6,
                "Hora": "5:00 pm - 10:00 pm",
            }
        ]
    },
];

const $misCursos = $("#misCursos");
cursos.forEach((curso) => {
    const link = "curso.html?idCurso="+curso.id;
    const template = `
    <li class="collection-item avatar" data-id="${curso.id}">
    <i class="material-icons circle red">play_arrow</i>
    <span class="title">${curso.nombre}</span>
    <p class="ciclo">
        Ciclo ${curso.ciclo}
    </p>
    <a href="${link}" class="waves-effect waves-light btn btnIcon">
        <i class="material-icons">grade</i>
        Ver descripcion del curso
    </a>
</li>
    `;
    $misCursos.append(template);
});

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const idCurso = params.get("idCurso");
let misDCursos = [];
if (idCurso) {
    cursos.forEach((curso) => {
        if (curso.id == idCurso) {
            const mytitle = curso.nombre;
            $("#myTitle").html(mytitle);
            misDCursos = curso.descripcion;           
        }
    });
    if (misDCursos.length > 0) {
        misDCursos.forEach((descripcion)=> {
            const template = `
                <li class="collection-item">
                    <p class="turno">Turno: ${descripcion.Turno}</p>
                    <p class="creitos">Creditos: ${descripcion.Créditos}</p>
                    <p class="hora">${descripcion.Hora}</p>
                </li>
            `;
            $("#myCursos").append(template);
        });
    }
}

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