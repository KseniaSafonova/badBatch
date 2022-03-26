import React from "react";
import styles from './Header.module.css';

function Header() {
    return (
        <>
            <div className={styles.header}>
                <p>This is experimental unit Clone Force 99, the baddest batch of clone troopers you’ll ever meet.</p>
                <p>Each member of this elite group adds their own exceptional skill to form a team unlike any other in the Republic.</p>
            </div>
        </>
    )
}

export default Header;