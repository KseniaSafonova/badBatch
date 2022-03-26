import React from "react";
import styles from './Card.module.css';

function Card(props) {
    return (
        <div className={styles.card}>
            <div className={styles.title}>{props.title}</div>
            <div className={styles.imageBlock}><img className={styles.image} src={props.imgLink} alt={props.title} /></div>
            <div className={styles.content}>{props.content}</div>
        </div>
    );

}

export default Card;