
import styles from './Card.module.css';
import Button from './Button';
import deathStar from './deathStar.png';

function Card(props) {
    return (
        // <div className={`${styles.card}  ${styles.selected}`}> add multiple classes
        <div className={styles.card}>
            <div className={props.isSelected ? styles.selected : ''}>
                < div className={styles.title} > {
                    props.loyaltyToTheEmpire && <img src={deathStar} className={styles.deathstar} />
                } {props.title}</div >
                <div className={styles.imageBlock}><img className={styles.image} src={props.imgLink} alt={props.title} /></div>
                <div className={styles.content}>{props.content}</div>
                <Button />
            </div >
        </div>
    );
}

export default Card;