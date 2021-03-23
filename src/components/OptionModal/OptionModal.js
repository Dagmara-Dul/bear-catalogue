import React from 'react';
import styles from './OptionModal.module.scss';


const OptionModal = ( { closeModalFn, handleOptionChange, darkModeChecked, handleDarkMode, handleNumberChange, ...props }) => (

    // function handleOptionChange(e){
    //     e.preventDefault();
    // }

    <div className={styles.bodyModal}>
        <div className={styles.wrapper}>
            <button className={styles.button} onClick={closeModalFn} >close</button>
            <form onSubmit={handleOptionChange}>
                <label>
                    <input type="checkbox" checked={darkModeChecked} onChange={()=>{handleDarkMode()}}/>
                    <span>dark mode</span>
                </label>
                <p>Select number of loaded beers:</p>
                <div className={styles.itemsNumber}>
                    <input type="radio" name="itmesNumber" value="15" id="15" onChange={handleNumberChange}></input>
                    <label htmlFor="15">15</label>
                </div>
                <div className={styles.itemsNumber}>
                    <input type="radio" name="itmesNumber" value="30" id="30" onChange={handleNumberChange}></input>
                    <label htmlFor="30">30</label>
                </div>
                <div className={styles.sortBy }>
                    <select>
                        <option></option>
                    </select>
                </div>
                <button className={styles.button} type="submit">submit</button>
            </form>
        </div>
    </div>

);

export default OptionModal;