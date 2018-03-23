import { createAction, NavigationActions, Storage } from '../utils';
import * as authService from '../services/auth';

export default {
    namespace: 'account',
    state: {
        login: false,
        loading: true,
        fetching: false,
        token: ''
    },

    effects: {
    // *loadStorage(action, { call, put }) {
    //     const login = yield call(Storage.get, 'login', false);
    //     yield put(createAction('updateState')({ login, loading: false }));
    // },
    // *login({ payload }, { call, put }) {
    //     yield put(createAction('updateState')({ fetching: true }));
    //     const login = yield call(authService.login, payload);
    //     if (login) {
    //         yield put(
    //             NavigationActions.reset({
    //                 index: 0,
    //                 actions: [NavigationActions.navigate({ routeName: 'Main' })],
    //             })
    //         );
    //     }
    //     yield put(createAction('updateState')({ login, fetching: false }));
    //     Storage.set('login', login);
    // },
    // *logout(action, { call, put }) {
    //     yield call(Storage.set, 'login', false);
    //     yield put(createAction('updateState')({ login: false }));
    // },
        *testClick({ payload }, { call, put }) {
            const result = yield call(authService.login, {
                tenantCode: '010',
                userCode: 'HXZ001',
                password: '123456',
            });

            if (result) {
                console.log('result:', result);
                yield put(createAction('updateState')(result));
            }
        },
    },

    reducers: {
        updateState(state, { payload }) {
            return { ...state, ...payload };
        }
    },

    subscriptions: {
        setup({ dispatch }) {
            // dispatch({ type: 'loadStorage' });
            console.log('ssss');
        },
    },
};
