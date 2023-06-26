import QuestaoModel from "../../model/questao";
import RespostaModel from "../../model/resposta";

const questoes: QuestaoModel[] =  [
    new QuestaoModel(306, 'Qual bicho transmite a Doença de Chagas?', [
        RespostaModel.errada('Abelha'),
        RespostaModel.errada('Barata'),
        RespostaModel.errada('Pulga'),
        RespostaModel.certa('Barbeiro'),
    ]),
    new QuestaoModel(202, 'Qual fruto é conhecido no Norte e Nordeste como "jerimum"?', [
        RespostaModel.errada('Caju'),
        RespostaModel.errada('Côco'),
        RespostaModel.errada('Chuchu'),
        RespostaModel.certa('Abóbora'),
    ]),
    new QuestaoModel(203, 'Qual é o coletivo de cães?', [
        RespostaModel.errada('Manada'),
        RespostaModel.errada('Alcateia'),
        RespostaModel.errada('Rebanho'),
        RespostaModel.certa('Matilha'),
    ]),
    new QuestaoModel(204, 'Qual é o triângulo que tem todos os lados diferentes?', [
        RespostaModel.errada('Equilátero'),
        RespostaModel.errada('Isóceles'),
        RespostaModel.errada('Trapézio'),
        RespostaModel.certa('Escaleno'),
    ]),
    new QuestaoModel(101, 'Qual é o maior planeta do sistema solar?', [
        RespostaModel.errada('Vênus'),
        RespostaModel.errada('Terra'),
        RespostaModel.errada('Marte'),
        RespostaModel.certa('Júpiter'),
    ]),
    new QuestaoModel(102, 'Qual é a fórmula química da água?', [
        RespostaModel.errada('H2SO4'),
        RespostaModel.errada('NaCl'),
        RespostaModel.errada('CO2'),
        RespostaModel.certa('H2O'),
    ]),
    new QuestaoModel(103, 'Qual é o metal mais abundante na crosta terrestre?', [
        RespostaModel.errada('Ouro'),
        RespostaModel.errada('Prata'),
        RespostaModel.errada('Cobre'),
        RespostaModel.certa('Alumínio'),
    ]),
    new QuestaoModel(104, 'Qual é a capital do Canadá?', [
        RespostaModel.errada('Toronto'),
        RespostaModel.errada('Vancouver'),
        RespostaModel.errada('Montreal'),
        RespostaModel.certa('Ottawa'),
    ]),
    new QuestaoModel(401, 'Qual é o maior oceano do mundo?', [
        RespostaModel.errada('Oceano Atlântico'),
        RespostaModel.errada('Oceano Índico'),
        RespostaModel.errada('Oceano Ártico'),
        RespostaModel.certa('Oceano Pacífico'),
    ]),
    
    new QuestaoModel(402, 'Qual é a montanha mais alta do mundo?', [
        RespostaModel.errada('Monte Elbert'),
        RespostaModel.errada('Monte Kilimanjaro'),
        RespostaModel.errada('Monte Aconcágua'),
        RespostaModel.certa('Monte Everest'),
    ])
]


export default questoes