import { NextApiRequest, NextApiResponse } from "next";
import questoes from "../bancoDeQuestoes";
import { embaralhar } from "../../../functions/array";

const ids = (_req: NextApiRequest, res: NextApiResponse<any>) => {
    const ids = questoes.map((questao) => questao.id)
    res.status(200).json(embaralhar(ids))
}

export default ids