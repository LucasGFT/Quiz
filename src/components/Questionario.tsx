// este componente vai ser responsabel de fazer o proxesso de transicoes entre as questoes
import styles from '../styles/Questionario.module.css'
import QuestaoModel from "@/model/questao"
import Questao from './Questao'
import Botao from './Botao'

interface QuestionarioProps {
    questao: QuestaoModel | undefined
    ultima: boolean
    questaoRespondida: (questao: QuestaoModel) => void
    irPraProximoPasso: () => void
}

export default function Questionario(props: QuestionarioProps) {

    function respostaFornecida(indice: number) {
        if (props.questao && props.questao.naoRespondida) {
            props.questaoRespondida(props.questao.responderCom(indice))
        }
    }

    return (
        <div className={styles.questionario}>
            {
                props.questao ? (
                    <>
                        <Questao
                            valor={props.questao}
                            tempoPraResposta={6}
                            respostaFornecida={respostaFornecida}
                            tempoEsgotado={props.irPraProximoPasso}
                        />
                        <Botao onClick={props.irPraProximoPasso} texto={props.ultima ? 'Finalizar' : 'Próxima'} />
                    </>
                ) : false
            }
        </div>
    )
}
