import RespostaModel from "../model/resposta"

export function embaralhar (elementos: number[]) {
    return elementos
        .map(valor => ({ valor, aleatorio: Math.random() }))
        .sort((obj1, obj2) => obj1.aleatorio - obj2.aleatorio)
        .map(obj => obj.valor)
}

export function embaralharResposta(elementos: RespostaModel[]) {
    return elementos
        .map(valor => ({ valor, aleatorio: Math.random() }))
        .sort((obj1, obj2) => obj1.aleatorio - obj2.aleatorio)
        .map(obj => obj.valor)
}