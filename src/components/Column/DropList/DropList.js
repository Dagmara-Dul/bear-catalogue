import React from 'react';
import styles from './DropList.module.scss';

const DropList = ({ children, brewers, ...props }) => {

 

  return(
    <>
        <select className={styles.select}>
            <option className={styles.option}>choose a brewer</option>
            {brewers.length > 0 ? brewers.map((element) => {
                return(
                <option key={element}>{element}</option>
                )
            }
            ):console.log("Brak browarów do wyświetlenia")}
                
        </select>
  </>
  )
};


export default DropList;