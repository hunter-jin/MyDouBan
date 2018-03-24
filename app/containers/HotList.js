import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import ScrollableTabView, {
    DefaultTabBar,
} from 'react-native-scrollable-tab-view';
import { createAction, NavigationActions } from '../utils';
import SearchInput from '../components/SearchInput';
import InTheaterList from './InTheaterList';
import SoonList from './SoonList';

const { width, height } = Dimensions.get('window');

export default class HotList extends Component {
  static navigationOptions = {
      header: null,
  };

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
              <SearchInput />
              <ScrollableTabView
                  renderTabBar={() => <DefaultTabBar />}
                  tabBarUnderlineStyle={{
                      backgroundColor: '#000',
                      height: 2,
                  }}
                  tabBarBackgroundColor="#FFFFFF"
                  tabBarActiveTextColor="#000"
                  tabBarInactiveTextColor="#959595"
                  tabBarTextStyle={{ fontSize: 14 }}
                  locked={false}
              >
                  <View tabLabel="正在热映" style={styles.tabView}>
                      <InTheaterList />
                  </View>
                  <View tabLabel="即将上映" style={styles.tabView}>
                      <SoonList />
                  </View>
              </ScrollableTabView>
          </View>
      );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 25,
        backgroundColor: '#fff',
    },
    tabView: {
        flex: 1,
        marginBottom: 5,
    },
});
