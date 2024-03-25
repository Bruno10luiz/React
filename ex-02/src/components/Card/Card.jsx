/* eslint-disable react/prop-types */
https://github.com/Bruno10luiz/React-stuimport styles from "../Card/styles.module.css"

export default function Card({ title, descriptionText, poster }) {
    return (
        <div className={styles.container}>
            <img className={styles.poster} src={poster} alt="Star Wars poster" />
            <div>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.description}>{descriptionText}</p>
                <button className={styles.button}>Comprar agora</button>
            </div>
        </div>
    )
}