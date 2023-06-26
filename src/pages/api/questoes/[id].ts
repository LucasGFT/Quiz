import type { NextApiRequest, NextApiResponse } from 'next'
import questoes from '../bancoDeQuestoes'

type ObjResposta = {
  valor: string
  certa: boolean
  revelada: boolean
}

type Data = {
  id: number, enunciado: string, respostas: ObjResposta[], acertou: boolean
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data | string>
  ) {
    const idSelecionado = Number(req.query.id)
    const unicaQuestao = questoes.filter(questao => questao.id === idSelecionado)
    if (unicaQuestao.length === 1) {
      const questaoSelecionada = unicaQuestao[0].embaralharRespostas()
      return res.status(200).json(questaoSelecionada.paraObjeto())
    } else {
      res.status(204).json('')
    }
  }