import React from 'react';
import styles from './DropList.module.scss';

const DropList = ({ children, brewers, loadBeers, chosenBrewer, ...props }) => {

 

  return(
      
    <>
        <select id="selectBeer" className={styles.select} onChange={loadBeers} value={chosenBrewer}>
            <option value ="-- choose a brewer --" className={styles.option}>-- choose a brewer --</option>
            {
            brewers.length > 0 ? brewers.map((element) => {
                // var value =`"${element}"`
                // console.log(value)
                return(
                <option key={element} value={element} >{element}</option>
                )
            }
            ):console.log("Brak browarów do wyświetlenia")}
                
        </select>
  </>
  )
};


export default DropList;