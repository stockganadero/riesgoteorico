// script.js
function addMenuRow() {
    const container = document.getElementById('dropdownContainer');
    const newRow = document.createElement('div');
    newRow.className = 'menuRow';
    newRow.innerHTML = `
        <select class="scoreMenu">
            <option selected disabled>Tipo de alimento</option>
            <option value="5">tripas saladas - fiambres - productos congelados</option>
            <option value="10">carnes de las especie bovina - menudencias</option>
            <option value="10">carnes de las especie porcina</option>
            <option value="10">carnes de las especie ovina</option>
            <option value="15">carnes de las especie aviar</option>
        </select>
        <select class="scoreMenu">
            <option selected disabled>Tipo de proceso</option>
            <option value="5">cámara/depósito de congelados o tripas saladas</option>
            <option value="10">cámara/depósito de fiambres refrigerados</option>
            <option value="15">cámara/depósito de medias reses bov/ porcinas</option>
            <option value="20">cámara de aves refrigeradas/cortes de especies bov, por, ov</option>
            <option value="20">fraccionadora de fiambres</option>
            <option value="25">despostadero de especie bov, por y ov</option>
            <option value="25">elaboración de chacinados frescos</option>
            <option value="30">elaboración de chacinados secos</option>
            <option value="45">elaboración de chacinados cocidos</option>
            <option value="30">elaboración de Salazones crudas</option>
            <option value="45">elaboración de Salazones cocidas</option>
            <option value="180">Faena (todas las especies)</option>
        </select>
        <select class="scoreMenu">
            <option selected disabled>Tipo habilitación</option>
            <option value="5">habilitación rural</option>
            <option value="10">habilitación por partido</option>
            <option value="20">habilitación provincial</option>
        </select>
        <select class="scoreMenu">
            <option selected disabled>Cupo</option>
            <option value="0">0</option>
        </select>
    `;
    container.appendChild(newRow);
}

function calculateScore() {
    const menus = document.querySelectorAll('.scoreMenu');
    let totalScore = 0;
    menus.forEach(menu => {
        const value = parseInt(menu.value);
        if (!isNaN(value)) {
            totalScore += value;
        }
    });

    document.getElementById('scoreOutput').textContent = totalScore;

    let category;
    if (totalScore < 50) {
        category = 'Bajo';
    } else if (totalScore <= 100) {
        category = 'Bajo con tendencia a medio';
    } else if (totalScore <= 150) {
        category = 'Medio';
    } else if (totalScore <= 200) {
        category = 'Medio con tendencia a alto';
    } else {
        category = 'Alto';
    }
    document.getElementById('categoryOutput').textContent = category;
}
