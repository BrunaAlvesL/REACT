import Button from "../Button"
import styles from "./styles.module.css"

export default function Card({ title, poster, conteudo }) {
  return (
    <div className={styles.container}>
      <img className={styles.poster} src={poster} alt={title} />
      <div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{conteudo}</p>
        < Button text="comprar agora"/>
      </div>
    </div>
  )
}