import React from 'react';
import {connect} from 'react-redux';
import {selectItemAction} from '../../redux/actions/select-action-ac';
import HomeScreen from './Home';
import {getDataFromApiThunkCreator} from '../../redux/reducers/api-reducer';


let mapStateToProps = (state) => {

  return {
    currentElement: state.select.currentElement,
    characters: state.fromeApi.allItems,
    isFetching: state.fromeApi.isFetching
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onPressFunction: (g) => {
      dispatch(selectItemAction(g))
    },

    getData: () => {
      dispatch(getDataFromApiThunkCreator())
    },
  }
};

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

export default HomeContainer;
