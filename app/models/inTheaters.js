import { createAction, NavigationActions, Storage } from '../utils';
import * as moiveService from '../services/movie';

export default {
    namespace: 'inTheaters',
    state: {
        ready: false,
        fetching: false,
    },

    effects: {
        *fetch({ payload }, { call, put }) {
            yield put(createAction('updateFetching')(true));
            const result = yield call(moiveService.fetchInThreaters);
            yield put(createAction('updateState')(result));
            yield put(createAction('updateFetching')(false));
        },
    },

    reducers: {
        updateFetching(state, { payload }) {
            return { ...state, fetching: payload };
        },
        updateState(state, { payload }) {
            return { ...state, ...payload, ready: true };
        },
    },

    subscriptions: {
        setup({ dispatch }) {
            dispatch(createAction('fetch')());
        },
    },
};
