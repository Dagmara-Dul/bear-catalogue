import React from 'react';
import styles from './Button.module.scss';

const Button = ({ children, chosenBeers,loadMoreBeers, btnVisibility, ...props })=>{
    var mode = document.getElementById('root')
    var theme = mode ? styles.lightMode : styles.darkMode
    var btnClass = btnVisibility ? styles.visible : styles.invisible;

    return(
        <>
            <div className={theme}>
                {chosenBeers.length > 15 ?
                    <button className={btnClass} onClick={loadMoreBeers}>{children}</button>
                    :
                    console.log (chosenBeers.length)
                }
            </div>
        </>
    )
};



export default Button;