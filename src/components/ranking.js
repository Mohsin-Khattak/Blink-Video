import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export const Ranking = ({rate = 2, onChange}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      {[1, 2, 3, 4, 5].map((item, index) => {
        return (
          <TouchableOpacity
            onPress={() => onChange(item)}
            style={{marginRight: 10}}>
            <FontAwesome
              style={styles.Entypo}
              name={item <= rate ? 'star' : 'star-o'}
              size={15}
              color={'#0A0A0A'}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
export default Ranking;
const styles = StyleSheet.create({});
