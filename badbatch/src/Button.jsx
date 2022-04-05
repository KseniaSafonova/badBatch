import { useState } from 'react';
import styles from './Button.module.css'

function Button() {
    const [pressed, setPressed] = useState(false);

    const handleChange = () => {
        setPressed(!pressed)
    }

    return (
        <div>
            {/* {pressed ? <div onClick={handleChange}>Selected</div> : <button className={`${styles.button} ${styles.button_select}`} onClick={handleChange}>Select</button>} */}

            <button>Push</button>
        </div>
    )
}

export default Button;