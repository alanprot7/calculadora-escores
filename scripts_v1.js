// Globals

let countNotas = 1

document.addEventListener('click', (e) => {
    if(e.target.id === 'calcular'){
        if(pontuacao.value !== '' && escore.value !== ''){
            montar(calcular())
        }        
    }
    if(e.target.id === 'limpar'){
        limpar()
    }
    if(e.target.id === 'plus'){
        adicionarNota()
    }
    if(e.target.id === 'zerar'){
        zerar()
    }
    if(e.target.id === 'calcular-media'){
        calcularMedia()
    }
})

const calcular = () => {
    let acertos = pontuacao.value
    let valorEscore = escore.value
    let resultado = Math.round((acertos * 100) / valorEscore)
    return resultado

}

const limpar = () => {
    resultado.innerHTML = ''
    pontuacao.value = ''
    escore.value = ''
}

const zerar = () => {
    countNotas = 1
    resultadoMedia.innerHTML = ''
    notas.innerHTML = ''
    notas.innerHTML += `<label for="nota">Digite a Nota ${countNotas}:</label>`
    notas.innerHTML += `<input type="number" id="nota1" name="nota"/>`
}

const montar = (valor) => {
    let html = `<h3>Nota Obtida:</h3><h1>${valor}</h1>`
    resultado.innerHTML = html
}

const adicionarNota = () => {
    countNotas++

    const label = document.createElement('label');
    label.setAttribute('for', `nota${countNotas}`);
    label.textContent = `Digite a Nota ${countNotas}:`;

    const input = document.createElement('input');
    input.setAttribute('type', 'number');
    input.setAttribute('id', `nota${countNotas}`);
    input.setAttribute('name', 'nota');

    notas.appendChild(label);
    notas.appendChild(input);

}

const calcularMedia = () => {
    let nodes = notas.childNodes
    let countNodes = 0
    let sumNodeValues = 0.0
    nodes.forEach(element => {
        if (element.nodeName.toLowerCase() == 'input' && element.value !== ''){
            sumNodeValues += parseFloat(element.value.replace(',','.'))
            countNodes++
        }
    });
    if (countNodes > 0)
        if (countNodes > 1){
            let result = sumNodeValues / countNodes
            resultadoMedia.innerHTML = `<h3>Média Obtida:</h3><h1>${result.toFixed(1).replace('.',',')}</h1>`     
        }else {
            resultadoMedia.innerHTML = `<h3>Média Obtida:</h3><h1>${sumNodeValues.toFixed(1).replace('.',',')}</h1>`
        }
}


