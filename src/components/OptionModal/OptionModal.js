import React from 'react';
import styles from './OptionModal.module.scss';


const OptionModal = ( { closeModalFn, handleOptionChange, darkModeChecked, handleDarkMode, themeToggler }) => (

    // function handleOptionChange(e){
    //     e.preventDefault();
    // }

    <div className={styles.bodyModal}>
        <div className={styles.wrapper}>
            <button className={styles.closeButton} onClick={closeModalFn} >close</button>
            <form onSubmit={handleOptionChange}>
                <label>
                    <input type="checkbox" checked={darkModeChecked} onChange={themeToggler}/>
                    <span>dark mode</span>
                </label>
                <button type="submit">submit</button>
            </form>
        </div>
    </div>

);

export default OptionModal;