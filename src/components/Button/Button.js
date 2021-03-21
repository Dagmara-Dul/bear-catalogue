import React from 'react';
import styles from './Button.module.scss';

const Button = ({ children, chosenBeers,loadMoreBeers, btnVisibility, ...props })=>{

    var btnClass = btnVisibility ? styles.visible : styles.invisible;

    return(
        <>
        
            {chosenBeers.length > 15 ?
                <button className={btnClass} onClick={loadMoreBeers}>{children}</button>
                :
                console.log (chosenBeers.length)
            }
        </>
    )
};



export default Button;