
import styles from './Card.module.css';
import style from './Button.module.css';
// import Button from './Button';
import deathStar from './deathStar.png';
import styled from 'styled-components';

const Button = styled.button`
  background: ${props => props.moreInfo ? "seagreen" : "darkcyan"};
  color: "black";
  padding: 10px;
  margin: 10px;
  border: ${props => props.moreInfo ? "seagreen" : "darkcyan"};
  border-radius: 10px;
  height: 40px;
  font-family: monospace;
`;

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
                <Button moreInfo >More info</Button>
                <Button changeInfo >Change info</Button>
            </div >
        </div>
    );
}

export default Card;