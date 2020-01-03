import axios from 'axios';

/* 创建一个额外的实例，与axios功能一样，基于baseURL的路径的请求 */
const Nsg = axios.create({
    /* 所有请求都基于 此路径*/
    baseURL: 'https://www.nanshig.com/mobile/index.php',
    // timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
});

// export const get = (data, config = {}) => {
//     // axios.get();
//     return Nsg.get('', {
//         /* pormise对象 */
//         ...config,
//         params: data
//     });

// }
export const get =async (params, config = {}) => {
    // axios.get();
    let {data}=await Nsg.get('', {
        /* pormise对象 */
        ...config,
        params
    });
    return data;
}

/* 万全之策，防止变量重名 */

export default {
    get
}