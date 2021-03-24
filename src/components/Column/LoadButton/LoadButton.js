import React from 'react';
import styles from './LoadButton.module.scss';

const Button = ({ children, chosenBeers,loadMoreBeers, btnVisibility, ...props })=>{
    
    var btnClass = btnVisibility ? styles.button : styles.invisible;

    return(
        <>
            <div>
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