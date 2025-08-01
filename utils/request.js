import config from '@/utils/config';
import { toast, tansParams } from '@/utils/common';
import { getToken } from '@/utils/auth';

let timeout = 10000;
const baseUrl = config.baseUrl;

const request = (config) => {
    // 是否需要设置 token
    const isToken = (config.headers || {}).isToken === false;
    config.header = config.header || {};
    if (getToken() && !isToken) {
        config.header['Authorization'] = 'Bearer ' + getToken();
    }

    // get请求映射params参数
    if (config.params) {
        let url = config.url + '?' + tansParams(config.params);
        url = url.slice(0, -1);
        config.url = url;
    }
    return new Promise((resolve, reject) => {
        uni.request({
            method: config.method || 'get',
            timeout: config.timeout || timeout,
            url: baseUrl + config.url,
            data: config.data,
            header: config.header,
            dataType: 'json',
        })
            .then((response) => {
                let res = response;
                const code = res.data.code || 200;
                if (code !== 200) {
                    toast(res.data.msg);
                    reject(code);
                } else {
                    resolve(res.data);
                }
            })
            .catch((error) => {
                let message = error.errMsg;
                if (message === 'Network Error') {
                    message = '后端接口连接异常';
                } else if (message.includes('timeout')) {
                    message = '系统接口请求超时';
                }
                toast(message);
                reject(error);
            });
    });
};

export default request;
