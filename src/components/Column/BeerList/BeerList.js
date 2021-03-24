import React from 'react';
import ModalImage from "react-modal-image";
import styles from './BeerList.module.scss';

const BeerList = ({ children, chosenBeers, beerVisible, ...props })=>{

    return(
        <>
        
            <ul className={styles.list}>
                {chosenBeers.length >0 ? chosenBeers.slice(0,beerVisible).map(function(beer){
                    return <li className={styles.li} key={beer.beer_id}> 
                                <div className={styles.description}>name:  
                                    <span className={styles.details}> {beer.name}</span> type:  
                                    <span className={styles.details}> {beer.type}</span> <br/>price:  
                                    <span className={styles.details}> {beer.price}</span> 
                                </div> 
                                <ModalImage className={styles.img}
                                small={beer.image_url}
                                large={beer.image_url}
                                alt="beer img"
                                />
                            </li>
                }):console.log("There is a problem with brewers loader")}
            </ul>
        </>
    )
}

export default BeerList;