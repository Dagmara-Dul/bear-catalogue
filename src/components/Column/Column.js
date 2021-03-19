import React from 'react';
import styles from './Column.module.scss';
import DropList from './DropList/DropList'

class Column extends React.Component {

  state = {
    brewers: []
  }

  removeDuplicatedBrewers = (filteredArray) =>{
    var brewers =[]
    return filteredArray.filter(function(item) {
      return brewers.hasOwnProperty(item) ? false :(brewers[item]=true)
    })  
  }

  componentDidMount(){
    var allBrewers = []
    fetch(`http://ontariobeerapi.ca/beers/`)
    .then((response)=>response.json())
    .then((data)=>{
      data.forEach(function(el){
        allBrewers.push(el.brewer)
      })
    })
    .then(
      () => { 
      // console.log(allBrewers)
      console.log(this.removeDuplicatedBrewers(allBrewers))
      this.setState({
        brewers:this.removeDuplicatedBrewers(allBrewers)
          })
        }
      )
    .catch((error) => {
      console.log(Error(error))
    })
  }

  render(){
  return(
    <>
    
        <div className={styles.wrapper}>
            <DropList brewers={this.state.brewers}></DropList>
            <div>
                <ul>
                    <li >piwo1</li>
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