
import styles from './Card.module.css';

function Card(props) {
    return (
        // <div className={`${styles.card}  ${styles.selected}`}> add multiple classes
        <div className={styles.card}>
            <div className={props.isSelected ? styles.selected : ''}>
                < div className={styles.title} > {props.title}</div >
                <div className={styles.imageBlock}><img className={styles.image} src={props.imgLink} alt={props.title} /></div>
                <div className={styles.content}>{props.content}</div>
            </div >
        </div>
    );
}

export default Card;