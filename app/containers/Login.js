import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
    ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import { createAction, NavigationActions } from '../utils';

@connect(({ account }) => ({ ...account }))
export default class Login extends Component {
  static navigationOptions = ({ navigation }) => ({
      headerTitle: '登录',
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
      dispatch(createAction('account/login')('tom'));
  };

  handleClose = () => {
      const { dispatch } = this.props;
      dispatch(NavigationActions.back());
  };

  render() {
      const { loading } = this.props;
      console.log('===>', loading);
      return (
          <View style={styles.container}>
              <Text>Login</Text>
              <ActivityIndicator animating={loading} />
              <Button title="Login" onPress={this.handleLogin} />
              <Button title="Cancel" onPress={this.handleClose} />
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
