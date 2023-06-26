import QuestaoModel from "../model/questao";
import styles from '../styles/Questao.module.css';
import Enunciado from "./Enuciado";
import Resposta from "./Resposta";
import Temporizador from "./Temporizador";

const letras = [
    { valor: 'A', cor: '#F2C866' },
    { valor: 'B', cor: '#F266BA' },
    { valor: 'C', cor: '#85B4F2' },
    { valor: 'D', cor: '#BCE596' },
]

interface QuestaoProps {
    valor: QuestaoModel
    tempoPraResposta?: number
    respostaFornecida: (indice: number) => void
    tempoEsgotado: () => void;
}

export default function Questao(props: QuestaoProps) {
    const questao = props.valor;

    function renderizarRespostas() {
        return questao.respostas.map((element, i) => {
            return (
                <Resposta
                    valor={element}
                    indice={i}
                    letra={letras[i].valor}
                    corFundoLetra={letras[i].cor}
                    key={`${questao.id}-${i}`}
                    respostaFornecida={props.respostaFornecida}
                />
            )
        })
    }

    return (
        <div className={styles.questao}>
            <Enunciado texto={questao.enunciado} />
            {/* o tempo de duracao vai vim do index.tsx, e como nao é obrigatorio, se nao tiver, vai ser 10  */}
            <Temporizador
                duracao={props.tempoPraResposta ?? 10}
                tempoEsgotado={props.tempoEsgotado}
                key={questao.id}
            />
            {renderizarRespostas()}
        </div>
    )

}