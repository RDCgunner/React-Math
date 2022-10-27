import React, { Component } from 'react';

class StartComponent extends Component {
 

    constructor(props) {
        super(props)
    }

    setupGame =() => {
        this.props.startGame(true)       
    }

    render() { 
        return (      
        <form onSubmit={this.setupGame}>
            <input className={'input2'} value={this.props.userName} onChange={(e)=> this.props.setUserName(e.target.value)} placeholder='Numele tau' required/>
            <input className={'input2'} type='number' value={this.props.ecuatii} onChange={(e)=> this.props.setEcuatii(e.target.value)} placeholder='Cate ecuatii vrei sa rezolvi?' required/>
            {/* <input placeholder='Cate numere (2,3,4)?' /> */}
            <button className='button' type='submit'>SA PORNIM!</button>
        </form>);
    }
}
 
export default StartComponent;