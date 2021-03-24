import React from 'react';
import styles from './Column.module.scss';
import DropList from './DropList/DropList';
import Button from './LoadButton/LoadButton';
import BeerList from './BeerList/BeerList';

class Column extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      brewers: [],
      beers:[],
      chosenBeers:[],
      chosenBrewer: "-- choose a brewer --",
      beerVisible: 15,
      btnVisible: true,
      sortBy: 'name'
    }

}

  

  loadMoreBeers = async() => {
    
    try{
      await this.setState((prevState) => ({
      beerVisible: prevState.beerVisible + 15
      }))
        if(this.state.beerVisible >= this.state.chosenBeers.length)
        { this.setState({btnVisible:false})}  
    }catch (err) {
    console.log(Error(err));
  }
}

  sort = async(dataToSort,sortByItem) => {
    try{
      await this.setState({sortBy:this.props.sortBy}) 
      
      dataToSort.sort(function(a,b){
        
        if(a[`${sortByItem}`].toLowerCase() < b[`${sortByItem}`].toLowerCase()) return -1;
        if(a[`${sortByItem}`].toLowerCase() > b[`${sortByItem}`].toLowerCase()) return 1;
        
        return 0;
      })
    } catch (err) {
      console.log(Error(err));
    }
  }

  loadBeersFn = async(e) =>{
    try {
      var allBeers = this.state.beers
      var chosenBrewer = e.target.value
      var listOfBeers = []
      
      await this.setState({chosenBrewer : e.target.value})
      

      if (this.state.chosenBrewer !== "-- choose a brewer --"){
        this.setState({btnVisible:true})
        this.setState({beerVisible:this.props.numberOfBeers})
        allBeers.forEach(function(e){if(e.brewer===chosenBrewer){listOfBeers.push(e)}})
        
        this.sort(listOfBeers,this.props.sortBy)
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
    // this.state.beerVisible !== this.props.numberOfBeers ? this.setState({beerVisible:this.props.numberOfBeers}) : console.log('')
    if(this.beerVisible !== this.props.numberOfBeers){
      this.setState({beerVisible:this.props.numberOfBeers}) 
    }
    var allBrewers = []
    fetch(`http://ontariobeerapi.ca/beers/`)
    .then((response)=>response.json())
    .then((data)=>{
      
      this.setState({beers:data})
      data.forEach(function(el){
        allBrewers.push(el.brewer)
      })
    })
    .then(
      () => { 
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
                <BeerList chosenBeers={this.state.chosenBeers} beerVisible={this.state.beerVisible}></BeerList>
                <div>
            
                  <Button id="loadBtn" chosenBeers={this.state.chosenBeers} loadMoreBeers={this.loadMoreBeers} btnVisibility={this.state.btnVisible}>load MORE</Button>
                </div>
            </div>
        </div>
    </>
  )
  }
};



export default Column;