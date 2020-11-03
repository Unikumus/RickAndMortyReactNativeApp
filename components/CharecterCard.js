import React from 'react'
import {View, Text, Image} from 'react-native'
import styles from './styles';

export const CharecterCard =(props) => {

  let imgPath = props.previewImage;
  let bgColor = (props.currentElement === props.indexElement) ? '#4a4d54' : '#3c3e44';
  let titleColor = (props.currentElement === props.indexElement) ? '#ff9800' : '#f5f5f5';
  let statusColor = (props.status == "Alive") ? '#55cc44' : '#d63d2e';

  return(
    <View style={[styles.item, {backgroundColor: bgColor}]}>
      <Image
        style={styles.image}
        source={{uri: imgPath,}}
      />
      <View style={styles.titleBlock}>
        <Text style={[styles.itemText, {color: titleColor}]}>{props.name}</Text>
        <View style={styles.statusBlock}>
          <View style={[styles.status, {backgroundColor:  statusColor, marginRight: 12}]} />
          <Text style={styles.statusText}>{props.status} </Text>
        </View>
      </View>
    </View>
  )
};

