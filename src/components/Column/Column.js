import React from 'react';
import styles from './Column.module.scss';
import DropList from './DropList/DropList'

class Column extends React.Component {

  state = {
    brewers: [],
    beers:[],
    chosenBeers:[],
    chosenBrewer: "-- choose a brewer --"
  }


  loadBeersFn = async(e) =>{
    try {
      var allBeers = this.state.beers
      var chosenBrewer = e.target.value
      var listOfBeers = []
      
      await this.setState({chosenBrewer : e.target.value})
      console.log("wybrany browar to: " + this.state.chosenBrewer)

      if (this.state.chosenBrewer !== "-- choose a brewer --"){

        allBeers.forEach(function(e){if(e.brewer===chosenBrewer){listOfBeers.push(e)}})
        console.log(listOfBeers)
        this.setState({chosenBeers : listOfBeers})
   
      }else{
        this.setState({chosenBeers:[]})
      }
      
    }  catch (err) {
      console.log(Error(err));
    }
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
      console.log(data)
      this.setState({beers:data})
      data.forEach(function(el){
        allBrewers.push(el.brewer)
      })
    })
    .then(
      () => { 
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
            <DropList brewers={this.state.brewers} loadBeers={this.loadBeersFn} chosenBrewer={this.state.chosenBrewer}></DropList>
            <div>
                <ul>
                    {this.state.chosenBeers.length >0 ? this.state.chosenBeers.map(function(beer){
                      return <li key={beer.beer_id}>name: {beer.name} type: {beer.type} price: {beer.price} <img alt="beer img" src={beer.image_url} />  </li>
                    }):console.log("Mamy problem")}
                </ul>
            </div>
        </div>
    </>
  )
  }
};



export default Column;