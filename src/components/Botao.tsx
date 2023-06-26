import Link from 'next/link'
import styles from '../styles/Botao.module.css'

interface BotaoProps {
    href?: string
    texto: string
    onClick?: (e: any) => void
}

export default function Botao(props: BotaoProps) {

    function renderizarBotao() {
        return (
            <button
                className={styles.botao}
                onClick={props.onClick}
            >
                {props.texto}
            </button>
        )
    }

    // é preciso colocar o botao dentro de um link se receber o href como props
    // para nao precisar criar o botao duas vezes, irei criar uma funcao que cria o botao
    return props.href ? (
        <Link href={props.href}>
            {renderizarBotao()}
        </Link>
    ) : (
        <>
            {renderizarBotao()}
        </>
    )
}
