import request from '../utils/request';
import { apiUrl } from '../common/constant';

export async function fetchInThreaters() {
    console.log('--->>');
    const url = `${apiUrl}/movie/in_theaters`;
    const respone = await request(url);
    console.log('<<<---', url, respone);
    return respone;
}
