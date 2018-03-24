import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { createAction, NavigationActions } from '../utils';

@connect(({ account }) => ({ ...account }))
export default class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
      headerTitle: '首页',
      headerRight: <Button title="分享" onPress={() => alert('点击了分享')} />,
      headerTintColor: '#fff',
      headerStyle: {
          backgroundColor: '#2A362C',
          opacity: 1,
      },
  });

  constructor(props) {
      super(props);
      this.state = {};
  }

  handleLogin = () => {
      const { dispatch } = this.props;
      dispatch(NavigationActions.navigate({ routeName: 'Login' }));
  };

  render() {
      return (
          <View style={styles.container}>
              <Text>Home</Text>
              <Button title="sigin" onPress={this.handleLogin} />
          </View>
      );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
