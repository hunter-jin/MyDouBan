import request from '../utils/request';

export async function login(params) {
    const respone = await request('http://zfb.yakesoft.com/v1/token', {
        method: 'POST',
        body: params,
    });

    if (respone.status >= 200 && respone.status < 300) return respone.result;
    return undefined;
}

export async function logout(params) {
    const respone = await request('http://zfb.yakesoft.com/v1/token', {
        method: 'POST',
        body: params,
    });

    if (respone.status >= 200 && respone.status < 300) return respone.result;
    return undefined;
}
