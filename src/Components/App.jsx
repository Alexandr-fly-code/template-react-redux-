import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './App.css';
import {connect} from 'react-redux';
import {fetchRequest} from './redux/actions/fetchRequestAction';

class App extends Component {

    componentDidMount(){
        this.props.fetchRequest();
    }

    render() {
        return (
            <div>
                asd
            </div>
        );
    }
}

function MSTP(store) {
    return {

    }
}

function MDTP(dispatch) {
    return {
        fetchRequest: function () {
            dispatch(fetchRequest())
        },
    }
}

export default connect(MSTP, MDTP)(App);
