import { useState } from "react"

import styles from './CalcIMC.module.css'
const CalcIMC = () => {
    let [peso, setPeso] = useState(0)
    let [altura, setAltura] = useState(0)

    const renderizaIMC = () => {
        const calculo = peso / (altura * altura)
        return Math.round(calculo)
    }

    return(
        <form className={styles.form}>
            <input className={styles.input} type="number" placeholder="peso"
                onChange={evento => setPeso(parseFloat(evento.target.value))}/>
            <input className={styles.input} type="number" placeholder="altura" min={0} max={2.50}
                onChange={evento => setAltura(parseFloat(evento.target.value))}/>
            <h3 className={styles.text}>Resultado:</h3>
            <h3 className={styles.textResult}>{renderizaIMC()}</h3>
            <p className={styles.textSub}>Confira seu resultado na tabela a seguir: </p>
        </form>
    )
}

export default CalcIMC