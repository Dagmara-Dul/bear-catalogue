import React from 'react';
// import Options from '../components/Options/Options'
import OptionModal from '../components/OptionModal/OptionModal'
import Column from '../components/Column/Column';
import styles from './Root.module.scss';



class Root extends React.Component {

    state = {
        openModal: false,
    }

    openModal = () => {
        
        console.log("click!")
        this.setState({
            openModal:true
        })
    }

    closeModal = () =>{
        console.log("close modal")
        this.setState({
            openModal:false
        })
    }

    handleOptionChange = () =>{
        console.log("submit")
        console.log()
    }

    // handleDarkModeFn = () =>{
    //     console.log("change dark mode")
    //     this.state.darkModeChecked ? this.setState({darkModeChecked:false}) : this.setState({darkModeChecked:true})
    //     this.setDarkMode()
    // }

    // setDarkMode = () => {
    //     var rootElement = document.getElementById('root');
    //     rootElement.classList.add('dark-mode');
    // }

    render(){
        console.log(this.props.themeToggler)
        return (
            <>
            {this.state.openModal && <OptionModal themeToggler={this.props.themeToggler} closeModalFn={this.closeModal} darkModeChecked={this.state.darkModeChecked} handleDarkMode={this.handleDarkModeFn}/>}
            {/* <Options></Options> */}
            <button className={styles.optionBtn} onClick={this.openModal}>options</button>
            <Column></Column>
            
            </>
        )
    }
}

export default Root;