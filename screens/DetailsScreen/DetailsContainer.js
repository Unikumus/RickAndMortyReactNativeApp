import React from 'react';
import {connect} from 'react-redux';
import Details from './Details';

let mapStateToProps = (state) => {
    return {
        currentElement: state.select.currentElement,
        characters: state.fromeApi.allItems,
    };
};

const DetailsContainer = connect(mapStateToProps, null)(Details);

export default DetailsContainer;
