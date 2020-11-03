import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';

class Details extends Component {
  constructor(props){
    super(props)
  }

  render() {
    let currentElement = this.props.currentElement
    let statusColor = (this.props.characters[currentElement].status == "Alive") ? '#55cc44' : '#d63d2e';

    return (
      <View style={styles.container}>
      <View style={styles.item}>
        <Image
          style={styles.image}
          source={{
            uri:  this.props.characters[currentElement].image,
          }}/>
        <View style={styles.textContainer}>

            <Text style={styles.titleText}>{this.props.characters[currentElement].name}</Text>
            <Text style={styles.descriptionText}>Status:</Text>

          <View style={styles.statusBlock} >
            <View style={[styles.status, {backgroundColor:  statusColor, marginRight: 12}]} />
            <Text style={styles.itemText } >{this.props.characters[currentElement].status} </Text>
          </View>

            <Text style={styles.descriptionText}>Species:</Text>
            <Text style={styles.itemText}>{this.props.characters[currentElement].species}</Text>

            <Text style={styles.descriptionText}>Last known location:</Text>
            <Text style={styles.itemText}>{this.props.characters[currentElement].origin.name}</Text>

            <Text style={styles.descriptionText}>Type:</Text>
            <Text style={styles.itemText}>{this.props.characters[currentElement].type}</Text>

        </View>

      </View>
      </View>
    )
  }
}

export default Details;

