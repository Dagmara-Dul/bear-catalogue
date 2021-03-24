import React from 'react';
import OptionModal from '../components/OptionModal/OptionModal';
import Column from '../components/Column/Column';
import Button from '../components/Button/Button';
import styles from './Root.module.scss';



class Root extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            openModal: false,
            darkModeChecked: false,
            numberOfBeers: 15,
            sortBy:'name'
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


    handleDarkModeFn = () => {
        this.state.darkModeChecked ? this.setState({ darkModeChecked:false }) : this.setState({ darkModeChecked:true })
        this.props.themeToggler();
    }

    handleNumberChange = async(e) => {
        try{
        await e.target.value;
            if(e.target.value !== this.state.numberOfBeers){
                this.setState({numberOfBeers : e.target.value})
            } 
        } catch (err) {
            console.log(Error(err));
        }
      }

    sortByFn = async(e) =>{
        try{
            await e.target.value;
            if( e.target.value !== this.state.sortBy){
                this.setState({sortBy:e.target.value})
            } 
        }catch (err) {
            console.log(Error(err));
        }
    }

    setStorage = () => {
        var darkMode = this.state.darkModeChecked
        console.log(darkMode)
        // var isDarkMode = {darkModeChecked: darkMode}
        // console.log(isDarkMode)
        localStorage.setItem('darkModeChecked', darkMode)
    }

    getDarkMode = () => {
        console.log(localStorage)
        var data = localStorage.getItem('darkModeChecked')
        console.log(data)
        // this.setStorage()
        this.setState({darkModeChecked:localStorage.darkMode})
    }

    componentDidMount(){
        this.getDarkMode();
        window.addEventListener("beforeunload", this.setStorage);
    }
    
    componentWillUnmount() {
        
        window.removeEventListener("beforeunload", this.setStorage);
    }

    render(){
        
        return (
            <>
            {this.state.openModal && <OptionModal 
                
                closeModalFn={this.closeModal} 
                darkModeChecked={this.state.darkModeChecked} 
                handleDarkMode={this.handleDarkModeFn}
                handleNumberChange={this.handleNumberChange}
                sortBy={this.sortByFn}
            />}
            
            <Button onClick={this.openModal}>options</Button>
            <div className={styles.columnsBox}>
                <Column numberOfBeers={this.state.numberOfBeers} sortBy={this.state.sortBy}></Column>
                <Column numberOfBeers={this.state.numberOfBeers} sortBy={this.state.sortBy}></Column>
                <Column numberOfBeers={this.state.numberOfBeers} sortBy={this.state.sortBy}></Column>
            </div>
            
            </>
        )
    }
}

export default Root;