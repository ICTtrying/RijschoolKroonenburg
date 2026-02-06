const rijschoolNaam = "Rijschool Kroonenburg";

fetch(`https://opendata.cbr.nl/resource/xxxx.json?rijschoolnaam=${encodeURIComponent(rijschoolNaam)}`)
    .then(response => response.json())
    .then(data => {
        if (!data.length) {
            document.getElementById("percentage").innerText = "Geen data gevonden";
            return;
        }

        const rijschool = data[0];
        document.getElementById("percentage").innerText =
            rijschool.slagingspercentage + "%";

        document.getElementById("bron").innerText =
            `Gebaseerd op ${rijschool.aantal_examens} examens (bron: CBR)`;
    })
    .catch(error => {
        document.getElementById("percentage").innerText =
            "Kon data niet laden";
        console.error(error);
    });
