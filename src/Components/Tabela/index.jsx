import style from './Tabela.module.css'

const Tabela = () => {
    return(
        <table className={style.tabela}>
            <tbody>
                <tr className={style.linha}>
                    <td className={style.coluna1}><b>Classificação</b></td>
                    <td className={style.coluna2}><b>IMC</b></td>
                </tr>
                <tr className={style.linha}>
                    <td className={style.coluna1}>Abaixo do peso</td>
                    <td className={style.coluna2}>Abaixo de 18,5</td>
                </tr>
                <tr className={style.linha}>
                    <td className={style.coluna1}>Peso Normal</td>
                    <td className={style.coluna2}>18,5 - 24,9</td>
                </tr>
                <tr className={style.linha}>
                    <td className={style.coluna1}>Sobrepeso</td>
                    <td className={style.coluna2}>25 - 29,9</td>
                </tr>
                <tr className={style.linha}>
                    <td className={style.coluna1}>Obesidade Grau I</td>
                    <td className={style.coluna2}>30 - 34,9</td>
                </tr>
                <tr className={style.linha}>
                    <td className={style.coluna1}>Obesidade Grau II</td>
                    <td className={style.coluna2}>35 - 39,9</td>
                </tr>
                <tr className={style.linha}>
                    <td className={style.coluna1}>Obesidade Grau III</td>
                    <td className={style.coluna2}>Maior ou igual 40</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Tabela