import React from 'react';
import OptionModal from '../components/OptionModal/OptionModal'
import Column from '../components/Column/Column';
import styles from './Root.module.scss';



class Root extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            openModal: false,
            darkModeChecked: false,
            numberOfBeers: 15
        }
    }
    
    

    openModal = () => {
        this.setState({
            openModal:true
        })
    }

    closeModal = () =>{
        this.setState({
            openModal:false
        })
    }

    handleOptionChange = () =>{
        console.log("submit")
        
    }

    handleDarkModeFn = () =>{
        this.state.darkModeChecked ? this.setState({darkModeChecked:false}) : this.setState({darkModeChecked:true})
        this.props.themeToggler();
    }

    handleNumberChange = async(e) => {
        console.log(e.target.id)
        try{
        await e.target.value;
            if(e.target.value !== this.state.numberOfBeers){
                this.setState({numberOfBeers : e.target.value})
            } console.log(this.state.numberOfBeers)
        } catch (err) {
            console.log(Error(err));
        }
        
      }

    render(){
        
        return (
            <>
            {this.state.openModal && <OptionModal 
                
                closeModalFn={this.closeModal} 
                darkModeChecked={this.state.darkModeChecked} 
                handleDarkMode={this.handleDarkModeFn}
                handleNumberChange={this.handleNumberChange}
            />}
            <button className={styles.optionBtn} onClick={this.openModal}>options</button>
            <Column numberOfBeers={this.state.numberOfBeers}></Column>
            
            </>
        )
    }
}

export default Root;