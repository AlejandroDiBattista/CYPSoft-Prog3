

function agregarNotas() {
    let datos = ["libre",
        "libre",
        "promocionado",
        "regular",
        "promocionado",
        "promocionado",
        "promocionado",
        "promocionado",
        "regular",
        "promocionado",
        "promocionado",
        "promocionado",
        "promocionado",
        "regular",
        "promocionado",
        "promocionado",
        "regular",
        "regular",
        "regular",
        "regular",
        "regular",
        "promocionado",
        "promocionado",
        "libre",
        "regular",
        "regular",
        "regular",
        "libre",
        "libre",
        "regular",
        "promocionado",
        "libre",
        "promocionado",
        "promocionado",
        "promocionado",
        "promocionado",
        "regular",
        "promocionado",
        "regular",
        "libre",
        "promocionado",
        "libre",
        "promocionado",
        "promocionado",
        "regular",
        "regular",
    ];
    let inputs = document.querySelectorAll('input[name="nota"]');
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = datos[i];
    }
}