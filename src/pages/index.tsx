import Botao from "@/components/Botao";
import Questao from "@/components/Questao";
import Questionario from "@/components/Questionario";
import QuestaoModel from "@/model/questao";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const BASE_URL = 'https://quiz-lucasgft.vercel.app/api'

export default function Home() {
  const router = useRouter()

  const [questao, setQuestao] = useState<QuestaoModel | undefined>()
  const [respostasCertas, setRespostasCertas] = useState<number>(0)
  const [questaoIds, setQuestaoIds] = useState<number[]>([])

  async function carregarIdsQuestao() {
    // estou pegando o id das questoes que estão cadastradas na api
    const resp = await fetch(`${BASE_URL}/questionario`)
    const ids = await resp.json()
    setQuestaoIds(ids)
  }

  async function carregarQuestao(id: number) {
    // estou pegando o id das questoes que estão cadastradas na api
    const resp = await fetch(`${BASE_URL}/questoes/${id}`)
    const questao = await resp.json()
    const novaQuestao = QuestaoModel.criarUsandoObj(questao)
    setQuestao(novaQuestao)
  }

  useEffect(() => {
    carregarIdsQuestao()
  }, [])

  useEffect(() => {
    questaoIds.length > 0 && carregarQuestao(questaoIds[0])
  }, [questaoIds])

  function questaoRespondida(questao: QuestaoModel) {
    setQuestao(questao)
    const acertou = questao.acertou
    setRespostasCertas(respostasCertas + (acertou ? 1 : 0))
  }

  function idProximaPergunta() {
    if (questao) {
      // essa funcao é para pegar o id da proxima pergunta
      const proximoIndice = questaoIds.indexOf(questao.id) + 1
      return questaoIds[proximoIndice]
    }
  }

  function irPraProximoPasso() {
    const proximoId = idProximaPergunta()
    proximoId ? irPraProximaQuestao(proximoId) : finalizar()
  }

  function irPraProximaQuestao(proximoId: number) {
    carregarQuestao(proximoId)
  }

  function finalizar() {
    router.push({
      pathname: '/resultado',
      query: {
        total: questaoIds.length,
        certas: respostasCertas
      }
    })
  }

  return (
    questao ? (<Questionario
      questao={questao}
      ultima={idProximaPergunta() === undefined}
      questaoRespondida={questaoRespondida}
      irPraProximoPasso={irPraProximoPasso}
    />) : false
  )
}
