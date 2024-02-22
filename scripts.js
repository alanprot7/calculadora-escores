let pontuacao = document.getElementById('pontuacao')
let escore = document.getElementById('escore')
let resultado = document.getElementById('resultado')

document.addEventListener('click', (e) => {
    if(e.target.id === 'calcular'){
        if(pontuacao.value !== '' && escore.value !== ''){
            montar(calcular())
        }        
    }
    if(e.target.id === 'limpar'){
        limpar()
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

const montar = (valor) => {
    let html = `<h3>Nota Obtida:</h3><h1>${valor}</h1>`
    resultado.innerHTML = html
}