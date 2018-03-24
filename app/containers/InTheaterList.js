import React, { Component } from 'react';
import {
    StyleSheet,
    ActivityIndicator,
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Image,
    Alert,
} from 'react-native';
import { connect } from 'react-redux';
import { createAction, NavigationActions } from '../utils';
import Star from '../components/Star';

const ListItem = props => {
    const { item, lastItem, onPress, onBuy } = props;
    return (
        <TouchableOpacity
            onPress={() => onPress(item.id)}
            style={[styles.listItemContainer, lastItem && styles.listItemLaster]}
        >
            <View style={styles.listItemImage}>
                <Image
                    source={{ uri: item.images.large.replace('webp', 'png') }}
                    style={{ width: 80, height: 100 }}
                />
            </View>
            <View style={styles.listItemContent}>
                <Text style={styles.title}>{item.title}</Text>
                <View style={{ marginTop: 3, marginBottom: 3 }}>
                    <Star value={item.rating.stars} />
                </View>
                <Text style={styles.smallFont}>
          导演: {item.directors.map(director => director.name).join('/')}
                </Text>
                <Text style={styles.smallFont}>
          导演: {item.casts.map(cast => cast.name).join('/')}
                </Text>
                <Text style={styles.normalFont}>{item.collect_count}人看过</Text>
            </View>
            <View style={styles.listItemBuy}>
                <TouchableOpacity style={styles.btnBuy} onPress={() => onBuy(item.id)}>
                    <Text style={styles.btnTextBuy}>购票</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};

@connect(({ inTheaters }) => ({ ...inTheaters }))
export default class InTheaterList extends Component {
  handleRefresh = () => {
      const { dispatch } = this.props;
      dispatch(createAction('inTheaters/fetch')());
  };

  handlePress = id => {
      const { dispatch } = this.props;
      console.log(`press:${id}`);
      dispatch(
          NavigationActions.navigate({
              routeName: 'Detail',
              params: {
                  id,
              },
          })
      );
  };

  handleBuy = id => {
      console.log(`buy:${id}`);
      Alert.alert('感谢您的支持！');
  };

  keyExtractor = (item, index) => item.id;

  renderItem = ({ item, index }) => {
      const { subjects = [] } = this.props;
      return (
          <ListItem
              item={item}
              lastItem={index + 1 === subjects.length}
              onPress={this.handlePress}
              onBuy={this.handleBuy}
          />
      );
  };

  render() {
      const { ready = false, fetching, subjects = [] } = this.props;

      return (
          <View style={styles.container}>
              {!ready ? (
                  <ActivityIndicator size="large" style={styles.loading} />
              ) : (
                  <FlatList
                      data={subjects}
                      keyExtractor={this.keyExtractor}
                      renderItem={this.renderItem}
                      onRefresh={this.handleRefresh}
                      refreshing={fetching}
                  />
              )}
          </View>
      );
  }
}

const styles = StyleSheet.create({
    container: {},
    loading: {
        marginTop: 150,
    },
    listItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 130,
        paddingLeft: 18,
        paddingRight: 18,
        borderBottomWidth: 1,
        borderBottomColor: '#EFEFEF',
    },
    listItemLaster: {
        borderBottomWidth: 0,
    },
    listItemImage: {
        flex: 1,
    },
    listItemContent: {
        flex: 2,
        alignItems: 'flex-start',
    },
    listItemBuy: {
        flex: 0,
    },
    btnBuy: {
        width: 50,
        height: 25,
        marginLeft: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#FF4E65',
        borderRadius: 5,
    },
    btnTextBuy: {
        color: '#FF4E65',
        fontWeight: '800',
    },
    title: {
        fontWeight: '900',
        fontSize: 15,
    },
    smallFont: {
        lineHeight: 20,
        color: '#A6A6A6',
        fontSize: 12,
    },
    normalFont: {
        lineHeight: 20,
        fontSize: 13,
    },
});
