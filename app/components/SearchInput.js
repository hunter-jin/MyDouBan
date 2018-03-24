import React, { PureComponent } from 'react';
import { StyleSheet, TouchableOpacity, Alert, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class SearchInput extends PureComponent {
  handleChangeCity = () => {
      Alert.alert('兰州是个好地方');
  };

  handleSearch = () => {
      Alert.alert('开始搜索!');
  };

  render() {
      return (
          <View style={styles.container}>
              <TouchableOpacity style={styles.city} onPress={this.handleChangeCity}>
                  <Text>
            兰州 <Icon name="chevron-down" size={10} color="#222222" />
                  </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.search} onPress={this.handleSearch}>
                  <Text style={styles.searchText}>
                      <Icon name="search" size={10} color="#222222" /> 电影/电视剧
                  </Text>
              </TouchableOpacity>
          </View>
      );
  }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 35,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#fff',
    },
    city: {
        flex: 1,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 6,
    // backgroundColor: '#222'
    },
    search: {
        flex: 6,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
    },
    searchText: {
        lineHeight: 25,
        color: '#8B8B8B',
    },
});
