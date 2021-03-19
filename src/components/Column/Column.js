import axios from 'axios';
import React from 'react';
// import PropTypes from "prop-types";
import styles from './Column.module.scss';

class Column extends React.Component {

  // getData = async () => {
  //   try {
  //     const response = await fetch('http://ontariobeerapi.ca/beers/',
  //     {
  //       method: 'GET',
  //       mode: 'no-cors',
  //       Accept: "application/json"
  //       // "Content-Type": "application/json",
  //       //   Accept: "application/json",
  //       // method: 'GET',
  //       // mode: 'no-cors'
  //     }
      
  //     )
  //    console.log(response)
      
  //     // console.log(response)
  //     // return response;
  //   } catch (err) {
  //     console.log(Error(err))
  //   }
    
  // }

  getBeer = () =>{
    // fetch('http://ontariobeerapi.ca/beers/')
    // .then(response => response.json())
    // .then(data=>console.log(data))
    fetch(
      'http://ontariobeerapi.ca/beers/',
      {
        method: 'GET',
        mode: 'no-cors',
        credentials: 'include',
        
        
      })
      .then((data1)=>{
        console.log(data1)
        
      })
      
  }


  getBrewer = () =>{
    // this.getData()
    // .then((data)=>data.json())
    //   .then((resp)=>console.log(resp))
    console.log(this.getData())
  }

  componentDidMount(){

    axios.get(`http://ontariobeerapi.ca/beers/`)
    .then(res=>console.log(res))

    // fetch(`http://ontariobeerapi.ca/beers/`
    // ,{
    //   headers:{
    //     'Access-Control-Allow-Origin': '*'
    //   },
    //   mode: 'no-cors'
    // }
    // // {mode:'no-cors'}
    // )
    // .then(r=>console.log(r))
  }

  render(){
  return(
    <>
    
        <div className={styles.wrapper}>
            <select>
                <option>option q</option>
                <option>option q</option>
            </select>
            <div>
                <ul>
                    <li onClick={()=>{this.getBeer()}}>piwo1</li>
                    <li>piwo2</li>
                    <li>piwo3</li>
                </ul>
            </div>
        </div>
    </>
  )
  }
};



export default Column;