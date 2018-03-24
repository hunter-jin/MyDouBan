import React, { PureComponent } from 'react';
import { BackHandler } from 'react-native';
import {
    StackNavigator,
    TabNavigator,
    TabBarBottom,
    addNavigationHelpers,
    NavigationActions,
} from 'react-navigation';
import {
    initializeListeners,
    createReduxBoundAddListener,
    createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createAction } from './utils';

// import Loading from './containers/Loading'
import Login from './containers/Login';
import HotList from './containers/HotList';
import Seek from './containers/Seek';
import My from './containers/My';
import Detail from './containers/Detail';

const HomeNavigator = TabNavigator(
    {
        HotList: {
            screen: HotList,
            navigationOptions: {
                tabBarLabel: '热映',
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="tv" size={20} color={tintColor} />
                ),
            },
        },
        Seek: {
            screen: Seek,
            navigationOptions: {
                tabBarLabel: '找片',
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="eye" size={20} color={tintColor} />
                ),
            },
        },
        My: {
            screen: My,
            navigationOptions: {
                tabBarLabel: '我的',
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="user" size={20} color={tintColor} />
                ),
            },
        },
    },
    {
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: '#494949',
            inactiveTintColor: '#999999',
            labelStyle: {
                fontSize: 12,
                marginBottom: 5,
            },
            style: {
                borderTopWidth: 1,
                borderTopColor: '#c3c3c3',
                height: 50,
                backgroundColor: '#fafafa',
            },
        },
    }
);

const MainNavigator = StackNavigator(
    {
        HomeNavigator: { screen: HomeNavigator },
        Detail: { screen: Detail },
    },
    {
    // 导航栏显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
        headerMode: 'screen',
    }
);

const AppNavigator = StackNavigator(
    {
        Main: { screen: MainNavigator },
        Login: { screen: Login },
    },
    {
        headerMode: 'none',
        mode: 'modal',
        navigationOptions: {
            gesturesEnabled: false,
        },
    }
);

function getCurrentScreen(navigationState) {
    if (!navigationState) {
        return null;
    }
    const route = navigationState.routes[navigationState.index];
    if (route.routes) {
        return getCurrentScreen(route);
    }
    return route.routeName;
}

export const routerMiddleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.router
);
const addListener = createReduxBoundAddListener('root');

@connect(({ account, router }) => ({ account, router }))
class Router extends PureComponent {
    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.backHandle);
    }

    componentDidMount() {
        initializeListeners('root', this.props.router);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.backHandle);
    }

  backHandle = () => {
      const currentScreen = getCurrentScreen(this.props.router);
      if (currentScreen === 'Login') {
          return true;
      }
      if (currentScreen !== 'Home') {
          this.props.dispatch(NavigationActions.back());
          return true;
      }
      return false;
  };

  render() {
      const { dispatch, router } = this.props;
      // if (app.loading) return <Loading />

      const navigation = addNavigationHelpers({
          dispatch,
          state: router,
          addListener,
      });

      return <AppNavigator navigation={navigation} />;
  }
}

export function routerReducer(state, action = {}) {
    return AppNavigator.router.getStateForAction(action, state);
}

export default Router;
