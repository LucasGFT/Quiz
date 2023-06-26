import { embaralharResposta } from "../functions/array";
import RespostaModel from "./resposta";

export default class QuestaoModel {
    #id: number;
    #enunciado: string;
    #respostas: RespostaModel[];
    #acertou: boolean;

    constructor(id: number, enunciado: string, respostas: RespostaModel[], acertou = false) {
        this.#id = id;
        this.#enunciado = enunciado;
        this.#respostas = respostas;
        this.#acertou = acertou;
    }

    get id() {
        return this.#id;
    }

    get enunciado() {
        return this.#enunciado;
    }

    get respostas() {
        return this.#respostas;
    }

    get acertou() {
        return this.#acertou;
    }

    get naoRespondida() {
        return !this.respondida
    }

    get respondida() {
        for(let resposta of this.#respostas) {
            if(resposta.revelada) return true;
        }
        return false 
    }

    embaralharRespostas(): QuestaoModel {
        const respostasEmbaralhadas = embaralharResposta(this.#respostas)
        return new QuestaoModel(this.#id, this.#enunciado, respostasEmbaralhadas, this.#acertou)
    }

    responderCom(indice: number): QuestaoModel {
        // dar uma lida
        // é para saber se a resposta correta é a mesma que o indice
        const acertou = this.#respostas[indice]?.certa
        const respostas = this.#respostas.map((element, i) => {
            const respostaSelecionada = indice === i
            // vai revelar a resposta tanto se acertar quanto se errar
            const deveRevelar = respostaSelecionada || element.certa
            return deveRevelar ? element.revelar() : element
        })
        return new QuestaoModel(this.#id, this.#enunciado, respostas, acertou)
    }

    paraObjeto() {
        return {
            id: this.#id,
            enunciado: this.#enunciado,
            respondida: this.respondida,
            acertou: this.#acertou,
            respostas: this.#respostas.map(resp => resp.paraObjeto()),
        }
    }

    // quando se tem o metodo static, não precisa instanciar a classe,
    // por exemplo const resp = new ClasseTeste(...), resp.metodoInstance()

    // quando é static, eu faco ClasseTeste.metodoInstance()

    static criarUsandoObj(obj: QuestaoModel): QuestaoModel {
        const respostas = obj.respostas.map((element) => RespostaModel.criarUsandoObj(element))
        return new QuestaoModel(obj.id, obj.enunciado, respostas, obj.acertou)
    }
    
}