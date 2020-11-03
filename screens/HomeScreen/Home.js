import React from 'react';
import {View, FlatList, Pressable, ActivityIndicator} from 'react-native';
import {Component} from 'react';
import {CharecterCard} from '../../components/CharecterCard';
import styles from './styles';

class HomeScreen extends Component {

  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getData();
  }

  render() {
    let isfetch = this.props.isFetching;

    return (
      <View style={styles.container}>
        {!isfetch ? <View style={styles.preloader}><ActivityIndicator size="large" color="#00ff00"/></View> :
          <View style={styles.itemContainer}>

            <FlatList
              data={this.props.characters}
              renderItem={({item, index}) => (

                <Pressable onPress={() => {
                  this.props.onPressFunction(index);
                }}>
                  <CharecterCard key={item.key}
                               name={item.name}
                               status={item.status}
                               price={item.status}
                               previewImage={item.image}
                               currentElement={this.props.currentElement}
                               indexElement={index}
                  />
                </Pressable>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>}
      </View>

    );
  }
}

export default HomeScreen;

