import React from 'react';
import styles from './OptionModal.module.scss';
import Button from '../Button/Button'


const OptionModal = ( { closeModalFn, handleOptionChange, darkModeChecked, handleDarkMode, handleNumberChange, sortBy, ...props }) => (


    <div className={styles.bodyModal}>
        <div className={styles.wrapper}>
            <Button onClick={closeModalFn} >close</Button>
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
                    <select className={styles.select} onChange={sortBy}>
                        <option className={styles.option}>-- sort by --</option>
                        <option className={styles.option} value="name">name</option>
                        <option className={styles.option} value="price">price</option>
                        <option className={styles.option} value="type">type</option>
                    </select>
                </div>
            </form>
        </div>
    </div>

);

export default OptionModal;