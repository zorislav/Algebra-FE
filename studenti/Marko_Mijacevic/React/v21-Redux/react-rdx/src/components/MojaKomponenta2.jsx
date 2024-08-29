
import React from 'react';
import { connect }  from 'react-redux';

import { RESET } from '../store/redux-store';



class MojaKomponenta2 extends React.Component {

    render(){

        const { brojac, reset } = this.props;

        return(
            <>
                <h2>Moja Class komponenta</h2>
                <p>I moja Class komponenta koristi redux store: {brojac}</p>
                <button onClick={ reset }>R E S E T</button>
            </>
        );
    }
}

function mapStateToProps(state){
    return {
        brojac : state.counter
    }
}

function mapDispatchToProps(dispatch){
    return {

        reset: () => dispatch({ type: RESET })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MojaKomponenta2);