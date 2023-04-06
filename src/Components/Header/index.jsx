import styles from './Header.module.css'

function Header () {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>
                Calcula IMC
            </h1>
            <p className={styles.desc}>
                Descubra se seu peso é o ideal para sua saúde!
            </p>
        </header>
    )
}

export default (Header)